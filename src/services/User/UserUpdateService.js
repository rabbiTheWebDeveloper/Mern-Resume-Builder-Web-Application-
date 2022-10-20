const UserUpdateService = async (Request, DataModel) => {
  const { id } = Request;
  const { Password, ...others } = Request.body;

  await DataModel.updateOne({ _id: id }, others, { new: true });

  return { message: "User Update Successfull" };
};
module.exports = UserUpdateService;
