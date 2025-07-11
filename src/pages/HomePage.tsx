import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Building2, Palette, Sparkles, Settings, Award, Clock, Handshake, ArrowRight, MapPin, Mail, Phone, Clock as ClockIcon, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

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
            image: "https://readdy.ai/api/search-image?query=elegant%20luxury%20villa%20interior%20design%20with%20modern%20furniture%20gold%20accents%20navy%20blue%20elements%20sophisticated%20living%20room%20with%20marble%20floors%20and%20designer%20lighting&width=400&height=300&seq=project1&orientation=landscape"
        },
        {
            title: "Corporate Office Cleaning",
            category: "Cleaning",
            image: "https://readdy.ai/api/search-image?query=pristine%20modern%20corporate%20office%20space%20with%20gleaming%20floors%20spotless%20glass%20surfaces%20professional%20cleaning%20results%20bright%20contemporary%20workspace&width=400&height=300&seq=project2&orientation=landscape"
        },
        {
            title: "HVAC System Installation",
            category: "Technical",
            image: "https://readdy.ai/api/search-image?query=modern%20HVAC%20system%20installation%20in%20commercial%20building%20professional%20technical%20equipment%20sleek%20ductwork%20and%20ventilation%20systems%20industrial%20excellence&width=400&height=300&seq=project3&orientation=landscape"
        },
        {
            title: "Hotel Suite Design",
            category: "Interior Design",
            image: "https://readdy.ai/api/search-image?query=luxurious%20hotel%20suite%20interior%20with%20elegant%20furniture%20gold%20and%20navy%20color%20scheme%20premium%20bedding%20sophisticated%20lighting%20modern%20hospitality%20design&width=400&height=300&seq=project4&orientation=landscape"
        },
        {
            title: "Mall Maintenance",
            category: "Cleaning",
            image: "https://readdy.ai/api/search-image?query=immaculate%20shopping%20mall%20interior%20with%20polished%20marble%20floors%20pristine%20storefronts%20professional%20maintenance%20results%20bright%20commercial%20space&width=400&height=300&seq=project5&orientation=landscape"
        },
        {
            title: "Smart Building Systems",
            category: "Technical",
            image: "https://readdy.ai/api/search-image?query=advanced%20smart%20building%20control%20systems%20modern%20technology%20panels%20digital%20displays%20professional%20technical%20installation%20contemporary%20automation%20equipment&width=400&height=300&seq=project6&orientation=landscape"
        }
    ];
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
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section id="home" className="pt-20 sm:pt-24 pb-12 sm:pb-20 bg-gradient-to-br from-gray-100 to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh] sm:min-h-[80vh]">
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF7A6B]/10 text-[#FF7A6B] rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                                Premium Services in Dubai
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] mb-4 sm:mb-6 leading-tight">
                                We Make Your
                                <span className="text-[#FF7A6B] block">Dream Reality</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
                                Transform your spaces with our premium interior design, technical services, and professional cleaning solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 lg:px-0">
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('contact');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="bg-[#FF7A6B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[#FF6B58] transition-all duration-300 transform hover:scale-105 font-semibold text-sm sm:text-base"
                                >
                                    Start Your Project
                                </button>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('projects');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="border-2 border-[#1E3A5F] text-[#1E3A5F] px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[#1E3A5F] hover:text-white transition-all duration-300 font-semibold text-sm sm:text-base"
                                >
                                    View Portfolio
                                </button>
                            </div>
                        </div>
                        <div className="relative order-1 lg:order-2 px-4 lg:px-0">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="https://readdy.ai/api/search-image?query=modern%20luxury%20corporate%20office%20interior%20with%20elegant%20navy%20blue%20and%20gold%20accents%20professional%20business%20environment%20sophisticated%20design%20elements%20clean%20minimalist%20aesthetic&width=1440&height=1024&seq=hero1&orientation=landscape')"
                                    alt="Modern Interior Design"
                                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-[#FF7A6B] text-white p-4 sm:p-6 rounded-2xl shadow-xl">
                                <div className="text-2xl sm:text-3xl font-bold">100+</div>
                                <div className="text-xs sm:text-sm opacity-90">Projects Completed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF7A6B]/10 text-[#FF7A6B] rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                            Our Services
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] mb-4 sm:mb-6 px-4">
                            What We Offer
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            Comprehensive solutions for all your interior design, technical, and cleaning needs
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
                        <Link to="/interior" className="group bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-[#FF7A6B]/10 w-12 sm:w-16 h-12 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#FF7A6B] transition-colors duration-300">
                                <Palette className="w-6 sm:w-8 h-6 sm:h-8 text-[#FF7A6B] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A5F] mb-3 sm:mb-4 group-hover:text-[#FF7A6B] transition-colors">
                                Interior Design
                            </h3>
                            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                Transform your spaces with sophisticated design solutions that blend luxury with functionality.
                            </p>
                            <div className="flex items-center text-[#FF7A6B] font-semibold group-hover:text-[#1E3A5F] transition-colors text-sm sm:text-base">
                                Learn More
                                <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>

                        <div className="group bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-[#FF7A6B]/10 w-12 sm:w-16 h-12 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#FF7A6B] transition-colors duration-300">
                                <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-[#FF7A6B] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A5F] mb-3 sm:mb-4 group-hover:text-[#FF7A6B] transition-colors">
                                Cleaning Services
                            </h3>
                            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                Professional cleaning using eco-friendly products and advanced techniques for pristine results.
                            </p>
                            <button
                                onClick={() => {
                                    const element = document.getElementById('contact');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="flex items-center text-[#FF7A6B] font-semibold group-hover:text-[#1E3A5F] transition-colors text-sm sm:text-base"
                            >
                                Learn More
                                <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="group bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
                            <div className="bg-[#FF7A6B]/10 w-12 sm:w-16 h-12 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#FF7A6B] transition-colors duration-300">
                                <Settings className="w-6 sm:w-8 h-6 sm:h-8 text-[#FF7A6B] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A5F] mb-3 sm:mb-4 group-hover:text-[#FF7A6B] transition-colors">
                                Technical Services
                            </h3>
                            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                Complete technical solutions including HVAC, electrical, plumbing, and smart building systems.
                            </p>
                            <button
                                onClick={() => {
                                    const element = document.getElementById('contact');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="flex items-center text-[#FF7A6B] font-semibold group-hover:text-[#1E3A5F] transition-colors text-sm sm:text-base"
                            >
                                Learn More
                                <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-100 to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF7A6B]/10 text-[#FF7A6B] rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                                Why Choose Us
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] mb-6 sm:mb-8 px-4 lg:px-0">
                                Excellence in Every Detail
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4 lg:px-0">
                                We combine expertise, innovation, and dedication to deliver exceptional results that exceed expectations.
                            </p>

                            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 px-4 lg:px-0" id="stats-section">
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-[#FF7A6B] mb-1 sm:mb-2">{projectsCount}+</div>
                                    <div className="text-gray-600 text-sm sm:text-base">Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-[#FF7A6B] mb-1 sm:mb-2">{clientsCount}+</div>
                                    <div className="text-gray-600 text-sm sm:text-base">Happy Clients</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-[#FF7A6B] mb-1 sm:mb-2">{experienceCount}+</div>
                                    <div className="text-gray-600 text-sm sm:text-base">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-[#FF7A6B] mb-1 sm:mb-2">24/7</div>
                                    <div className="text-gray-600 text-sm sm:text-base">Support</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-6 px-4 lg:px-0">
                            <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-2xl shadow-sm">
                                <div className="bg-[#FF7A6B]/10 w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Award className="w-5 sm:w-6 h-5 sm:h-6 text-[#FF7A6B]" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#1E3A5F] mb-1 sm:mb-2">Premium Quality</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">Highest standards in every project with attention to detail.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-2xl shadow-sm">
                                <div className="bg-[#FF7A6B]/10 w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-[#FF7A6B]" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#1E3A5F] mb-1 sm:mb-2">Timely Delivery</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">Professional team ensures on-schedule completion.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-2xl shadow-sm">
                                <div className="bg-[#FF7A6B]/10 w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Handshake className="w-5 sm:w-6 h-5 sm:h-6 text-[#FF7A6B]" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#1E3A5F] mb-1 sm:mb-2">Trusted Partnership</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">Building long-term relationships through transparency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Gallery */}
            <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF7A6B]/10 text-[#FF7A6B] rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                            Our Work
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] mb-4 sm:mb-6 px-4">
                            Featured Projects
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            Explore our portfolio of exceptional projects across interior design, technical services, and maintenance
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
                        {projects.map((project, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4 sm:p-6">
                                    <div className="inline-block px-2 sm:px-3 py-1 bg-[#FF7A6B]/10 text-[#FF7A6B] text-xs sm:text-sm font-medium rounded-full mb-2 sm:mb-3">
                                        {project.category}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#1E3A5F] mb-2 sm:mb-3 group-hover:text-[#FF7A6B] transition-colors">
                                        {project.title}
                                    </h3>
                                    <button className="flex items-center text-[#1E3A5F] font-semibold group-hover:text-[#FF7A6B] transition-colors text-sm sm:text-base">
                                        View Details
                                        <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-100 to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF7A6B]/10 text-[#FF7A6B] rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                            Testimonials
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] mb-4 sm:mb-6 px-4">
                            What Our Clients Say
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-3xl shadow-xl">
                            <div className="text-center">
                                <div className="flex justify-center mb-4 sm:mb-6">
                                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                        <i key={i} className="fas fa-star text-[#FF7A6B] text-lg sm:text-xl mx-1"></i>
                                    ))}
                                </div>
                                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed italic font-light">
                                    "{testimonials[currentTestimonial].text}"
                                </p>
                                <div className="flex items-center justify-center flex-col sm:flex-row">
                                    <img
                                        src={testimonials[currentTestimonial].image}
                                        alt={testimonials[currentTestimonial].name}
                                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mb-3 sm:mb-0 sm:mr-4"
                                    />
                                    <div className="text-center sm:text-left">
                                        <div className="font-bold text-[#1E3A5F] text-base sm:text-lg">
                                            {testimonials[currentTestimonial].name}
                                        </div>
                                        <div className="text-gray-600 text-sm sm:text-base">
                                            {testimonials[currentTestimonial].company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                        ? 'bg-[#FF7A6B] w-6 sm:w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF7A6B]/10 text-[#FF7A6B] rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                            Get In Touch
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] mb-4 sm:mb-6 px-4">
                            Start Your Project Today
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            Ready to transform your space? Contact us for a free consultation
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-6 sm:p-8 rounded-3xl">
                            <form className="space-y-4 sm:space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="block text-[#1E3A5F] font-semibold mb-2 text-sm sm:text-base">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF7A6B] focus:ring-2 focus:ring-[#FF7A6B]/20 transition-all text-sm sm:text-base"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[#1E3A5F] font-semibold mb-2 text-sm sm:text-base">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF7A6B] focus:ring-2 focus:ring-[#FF7A6B]/20 transition-all text-sm sm:text-base"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[#1E3A5F] font-semibold mb-2 text-sm sm:text-base">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF7A6B] focus:ring-2 focus:ring-[#FF7A6B]/20 transition-all text-sm sm:text-base"
                                        placeholder="Enter your phone"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#1E3A5F] font-semibold mb-2 text-sm sm:text-base">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF7A6B] focus:ring-2 focus:ring-[#FF7A6B]/20 transition-all resize-none text-sm sm:text-base"
                                        placeholder="Tell us about your project"
                                    ></textarea>
                                </div>
                                <button className="w-full bg-[#FF7A6B] text-white py-3 sm:py-4 rounded-xl hover:bg-[#FF6B58] transition-all duration-300 transform hover:scale-105 font-semibold text-base sm:text-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="space-y-6 sm:space-y-8">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A5F] mb-6 sm:mb-8">Contact Information</h3>
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="bg-[#FF7A6B]/10 w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-[#FF7A6B]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#1E3A5F] mb-1 text-sm sm:text-base">Office Location</h4>
                                            <p className="text-gray-600 text-sm sm:text-base">Dubai, United Arab Emirates</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="bg-[#FF7A6B]/10 w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-[#FF7A6B]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#1E3A5F] mb-1 text-sm sm:text-base">Email Address</h4>
                                            <p className="text-gray-600 text-sm sm:text-base">info@karubidtechnical.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="bg-[#FF7A6B]/10 w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-[#FF7A6B]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#1E3A5F] mb-1 text-sm sm:text-base">Phone Number</h4>
                                            <p className="text-gray-600 text-sm sm:text-base">+971 XX XXX XXXX</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="bg-[#FF7A6B]/10 w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <ClockIcon className="w-5 sm:w-6 h-5 sm:h-6 text-[#FF7A6B]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#1E3A5F] mb-1 text-sm sm:text-base">Business Hours</h4>
                                            <p className="text-gray-600 text-sm sm:text-base">Sunday - Thursday: 8AM - 6PM</p>
                                            <p className="text-gray-600 text-sm sm:text-base">Friday - Saturday: 9AM - 4PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-[#1E3A5F] mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h4>
                                <div className="flex space-x-3 sm:space-x-4">
                                    <a
                                        href="#"
                                        className="w-10 sm:w-12 h-10 sm:h-12 bg-[#FF7A6B]/10 rounded-xl flex items-center justify-center text-[#FF7A6B] hover:bg-[#FF7A6B] hover:text-white transition-all duration-300"
                                    >
                                        <Facebook className="w-4 sm:w-5 h-4 sm:h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 sm:w-12 h-10 sm:h-12 bg-[#FF7A6B]/10 rounded-xl flex items-center justify-center text-[#FF7A6B] hover:bg-[#FF7A6B] hover:text-white transition-all duration-300"
                                    >
                                        <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 sm:w-12 h-10 sm:h-12 bg-[#FF7A6B]/10 rounded-xl flex items-center justify-center text-[#FF7A6B] hover:bg-[#FF7A6B] hover:text-white transition-all duration-300"
                                    >
                                        <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 sm:w-12 h-10 sm:h-12 bg-[#FF7A6B]/10 rounded-xl flex items-center justify-center text-[#FF7A6B] hover:bg-[#FF7A6B] hover:text-white transition-all duration-300"
                                    >
                                        <Twitter className="w-4 sm:w-5 h-4 sm:h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;