export default function About() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center">
      <h1 className="text-5xl font-bold mb-6">About MovieHub 🎬</h1>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        MovieHub is your one-stop destination for discovering the best movies,
        trailers, and reviews. Whether you’re looking for the latest
        blockbusters, classic films, or hidden gems, we’ve got you covered.
      </p>


      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-red-400">🎥 Latest Releases</h3>
          <p className="text-gray-400 mt-2">
            Stay updated with the newest movies and trending films.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-red-400">🌟 Movie Reviews</h3>
          <p className="text-gray-400 mt-2">
            Honest and insightful reviews to help you pick your next watch.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-red-400">
            🎞️ Exclusive Trailers
          </h3>
          <p className="text-gray-400 mt-2">
            Watch the latest trailers and get excited about upcoming films.
          </p>
        </div>
      </div>


      <div className="mt-12">
        <button className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-md">
          Explore Movies
        </button>
      </div>
    </section>
  );
}
