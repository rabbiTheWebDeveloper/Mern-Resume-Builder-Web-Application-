const ExpensesReportService = async (Request, DataModel) => {
  const UserEmail = Request.Email;
  const FormDate = Request.body.FormDate;
  const ToDate = Request.body.ToDate;

  const data = await DataModel.aggregate([
    {
      $match: {
        UserEmail: UserEmail,
        createdAt: { $gte: new Date(FormDate), $lte: new Date(ToDate) },
      },
    },
    {
      $facet: {
        Total: [
          {
            $group: {
              _id: 0,
              TotalExpenceAmount: { $sum: "$ExpenceAmount" },
            },
          },
        ],
        Rows: [
          {
            $lookup: {
              from: "expensetypes",
              localField: "ExpenceType",
              foreignField: "_id",
              as: "ExpenceType",
            },
          },
          {
            $project: {
              ExpenceType: 1,
              ExpenceType: { $first: "$ExpenceType.Name" },
              ExpenceName: 1,
              ExpenceAmount: 1,
              ExpenceNote: 1,
              createdAt: 1,
            },
          },
        ],
      },
    },
  ]);

  return data;
};

module.exports = ExpensesReportService;
