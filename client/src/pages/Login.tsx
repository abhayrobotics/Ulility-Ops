const Login = () => {
  return (
    <main className="min-h-screen bg-canvas px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <section className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-3xl overflow-hidden rounded border border-subtle bg-surface shadow-sm lg:grid-cols-[1fr_3xl]">
        <div className="flex items-center justify-center px-5 py-10 sm:px-10">
          <div className="w-full max-w-sm">
            <div className="mb-10">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded bg-ops-primary text-sm font-semibold text-white">
                UO
              </div>
              <p className="text-sm font-medium text-ops-primary">
                Utility Ops
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950">
                Sign in to your workspace
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Monitor field requests, service levels, and dispatch priorities
                from one focused operations console.
              </p>
            </div>

            <form className="space-y-5">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Email address
                </span>
                <input
                  className="mt-2 h-11 w-full rounded border border-subtle bg-white px-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-ops-primary focus:ring-3 focus:ring-sky-100"
                  placeholder="name@company.com"
                  type="email"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">
                  Password
                </span>
                <input
                  className="mt-2 h-11 w-full rounded border border-subtle bg-white px-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-ops-primary focus:ring-3 focus:ring-sky-100"
                  placeholder="Enter your password"
                  type="password"
                />
              </label>

              <div className="flex items-center justify-between gap-4 text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input
                    className="h-4 w-4 rounded border-slate-300 text-ops-primary focus:ring-ops-primary"
                    type="checkbox"
                  />
                  Remember me
                </label>
                <a
                  className="font-medium text-ops-primary hover:text-ops-primary-hover"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>

              <button
                className="h-11 w-full rounded bg-ops-primary px-4 text-sm font-semibold text-white transition hover:bg-ops-primary-hover focus:outline-none focus:ring-3 focus:ring-sky-100"
                type="button"
              >
                Sign in
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Need access?{" "}
              <a
                className="font-medium text-ops-primary hover:text-ops-primary-hover"
                href="#"
              >
                Contact your administrator
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
