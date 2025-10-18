import { useLoaderData } from "react-router-dom";
import { Card } from "../components/ui/Card";


export default function Movies() {
  const moviesData = useLoaderData();
  console.log(moviesData);
  return (
    <section className="py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-200">
        Latest Movies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {moviesData && moviesData.Search.map((curMovie) => {
            return <Card key={curMovie.imdbID} movie={curMovie}/>
        })}
      </div>
    </section>
  );
}


