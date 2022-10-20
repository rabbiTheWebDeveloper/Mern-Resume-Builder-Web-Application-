//Internal import
const ObjectId = require("mongoose").Types.ObjectId;

const UserDetailsService = async (Request, DataModel) => {
  const { id } = Request;

  const User = await DataModel.aggregate([
    { $match: { _id: ObjectId(id) } },
    {
      $project: {
        Password: 0,
      },
    },
  ]);

  return User;
};
module.exports = UserDetailsService;
