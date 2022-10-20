//External Import
const bcrypt = require("bcrypt");

//Internal Import
const { CreateError } = require("../../helper/ErrorHandler");

const RegistrationService = async (Request, UsersModel) => {
  const {
    FirstName,
    LastName,
    Gender,
    PreferredAreas,
    Phone,
    Email,
    Password,
  } = Request.body;

  const newUser = new UsersModel({
    FirstName: FirstName,
    LastName: LastName,
    Gender: Gender,
    PreferredAreas: PreferredAreas,
    Phone: Phone,
    Email: Email,
    Password: Password,
  });

  if (
    !FirstName ||
    !LastName ||
    !Gender ||
    !PreferredAreas ||
    !Email ||
    !Password
  ) {
    throw CreateError("All Field Require", 400);
  }

  const exitUser = await UsersModel.aggregate([
    {
      $match: {
        $or: [{ Email: Email }, { Phone: Phone }],
      },
    },
  ]);

  if (exitUser && exitUser.length > 0) {
    throw CreateError("User Already Register", 400);
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(Password, salt);
  newUser.Password = hash;

  const User = await newUser.save();
  delete User._doc.Password;

  return { message: "User Register Successfull" };
};

module.exports = RegistrationService;
