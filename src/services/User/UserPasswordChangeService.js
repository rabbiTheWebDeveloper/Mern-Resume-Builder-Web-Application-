//External Import
const bcrypt = require("bcrypt");

//Internal Import
const { CreateError } = require("../../helper/ErrorHandler");

const UserPasswordChangeService = async (Request, DataModel) => {
  const { id } = Request;
  let { PreviousPassword, NewPassword } = Request.body;

  const verifyPassword = await bcrypt.compare(
    PreviousPassword,
    Request.Password,
  );

  if (!verifyPassword) {
    throw CreateError("Previous Password Not Match", 400);
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(NewPassword, salt);
  NewPassword = hash;

  await DataModel.updateOne(
    { _id: id },
    { Password: NewPassword },
    { new: true },
  );

  return { message: "Password Change Successfull" };
};
module.exports = UserPasswordChangeService;
