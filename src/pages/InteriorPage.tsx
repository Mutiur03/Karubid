// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from "react";

const InteriorPage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [currentBeforeAfter, setCurrentBeforeAfter] = useState(0);
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [selectedPackage, setSelectedPackage] = useState("premium");

    const testimonials = [
        {
            name: "Fatima Al-Zahra",
            project: "Luxury Villa Renovation",
            rating: 5,
            text: "KARUBID transformed our villa into a masterpiece. Their attention to detail and understanding of our vision was exceptional. The team delivered beyond our expectations.",
            image:
                "https://readdy.ai/api/search-image?query=elegant%20middle%20eastern%20woman%20in%20professional%20attire%20smiling%20warmly%20against%20clean%20white%20background%20luxury%20interior%20design%20client%20portrait&width=80&height=80&seq=testimonial1&orientation=squarish",
        },
        {
            name: "James Mitchell",
            project: "Corporate Office Design",
            rating: 5,
            text: "Outstanding interior design services for our Dubai headquarters. The space planning and material selection created a perfect balance of functionality and elegance.",
            image:
                "https://readdy.ai/api/search-image?query=professional%20businessman%20in%20navy%20suit%20smiling%20confidently%20against%20clean%20white%20background%20corporate%20executive%20portrait&width=80&height=80&seq=testimonial2&orientation=squarish",
        },
        {
            name: "Aisha Rahman",
            project: "Boutique Hotel Interior",
            rating: 5,
            text: "The design team created stunning interiors that perfectly capture our brand identity. Every room tells a story of luxury and comfort. Highly recommended.",
            image:
                "https://readdy.ai/api/search-image?query=sophisticated%20businesswoman%20wearing%20elegant%20blazer%20smiling%20professionally%20against%20clean%20white%20background%20hospitality%20industry%20portrait&width=80&height=80&seq=testimonial3&orientation=squarish",
        },
    ];

    const beforeAfterProjects = [
        {
            title: "Modern Living Room Transformation",
            location: "Dubai Marina",
            before:
                "https://readdy.ai/api/search-image?query=outdated%20living%20room%20with%20old%20furniture%20beige%20walls%20traditional%20decor%20before%20renovation%20simple%20interior%20space%20needing%20modern%20update&width=600&height=400&seq=before1&orientation=landscape",
            after:
                "https://readdy.ai/api/search-image?query=luxurious%20modern%20living%20room%20with%20navy%20blue%20and%20gold%20accents%20contemporary%20furniture%20elegant%20lighting%20sophisticated%20interior%20design%20transformation&width=600&height=400&seq=after1&orientation=landscape",
        },
        {
            title: "Executive Office Redesign",
            location: "Business Bay",
            before:
                "https://readdy.ai/api/search-image?query=traditional%20office%20space%20with%20basic%20furniture%20plain%20walls%20outdated%20corporate%20interior%20before%20professional%20renovation%20simple%20workspace&width=600&height=400&seq=before2&orientation=landscape",
            after:
                "https://readdy.ai/api/search-image?query=premium%20executive%20office%20with%20modern%20furniture%20navy%20blue%20and%20gold%20color%20scheme%20sophisticated%20corporate%20interior%20design%20luxury%20workspace&width=600&height=400&seq=after2&orientation=landscape",
        },
        {
            title: "Master Bedroom Suite",
            location: "Palm Jumeirah",
            before:
                "https://readdy.ai/api/search-image?query=basic%20bedroom%20with%20simple%20furniture%20plain%20white%20walls%20minimal%20decor%20before%20luxury%20renovation%20standard%20residential%20interior&width=600&height=400&seq=before3&orientation=landscape",
            after:
                "https://readdy.ai/api/search-image?query=elegant%20master%20bedroom%20with%20luxury%20bedding%20navy%20blue%20and%20gold%20accents%20sophisticated%20lighting%20premium%20interior%20design%20hotel%20style%20bedroom&width=600&height=400&seq=after3&orientation=landscape",
        },
    ];

    const portfolioProjects = [
        {
            title: "Luxury Penthouse",
            category: "residential",
            location: "Downtown Dubai",
            image:
                "https://readdy.ai/api/search-image?query=stunning%20luxury%20penthouse%20interior%20with%20floor%20to%20ceiling%20windows%20modern%20furniture%20navy%20blue%20and%20gold%20accents%20sophisticated%20living%20space&width=400&height=300&seq=portfolio1&orientation=landscape",
        },
        {
            title: "Corporate Headquarters",
            category: "commercial",
            location: "Business Bay",
            image:
                "https://readdy.ai/api/search-image?query=modern%20corporate%20office%20interior%20with%20open%20plan%20design%20professional%20furniture%20navy%20blue%20and%20gold%20color%20scheme%20contemporary%20workspace&width=400&height=300&seq=portfolio2&orientation=landscape",
        },
        {
            title: "Boutique Hotel Lobby",
            category: "commercial",
            location: "Jumeirah",
            image:
                "https://readdy.ai/api/search-image?query=elegant%20hotel%20lobby%20with%20luxury%20seating%20marble%20floors%20sophisticated%20lighting%20navy%20blue%20and%20gold%20interior%20design%20hospitality%20space&width=400&height=300&seq=portfolio3&orientation=landscape",
        },
        {
            title: "Family Villa",
            category: "residential",
            location: "Emirates Hills",
            image:
                "https://readdy.ai/api/search-image?query=beautiful%20family%20villa%20interior%20with%20comfortable%20seating%20warm%20lighting%20navy%20blue%20and%20gold%20accents%20elegant%20residential%20design&width=400&height=300&seq=portfolio4&orientation=landscape",
        },
        {
            title: "Restaurant Interior",
            category: "commercial",
            location: "Dubai Mall",
            image:
                "https://readdy.ai/api/search-image?query=upscale%20restaurant%20interior%20with%20elegant%20dining%20tables%20sophisticated%20lighting%20navy%20blue%20and%20gold%20color%20scheme%20luxury%20dining%20space&width=400&height=300&seq=portfolio5&orientation=landscape",
        },
        {
            title: "Modern Apartment",
            category: "residential",
            location: "Dubai Marina",
            image:
                "https://readdy.ai/api/search-image?query=contemporary%20apartment%20interior%20with%20modern%20furniture%20clean%20lines%20navy%20blue%20and%20gold%20accents%20sophisticated%20residential%20design&width=400&height=300&seq=portfolio6&orientation=landscape",
        },
    ];

    const teamMembers = [
        {
            name: "Sarah Al-Mansouri",
            title: "Lead Interior Designer",
            specialization: "Luxury Residential Design",
            bio: "With over 12 years of experience in high-end residential projects, Sarah brings a unique blend of traditional Middle Eastern aesthetics and contemporary design principles.",
            image:
                "https://readdy.ai/api/search-image?query=professional%20female%20interior%20designer%20in%20elegant%20business%20attire%20smiling%20confidently%20against%20clean%20white%20background%20creative%20professional%20portrait&width=300&height=400&seq=team1&orientation=portrait",
            email: "sarah@karubiddesign.com",
            phone: "+971 50 123 4567",
        },
        {
            name: "Marcus Thompson",
            title: "Commercial Design Director",
            specialization: "Corporate & Hospitality",
            bio: "Marcus specializes in creating functional yet luxurious commercial spaces. His portfolio includes prestigious hotels, offices, and retail environments across the UAE.",
            image:
                "https://readdy.ai/api/search-image?query=professional%20male%20interior%20designer%20in%20navy%20blazer%20smiling%20warmly%20against%20clean%20white%20background%20creative%20director%20portrait&width=300&height=400&seq=team2&orientation=portrait",
            email: "marcus@karubiddesign.com",
            phone: "+971 50 234 5678",
        },
        {
            name: "Layla Hassan",
            title: "Senior Design Consultant",
            specialization: "Space Planning & Color Theory",
            bio: "Layla's expertise in space optimization and color psychology helps create harmonious environments that enhance both functionality and aesthetic appeal.",
            image:
                "https://readdy.ai/api/search-image?query=elegant%20female%20design%20consultant%20wearing%20professional%20attire%20smiling%20professionally%20against%20clean%20white%20background%20interior%20design%20expert&width=300&height=400&seq=team3&orientation=portrait",
            email: "layla@karubiddesign.com",
            phone: "+971 50 345 6789",
        },
    ];

    const designProcess = [
        {
            step: 1,
            title: "Initial Consultation",
            description:
                "We begin with an in-depth consultation to understand your vision, requirements, and budget parameters.",
            icon: "fas fa-comments",
        },
        {
            step: 2,
            title: "Concept Development",
            description:
                "Our team creates initial design concepts and mood boards that capture your style preferences.",
            icon: "fas fa-lightbulb",
        },
        {
            step: 3,
            title: "Design Planning",
            description:
                "Detailed floor plans, 3D renderings, and technical drawings are developed for your approval.",
            icon: "fas fa-drafting-compass",
        },
        {
            step: 4,
            title: "Material Selection",
            description:
                "We curate premium materials, finishes, and furnishings that align with your design vision.",
            icon: "fas fa-swatchbook",
        },
        {
            step: 5,
            title: "Implementation",
            description:
                "Our skilled craftsmen and contractors bring the design to life with meticulous attention to detail.",
            icon: "fas fa-hammer",
        },
        {
            step: 6,
            title: "Final Styling",
            description:
                "The finishing touches are added, including accessories, artwork, and final styling elements.",
            icon: "fas fa-magic",
        },
    ];

    const services = [
        {
            title: "Residential Design",
            description:
                "Transform your home into a personalized sanctuary with our comprehensive residential design services.",
            icon: "fas fa-home",
            features: [
                "Space Planning",
                "Custom Furniture",
                "Lighting Design",
                "Color Consultation",
            ],
        },
        {
            title: "Commercial Design",
            description:
                "Create inspiring work environments that enhance productivity and reflect your brand identity.",
            icon: "fas fa-building",
            features: [
                "Office Planning",
                "Brand Integration",
                "Ergonomic Solutions",
                "Acoustic Design",
            ],
        },
        {
            title: "Space Planning",
            description:
                "Optimize your space layout for maximum functionality and aesthetic appeal.",
            icon: "fas fa-vector-square",
            features: [
                "Flow Analysis",
                "Furniture Layout",
                "Traffic Patterns",
                "Zoning Solutions",
            ],
        },
        {
            title: "Custom Furniture",
            description:
                "Bespoke furniture pieces designed and crafted specifically for your unique space.",
            icon: "fas fa-couch",
            features: [
                "Design Consultation",
                "Material Selection",
                "Handcrafted Quality",
                "Perfect Fit",
            ],
        },
        {
            title: "Color Consultation",
            description:
                "Expert color guidance to create the perfect palette for your interior spaces.",
            icon: "fas fa-palette",
            features: [
                "Color Psychology",
                "Trend Analysis",
                "Lighting Consideration",
                "Sample Testing",
            ],
        },
        {
            title: "Material Selection",
            description:
                "Curated selection of premium materials and finishes for your design project.",
            icon: "fas fa-gem",
            features: [
                "Quality Assessment",
                "Sustainability Focus",
                "Budget Optimization",
                "Trend Integration",
            ],
        },
    ];

    const pricingPackages = [
        {
            name: "Essential",
            price: "AED 15,000",
            description: "Perfect for small spaces and budget-conscious projects",
            features: [
                "Initial consultation",
                "Basic space planning",
                "Color consultation",
                "Furniture recommendations",
                "Shopping list provided",
                "2 revision rounds",
            ],
            popular: false,
        },
        {
            name: "Premium",
            price: "AED 35,000",
            description:
                "Comprehensive design solution for most residential projects",
            features: [
                "Detailed consultation",
                "Complete space planning",
                "3D renderings",
                "Custom furniture design",
                "Material selection",
                "Project management",
                "4 revision rounds",
                "Installation supervision",
            ],
            popular: true,
        },
        {
            name: "Luxury",
            price: "AED 75,000",
            description:
                "Full-service luxury design with premium materials and finishes",
            features: [
                "Comprehensive consultation",
                "Complete design package",
                "Photorealistic renderings",
                "Bespoke furniture design",
                "Premium material curation",
                "Full project management",
                "Unlimited revisions",
                "White-glove installation",
                "6-month warranty",
            ],
            popular: false,
        },
    ];

    const filteredProjects =
        selectedFilter === "all"
            ? portfolioProjects
            : portfolioProjects.filter(
                (project) => project.category === selectedFilter,
            );

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}


            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://readdy.ai/api/search-image?query=luxurious%20interior%20design%20showcase%20with%20elegant%20living%20room%20navy%20blue%20and%20gold%20accents%20sophisticated%20furniture%20perfect%20lighting%20premium%20residential%20space%20modern%20luxury%20home&width=1440&height=1024&seq=hero1&orientation=landscape')`,
                    }}
                >
                    <div className="absolute inset-0 bg-[#1B365D]/70"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Interior Design Excellence
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Transform your spaces with our award-winning interior design
                        services. From concept to completion, we create environments that
                        inspire and delight.
                    </p>
                    <button
                        onClick={() => {
                            const element = document.getElementById('contact');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="bg-[#C5A572] text-white px-8 py-4 text-lg rounded-lg hover:bg-[#B8956A] transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
                    >
                        Schedule Consultation
                    </button>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50 scroll-mt-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6">
                            Our Design Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive interior design solutions tailored to your unique
                            style and functional requirements
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="text-[#C5A572] text-4xl mb-6 text-center">
                                    <i className={service.icon}></i>
                                </div>
                                <h3 className="text-2xl font-bold text-[#1B365D] mb-4 text-center">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600">
                                            <i className="fas fa-check text-[#C5A572] mr-3"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-center">
                                    <button className="text-[#C5A572] hover:text-[#B8956A] font-semibold cursor-pointer">
                                        Learn More <i className="fas fa-arrow-right ml-2"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design Process */}
            <section id="process" className="py-20 bg-white scroll-mt-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6">
                            Our Design Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A systematic approach to creating exceptional interiors from
                            initial concept to final installation
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#C5A572] hidden lg:block"></div>
                        <div className="space-y-12">
                            {designProcess.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                                >
                                    <div className="flex-1 lg:pr-8">
                                        <div
                                            className={`bg-white p-8 rounded-lg shadow-lg ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
                                        >
                                            <div className="flex items-center mb-4">
                                                <div
                                                    className={`text-[#C5A572] text-3xl mr-4 ${index % 2 === 0 ? "lg:order-2 lg:ml-4 lg:mr-0" : ""}`}
                                                >
                                                    <i className={step.icon}></i>
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#1B365D]">
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block w-12 h-12 bg-[#C5A572] rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">
                                        {step.step}
                                    </div>
                                    <div className="flex-1 lg:pl-8"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Showcase */}
            <section id="portfolio" className="py-20 bg-gray-50 scroll-mt-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6">
                            Design Portfolio
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Explore our collection of stunning interior design projects across
                            residential and commercial spaces
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={() => setSelectedFilter("all")}
                                className={`px-6 py-2 rounded-lg cursor-pointer whitespace-nowrap ${selectedFilter === "all"
                                    ? "bg-[#C5A572] text-white"
                                    : "bg-white text-[#1B365D] border border-[#C5A572]"
                                    }`}
                            >
                                All Projects
                            </button>
                            <button
                                onClick={() => setSelectedFilter("residential")}
                                className={`px-6 py-2 rounded-lg cursor-pointer whitespace-nowrap ${selectedFilter === "residential"
                                    ? "bg-[#C5A572] text-white"
                                    : "bg-white text-[#1B365D] border border-[#C5A572]"
                                    }`}
                            >
                                Residential
                            </button>
                            <button
                                onClick={() => setSelectedFilter("commercial")}
                                className={`px-6 py-2 rounded-lg cursor-pointer whitespace-nowrap ${selectedFilter === "commercial"
                                    ? "bg-[#C5A572] text-white"
                                    : "bg-white text-[#1B365D] border border-[#C5A572]"
                                    }`}
                            >
                                Commercial
                            </button>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-[#1B365D]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center text-white p-6">
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-[#C5A572] font-semibold mb-1">
                                            {project.location}
                                        </p>
                                        <p className="text-white/80 text-sm capitalize mb-4">
                                            {project.category}
                                        </p>
                                        <button className="bg-[#C5A572] text-white px-4 py-2 rounded-lg hover:bg-[#B8956A] transition-colors whitespace-nowrap">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before/After Gallery */}
            <section className="py-20 bg-[#1B365D] scroll-mt-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Transformation Gallery
                        </h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Witness the dramatic transformations we create through thoughtful
                            design and expert execution
                        </p>
                    </div>
                    <div className="relative max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-lg shadow-xl">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-[#1B365D] mb-4 text-center">
                                        Before
                                    </h4>
                                    <img
                                        src={beforeAfterProjects[currentBeforeAfter].before}
                                        alt="Before"
                                        className="w-full h-64 object-cover object-top rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-[#1B365D] mb-4 text-center">
                                        After
                                    </h4>
                                    <img
                                        src={beforeAfterProjects[currentBeforeAfter].after}
                                        alt="After"
                                        className="w-full h-64 object-cover object-top rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="text-center mt-6">
                                <h3 className="text-2xl font-bold text-[#1B365D] mb-2">
                                    {beforeAfterProjects[currentBeforeAfter].title}
                                </h3>
                                <p className="text-[#C5A572] font-semibold">
                                    {beforeAfterProjects[currentBeforeAfter].location}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 space-x-4">
                            <button
                                onClick={() =>
                                    setCurrentBeforeAfter((prev) =>
                                        prev === 0 ? beforeAfterProjects.length - 1 : prev - 1,
                                    )
                                }
                                className="bg-[#C5A572] text-white p-3 rounded-lg hover:bg-[#B8956A] transition-colors cursor-pointer"
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <button
                                onClick={() =>
                                    setCurrentBeforeAfter(
                                        (prev) => (prev + 1) % beforeAfterProjects.length,
                                    )
                                }
                                className="bg-[#C5A572] text-white p-3 rounded-lg hover:bg-[#B8956A] transition-colors cursor-pointer"
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-20 bg-white scroll-mt-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6">
                            Our Design Team
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Meet our talented team of interior designers who bring creativity,
                            expertise, and passion to every project
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="text-center mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-32 h-40 object-cover object-top rounded-lg mx-auto mb-4"
                                    />
                                    <h3 className="text-2xl font-bold text-[#1B365D] mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#C5A572] font-semibold mb-1">
                                        {member.title}
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        {member.specialization}
                                    </p>
                                </div>
                                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                                    {member.bio}
                                </p>
                                <div className="text-center space-y-2">
                                    <div className="flex items-center justify-center text-gray-600">
                                        <i className="fas fa-envelope text-[#C5A572] mr-2"></i>
                                        <span className="text-sm">{member.email}</span>
                                    </div>
                                    <div className="flex items-center justify-center text-gray-600">
                                        <i className="fas fa-phone text-[#C5A572] mr-2"></i>
                                        <span className="text-sm">{member.phone}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Packages */}
            <section className="py-20 bg-gray-50 scroll-mt-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6">
                            Design Packages
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the perfect design package that fits your project scope and
                            budget requirements
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingPackages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative ${pkg.popular ? "ring-2 ring-[#C5A572]" : ""}`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-[#C5A572] text-white px-4 py-1 rounded-lg text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-[#1B365D] mb-2">
                                        {pkg.name}
                                    </h3>
                                    <div className="text-4xl font-bold text-[#C5A572] mb-4">
                                        {pkg.price}
                                    </div>
                                    <p className="text-gray-600">{pkg.description}</p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600">
                                            <i className="fas fa-check text-[#C5A572] mr-3"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => setSelectedPackage(pkg.name.toLowerCase())}
                                    className={`w-full py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap ${pkg.popular
                                        ? "bg-[#C5A572] text-white hover:bg-[#B8956A]"
                                        : "bg-white text-[#C5A572] border-2 border-[#C5A572] hover:bg-[#C5A572] hover:text-white"
                                        }`}
                                >
                                    Select Package
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-[#1B365D] scroll-mt-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Client Testimonials
                        </h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Hear from our satisfied clients about their interior design
                            experience with KARUBID
                        </p>
                    </div>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
                            <div className="text-[#C5A572] text-6xl mb-6 text-center">
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
                                        <div className="font-bold text-[#1B365D] text-lg">
                                            {testimonials[currentTestimonial].name}
                                        </div>
                                        <div className="text-gray-600">
                                            {testimonials[currentTestimonial].project}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center mb-6">
                                    {[...Array(testimonials[currentTestimonial].rating)].map(
                                        (_, i) => (
                                            <i
                                                key={i}
                                                className="fas fa-star text-[#C5A572] text-xl mx-1"
                                            ></i>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentTestimonial
                                        ? "bg-[#C5A572]"
                                        : "bg-white/30"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white scroll-mt-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6">
                            Start Your Design Journey
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ready to transform your space? Contact us for a personalized
                            consultation and let's bring your vision to life
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[#1B365D] font-semibold mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C5A572] text-sm"
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[#1B365D] font-semibold mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C5A572] text-sm"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[#1B365D] font-semibold mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C5A572] text-sm"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#1B365D] font-semibold mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C5A572] text-sm"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#1B365D] font-semibold mb-2">
                                        Project Type
                                    </label>
                                    <div className="relative">
                                        <button className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C5A572] text-sm text-left bg-white cursor-pointer">
                                            Select project type
                                            <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[#1B365D] font-semibold mb-2">
                                        Budget Range
                                    </label>
                                    <div className="relative">
                                        <button className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C5A572] text-sm text-left bg-white cursor-pointer">
                                            Select budget range
                                            <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[#1B365D] font-semibold mb-2">
                                        Project Timeline
                                    </label>
                                    <div className="relative">
                                        <button className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C5A572] text-sm text-left bg-white cursor-pointer">
                                            Select timeline
                                            <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[#1B365D] font-semibold mb-2">
                                        Project Description
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C5A572] text-sm resize-none"
                                        placeholder="Tell us about your design vision and requirements"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block text-[#1B365D] font-semibold mb-2">
                                        Inspiration Images
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-[#C5A572] transition-colors">
                                        <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
                                        <p className="text-gray-600">
                                            Click to upload or drag and drop
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            PNG, JPG, PDF up to 10MB
                                        </p>
                                    </div>
                                </div>
                                <button className="w-full bg-[#C5A572] text-white py-3 rounded-lg hover:bg-[#B8956A] transition-colors font-semibold cursor-pointer whitespace-nowrap">
                                    Schedule Consultation
                                </button>
                            </form>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-[#1B365D] mb-6">
                                    Get In Touch
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="text-[#C5A572] text-2xl mr-4 mt-1">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#1B365D] mb-1">
                                                Design Studio
                                            </h4>
                                            <p className="text-gray-600">Business Bay, Dubai</p>
                                            <p className="text-gray-600">United Arab Emirates</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-[#C5A572] text-2xl mr-4 mt-1">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#1B365D] mb-1">
                                                Email
                                            </h4>
                                            <p className="text-gray-600">
                                                design@karubidinteriors.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-[#C5A572] text-2xl mr-4 mt-1">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#1B365D] mb-1">
                                                Phone
                                            </h4>
                                            <p className="text-gray-600">+971 4 XXX XXXX</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="text-[#C5A572] text-2xl mr-4 mt-1">
                                            <i className="fas fa-clock"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#1B365D] mb-1">
                                                Consultation Hours
                                            </h4>
                                            <p className="text-gray-600">
                                                Sunday - Thursday: 9:00 AM - 7:00 PM
                                            </p>
                                            <p className="text-gray-600">
                                                Friday - Saturday: 10:00 AM - 5:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#1B365D] mb-4">
                                    Follow Our Work
                                </h4>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="text-[#C5A572] hover:text-[#B8956A] text-2xl cursor-pointer"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-[#C5A572] hover:text-[#B8956A] text-2xl cursor-pointer"
                                    >
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-[#C5A572] hover:text-[#B8956A] text-2xl cursor-pointer"
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-[#C5A572] hover:text-[#B8956A] text-2xl cursor-pointer"
                                    >
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-[#1B365D] mb-4">
                                    Why Choose Our Design Services?
                                </h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-[#C5A572] mr-3"></i>
                                        Award-winning design team
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-[#C5A572] mr-3"></i>
                                        Personalized design solutions
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-[#C5A572] mr-3"></i>
                                        Premium material sourcing
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-[#C5A572] mr-3"></i>
                                        Full project management
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1B365D] text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-2xl font-bold mb-4">KARUBID</div>
                            <p className="text-white/80 mb-4">
                                Creating exceptional interior spaces that inspire and delight.
                                Your vision, our expertise.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-[#C5A572] hover:text-white cursor-pointer"
                                >
                                    <i className="fab fa-instagram text-xl"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-[#C5A572] hover:text-white cursor-pointer"
                                >
                                    <i className="fab fa-pinterest text-xl"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-[#C5A572] hover:text-white cursor-pointer"
                                >
                                    <i className="fab fa-linkedin text-xl"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <span className="text-white/80">Residential Design</span>
                                </li>
                                <li>
                                    <span className="text-white/80">Commercial Design</span>
                                </li>
                                <li>
                                    <span className="text-white/80">Space Planning</span>
                                </li>
                                <li>
                                    <span className="text-white/80">Custom Furniture</span>
                                </li>
                                <li>
                                    <span className="text-white/80">Color Consultation</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => { const element = document.getElementById('services'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }}
                                        className="text-white/80 hover:text-[#C5A572] cursor-pointer"
                                    >
                                        Services
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => { const element = document.getElementById('portfolio'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }}
                                        className="text-white/80 hover:text-[#C5A572] cursor-pointer"
                                    >
                                        Portfolio
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => { const element = document.getElementById('process'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }}
                                        className="text-white/80 hover:text-[#C5A572] cursor-pointer"
                                    >
                                        Process
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => { const element = document.getElementById('team'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }}
                                        className="text-white/80 hover:text-[#C5A572] cursor-pointer"
                                    >
                                        Team
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => { const element = document.getElementById('contact'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }}
                                        className="text-white/80 hover:text-[#C5A572] cursor-pointer"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                            <p className="text-white/80 mb-4">
                                Subscribe for design inspiration and project updates.
                            </p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 py-2 border-none rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none text-sm"
                                />
                                <button className="bg-[#C5A572] text-white px-4 py-2 rounded-lg ml-2 hover:bg-[#B8956A] cursor-pointer whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/20 mt-8 pt-8 text-center">
                        <p className="text-white/60">
                            © 2024 KARUBID Interior Design. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

