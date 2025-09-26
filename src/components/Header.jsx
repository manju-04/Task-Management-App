import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <h1>Task Manager</h1>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/create" className={location.pathname === '/create' ? 'active' : ''}>
              Create Task
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;