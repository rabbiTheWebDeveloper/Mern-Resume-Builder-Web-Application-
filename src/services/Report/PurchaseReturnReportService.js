const PurchaseReturnReportService = async (Request, DataModel) => {
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
              TotalReturnAmount: { $sum: "$GrandTotal" },
            },
          },
        ],
        Rows: [
          {
            $lookup: {
              from: "customers",
              localField: "CustomerId",
              foreignField: "_id",
              as: "Customer",
            },
          },
          {
            $project: {
              UserEmail: 1,
              Discount: 1,
              VatTax: 1,
              ShippingCoast: 1,
              OtherCoast: 1,
              GrandTotal: 1,
              Note: 1,
              createdAt: 1,
              Customer: {
                CustomerName: 1,
                CustomerEmail: 1,
                CustomerPhone: 1,
                CustomerAddress: 1,
              },
            },
          },
        ],
      },
    },
  ]);

  return data;
};

module.exports = PurchaseReturnReportService;
