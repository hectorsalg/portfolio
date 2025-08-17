import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Button onClick={toggleTheme} variant="outline-dark" className="ms-3">
      {theme === 'light' ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-sun-fill"></i>}
    </Button>
  );
}

export default ThemeToggle;