export const getMoviesDetails = async ({ params }) => {
    console.log(params);


    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${params.movieId}&apikey=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();  // Await here to resolve the promise
        return data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
    }
};
