const SaleSummaryService = async (Request, DataModel) => {
  const UserEmail = Request.Email;

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
              TotalSaleAmount: { $sum: "$GrandTotal" },
            },
          },
        ],

        rows: [
          {
            $group: {
              _id: {
                $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
              },
              TotalSaleAmount: { $sum: "$GrandTotal" },
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

module.exports = SaleSummaryService;
