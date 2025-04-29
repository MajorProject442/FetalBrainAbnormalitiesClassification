const NotFound = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-gray-600 text-lg">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-4 text-blue-500 hover:underline">Go back home</a>
      </div>
    );
  };
  
  export default NotFound;
  