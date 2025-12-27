export default function SaleDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">
        Sale Details – {params.id}
      </h1>

      <div className="bg-white p-6 rounded-lg shadow space-y-2 max-w-xl">
        <p><strong>Buyer:</strong> Ramesh Traders</p>
        <p><strong>Total Amount:</strong> ₹125,000</p>
        <p><strong>Status:</strong> Draft</p>
      </div>

      <a
        href="/dashboard/admin/sales"
        className="text-blue-600 hover:underline"
      >
        ← Back to Sales
      </a>
    </div>
  );
}
