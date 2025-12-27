import SalesTable from "@/components/tables/SalesTable";

export default function AdminSalesPage() {
  // Mock data (temporary)
  const sales = [
    {
      id: "SALE-001",
      buyer: "Ramesh Traders",
      totalAmount: 125000,
      status: "Draft" as const,
    },
    {
      id: "SALE-002",
      buyer: "Kumar Livestock",
      totalAmount: 98000,
      status: "Confirmed" as const,
    },
    {
      id: "SALE-003",
      buyer: "Agro Farm Pvt Ltd",
      totalAmount: 212500,
      status: "Draft" as const,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Sales</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Create Sale
        </button>
      </div>

      {/* Sales Table */}
      <SalesTable sales={sales} />
    </div>
  );
}
