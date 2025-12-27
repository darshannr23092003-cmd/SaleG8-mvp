export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      {/* App Title */}
      <h1 className="text-2xl font-bold mb-8">SaleG8</h1>

      {/* ADMIN SECTION */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">
          Admin
        </p>

        <nav className="space-y-2">
          <a
            href="/dashboard/admin"
            className="block px-3 py-2 rounded hover:bg-gray-800"
          >
            Dashboard
          </a>

          <a
            href="/dashboard/admin/sales"
            className="block px-3 py-2 rounded hover:bg-gray-800"
          >
            Sales
          </a>

          <a
            href="/dashboard/admin/sales/create"
            className="block px-3 py-2 rounded hover:bg-gray-800"
          >
            Create Sale
          </a>
        </nav>
      </div>

      {/* BUYER SECTION */}
      <div>
        <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">
          Buyer
        </p>

        <nav className="space-y-2">
          <a
            href="/dashboard/buyer"
            className="block px-3 py-2 rounded hover:bg-gray-800"
          >
            Dashboard
          </a>

          <a
            href="/dashboard/buyer/invoices"
            className="block px-3 py-2 rounded hover:bg-gray-800"
          >
            Invoices
          </a>
        </nav>
      </div>
    </aside>
  );
}
