
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface RedirectHandlerProps {
  children: React.ReactNode;
}

const RedirectHandler: React.FC<RedirectHandlerProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle 404 redirects if needed
    const path = window.location.pathname;
    
    // If we're on a direct route that's not root, ensure it's valid
    if (path !== '/' && !['/', '/menu', '/order', '/contact'].includes(path)) {
      navigate('/');
    }
  }, [location, navigate]);

  return <>{children}</>;
};

export default RedirectHandler;
