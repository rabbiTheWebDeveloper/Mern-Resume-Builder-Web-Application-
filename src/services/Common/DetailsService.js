//External Import
const ObjectId = require("mongoose").Types.ObjectId;

const DetailsService = async (Request, DataModel) => {
  const DetailsID = Request.params.id;
  const UserEmail = Request.Email;

  const data = await DataModel.aggregate([
    {
      $match: {
        $and: [{ UserEmail: UserEmail }, { _id: ObjectId(DetailsID) }],
      },
    },
  ]);

  return data;
};

module.exports = DetailsService;
