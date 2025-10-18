export default function Home() {
  return (
    <section className="text-center py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <h1 className="text-5xl font-extrabold text-white">Welcome to MovieHub 🎬</h1>
      <p className="text-gray-300 mt-4 " style={{marginBottom:'12px'}}>Discover the latest movies, reviews, and trailers.</p>
      <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-md text-white">
        Browse Movies
      </button>
    </section>
  );
}


