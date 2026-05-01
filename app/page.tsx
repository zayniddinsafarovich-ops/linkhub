export default function Home() {
        return (
                  <main className="flex min-h-screen flex-col items-center justify-center p-24">
                        <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm flex">
                                <h1 className="text-4xl font-bold tracking-tight text-center sm:text-6xl">
                                          Welcome to <span className="text-blue-500">Personal Link Hub</span>span>
                                </h1>h1>
                        </div>div>
                        <p className="mt-6 text-lg leading-8 text-gray-300 text-center max-w-2xl">
                                Manage your links, share your portfolio, and track your analytics with our minimal, modern, and high-performance link hub platform.
                        </p>p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                                href="/login"
                                                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 transition-colors"
                                              >
                                          Get started
                                </a>a>
                        </div>div>
                  </main>main>
                );
}
</main>
