export default function InvoiceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">
        Invoice Details – {params.id}
      </h1>

      <div className="bg-white p-6 rounded-lg shadow max-w-xl space-y-2">
        <p>
          <strong>Sale ID:</strong> SALE-001
        </p>
        <p>
          <strong>Buyer:</strong> Ramesh Traders
        </p>
        <p>
          <strong>Amount:</strong> ₹125,000
        </p>
        <p>
          <strong>Status:</strong> Pending
        </p>
      </div>

      <a
        href="/dashboard/buyer/invoices"
        className="text-blue-600 hover:underline"
      >
        ← Back to Invoices
      </a>
    </div>
  );
}
