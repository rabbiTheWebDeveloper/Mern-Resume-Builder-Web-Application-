const PurchaseReturnSummaryService = async (Request, DataModel) => {
  const UserEmail = Request.Email;

  console.log(3);

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
              TotalPurchaseReturnAmount: { $sum: "$GrandTotal" },
            },
          },
        ],
        Rows: [
          {
            $group: {
              _id: {
                $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
              },
              TotalPurchaseReturnAmount: { $sum: "$GrandTotal" },
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

module.exports = PurchaseReturnSummaryService;
