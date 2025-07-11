import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { Building2, Palette, Sparkles, Settings, Award, Clock, Handshake, ArrowRight, MapPin, Mail, Phone, Clock as ClockIcon, BrushCleaning, Facebook, Instagram, Linkedin, Twitter, Star, Users, Trophy, Calendar } from 'lucide-react';

const quickLinks = [
    {
        name: 'Home',
        action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    },
    {
        name: 'Services',
        action: () => { const el = document.getElementById('services'); if (el) el.scrollIntoView({ behavior: 'smooth' }); },
    },
    {
        name: 'Projects',
        action: () => { const el = document.getElementById('projects'); if (el) el.scrollIntoView({ behavior: 'smooth' }); },
    },
    {
        name: 'About',
        action: () => { const el = document.getElementById('about'); if (el) el.scrollIntoView({ behavior: 'smooth' }); },
    },
    {
        name: 'Contact',
        action: () => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); },
    }
];

// Animation variants
const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const slideInVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const floatingVariants = {
    animate: {
        y: [-10, 10, -10],
        rotate: [-1, 1, -1],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

const iconRotateVariants = {
    rest: { rotate: 0 },
    hover: {
        rotate: 5,
        transition: { duration: 0.2 }
    }
};

const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const HomePage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [projectsCount, setProjectsCount] = useState(0);
    const [clientsCount, setClientsCount] = useState(0);
    const [experienceCount, setExperienceCount] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    const testimonials = [
        {
            name: "Ahmed Al-Mansouri",
            company: "Emirates Real Estate",
            rating: 5,
            text: "KARUBID delivered exceptional interior design services for our luxury properties. Their attention to detail and professional approach exceeded our expectations.",
            image: "https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20businessman%20in%20elegant%20suit%20smiling%20confidently%20against%20clean%20white%20background%20modern%20corporate%20portrait&width=80&height=80&seq=testimonial1&orientation=squarish"
        },
        {
            name: "Sarah Johnson",
            company: "Dubai Marina Hotel",
            rating: 5,
            text: "Outstanding technical services and maintenance support. KARUBID team is reliable, efficient, and always delivers on time with highest quality standards.",
            image: "https://readdy.ai/api/search-image?query=professional%20businesswoman%20with%20blonde%20hair%20wearing%20navy%20blue%20blazer%20smiling%20warmly%20against%20clean%20white%20background%20corporate%20headshot&width=80&height=80&seq=testimonial2&orientation=squarish"
        },
        {
            name: "Mohammed Hassan",
            company: "Gulf Construction Group",
            rating: 5,
            text: "Their cleaning services transformed our commercial spaces. Professional team, eco-friendly approach, and consistent quality make them our preferred partner.",
            image: "https://readdy.ai/api/search-image?query=confident%20middle%20eastern%20business%20executive%20in%20dark%20suit%20with%20professional%20smile%20against%20clean%20white%20background%20corporate%20portrait%20photography&width=80&height=80&seq=testimonial3&orientation=squarish"
        }
    ];

    const projects = [
        {
            title: "Luxury Villa Interior",
            category: "Interior Design",
            client: "Private Residence",
            description: "Complete luxury interior transformation with custom furniture and premium finishes",
            image: "https://readdy.ai/api/search-image?query=elegant%20luxury%20villa%20interior%20design%20with%20modern%20furniture%20gold%20accents%20navy%20blue%20elements%20sophisticated%20living%20room%20with%20marble%20floors%20and%20designer%20lighting&width=400&height=300&seq=project1&orientation=landscape"
        },
        {
            title: "Corporate Office Cleaning",
            category: "Cleaning Services",
            client: "Business District",
            description: "Professional deep cleaning and maintenance for modern office complexes",
            image: "https://readdy.ai/api/search-image?query=pristine%20modern%20corporate%20office%20space%20with%20gleaming%20floors%20spotless%20glass%20surfaces%20professional%20cleaning%20results%20bright%20contemporary%20workspace&width=400&height=300&seq=project2&orientation=landscape"
        },
        {
            title: "Smart Building Systems",
            category: "Technical Services",
            client: "Commercial Tower",
            description: "Advanced HVAC and smart building automation installation",
            image: "https://readdy.ai/api/search-image?query=advanced%20smart%20building%20control%20systems%20modern%20technology%20panels%20digital%20displays%20professional%20technical%20installation%20contemporary%20automation%20equipment&width=400&height=300&seq=project6&orientation=landscape"
        },
        {
            title: "Hotel Suite Design",
            category: "Interior Design",
            client: "Luxury Hotel",
            description: "Sophisticated hospitality interior design with premium amenities",
            image: "https://readdy.ai/api/search-image?query=luxurious%20hotel%20suite%20interior%20with%20elegant%20furniture%20gold%20and%20navy%20color%20scheme%20premium%20bedding%20sophisticated%20lighting%20modern%20hospitality%20design&width=400&height=300&seq=project4&orientation=landscape"
        },
        {
            title: "Mall Maintenance",
            category: "Cleaning Services",
            client: "Shopping Center",
            description: "Comprehensive facility maintenance and cleaning solutions",
            image: "https://readdy.ai/api/search-image?query=immaculate%20shopping%20mall%20interior%20with%20polished%20marble%20floors%20pristine%20storefronts%20professional%20maintenance%20results%20bright%20commercial%20space&width=400&height=300&seq=project5&orientation=landscape"
        },
        {
            title: "Residential HVAC",
            category: "Technical Services",
            client: "Villa Complex",
            description: "Energy-efficient HVAC system installation and maintenance",
            image: "https://readdy.ai/api/search-image?query=modern%20HVAC%20system%20installation%20in%20commercial%20building%20professional%20technical%20equipment%20sleek%20ductwork%20and%20ventilation%20systems%20industrial%20excellence&width=400&height=300&seq=project3&orientation=landscape"
        }
    ];

    const quickStats = [
        {
            value: '100+',
            label: 'Projects'
        },
        {
            value: '50+',
            label: 'Clients'
        },
        {
            value: '10+',
            label: 'Years'
        }
    ];

    const aboutFeatures = [
        {
            icon: Trophy,
            title: 'Premium Quality',
            description: 'Highest standards in every project with meticulous attention to detail and craftsmanship.',
            color: 'accent'
        },
        {
            icon: Calendar,
            title: 'Timely Delivery',
            description: 'Professional project management ensures on-schedule completion within budget.',
            color: 'primary'
        },
        {
            icon: Handshake,
            title: 'Trusted Partnership',
            description: 'Building long-term relationships through transparency, reliability, and excellence.',
            color: 'secondary'
        }
    ];

    const statsData = [
        {
            count: projectsCount,
            label: 'Completed Projects',
            suffix: '+'
        },
        {
            count: clientsCount,
            label: 'Satisfied Clients',
            suffix: '+'
        },
        {
            count: experienceCount,
            label: 'Years Experience',
            suffix: '+'
        },
        {
            count: '24/7',
            label: 'Support Available',
            suffix: ''
        }
    ];

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Office Location',
            content: 'Dubai, United Arab Emirates',
            color: 'accent'
        },
        {
            icon: Mail,
            title: 'Email Address',
            content: 'info@karubidtechnical.com',
            color: 'accent'
        },
        {
            icon: Phone,
            title: 'Phone Number',
            content: '+971 XX XXX XXXX',
            color: 'accent'
        },
        {
            icon: ClockIcon,
            title: 'Business Hours',
            content: 'Sunday - Thursday: 8AM - 6PM\nFriday - Saturday: 9AM - 4PM',
            color: 'accent'
        }
    ];

    const socialIcons = [Facebook, Instagram, Linkedin, Twitter];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    useEffect(() => {
        const animateCounters = () => {
            const duration = 2000;
            const steps = 60;
            const projectsTarget = 100;
            const clientsTarget = 50;
            const experienceTarget = 10;
            let step = 0;
            const timer = setInterval(() => {
                step++;
                const progress = step / steps;
                setProjectsCount(Math.floor(projectsTarget * progress));
                setClientsCount(Math.floor(clientsTarget * progress));
                setExperienceCount(Math.floor(experienceTarget * progress));
                if (step >= steps) {
                    clearInterval(timer);
                    setProjectsCount(projectsTarget);
                    setClientsCount(clientsTarget);
                    setExperienceCount(experienceTarget);
                }
            }, duration / steps);
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            });
        });
        const statsSection = document.getElementById('stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }
        return () => observer.disconnect();
    }, []);

    // Handle hash navigation on page load
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
            {/* Hero Section - Enhanced with better alignment and UX */}
            <section id="home" className="relative min-h-[65vh] sm:min-h-[70vh] flex items-center overflow-hidden mt-12 sm:mt-14 lg:mt-16">
                {/* Background with parallax effect */}
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img
                        src="/hero.jpg"
                        alt="Modern Interior Design"
                        className="w-full h-full object-cover"
                    />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/65 to-accent/45"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                </motion.div>

                {/* Floating particles with better positioning */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-accent/40 rounded-full"
                            style={{
                                left: `${15 + Math.random() * 70}%`,
                                top: `${15 + Math.random() * 70}%`,
                            }}
                            animate={{
                                y: [-15, 15, -15],
                                x: [-8, 8, -8],
                                opacity: [0.2, 0.6, 0.2],
                                scale: [0.8, 1.2, 0.8]
                            }}
                            transition={{
                                duration: 4 + Math.random() * 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                {/* Main Content - Better centered and aligned for mobile */}
                <div className="relative z-10 w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-6 sm:py-8 min-h-[calc(60vh-3rem)] sm:min-h-[calc(65vh-3.5rem)]">
                            <motion.div
                                className="max-w-5xl lg:max-w-none w-full space-y-3 sm:space-y-4"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                {/* Badge - Mobile optimized */}
                                <motion.div
                                    className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/20 backdrop-blur-md text-accent rounded-full text-xs sm:text-sm font-medium border border-accent/30 shadow-lg"
                                    variants={scaleInVariants}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 136, 102, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                                    </motion.div>
                                    Premium Services in Dubai
                                </motion.div>

                                {/* Main Heading - Better mobile typography */}
                                <motion.div
                                    className="space-y-1"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.h1
                                        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[0.9] tracking-tight px-2 lg:px-0"
                                        variants={fadeInUpVariants}
                                    >
                                        <motion.span
                                            className="block"
                                            variants={fadeInUpVariants}
                                        >
                                            Transform Your
                                        </motion.span>
                                        <motion.span
                                            className="block bg-gradient-to-r from-accent via-accent/90 to-accent/80 bg-clip-text text-transparent"
                                            variants={fadeInUpVariants}
                                        >
                                            Vision Into
                                        </motion.span>
                                        <motion.span
                                            className="block text-accent drop-shadow-lg"
                                            variants={fadeInUpVariants}
                                        >
                                            Reality
                                        </motion.span>
                                    </motion.h1>
                                </motion.div>

                                {/* Subtitle - Mobile optimized */}
                                <motion.p
                                    className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-white/95 max-w-3xl lg:max-w-2xl leading-relaxed font-light px-4 lg:px-0"
                                    variants={fadeInUpVariants}
                                >
                                    Expert interior design, technical services, and professional cleaning solutions that exceed expectations.
                                </motion.p>

                                {/* CTA Buttons - Mobile responsive */}
                                <motion.div
                                    className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start items-center lg:items-start pt-3 sm:pt-4 px-4 lg:px-0"
                                    variants={fadeInUpVariants}
                                >
                                    <motion.button
                                        onClick={() => {
                                            const element = document.getElementById('contact');
                                            if (element) {
                                                const navHeight = window.innerWidth >= 1024 ? 80 : 64;
                                                const elementPosition = element.offsetTop - navHeight;
                                                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                                            }
                                        }}
                                        className="group bg-accent text-accent-foreground px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-2xl font-semibold text-sm sm:text-base lg:text-lg shadow-2xl backdrop-blur-sm border border-accent/20 w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px] touch-manipulation"
                                        whileHover={{
                                            scale: 1.05,
                                            y: -3,
                                            boxShadow: "0 25px 50px -12px rgba(255, 136, 102, 0.4)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="flex items-center justify-center">
                                            Start Your Project
                                            <motion.div
                                                className="ml-2"
                                                whileHover={{ x: 5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </motion.div>
                                        </span>
                                    </motion.button>

                                    <motion.button
                                        onClick={() => {
                                            const element = document.getElementById('projects');
                                            if (element) {
                                                const navHeight = window.innerWidth >= 1024 ? 80 : 64;
                                                const elementPosition = element.offsetTop - navHeight;
                                                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                                            }
                                        }}
                                        className="group border-2 border-white/90 text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-2xl font-semibold text-sm sm:text-base lg:text-lg backdrop-blur-md w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px] hover:bg-white/10 touch-manipulation"
                                        whileHover={{
                                            scale: 1.05,
                                            y: -3,
                                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                                            borderColor: "rgba(255, 255, 255, 1)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="flex items-center justify-center">
                                            View Portfolio
                                            <motion.div
                                                className="ml-2"
                                                whileHover={{ x: 5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </motion.div>
                                        </span>
                                    </motion.button>
                                </motion.div>

                                {/* Enhanced Quick Stats - Mobile responsive */}
                                <motion.div
                                    className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 pt-4 sm:pt-6 px-4 lg:px-0"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {quickStats.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            className="text-center bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border border-white/20 shadow-lg"
                                            variants={scaleInVariants}
                                            whileHover={{
                                                scale: 1.08,
                                                y: -8,
                                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                                boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)"
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-accent drop-shadow-lg">{stat.value}</div>
                                            <div className="text-xs sm:text-sm text-white/90 font-medium">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Improved Floating Achievement Cards - Hidden on mobile */}
                <motion.div
                    className="absolute bottom-12 sm:bottom-16 right-4 sm:right-6 lg:right-12 bg-accent/95 backdrop-blur-md text-accent-foreground p-3 sm:p-4 rounded-2xl shadow-2xl hidden xl:block border border-accent/30 z-20 max-w-[160px] lg:max-w-[180px]"
                    variants={floatingVariants}
                    animate="animate"
                    whileHover={{ scale: 1.1, rotate: 2, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <motion.div
                            className="bg-white/20 p-1.5 sm:p-2 rounded-xl"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.div>
                        <div>
                            <div className="text-base sm:text-lg font-bold">Premium</div>
                            <div className="text-xs sm:text-sm opacity-90">Quality Service</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="absolute top-20 sm:top-24 right-4 sm:right-6 lg:right-12 bg-primary/95 backdrop-blur-md text-primary-foreground p-3 sm:p-4 rounded-2xl shadow-2xl hidden xl:block border border-primary/30 z-20 max-w-[160px] lg:max-w-[180px]"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: "1s" }}
                    whileHover={{ scale: 1.1, rotate: -2, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <motion.div
                            className="bg-white/20 p-1.5 sm:p-2 rounded-xl"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                            <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.div>
                        <div>
                            <div className="text-base sm:text-lg font-bold">24/7</div>
                            <div className="text-xs sm:text-sm opacity-90">Expert Support</div>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll Indicator - Mobile responsive */}
                {/* <motion.div
                    className="absolute bottom-1 sm:bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                >
                    <motion.div
                        className="flex flex-col items-center cursor-pointer group touch-manipulation"
                        onClick={() => {
                            const element = document.getElementById('services');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className="text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2 group-hover:text-accent transition-colors duration-300">
                            Scroll to explore
                        </span>
                        <motion.div
                            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-accent transition-colors duration-300"
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <motion.div
                                className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white/70 rounded-full mt-1.5 sm:mt-2 group-hover:bg-accent transition-colors duration-300"
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div> */}
            </section>

            {/* Services Section with scroll animations */}
            <motion.section
                id="services"
                className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 136, 102, 0.2)" }}
                        >
                            Our Services
                        </motion.div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            Comprehensive Solutions
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            From concept to completion, we deliver excellence in every project
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Interior Design Service */}
                        <motion.div variants={fadeInUpVariants}>
                            <Link to="/interior" className="group block">
                                <motion.div
                                    className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 h-full relative overflow-hidden"
                                    variants={cardHoverVariants}
                                    initial="rest"
                                    whileHover="hover"
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 rounded-3xl"
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    <div className="relative z-10">
                                        <motion.div
                                            className="bg-gradient-to-br from-accent/20 to-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-accent/20"
                                            variants={iconRotateVariants}
                                            initial="rest"
                                            whileHover="hover"
                                        >
                                            <Palette className="w-8 h-8 text-accent" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                                            Interior Design
                                        </h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                            Sophisticated design solutions that blend luxury with functionality, creating spaces that inspire and delight.
                                        </p>
                                        <motion.div
                                            className="flex items-center text-accent font-semibold group-hover:text-foreground transition-colors duration-300"
                                            whileHover={{ x: 5 }}
                                        >
                                            Explore Service
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>

                        {/* Cleaning Services */}
                        <motion.div variants={fadeInUpVariants}>
                            <motion.div
                                className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 h-full relative overflow-hidden group cursor-pointer"
                                variants={cardHoverVariants}
                                initial="rest"
                                whileHover="hover"
                                transition={{ duration: 0.3 }}
                                onClick={() => {
                                    const element = document.getElementById('contact');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 rounded-3xl"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />

                                <div className="relative z-10">
                                    <motion.div
                                        className="bg-gradient-to-br from-accent/20 to-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-accent/20"
                                        variants={iconRotateVariants}
                                        initial="rest"
                                        whileHover="hover"
                                    >
                                        {/* <i className="fas fa-broom"></i> */}
                                        <BrushCleaning className="w-8 h-8 text-primary" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                                        Cleaning Services
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                        Professional cleaning using eco-friendly products and advanced techniques for pristine, healthy environments.
                                    </p>
                                    <motion.div
                                        className="flex items-center text-primary font-semibold group-hover:text-foreground transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        Explore Service
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Technical Services */}
                        <motion.div variants={fadeInUpVariants}>
                            <motion.div
                                className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 h-full relative overflow-hidden group cursor-pointer"
                                variants={cardHoverVariants}
                                initial="rest"
                                whileHover="hover"
                                transition={{ duration: 0.3 }}
                                onClick={() => {
                                    const element = document.getElementById('contact');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 rounded-3xl"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />

                                <div className="relative z-10">
                                    <motion.div
                                        className="bg-gradient-to-br from-secondary/40 to-secondary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-secondary/30"
                                        variants={iconRotateVariants}
                                        initial="rest"
                                        whileHover="hover"
                                    >
                                        <Settings className="w-8 h-8 text-foreground" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                                        Technical Services
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                        Complete technical solutions including HVAC, electrical, plumbing, and smart building automation systems.
                                    </p>
                                    <motion.div
                                        className="flex items-center text-foreground font-semibold group-hover:text-accent transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        Explore Service
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Projects Gallery with enhanced animations */}
            <motion.section
                id="projects"
                className="py-16 sm:py-20 bg-gradient-to-br from-secondary/5 via-background to-accent/5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 136, 102, 0.2)" }}
                        >
                            Featured Work
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Featured Projects
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Discover our portfolio of exceptional projects showcasing our
                            expertise across all service areas
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl shadow-lg bg-card border border-border/50 cursor-pointer"
                                variants={fadeInUpVariants}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="relative overflow-hidden">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover object-top"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>

                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center bg-primary/55 backdrop-blur-sm"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="text-center text-primary-foreground p-6"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileHover={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-accent font-semibold mb-2">
                                            {project.category}
                                        </p>
                                        <p className="text-sm text-primary-foreground/80 mb-4 opacity-90">
                                            {project.client}
                                        </p>
                                        <motion.button
                                            className="mt-2 bg-accent text-accent-foreground px-6 py-3 rounded-2xl font-semibold shadow-lg"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            View Details
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* About & Stats Section with counter animations */}
            <motion.section
                id="about"
                className="py-16 sm:py-20 bg-gradient-to-br from-background to-secondary/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            variants={slideInFromLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6"
                                whileHover={{ scale: 1.05 }}
                            >
                                Why Choose KARUBID
                            </motion.div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                                Excellence in Every Detail
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                We combine expertise, innovation, and dedication to deliver exceptional results that exceed expectations. Our commitment to quality and customer satisfaction drives everything we do.
                            </p>

                            {/* Enhanced Stats Grid */}
                            <motion.div
                                className="grid grid-cols-2 gap-8 mb-8"
                                id="stats-section"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {statsData.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center lg:text-left group"
                                        variants={scaleInVariants}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="text-4xl font-bold text-accent mb-2 transition-transform duration-300">
                                            {typeof stat.count === 'number' ? stat.count : stat.count}{stat.suffix}
                                        </div>
                                        <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="space-y-6"
                            variants={slideInFromRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* Enhanced Feature Cards */}
                            {aboutFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4 p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border group"
                                    variants={fadeInUpVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                >
                                    <motion.div
                                        className={`bg-${feature.color}/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-${feature.color}/20`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <feature.icon className={`w-6 h-6 text-${feature.color === 'secondary' ? 'foreground' : feature.color}`} />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                                        <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Enhanced Testimonials Section */}
            <motion.section
                className="py-16 sm:py-20 bg-gradient-to-br from-secondary/20 via-background to-accent/5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20"
                            whileHover={{ scale: 1.05 }}
                        >
                            Client Reviews
                        </motion.div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Hear from our satisfied clients about their experience working with KARUBID
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            className="bg-card/90 backdrop-blur-md border border-border p-12 rounded-3xl shadow-2xl relative overflow-hidden"
                            variants={scaleInVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"
                                animate={{
                                    background: [
                                        "linear-gradient(45deg, rgba(255,136,102,0.05), transparent, rgba(44,44,46,0.05))",
                                        "linear-gradient(45deg, rgba(44,44,46,0.05), transparent, rgba(255,136,102,0.05))",
                                        "linear-gradient(45deg, rgba(255,136,102,0.05), transparent, rgba(44,44,46,0.05))"
                                    ]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />

                            <div className="relative z-10 text-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentTestimonial}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {/* Star Rating with individual animations */}
                                        <div className="flex justify-center mb-6">
                                            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.1, duration: 0.3 }}
                                                    whileHover={{ scale: 1.2 }}
                                                >
                                                    <Star className="w-6 h-6 text-accent fill-current mx-1" />
                                                </motion.div>
                                            ))}
                                        </div>

                                        <blockquote className="text-2xl text-foreground mb-8 leading-relaxed font-light italic">
                                            "{testimonials[currentTestimonial].text}"
                                        </blockquote>

                                        <motion.div
                                            className="flex items-center justify-center"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <img
                                                src={testimonials[currentTestimonial].image}
                                                alt={testimonials[currentTestimonial].name}
                                                className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-accent/20 shadow-lg"
                                            />
                                            <div className="text-left">
                                                <div className="font-bold text-foreground text-lg">
                                                    {testimonials[currentTestimonial].name}
                                                </div>
                                                <div className="text-muted-foreground">
                                                    {testimonials[currentTestimonial].company}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        {/* Enhanced Navigation */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                        ? 'bg-accent w-8 shadow-md'
                                        : 'bg-muted hover:bg-muted-foreground/50 w-3'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Enhanced Contact Section */}
            <motion.section
                id="contact"
                className="py-16 sm:py-20 bg-gradient-to-br from-background via-secondary/5 to-background"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        variants={fadeInUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-accent/20"
                            whileHover={{ scale: 1.05 }}
                        >
                            Get In Touch
                        </motion.div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">
                            Start Your Project Today
                        </h2>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                            Ready to transform your space? Contact us for a free consultation
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        <motion.div
                            className="bg-gradient-to-br from-secondary/50 to-input/50 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-border/50"
                            variants={slideInFromLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <form className="space-y-4 sm:space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                    <motion.div
                                        className="group"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <label className="block text-foreground font-semibold mb-2 text-sm sm:text-base group-focus-within:text-accent transition-colors duration-300">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-sm sm:text-base bg-background/80 backdrop-blur-sm hover:bg-background focus:bg-background"
                                            placeholder="Enter your name"
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="group"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <label className="block text-foreground font-semibold mb-2 text-sm sm:text-base group-focus-within:text-accent transition-colors duration-300">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-sm sm:text-base bg-background/80 backdrop-blur-sm hover:bg-background focus:bg-background"
                                            placeholder="Enter your email"
                                        />
                                    </motion.div>
                                </div>
                                <motion.div
                                    className="group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label className="block text-foreground font-semibold mb-2 text-sm sm:text-base group-focus-within:text-accent transition-colors duration-300">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-sm sm:text-base bg-background/80 backdrop-blur-sm hover:bg-background focus:bg-background"
                                        placeholder="Enter your phone"
                                    />
                                </motion.div>
                                <motion.div
                                    className="group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label className="block text-foreground font-semibold mb-2 text-sm sm:text-base group-focus-within:text-accent transition-colors duration-300">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none text-sm sm:text-base bg-background/80 backdrop-blur-sm hover:bg-background focus:bg-background"
                                        placeholder="Tell us about your project"
                                    ></textarea>
                                </motion.div>
                                <motion.button
                                    className="w-full bg-accent text-accent-foreground py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg"
                                    whileHover={{
                                        scale: 1.02,
                                        y: -2,
                                        backgroundColor: "rgba(255, 136, 102, 0.9)",
                                        boxShadow: "0 10px 25px -5px rgba(255, 136, 102, 0.25)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>

                        <motion.div
                            className="space-y-6 sm:space-y-8"
                            variants={slideInFromRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Contact Information</h3>
                                <div className="space-y-4 sm:space-y-6">
                                    {contactInfo.map((contact, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start space-x-3 sm:space-x-4 group"
                                            variants={fadeInUpVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.02, x: 5 }}
                                        >
                                            <motion.div
                                                className="bg-accent/10 w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent/20"
                                                whileHover={{
                                                    backgroundColor: "rgba(255, 136, 102, 0.2)",
                                                    scale: 1.1
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <contact.icon className="w-5 sm:w-6 h-5 sm:h-6 text-accent" />
                                            </motion.div>
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base group-hover:text-accent transition-colors duration-300">{contact.title}</h4>
                                                <p className="text-muted-foreground text-sm sm:text-base whitespace-pre-line">{contact.content}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h4>
                                <div className="flex space-x-3 sm:space-x-4">
                                    {socialIcons.map((Icon, index) => (
                                        <motion.a
                                            key={index}
                                            href="#"
                                            className="w-10 sm:w-12 h-10 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent border border-accent/20"
                                            whileHover={{
                                                scale: 1.1,
                                                y: -3,
                                                backgroundColor: "rgba(255, 136, 102, 1)",
                                                color: "white",
                                                boxShadow: "0 10px 25px -5px rgba(255, 136, 102, 0.25)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

        </div>
    );
};

export default HomePage;