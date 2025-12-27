export default function BuyerInvoicesPage() {
  const invoices = [
    {
      id: "INV-001",
      saleId: "SALE-001",
      amount: 125000,
      status: "Pending",
    },
    {
      id: "INV-002",
      saleId: "SALE-002",
      amount: 98000,
      status: "Paid",
    },
    {
      id: "INV-003",
      saleId: "SALE-003",
      amount: 212500,
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">My Invoices</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Invoice ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Sale ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Amount
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-t">
                <td className="px-4 py-3">{invoice.id}</td>
                <td className="px-4 py-3">{invoice.saleId}</td>
                <td className="px-4 py-3">
                  ₹ {invoice.amount.toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      invoice.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <a
                    href={`/dashboard/buyer/invoices/${invoice.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}

            {invoices.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-6 text-center text-gray-500"
                >
                  No invoices found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
