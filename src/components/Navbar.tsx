import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isInteriorPage = location.pathname === '/interior';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSectionClick = (sectionId: string) => {
        if (isInteriorPage) {
            const element = document.getElementById(sectionId);
            if (element) {
                const navHeight = 80;
                const elementPosition = element.offsetTop - navHeight;
                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
            }
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                const navHeight = 80;
                const elementPosition = element.offsetTop - navHeight;
                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
            }
        }
        setIsMenuOpen(false);
    };

    const handleHomeNavigation = (sectionId?: string) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                if (sectionId) {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        const navHeight = 80;
                        const elementPosition = element.offsetTop - navHeight;
                        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                    }
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 100);
        } else if (sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                const navHeight = 80;
                const elementPosition = element.offsetTop - navHeight;
                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const handleHomeClick = () => {
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border/10'
            : 'bg-white/90 backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-12 sm:h-14 lg:h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <button
                            onClick={handleHomeClick}
                            className="text-lg sm:text-xl lg:text-2xl font-bold text-primary hover:text-accent transition-colors duration-300"
                        >
                            KARUBID
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                        <button
                            onClick={handleHomeClick}
                            className="text-sm xl:text-base font-medium text-foreground hover:text-accent transition-colors duration-300 relative group px-2 py-1"
                        >
                            Home
                            <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
                        </button>
                        <button
                            onClick={() => isInteriorPage ? handleSectionClick('services') : handleHomeNavigation('services')}
                            className="text-sm xl:text-base font-medium text-foreground hover:text-accent transition-colors duration-300 relative group px-2 py-1"
                        >
                            Services
                            <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
                        </button>
                        <button
                            onClick={() => isInteriorPage ? handleSectionClick('portfolio') : handleHomeNavigation('projects')}
                            className="text-sm xl:text-base font-medium text-foreground hover:text-accent transition-colors duration-300 relative group px-2 py-1"
                        >
                            Projects
                            <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
                        </button>
                        <button
                            onClick={() => isInteriorPage ? handleSectionClick('process') : handleHomeNavigation('about')}
                            className="text-sm xl:text-base font-medium text-foreground hover:text-accent transition-colors duration-300 relative group px-2 py-1"
                        >
                            {isInteriorPage ? 'Process' : 'About'}
                            <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
                        </button>
                        {isInteriorPage && (
                            <button
                                onClick={() => handleSectionClick('team')}
                                className="text-sm xl:text-base font-medium text-foreground hover:text-accent transition-colors duration-300 relative group px-2 py-1"
                            >
                                Team
                                <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
                            </button>
                        )}
                        <button
                            onClick={() => isInteriorPage ? handleSectionClick('contact') : handleHomeNavigation('contact')}
                            className="text-sm xl:text-base font-medium text-foreground hover:text-accent transition-colors duration-300 relative group px-2 py-1"
                        >
                            Contact
                            <span className="absolute -bottom-1 left-2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-[calc(100%-16px)]"></span>
                        </button>
                        <button
                            onClick={() => isInteriorPage ? handleSectionClick('contact') : handleHomeNavigation('contact')}
                            className="bg-accent text-accent-foreground px-4 xl:px-5 py-2 xl:py-2.5 rounded-xl hover:bg-accent/90 transition-all duration-300 text-sm xl:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                        >
                            Free Consultation
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden p-2 rounded-lg hover:bg-secondary/10 transition-colors duration-300 touch-manipulation"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                        ) : (
                            <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu - Improved responsive design */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen
                    ? 'max-h-[400px] opacity-100 border-t border-border/20'
                    : 'max-h-0 opacity-0'
                    }`}>
                    <div className="px-2 py-3 space-y-1 bg-white/95 backdrop-blur-md">
                        <button
                            onClick={handleHomeClick}
                            className="block w-full text-left px-4 py-3 text-sm sm:text-base text-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300 font-medium touch-manipulation"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => isInteriorPage ? handleSectionClick('services') : handleHomeNavigation('services')}
                            className="block w-full text-left px-4 py-3 text-sm sm:text-base text-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300 font-medium touch-manipulation"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => isInteriorPage ? handleSectionClick('portfolio') : handleHomeNavigation('projects')}
                            className="block w-full text-left px-4 py-3 text-sm sm:text-base text-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300 font-medium touch-manipulation"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => isInteriorPage ? handleSectionClick('process') : handleHomeNavigation('about')}
                            className="block w-full text-left px-4 py-3 text-sm sm:text-base text-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300 font-medium touch-manipulation"
                        >
                            {isInteriorPage ? 'Process' : 'About'}
                        </button>
                        {isInteriorPage && (
                            <button
                                onClick={() => handleSectionClick('team')}
                                className="block w-full text-left px-4 py-3 text-sm sm:text-base text-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300 font-medium touch-manipulation"
                            >
                                Team
                            </button>
                        )}
                        <button
                            onClick={() => isInteriorPage ? handleSectionClick('contact') : handleHomeNavigation('contact')}
                            className="block w-full text-left px-4 py-3 text-sm sm:text-base text-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300 font-medium touch-manipulation"
                        >
                            Contact
                        </button>
                        <button
                            onClick={() => isInteriorPage ? handleSectionClick('contact') : handleHomeNavigation('contact')}
                            className="w-full text-center px-4 py-3 mt-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg text-sm sm:text-base touch-manipulation"
                        >
                            Free Consultation
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar