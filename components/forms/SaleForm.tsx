export default function SaleForm() {
  return (
    <form className="space-y-6 bg-white p-6 rounded-lg shadow max-w-xl">
      {/* Buyer Name */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Buyer Name
        </label>
        <input
          type="text"
          placeholder="Enter buyer name"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Sale Date */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Sale Date
        </label>
        <input
          type="date"
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Total Amount */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Total Amount (₹)
        </label>
        <input
          type="number"
          placeholder="Enter total amount"
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Status
        </label>
        <select className="w-full border rounded px-3 py-2">
          <option value="Draft">Draft</option>
          <option value="Confirmed">Confirmed</option>
        </select>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          type="button"
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Sale
        </button>
      </div>
    </form>
  );
}
