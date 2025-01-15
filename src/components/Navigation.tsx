import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Library, Upload, MessageSquare, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-purple-600 text-white lg:hidden"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Navigation sidebar */}
      <nav className={`
        fixed top-0 left-0 h-full w-64 bg-purple-800 text-white transform transition-transform duration-200 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="p-4">
          <Logo />
        </div>

        <div className="mt-8 space-y-2 px-4">
          <Link
            to="/"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/') ? 'bg-purple-600' : 'hover:bg-purple-700'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chat</span>
          </Link>

          <Link
            to="/library"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/library') ? 'bg-purple-600' : 'hover:bg-purple-700'
            }`}
          >
            <Library className="w-5 h-5" />
            <span>Library</span>
          </Link>

          <Link
            to="/upload"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/upload') ? 'bg-purple-600' : 'hover:bg-purple-700'
            }`}
          >
            <Upload className="w-5 h-5" />
            <span>Upload</span>
          </Link>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}