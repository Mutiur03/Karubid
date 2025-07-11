// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

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
            {/* Navigation */}

            {/* Hero Section */}
            <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20luxury%20corporate%20office%20interior%20with%20elegant%20navy%20blue%20and%20gold%20accents%20professional%20business%20environment%20sophisticated%20design%20elements%20clean%20minimalist%20aesthetic&width=1440&height=1024&seq=hero1&orientation=landscape')`
                    }}
                >
                    <div className="absolute inset-0 bg-[#2C3E50]/80"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        We Make a Dream
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Premium technical services, interior design, and cleaning solutions for discerning clients in Dubai and beyond
                    </p>
                    <button
                        onClick={() => {
                            const element = document.getElementById('contact');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="bg-[#FF6B47] text-white px-8 py-4 text-lg rounded-lg hover:bg-[#FF5A36] transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
                    >
                        Start Your Project
                    </button>
                </div>
            </section>
            {/* Services Section */}
            <section id="services" className="py-20 bg-[#2C3E50] scroll-mt-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Premium Services</h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Delivering excellence across interior design, technical services, and professional cleaning solutions
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Link to="/interior" className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                            <div className="text-[#FF6B47] text-5xl mb-6 text-center">
                                <i className="fas fa-palette"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[#2C3E50] mb-4 text-center hover:text-[#FF6B47] transition-colors cursor-pointer">Interior Design</h3>
                            <p className="text-gray-600 mb-6 text-center leading-relaxed">
                                Transform your spaces with our sophisticated interior design solutions, blending luxury with functionality for residential and commercial projects.
                            </p>
                            <div className="text-center">
                                <span className="text-[#FF6B47] hover:text-[#FF5A36] font-semibold cursor-pointer">
                                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                                </span>
                            </div>
                        </Link>
                        <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                            <div className="text-[#FF6B47] text-5xl mb-6 text-center">
                                <i className="fas fa-broom"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[#2C3E50] mb-4 text-center hover:text-[#FF6B47] transition-colors cursor-pointer">Cleaning Services</h3>
                            <p className="text-gray-600 mb-6 text-center leading-relaxed">
                                Professional cleaning services for offices, hotels, and residential properties using eco-friendly products and advanced cleaning techniques.
                            </p>
                            <div className="text-center">
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('contact');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="text-[#FF6B47] hover:text-[#FF5A36] font-semibold cursor-pointer"
                                >
                                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                            <div className="text-[#FF6B47] text-5xl mb-6 text-center">
                                <i className="fas fa-cogs"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-[#2C3E50] mb-4 text-center">Technical Services</h3>
                            <p className="text-gray-600 mb-6 text-center leading-relaxed">
                                Comprehensive technical solutions including HVAC systems, electrical work, plumbing, and smart building automation for modern facilities.
                            </p>
                            <div className="text-center">
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('contact');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="text-[#FF6B47] hover:text-[#FF5A36] font-semibold cursor-pointer"
                                >
                                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Choose Us Section */}
            <section id="about" className="py-20 bg-[#F5F5F5] scroll-mt-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div id="stats-section">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-8">Why Choose KARUBID?</h2>
                            <div className="space-y-8">
                                <div className="flex items-center">
                                    <div className="text-4xl font-bold text-[#FF6B47] mr-4">{projectsCount}+</div>
                                    <div>
                                        <div className="text-xl font-semibold text-[#2C3E50]">Projects Completed</div>
                                        <div className="text-gray-600">Successfully delivered across Dubai</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-4xl font-bold text-[#FF6B47] mr-4">{clientsCount}+</div>
                                    <div>
                                        <div className="text-xl font-semibold text-[#2C3E50]">Happy Clients</div>
                                        <div className="text-gray-600">Satisfied customers and repeat business</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-4xl font-bold text-[#FF6B47] mr-4">{experienceCount}+</div>
                                    <div>
                                        <div className="text-xl font-semibold text-[#2C3E50]">Years Experience</div>
                                        <div className="text-gray-600">Expertise in premium services</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="text-[#FF6B47] text-2xl mr-4 mt-1">
                                        <i className="fas fa-award"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Premium Quality Standards</h3>
                                        <p className="text-gray-600">We maintain the highest quality standards in every project, ensuring exceptional results that exceed expectations.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-[#FF6B47] text-2xl mr-4 mt-1">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Timely Delivery</h3>
                                        <p className="text-gray-600">Our professional team ensures all projects are completed on schedule without compromising quality.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-[#FF6B47] text-2xl mr-4 mt-1">
                                        <i className="fas fa-handshake"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Trusted Partnership</h3>
                                        <p className="text-gray-600">Building long-term relationships with clients through transparency, reliability, and exceptional service.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-[#FF6B47] text-2xl mr-4 mt-1">
                                        <i className="fas fa-leaf"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Eco-Friendly Approach</h3>
                                        <p className="text-gray-600">Committed to sustainable practices and environmentally responsible solutions in all our services.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Projects Gallery */}
            <section id="projects" className="py-20 bg-white scroll-mt-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">Featured Projects</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover our portfolio of exceptional projects showcasing our expertise across all service areas
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-[#2C3E50]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center text-white p-6">
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-[#FF6B47] font-semibold">{project.category}</p>
                                        <button className="mt-4 bg-[#FF6B47] text-white px-4 py-2 rounded-lg hover:bg-[#FF5A36] transition-colors whitespace-nowrap">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Testimonials */}
            <section className="py-20 bg-[#2C3E50] scroll-mt-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Testimonials</h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Hear what our valued clients say about their experience with KARUBID Technical Services
                        </p>
                    </div>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
                            <div className="text-[#FF6B47] text-6xl mb-6 text-center">
                                <i className="fas fa-quote-left"></i>
                            </div>
                            <div className="text-center">
                                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                                    "{testimonials[currentTestimonial].text}"
                                </p>
                                <div className="flex items-center justify-center mb-4">
                                    <img
                                        src={testimonials[currentTestimonial].image}
                                        alt={testimonials[currentTestimonial].name}
                                        className="w-16 h-16 rounded-full object-cover object-top mr-4"
                                    />
                                    <div className="text-left">
                                        <div className="font-bold text-[#2C3E50] text-lg">{testimonials[currentTestimonial].name}</div>
                                        <div className="text-gray-600">{testimonials[currentTestimonial].company}</div>
                                    </div>
                                </div>
                                <div className="flex justify-center mb-6">
                                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                        <i key={i} className="fas fa-star text-[#FF6B47] text-xl mx-1"></i>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentTestimonial ? 'bg-[#FF6B47]' : 'bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Section */}
            <section id="contact" className="py-20 bg-[#F5F5F5] scroll-mt-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">Get In Touch</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ready to start your project? Contact us today for a free consultation and discover how we can bring your vision to life
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-[#2C3E50] font-semibold mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B47] text-sm"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#2C3E50] font-semibold mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B47] text-sm"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#2C3E50] font-semibold mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B47] text-sm"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#2C3E50] font-semibold mb-2">Message</label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B47] text-sm resize-none"
                                        placeholder="Tell us about your project requirements"
                                    ></textarea>
                                </div>
                                <button className="w-full bg-[#FF6B47] text-white py-3 rounded-lg hover:bg-[#FF5A36] transition-colors font-semibold cursor-pointer whitespace-nowrap">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="text-[#FF6B47] text-2xl mr-4 mt-1">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#2C3E50] mb-1">Office Location</h4>
                                            <p className="text-gray-600">Dubai, United Arab Emirates</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-[#FF6B47] text-2xl mr-4 mt-1">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#2C3E50] mb-1">Email Address</h4>
                                            <p className="text-gray-600">info@karubidtechnical.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-[#FF6B47] text-2xl mr-4 mt-1">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#2C3E50] mb-1">Phone Number</h4>
                                            <p className="text-gray-600">+971 XX XXX XXXX</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-[#FF6B47] text-2xl mr-4 mt-1">
                                            <i className="fas fa-clock"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#2C3E50] mb-1">Business Hours</h4>
                                            <p className="text-gray-600">Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                                            <p className="text-gray-600">Friday - Saturday: 9:00 AM - 4:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#2C3E50] mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-[#FF6B47] hover:text-[#FF5A36] text-2xl cursor-pointer">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="#" className="text-[#FF6B47] hover:text-[#FF5A36] text-2xl cursor-pointer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="text-[#FF6B47] hover:text-[#FF5A36] text-2xl cursor-pointer">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="#" className="text-[#FF6B47] hover:text-[#FF5A36] text-2xl cursor-pointer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-[#2C3E50] text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-2xl font-bold mb-4">KARUBID</div>
                            <p className="text-white/80 mb-4">
                                Premium technical services, interior design, and cleaning solutions for discerning clients.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-[#FF6B47] hover:text-white cursor-pointer">
                                    <i className="fab fa-facebook text-xl"></i>
                                </a>
                                <a href="#" className="text-[#FF6B47] hover:text-white cursor-pointer">
                                    <i className="fab fa-instagram text-xl"></i>
                                </a>
                                <a href="#" className="text-[#FF6B47] hover:text-white cursor-pointer">
                                    <i className="fab fa-linkedin text-xl"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-white/80 hover:text-[#FF6B47] cursor-pointer">Home</button></li>
                                <li><button onClick={() => { const element = document.getElementById('services'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }} className="text-white/80 hover:text-[#FF6B47] cursor-pointer">Services</button></li>
                                <li><button onClick={() => { const element = document.getElementById('projects'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }} className="text-white/80 hover:text-[#FF6B47] cursor-pointer">Projects</button></li>
                                <li><button onClick={() => { const element = document.getElementById('about'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }} className="text-white/80 hover:text-[#FF6B47] cursor-pointer">About</button></li>
                                <li><button onClick={() => { const element = document.getElementById('contact'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }} className="text-white/80 hover:text-[#FF6B47] cursor-pointer">Contact</button></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li><span className="text-white/80">Interior Design</span></li>
                                <li><span className="text-white/80">Cleaning Services</span></li>
                                <li><span className="text-white/80">Technical Services</span></li>
                                <li><span className="text-white/80">HVAC Systems</span></li>
                                <li><span className="text-white/80">Maintenance</span></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                            <p className="text-white/80 mb-4">Subscribe to get updates on our latest projects and services.</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 py-2 border-none rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none text-sm"
                                />
                                <button className="bg-[#FF6B47] text-white px-4 py-2 rounded-lg ml-2 hover:bg-[#FF5A36] cursor-pointer whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/20 mt-8 pt-8 text-center">
                        <p className="text-white/60">
                            © 2024 KARUBID Technical Services L.L.C. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;