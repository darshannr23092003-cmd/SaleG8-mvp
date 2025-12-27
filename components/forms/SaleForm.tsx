"use client";

import { useState } from "react";

export default function SaleForm() {
  const [buyer, setBuyer] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("Draft");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // MOCK submit (simulate API call)
    setTimeout(() => {
      const saleData = {
        buyer,
        amount,
        status,
      };

      console.log("Sale submitted (mock):", saleData);

      alert("Sale created successfully (mock)");

      // Redirect back to sales list
      window.location.href = "/dashboard/admin/sales";
    }, 800);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow max-w-xl space-y-4"
    >
      {/* Buyer */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Buyer Name
        </label>
        <input
          type="text"
          value={buyer}
          onChange={(e) => setBuyer(e.target.value)}
          required
          className="w-full border rounded px-3 py-2"
          placeholder="Enter buyer name"
        />
      </div>

      {/* Amount */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Total Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="w-full border rounded px-3 py-2"
          placeholder="Enter amount"
        />
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="Draft">Draft</option>
          <option value="Confirmed">Confirmed</option>
        </select>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Sale"}
        </button>

        <a
          href="/dashboard/admin/sales"
          className="px-4 py-2 rounded border"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
