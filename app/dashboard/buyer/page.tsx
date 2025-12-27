export default function BuyerDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Buyer Dashboard</h1>

      <p className="text-gray-600">
        Welcome! From here, you can view and track all your invoices.
      </p>

      <div className="bg-white p-6 rounded-lg shadow max-w-md">
        <h2 className="text-lg font-medium mb-2">Quick Actions</h2>

        <a
          href="/dashboard/buyer/invoices"
          className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View My Invoices
        </a>
      </div>
    </div>
  );
}
