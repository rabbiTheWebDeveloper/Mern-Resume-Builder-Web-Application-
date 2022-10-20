//External Import
const bcrypt = require("bcrypt");

//Internal Import
const CreateToken = require("../../utility/CreateToken");
const { CreateError } = require("../../helper/ErrorHandler");

const LoginService = async (Request, DataModel) => {
  const { Email, Password } = Request.body;

  if (!Email || !Password) {
    throw CreateError("Invalid Data", 400);
  }
  const User = await DataModel.aggregate([{ $match: { Email: Email } }]);

  if (!User.length > 0) {
    throw CreateError("User Not found", 404);
  }

  const verifyPassword = await bcrypt.compare(Password, User[0].Password);
  if (!verifyPassword) {
    throw CreateError("Unauthorized Credentials", 401);
  }

  const userNotActive = await DataModel.aggregate([
    {
      $match: {
        Email: Email,
        AccountStatus: "PENDING",
      },
    },
  ]);

  if (userNotActive.length > 0) {
    throw CreateError("User Not Active", 401);
  }

  const userBlock = await DataModel.aggregate([
    {
      $match: {
        Email: Email,
        AccountStatus: "REJECTED",
      },
    },
  ]);

  if (userBlock.length > 0) {
    throw CreateError("User Block", 401);
  }

  const payLoad = {
    id: User[0]._id,
    Roles: User[0].Roles,
    Email: User[0].Email,
  };

  delete User[0].Password

  const token = await CreateToken(payLoad);

  return { AccessToken: token, UserDetail: User[0] };
};

module.exports = LoginService;
