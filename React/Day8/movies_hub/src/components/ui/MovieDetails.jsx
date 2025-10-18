import { useLoaderData } from "react-router-dom";


export default function MovieDetails() {
  const movie = useLoaderData();
 
  // Destructure the movie data for easier access
  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Language,
    Country,
    Awards,
    Poster,
    Plot,
    Ratings,
    imdbID,
  } = movie;


  return (
    <section className="py-12 px-6 max-w-5xl mx-auto text-gray-100">
      {/* Movie Title */}
      <h1 className="text-5xl font-bold text-center mb-8 text-red-500">{Title}</h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-900 p-8 rounded-lg shadow-lg">
        {/* Movie Poster */}
        <div className="flex justify-center">
          <img
            src={Poster}
            alt={Title}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>


        {/* Movie Info */}
        <div className="md:col-span-2 space-y-4">
          {[
            { label: "Year", value: Year },
            { label: "Rated", value: Rated },
            { label: "Released", value: Released },
            { label: "Runtime", value: Runtime },
            { label: "Genre", value: Genre },
            { label: "Director", value: Director },
            { label: "Writer", value: Writer },
            { label: "Actors", value: Actors },
            { label: "Language", value: Language },
            { label: "Country", value: Country },
            { label: "Awards", value: Awards },
          ].map(({ label, value }) => (
            <p key={label} className="text-lg">
              <span className="font-semibold text-red-400">{label}:</span> {value}
            </p>
          ))}
        </div>
      </div>


      {/* Movie Plot */}
      <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-red-400 mb-4">Plot</h2>
        <p className="text-gray-300 leading-relaxed">{Plot}</p>
      </div>


      {/* Ratings Section */}
      {Ratings && Ratings.length > 0 && (
        <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Ratings</h2>
          <ul className="space-y-3">
            {Ratings.map((rating, index) => (
              <li key={index} className="bg-gray-900 p-3 rounded-lg text-lg">
                <span className="font-semibold">{rating.Source}:</span> {rating.Value}
              </li>
            ))}
          </ul>
        </div>
      )}


      {/* IMDb Button */}
      <div className="mt-8 flex justify-center">
        <a
          href={`https://www.imdb.com/title/${imdbID}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-lg font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-md transition duration-300"
        >
          🎬 View on IMDb
        </a>
      </div>
    </section>
  );
}










