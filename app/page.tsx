export default function Home() {
          return (
                      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-24">
                            <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm flex flex-col">
                                    <h1 className="text-4xl font-bold tracking-tight text-center sm:text-6xl mb-8">
                                              Welcome to <span className="text-blue-500">Personal Link Hub</span>
                                    </h1>
                                    <p className="mt-6 text-lg leading-8 text-gray-300 text-center max-w-2xl mb-12">
                                              Manage your links, share your portfolio, and connect with the world.
                                    </p>
                                    <div className="mt-10 flex items-center justify-center gap-x-6">
                                              <a
                                                                  href="/login"
                                                                  className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 transition"
                                                                >
                                                          Get started
                                              </a>
                                              <a href="/about" className="text-lg font-semibold leading-6 text-white hover:text-gray-300">
                                                          Learn more ->
                                              </a>
                                    </div>
                            </div>
                      </main>
                    );
}
</
