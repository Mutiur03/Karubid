import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isInteriorPage = location.pathname === '/interior';

    const handleSectionClick = (sectionId: string) => {
        if (isInteriorPage) {
            // If on interior page, scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If on home page, scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMenuOpen(false);
    };

    const handleHomeNavigation = (sectionId?: string) => {
        if (location.pathname !== '/') {
            // Navigate to home page first, then scroll
            navigate('/');
            setTimeout(() => {
                if (sectionId) {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 100);
        } else if (sectionId) {
            // Already on home page, scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Already on home page, scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const handleHomeClick = () => {
        if (location.pathname !== '/') {
            // Navigate to home page and scroll to top
            navigate('/');
        } else {
            // Already on home page, scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <button
                            onClick={handleHomeClick}
                            className="text-2xl font-bold text-[#2C3E50] hover:text-[#FF6B47] transition-colors cursor-pointer"
                        >
                            KARUBID
                        </button>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={handleHomeClick}
                            className="text-[#2C3E50] hover:text-[#FF6B47] transition-colors cursor-pointer"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => isInteriorPage ? handleSectionClick('services') : handleHomeNavigation('services')}
                            className="text-[#2C3E50] hover:text-[#FF6B47] transition-colors cursor-pointer"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => isInteriorPage ? handleSectionClick('portfolio') : handleHomeNavigation('projects')}
                            className="text-[#2C3E50] hover:text-[#FF6B47] transition-colors cursor-pointer"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => isInteriorPage ? handleSectionClick('portfolio') : handleHomeNavigation('projects')}
                            className="text-[#2C3E50] hover:text-[#FF6B47] transition-colors cursor-pointer"
                        >
                            Portfolio
                        </button>
                        <button
                            onClick={() => isInteriorPage ? handleSectionClick('process') : handleHomeNavigation('about')}
                            className="text-[#2C3E50] hover:text-[#FF6B47] transition-colors cursor-pointer"
                        >
                            {isInteriorPage ? 'Process' : 'About'}
                        </button>
                        {isInteriorPage && (
                            <button
                                onClick={() => handleSectionClick('team')}
                                className="text-[#2C3E50] hover:text-[#FF6B47] transition-colors cursor-pointer"
                            >
                                Team
                            </button>
                        )}
                        <button
                            onClick={() => handleSectionClick('contact')}
                            className="text-[#2C3E50] hover:text-[#FF6B47] transition-colors cursor-pointer"
                        >
                            Contact
                        </button>
                        <button
                            onClick={() => handleSectionClick('contact')}
                            className="bg-[#FF6B47] text-white px-6 py-2 rounded-lg hover:bg-[#FF5A36] transition-colors cursor-pointer whitespace-nowrap"
                        >
                            Free Consultation
                        </button>
                    </div>
                    <button
                        className="md:hidden cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className="fas fa-bars text-[#2C3E50] text-xl"></i>
                    </button>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <button
                                onClick={handleHomeClick}
                                className="block w-full text-left px-3 py-2 text-[#2C3E50] hover:text-[#FF6B47] cursor-pointer"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => isInteriorPage ? handleSectionClick('services') : handleHomeNavigation('services')}
                                className="block w-full text-left px-3 py-2 text-[#2C3E50] hover:text-[#FF6B47] cursor-pointer"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => isInteriorPage ? handleSectionClick('portfolio') : handleHomeNavigation('projects')}
                                className="block w-full text-left px-3 py-2 text-[#2C3E50] hover:text-[#FF6B47] cursor-pointer"
                            >
                                Portfolio
                            </button>
                            <button
                                onClick={() => isInteriorPage ? handleSectionClick('process') : handleHomeNavigation('about')}
                                className="block w-full text-left px-3 py-2 text-[#2C3E50] hover:text-[#FF6B47] cursor-pointer"
                            >
                                {isInteriorPage ? 'Process' : 'About'}
                            </button>
                            {isInteriorPage && (
                                <button
                                    onClick={() => handleSectionClick('team')}
                                    className="block w-full text-left px-3 py-2 text-[#2C3E50] hover:text-[#FF6B47] cursor-pointer"
                                >
                                    Team
                                </button>
                            )}
                            <button
                                onClick={() => handleSectionClick('contact')}
                                className="block w-full text-left px-3 py-2 text-[#2C3E50] hover:text-[#FF6B47] cursor-pointer"
                            >
                                Contact
                            </button>
                            <button
                                onClick={() => handleSectionClick('contact')}
                                className="w-full text-left px-3 py-2 bg-[#FF6B47] text-white rounded-lg cursor-pointer whitespace-nowrap"
                            >
                                Free Consultation
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar