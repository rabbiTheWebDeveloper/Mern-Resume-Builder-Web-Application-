//External Import
const ObjectId = require("mongoose").Types.ObjectId;

const DeleteService = async (Request, DataModel) => {
  const DeleteID = Request.params.id;
  const UserEmail = Request.Email;

  const QueryObject = {};
  QueryObject._id = DeleteID;
  QueryObject.UserEmail = UserEmail;

  const axisData = await DataModel.aggregate([
    {
      $match: {
        $and: [{ UserEmail: UserEmail }, { _id: ObjectId(DeleteID) }],
      },
    },
  ]);

  if (!axisData.length > 0) {
    throw CreateError(
      `${DataModel?.collection?.collectionName} Not Found`,
      404,
    );
  }

  const data = await DataModel.deleteMany(QueryObject);
  return data;
};

module.exports = DeleteService;
