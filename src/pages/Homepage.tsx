const Homepage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl text-center p-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-[#91C730]">KariyaPay</span>
        </h1>
        <p className="text-gray-600 mb-6">
          A simple landing page to verify Tailwind and app CSS are working.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="/Waitlist"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
          >
            Join Waitlist
          </a>
          <a
            href="#"
            className="inline-block border border-gray-300 px-6 py-3 rounded-md text-gray-700 hover:bg-[#91C730]"
          >
            Learn more
          </a>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
