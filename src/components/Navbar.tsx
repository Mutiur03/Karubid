import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import useConsultationStore from '@/store/Consultation';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isInteriorPage = location.pathname === '/interior';
    const isCleaningPage = location.pathname === '/cleaning';
    const isTechnicalPage = location.pathname === '/technical';
    const isServicePage = isInteriorPage || isCleaningPage || isTechnicalPage;
    const { openConsultation } = useConsultationStore();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navHeight = 64; // 4rem = 64px
            const elementPosition = element.offsetTop - navHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        } else {
            console.warn(`Section with id "${sectionId}" not found`);
        }
    };

    const handleSectionClick = (sectionId: string) => {
        if (isServicePage) {
            scrollToSection(sectionId);
        } else {
            handleHomeNavigation(sectionId);
        }
        setIsMenuOpen(false);
    };

    const handleHomeNavigation = (sectionId?: string) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                if (sectionId) {
                    scrollToSection(sectionId);
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 300); // Increased timeout for better navigation
        } else if (sectionId) {
            scrollToSection(sectionId);
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

    const handleConsultationClick = () => {
        openConsultation();
        setIsMenuOpen(false);
    };

    const getNavItems = () => {
        if (isInteriorPage) {
            return [
                { label: 'Services', id: 'services' },
                { label: 'Process', id: 'process' },
                { label: 'Projects', id: 'portfolio' },
                { label: 'Team', id: 'team' },
                // { label: 'Contact', id: 'contact' }
            ];
        } else if (isCleaningPage) {
            return [
                { label: 'Services', id: 'services' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'Process', id: 'process' },
                // { label: 'Contact', id: 'contact' }
            ];
        } else if (isTechnicalPage) {
            return [
                { label: 'Services', id: 'services' },
                { label: 'Process', id: 'process' },
                { label: 'Portfolio', id: 'portfolio' },
                // { label: 'Contact', id: 'contact' }
            ];
        } else {
            // Home page navigation
            return [
                { label: 'Services', id: 'services' },
                { label: 'Projects', id: 'projects' },
                { label: 'About', id: 'about' },
                { label: 'Contact', id: 'contact' }
            ];
        }
    };

    const navItems = getNavItems();

    return (
        <nav className={`fixed top-0 left-0 h-[4rem] w-full z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border/10'
            : 'bg-white/90 backdrop-blur-sm'
            }`}>
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4"> {/* Reduce horizontal padding for mobile */}
                <div className="flex justify-between items-center h-[4rem]">
                    {/* Logo */}
                    <div className="flex items-center">
                        <button
                            onClick={handleHomeClick}
                            className="flex items-center hover:opacity-80 transition-opacity duration-300"
                        >
                            <img
                                src="/Logo.png"
                                alt="Company Logo"
                                className="h-9 w-auto object-contain sm:h-10 lg:h-12" // Slightly larger logo for mobile
                            />
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
                        <button
                            onClick={handleHomeClick}
                            className="text-base xl:text-lg font-medium text-foreground hover:text-accent transition-colors duration-300 relative group px-3 py-2"
                        >
                            Home
                            <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-[calc(100%-24px)]"></span>
                        </button>

                        {navItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleSectionClick(item.id)}
                                className="text-base xl:text-lg font-medium text-foreground hover:text-accent transition-colors duration-300 relative group px-3 py-2"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-[calc(100%-24px)]"></span>
                            </button>
                        ))}

                        <button
                            onClick={handleConsultationClick}
                            className="bg-accent text-accent-foreground px-6 xl:px-7 py-2.5 xl:py-3 rounded-xl hover:bg-accent/90 transition-all duration-300 text-base xl:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap ml-4"
                        >
                            Free Consultation
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden p-3 rounded-lg hover:bg-secondary/10 transition-colors duration-300 touch-manipulation"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-7 h-7 text-foreground" /> // Larger icon for easier tap
                        ) : (
                            <Menu className="w-7 h-7 text-foreground" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen
                    ? 'max-h-[500px] opacity-100 border-t border-border/20'
                    : 'max-h-0 opacity-0'
                    }`}>
                    <div className="px-2 py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-b-xl shadow-md">
                        <button
                            onClick={handleHomeClick}
                            className="block w-full text-left px-4 py-4 text-base text-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300 font-medium touch-manipulation"
                        >
                            Home
                        </button>

                        {navItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleSectionClick(item.id)}
                                className="block w-full text-left px-4 py-4 text-base text-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300 font-medium touch-manipulation"
                            >
                                {item.label}
                            </button>
                        ))}

                        <button
                            onClick={handleConsultationClick}
                            className="w-full text-center px-4 py-4 mt-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg text-base touch-manipulation"
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