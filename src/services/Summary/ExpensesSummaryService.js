const ExpensesSummaryService = async (Request, DataModel) => {
  const UserEmail = Request.Email;
  const FormDate = Request.body.FormDate;
  const ToDate = Request.body.ToDate;

  const data = await DataModel.aggregate([
    {
      $match: {
        UserEmail: UserEmail,
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
            $group: {
              _id: {
                $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
              },
              TotalExpenceAmount: { $sum: "$ExpenceAmount" },
            },
          },
          { $sort: { _id: -1 } },
          { $limit: 30 },
        ],
      },
    },
  ]);

  return data;
};

module.exports = ExpensesSummaryService;
