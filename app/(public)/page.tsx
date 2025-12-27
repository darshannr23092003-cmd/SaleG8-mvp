export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center space-y-8">
          <h1 className="text-5xl font-bold tracking-tight">
            SaleG8
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A modern platform to manage livestock sales, invoices, and buyer access —
            built for speed, clarity, and control.
          </p>

          <div className="flex justify-center gap-4 pt-6 flex-wrap">
            <a
              href="/dashboard/admin/sales"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition"
            >
              Go to Admin Dashboard
            </a>

            <a
              href="/dashboard/buyer"
              className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-lg font-medium transition"
            >
              Go to Buyer Dashboard
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-14">
            Everything You Need — Nothing You Don’t
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
              <h3 className="text-lg font-semibold mb-2">
                Sales Management
              </h3>
              <p className="text-gray-600">
                Create, track, and review livestock sales with a clean,
                structured workflow designed for clarity.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
              <h3 className="text-lg font-semibold mb-2">
                Invoice Tracking
              </h3>
              <p className="text-gray-600">
                Link invoices directly to sales and clearly track payment
                status without spreadsheets or confusion.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
              <h3 className="text-lg font-semibold mb-2">
                Buyer Portal
              </h3>
              <p className="text-gray-600">
                Give buyers direct access to their invoices and details —
                transparent, simple, and self-serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESS */}
      <section className="py-20 px-6 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">
            Get Started in Seconds
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Choose your role below to explore the platform.
            Authentication will be added in future versions.
          </p>

          <div className="flex justify-center gap-6 pt-6 flex-wrap">
            <a
              href="/dashboard/admin/sales"
              className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              I’m an Admin
            </a>

            <a
              href="/dashboard/buyer"
              className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              I’m a Buyer
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SaleG8 · MVP Demo Version
      </footer>
    </main>
  );
}
