import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, Menu, X, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">HealthAI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/diagnosis" className="text-gray-700 hover:text-emerald-600">Diagnosis</Link>
            <Link to="/treatment" className="text-gray-700 hover:text-emerald-600">Treatment</Link>
            <Link to="/research" className="text-gray-700 hover:text-emerald-600">Research</Link>
            {user ? (
              <>
                <Link to="/chat">
                  <Button variant="default" className="bg-emerald-600 hover:bg-emerald-700">
                    AI Assistant
                  </Button>
                </Link>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="outline" className="flex items-center">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button variant="default" className="bg-emerald-600 hover:bg-emerald-700 flex items-center">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Link
                to="/diagnosis"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Diagnosis
              </Link>
              <Link
                to="/treatment"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Treatment
              </Link>
              <Link
                to="/research"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Research
              </Link>
              {user ? (
                <>
                  <Link
                    to="/chat"
                    className="block px-3 py-2 text-base font-medium text-emerald-600 hover:bg-gray-50"
                  >
                    AI Assistant
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/auth"
                  className="block px-3 py-2 text-base font-medium text-emerald-600 hover:bg-gray-50"
                >
                  Login / Register
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}