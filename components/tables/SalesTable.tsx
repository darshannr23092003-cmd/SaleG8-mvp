type Sale = {
  id: string;
  buyer: string;
  totalAmount: number;
  status: "Draft" | "Confirmed";
};

type SalesTableProps = {
  sales: Sale[];
};

export default function SalesTable({ sales }: SalesTableProps) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
              Sale ID
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
              Buyer
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
              Total Amount
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
              Status
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id} className="border-t">
              <td className="px-4 py-3">{sale.id}</td>
              <td className="px-4 py-3">{sale.buyer}</td>
              <td className="px-4 py-3">
                ₹ {sale.totalAmount.toLocaleString()}
              </td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    sale.status === "Confirmed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {sale.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <a
                  href={`/dashboard/admin/sales/${sale.id}`}
                  className="text-blue-600 hover:underline"
                >
                  View
                </a>
              </td>
            </tr>
          ))}

          {sales.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="px-4 py-6 text-center text-gray-500"
              >
                No sales found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
