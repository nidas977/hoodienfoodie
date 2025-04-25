
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-brand-blue mb-4">404</h1>
        <p className="text-2xl text-white mb-6">Oops! This page doesn't exist</p>
        <p className="text-gray-400 mb-8">
          The page you're looking for might have been removed or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="btn-primary">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
