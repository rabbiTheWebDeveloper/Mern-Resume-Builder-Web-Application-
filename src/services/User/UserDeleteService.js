const UserDeleteService = async (Request, DataModel) => {
  const { id } = Request;
  await DataModel.deleteOne({ _id: id });
  return { message: "User Delete Successfull" };
};
module.exports = UserDeleteService;
