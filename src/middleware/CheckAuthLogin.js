//external import
const UsersModel = require("../model/Users/UsersModel");
const { ObjectId } = require("mongoose").Types;

//internal import
const { CreateError } = require("../helper/ErrorHandler");
const DecodedToken = require("../utility/DecodedToken");

/**
 * @desc Check User Auth
 * @access public
 * @route /api/v1/Auth/login
 * @methud POST
 */

const UserAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    let token = authorization.split(" ")[1];
    const decoded = await DecodedToken(token);

    if (!decoded) {
      throw CreateError("Invalid Token", 401);
    }

    const user = await UsersModel.aggregate([
      {
        $match: { _id: ObjectId(decoded.id) },
      },
    ]);

    if (!user.length > 0) {
      throw CreateError("User Not Found", 401);
    }

    const userActive = await UsersModel.aggregate([
      {
        $match: { _id: ObjectId(decoded.id), AccountStatus: "PENDING" },
      },
    ]);

    if (userActive.length > 0) {
      throw CreateError("User Not Active", 401);
    }

    const userBlock = await UsersModel.aggregate([
      {
        $match: { _id: ObjectId(decoded.id), AccountStatus: "REJECTED" },
      },
    ]);

    if (userBlock.length > 0) {
      throw CreateError("User Block", 401);
    }

    req.id = user[0]._id;
    req.Email = user[0].Email;
    req.Password = user[0].Password;

    next();
  } catch (e) {
    res.status(401).json({ message: e.message });
  }
};

/**
 * @desc Check Admin Auth
 * @access public
 * @route /api/v1/Auth/login
 * @methud POST
 */
const AdminAuth = async (req, res, next) => {
  try {
    const { Email } = req;

    const admin = await UsersModel.aggregate([
      {
        $match: {
          $and: [{ Email: Email }, { Roles: "ADMIN" }],
        },
      },
    ]);

    if (!admin.length > 0) {
      throw CreateError("Invalid Credentials", 401);
    }

    req.Roles = admin[0].Roles;

    next();
  } catch (e) {
    res.status(401).json({ message: e.message });
  }
};

module.exports = {
  UserAuth,
  AdminAuth,
};
