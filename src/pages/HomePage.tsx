import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/HomePage/Hero';
import Services from '@/components/HomePage/Services';
import Projects from '@/components/HomePage/Projects';
import Testimonials from '@/components/HomePage/Testimonials';
import Contact from '@/components/HomePage/Contact';
import About from '@/components/HomePage/About';
import WhyChooseUs from '@/components/HomePage/WhyChooseUs';
import Consultation from '@/components/Consultation';

const HomePage = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location.hash]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
            <Hero />
            {/* Services Section with scroll animations */}
            <Services />

            {/* Projects Gallery with enhanced animations */}
            <Projects />

            {/* About & Stats Section with counter animations */}
            <About />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Enhanced Testimonials Section */}
            <Testimonials />

            {/* Enhanced Contact Section */}
            <Contact />

            {/* Consultation Modal */}
            <Consultation />
        </div>
    );
};

export default HomePage;