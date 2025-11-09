
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Play, Pause } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const { setCursorVariant } = useAppContext();
  return (
    <NavLink
      to={to}
      onMouseEnter={() => setCursorVariant('link')}
      onMouseLeave={() => setCursorVariant('default')}
      className={({ isActive }) =>
        `relative text-sm uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-accent' : 'text-gray-400 hover:text-accent'}`
      }
    >
      {({ isActive }) => (
        <>
          {children}
          {isActive && (
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent"></span>
          )}
        </>
      )}
    </NavLink>
  );
};

const Navigation = () => {
    const { playReel, setCursorVariant } = useAppContext();

    return (
        <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-8">
            <div className="container mx-auto flex justify-between items-center">
                <NavLink 
                  to="/"
                  onMouseEnter={() => setCursorVariant('link')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                    <div className="text-lg font-bold tracking-wider">VIKAS</div>
                </NavLink>

                <nav className="hidden md:flex items-center gap-8">
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/portfolio">Portfolio</NavItem>
                </nav>

                <button
                    onClick={playReel}
                    onMouseEnter={() => setCursorVariant('link')}
                    onMouseLeave={() => setCursorVariant('default')}
                    className="flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-accent transition-colors duration-300"
                >
                    <Play className="w-4 h-4" />
                    <span>Showreel</span>
                </button>
            </div>
        </header>
    );
};

export default Navigation;
