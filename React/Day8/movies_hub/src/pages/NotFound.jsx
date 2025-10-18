
import { NavLink, useNavigate, useRouteError } from "react-router-dom";


export default function NotFound() {
  const error = useRouteError(); // Get error details from React Router
  console.log(error);


  // Default error message
  let title = "Oops! Page Not Found";
  let message = "The page you're looking for doesn't exist.";


  // Handle different types of errors
  if (error) {
    if (error.status === 404) {
      title = "404 - Page Not Found";
    } else {
      title = "Something Went Wrong";
      message = error.statusText || "An unexpected error occurred.";
    }
  }


  const navigate = useNavigate();
  console.log(navigate);
  const handleGoBack = () => {
    navigate(-1);
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center">
      {/* 404 GIF */}
      <img
        src="https://media.giphy.com/media/l2JehQ2GitHGdVG9y/giphy.gif"
        alt="404 Not Found"
        className="w-80 h-auto mb-6"
      />


      {/* Error Title */}
      <h1 className="text-4xl font-bold mb-4">{title}</h1>


      {/* Error Message */}
      <p className="text-gray-400 mb-6">{message}</p>


      {/* Buttons Container */}
      <div className="flex space-x-4">
        <NavLink
          to="/"
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition"
        >
          Go Home
        </NavLink>


        <button
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
