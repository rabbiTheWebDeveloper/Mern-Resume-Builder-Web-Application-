//Internal import

const { CreateError } = require("../../../helper/ErrorHandler");

const VerifyAccountVerifyOtpService = async (
  Request,
  UsersModel,
  OtpModel,
  session,
) => {
  const { Email, OtpCode } = Request.params;

  const countOtp = await OtpModel.aggregate([
    { $match: { $and: [{ Email: Email }, { OtpCode: OtpCode }] } },
  ]);

  if (!countOtp.length > 0) {
    throw CreateError("Invalid Otp Code", 400);
  }

  const useOtpCode = await OtpModel.aggregate([
    {
      $match: {
        $and: [{ Email: Email }, { OtpCode: OtpCode }, { OtpStatus: 0 }],
      },
    },
  ]);

  if (!useOtpCode.length > 0) {
    throw CreateError("Otp Code Allready Use", 400);
  }

  const otpCodeExpire = await OtpModel.aggregate([
    {
      $match: {
        OtpCodeExpire: { $gt: Date.now() },
      },
    },
  ]);

  if (!otpCodeExpire.length > 0) {
    throw CreateError("Expire Otp Code", 400);
  }

  await OtpModel.updateOne(
    { OtpCode: OtpCode },
    {
      OtpStatus: 1,
    },
    { session },
  );

  const User = await UsersModel.aggregate([{ $match: { Email: Email } }]);

  if (!User.length > 0) {
    throw CreateError("User Not Found", 404);
  }

  const blockUser = await UsersModel.aggregate([
    {
      $match: {
        $and: [{ Email: Email }, { AccountStatus: "REJECTED" }],
      },
    },
  ]);

  if (blockUser.length > 0) {
    throw CreateError("You're Account REJECTED", 400);
  }

  await UsersModel.updateOne(
    { Email: Email },
    { AccountStatus: "ACTIVE" },
    { new: true },
  );

  return { message: "Account Verify Successful" };
};
module.exports = VerifyAccountVerifyOtpService;
