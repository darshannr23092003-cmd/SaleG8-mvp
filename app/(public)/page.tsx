export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold">
            SaleG8
          </h1>

          <p className="text-lg text-gray-300">
            A simple platform to manage livestock sales, invoices, and buyer records — all in one place.
          </p>

          <div className="flex justify-center gap-4 pt-6">
            <a
              href="/dashboard/admin/sales"
              className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
            >
              Admin Dashboard
            </a>

            <a
              href="/dashboard/buyer"
              className="bg-gray-700 px-6 py-3 rounded hover:bg-gray-600"
            >
              Buyer Dashboard
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12">
            What You Can Do With SaleG8
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-medium text-lg mb-2">Manage Sales</h3>
              <p className="text-gray-600">
                Create, track, and review livestock sales with a clean and structured workflow.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-medium text-lg mb-2">Generate Invoices</h3>
              <p className="text-gray-600">
                Automatically associate invoices with sales and track payment status.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-medium text-lg mb-2">Buyer Access</h3>
              <p className="text-gray-600">
                Buyers can view their invoices and payment details in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESS */}
      <section className="bg-white py-16 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            Get Started
          </h2>

          <p className="text-gray-600">
            Choose how you want to access the platform.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/dashboard/admin/sales"
              className="border px-6 py-3 rounded hover:bg-gray-100"
            >
              I am an Admin
            </a>

            <a
              href="/dashboard/buyer"
              className="border px-6 py-3 rounded hover:bg-gray-100"
            >
              I am a Buyer
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} SaleG8 — MVP Demo
      </footer>
    </main>
  );
}
