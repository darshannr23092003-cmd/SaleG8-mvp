const links = [
  { name: "Admin Dashboard", href: "/dashboard/admin" },
  { name: "Users", href: "/dashboard/admin/users" },
  { name: "Sales", href: "/dashboard/admin/sales" },
  { name: "Invoices", href: "/dashboard/admin/invoices" },
  { name: "Buyer Dashboard", href: "/dashboard/buyer" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-semibold mb-6">SaleG8</h2>
      <nav className="space-y-2">
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="block px-3 py-2 rounded hover:bg-gray-800"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}
