

import { NavLink } from "react-router-dom"


export const Card = ({movie}) => {
  return (
    <div
    className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden flex flex-col"
  >
    {/* Fixed Image Height */}
    <img
      src={movie.Poster}
      alt={movie.imdbID}
      className="w-full h-80 object-cover"
    />
    <div className="p-5 flex flex-col flex-grow">
      {/* Fixed Title Height & Ellipsis */}
      <h2 className="text-xl font-semibold mb-2 line-clamp-2">
        {movie.Title}
      </h2>
      <p className="text-gray-400 mb-4">Year: {movie.Year}</p>


      {/* Push Button to Bottom */}
      <div className="mt-auto">
        <NavLink to={`/movies/${movie.imdbID}`}>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-md">
            View Details
          </button>
        </NavLink>
       
      </div>
    </div>
  </div>
  )
}
