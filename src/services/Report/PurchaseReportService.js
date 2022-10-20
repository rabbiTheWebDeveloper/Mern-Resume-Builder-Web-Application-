const PurchaseReportService = async (Request, DataModel) => {
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
              TotalPurchaseAmount: { $sum: "$GrandTotal" },
            },
          },
        ],
        Rows: [
          {
            $lookup: {
              from: "suppliers",
              localField: "SupplierId",
              foreignField: "_id",
              as: "Supplier",
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
              Supplier: {
                SupplierName: 1,
                SupplierEmail: 1,
                SupplierPhone: 1,
                SupplierAddress: 1,
              },
            },
          },
        ],
      },
    },
  ]);

  return data;
};

module.exports = PurchaseReportService;
