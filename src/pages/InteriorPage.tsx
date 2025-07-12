
import { useState } from "react";
import {
    Home,
    Building,
    Square,
    Sofa,
    Palette,
    Gem,
    MessageCircle,
    Lightbulb,
    Compass,
    Hammer,
    Wand2,
    Check,
    ArrowRight,
    Star,
    Crown,
    MapPin,
    Mail,
    Phone,
    ChevronLeft,
    ChevronRight,
    Eye,
    Medal,
    Grid3X3,
    X,
} from "lucide-react";

const InteriorPage = () => {
    const [currentBeforeAfter, setCurrentBeforeAfter] = useState(0);
    const [selectedFilter, setSelectedFilter] = useState("all");



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
            icon: MessageCircle,
        },
        {
            step: 2,
            title: "Concept Development",
            description:
                "Our team creates initial design concepts and mood boards that capture your style preferences.",
            icon: Lightbulb,
        },
        {
            step: 3,
            title: "Design Planning",
            description:
                "Detailed floor plans, 3D renderings, and technical drawings are developed for your approval.",
            icon: Compass,
        },
        {
            step: 4,
            title: "Material Selection",
            description:
                "We curate premium materials, finishes, and furnishings that align with your design vision.",
            icon: Palette,
        },
        {
            step: 5,
            title: "Implementation",
            description:
                "Our skilled craftsmen and contractors bring the design to life with meticulous attention to detail.",
            icon: Hammer,
        },
        {
            step: 6,
            title: "Final Styling",
            description:
                "The finishing touches are added, including accessories, artwork, and final styling elements.",
            icon: Wand2,
        },
    ];

    const services = [
        {
            title: "Residential Design",
            description:
                "Transform your home into a personalized sanctuary with our comprehensive residential design services.",
            icon: Home,
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
            icon: Building,
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
            icon: Square,
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
            icon: Sofa,
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
            icon: Palette,
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
            icon: Gem,
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



    return (
        <div className="min-h-screen bg-background">


            {/* Hero Section */}
            {/* <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://readdy.ai/api/search-image?query=luxurious%20interior%20design%20showcase%20with%20elegant%20living%20room%20navy%20blue%20and%20gold%20accents%20sophisticated%20furniture%20perfect%20lighting%20premium%20residential%20space%20modern%20luxury%20home&width=1440&height=1024&seq=hero1&orientation=landscape')`,
                    }}
                >
                    <div className="absolute inset-0 bg-[#2C3E50]/70"></div>
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
                        className="bg-[#FF6B47] text-white px-8 py-4 text-lg rounded-xl hover:bg-[#FF5A36] transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                        Schedule Consultation
                    </button>
                </div>
            </section> */}

            {/* Services Section */}
            <section id="services" className="py-20 bg-gradient-to-br from-muted to-background mt-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20">
                            Our Services
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Our Design Services
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Comprehensive interior design solutions tailored to your unique
                            style and functional requirements
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-card border border-border p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative bg-gradient-to-br from-accent/10 to-accent/20 w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3 border border-accent/20">
                                    <service.icon className="w-8 h-8 text-accent transition-colors duration-500" />

                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent/30 rounded-full transition-colors duration-500"></div>
                                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent/20 rounded-full transition-colors duration-500"></div>
                                </div>

                                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                                            <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-colors border border-accent/20">
                                                <Check className="w-3 h-3 text-accent" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center text-accent font-semibold group-hover:text-foreground transition-colors cursor-pointer">
                                    <span>Learn More</span>
                                    <div className="ml-2 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-foreground/10 transition-all duration-300 border border-accent/20">
                                        <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design Process */}
            <section id="process" className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20">
                            Our Process
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Our Design Process
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            A systematic approach to creating exceptional interiors from
                            initial concept to final installation
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent via-accent/50 to-accent hidden lg:block"></div>
                        <div className="space-y-12">
                            {designProcess.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                                >
                                    <div className="flex-1 lg:pr-8">
                                        <div
                                            className={`relative bg-card border border-border p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} group overflow-hidden`}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            <div className="relative flex items-center mb-6">
                                                <div
                                                    className={`bg-gradient-to-br from-accent/10 to-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 transition-all duration-500 border border-accent/20 ${index % 2 === 0 ? "lg:order-2 lg:ml-4 lg:mr-0" : ""}`}
                                                >
                                                    <step.icon className="w-6 h-6 text-accent transition-colors duration-500" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                                                {step.description}
                                            </p>

                                            <div className="absolute top-4 right-4 w-8 h-8 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-500 border border-accent/20"></div>
                                        </div>
                                    </div>
                                    <div className="hidden lg:flex w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full items-center justify-center text-accent-foreground font-bold text-xl relative z-10 shadow-lg">
                                        <span>{step.step}</span>
                                        <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
                                    </div>
                                    <div className="flex-1 lg:pl-8"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Showcase */}
            <section id="portfolio" className="py-20 bg-gradient-to-br from-muted to-background">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20">
                            Our Work
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Design Portfolio
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Explore our collection of stunning interior design projects across
                            residential and commercial spaces
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={() => setSelectedFilter("all")}
                                className={`group px-6 py-3 rounded-3xl font-semibold transition-all duration-300 flex items-center space-x-2 border ${selectedFilter === "all"
                                    ? "bg-accent text-accent-foreground shadow-lg border-accent"
                                    : "bg-card text-foreground border-accent hover:bg-accent hover:text-accent-foreground"
                                    }`}
                            >
                                <Grid3X3 className="w-4 h-4" />
                                <span>All Projects</span>
                            </button>
                            <button
                                onClick={() => setSelectedFilter("residential")}
                                className={`group px-6 py-3 rounded-3xl font-semibold transition-all duration-300 flex items-center space-x-2 border ${selectedFilter === "residential"
                                    ? "bg-accent text-accent-foreground shadow-lg border-accent"
                                    : "bg-card text-foreground border-accent hover:bg-accent hover:text-accent-foreground"
                                    }`}
                            >
                                <Home className="w-4 h-4" />
                                <span>Residential</span>
                            </button>
                            <button
                                onClick={() => setSelectedFilter("commercial")}
                                className={`group px-6 py-3 rounded-3xl font-semibold transition-all duration-300 flex items-center space-x-2 border ${selectedFilter === "commercial"
                                    ? "bg-accent text-accent-foreground shadow-lg border-accent"
                                    : "bg-card text-foreground border-accent hover:bg-accent hover:text-accent-foreground"
                                    }`}
                            >
                                <Building className="w-4 h-4" />
                                <span>Commercial</span>
                            </button>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border"
                            >
                                <div className="aspect-w-16 aspect-h-12 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="text-center text-primary-foreground p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                            <Eye className="w-6 h-6 text-primary-foreground" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-accent font-semibold mb-1 flex items-center justify-center">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            {project.location}
                                        </p>
                                        <p className="text-primary-foreground/80 text-sm capitalize mb-4">
                                            {project.category}
                                        </p>
                                        <button className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-6 py-3 rounded-3xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                            <ArrowRight className="w-4 h-4 mr-2 inline" />
                                            View Details
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-accent/10 to-accent/20 text-accent text-sm font-medium rounded-full mb-3 border border-accent/20">
                                        {project.category === 'residential' ? <Home className="w-4 h-4 mr-2" /> : <Building className="w-4 h-4 mr-2" />}
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 flex items-center">
                                        <MapPin className="w-4 h-4 text-accent mr-2" />
                                        {project.location}
                                    </p>
                                    <div className="flex items-center text-accent font-semibold group-hover:text-foreground transition-colors">
                                        <span>View Details</span>
                                        <div className="ml-2 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-foreground/10 transition-all duration-300 border border-accent/20">
                                            <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before/After Gallery */}
            <section className="py-20 bg-primary">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20">
                            Transformations
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                            Transformation Gallery
                        </h2>
                        <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                            Witness the dramatic transformations we create through thoughtful
                            design and expert execution
                        </p>
                    </div>
                    <div className="relative max-w-5xl mx-auto">
                        <div className="bg-card p-8 rounded-3xl shadow-2xl border border-border">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="relative group">
                                    <div className="absolute -top-2 -left-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-3xl text-sm font-semibold z-10">
                                        <X className="w-4 h-4 mr-2 inline" />Before
                                    </div>
                                    <img
                                        src={beforeAfterProjects[currentBeforeAfter].before}
                                        alt="Before"
                                        className="w-full h-64 object-cover rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                                    />
                                </div>
                                <div className="relative group">
                                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-3xl text-sm font-semibold z-10">
                                        <Check className="w-4 h-4 mr-2 inline" />After
                                    </div>
                                    <img
                                        src={beforeAfterProjects[currentBeforeAfter].after}
                                        alt="After"
                                        className="w-full h-64 object-cover rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                                    />
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                    {beforeAfterProjects[currentBeforeAfter].title}
                                </h3>
                                <p className="text-accent font-semibold flex items-center justify-center">
                                    <MapPin className="w-4 h-4 mr-2" />
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
                                className="group bg-accent text-accent-foreground p-4 rounded-3xl hover:bg-accent/90 transition-all duration-300 hover:scale-110"
                            >
                                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() =>
                                    setCurrentBeforeAfter(
                                        (prev) => (prev + 1) % beforeAfterProjects.length,
                                    )
                                }
                                className="group bg-accent text-accent-foreground p-4 rounded-3xl hover:bg-accent/90 transition-all duration-300 hover:scale-110"
                            >
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20">
                            Our Team
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Our Design Team
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Meet our talented team of interior designers who bring creativity,
                            expertise, and passion to every project
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="group relative bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
                            >
                                {/* Background pattern */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B47]/5 via-transparent to-[#2C3E50]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative text-center mb-6">
                                    <div className="relative inline-block">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-32 h-40 object-cover rounded-2xl mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105"
                                        />
                                        {/* Image overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Decorative elements */}
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF6B47] rounded-full flex items-center justify-center">
                                            <Star className="w-3 h-3 text-white" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-accent font-semibold mb-1">
                                        {member.title}
                                    </p>
                                    <div className="inline-flex items-center px-3 py-1 bg-[#FF6B47]/10 text-[#FF6B47] text-sm font-medium rounded-full">
                                        <Medal className="w-4 h-4 mr-2" />
                                        {member.specialization}
                                    </div>
                                </div>

                                <p className="relative text-gray-600 text-center mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                                    {member.bio}
                                </p>

                                <div className="relative space-y-3">
                                    <div className="flex items-center justify-center text-gray-600 p-2 rounded-lg hover:bg-[#FF6B47]/5 transition-colors">
                                        <div className="w-8 h-8 bg-[#FF6B47]/10 rounded-full flex items-center justify-center mr-3">
                                            <Mail className="w-4 h-4 text-[#FF6B47]" />
                                        </div>
                                        <span className="text-sm">{member.email}</span>
                                    </div>
                                    <div className="flex items-center justify-center text-gray-600 p-2 rounded-lg hover:bg-[#FF6B47]/5 transition-colors">
                                        <div className="w-8 h-8 bg-[#FF6B47]/10 rounded-full flex items-center justify-center mr-3">
                                            <Phone className="w-4 h-4 text-[#FF6B47]" />
                                        </div>
                                        <span className="text-sm">{member.phone}</span>
                                    </div>
                                </div>

                                {/* Decorative corner element */}
                                <div className="absolute top-4 right-4 w-8 h-8 bg-[#FF6B47]/5 rounded-full group-hover:bg-[#FF6B47]/10 transition-colors duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Packages */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-[#FF6B47]/10 text-[#FF6B47] rounded-full text-sm font-medium mb-4">
                            Pricing
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
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
                                className={`group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden ${pkg.popular ? "ring-2 ring-[#FF6B47] scale-105" : ""}`}
                            >
                                {/* Background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B47]/3 via-transparent to-[#2C3E50]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-gradient-to-r from-[#FF6B47] to-[#FF5A36] text-white px-6 py-2 rounded-xl text-sm font-semibold shadow-lg flex items-center">
                                            <Crown className="w-4 h-4 mr-2" />
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="relative text-center mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B47]/10 to-[#FF6B47]/20 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-500">
                                        {index === 0 ? (
                                            <Gem className="w-8 h-8 text-[#FF6B47] transition-colors duration-500" />
                                        ) : index === 1 ? (
                                            <Crown className="w-8 h-8 text-[#FF6B47] transition-colors duration-500" />
                                        ) : (
                                            <Star className="w-8 h-8 text-[#FF6B47] transition-colors duration-500" />
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#2C3E50] mb-2 group-hover:text-[#FF6B47] transition-colors">
                                        {pkg.name}
                                    </h3>
                                    <div className="text-4xl font-bold text-[#FF6B47] mb-4 flex items-center justify-center">
                                        <span>{pkg.price}</span>
                                        <span className="text-lg text-gray-500 ml-2">/project</span>
                                    </div>
                                    <p className="text-gray-600">{pkg.description}</p>
                                </div>

                                <ul className="relative space-y-4 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors">
                                            <div className="w-6 h-6 bg-[#FF6B47]/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#FF6B47]/20 transition-colors">
                                                <Check className="w-4 h-4 text-[#FF6B47]" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    // onClick={() => setSelectedPackage(pkg.name.toLowerCase())}
                                    className={`relative w-full py-4 rounded-3xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${pkg.popular
                                        ? "bg-gradient-to-r from-[#FF6B47] to-[#FF5A36] text-white hover:shadow-lg"
                                        : "bg-white text-[#FF6B47] border-2 border-[#FF6B47] hover:bg-[#FF6B47] hover:text-white"
                                        }`}
                                >
                                    <ArrowRight className="w-4 h-4" />
                                    <span>Select Package</span>
                                </button>

                                {/* Decorative elements */}
                                <div className="absolute top-4 right-4 w-8 h-8 bg-[#FF6B47]/5 rounded-full group-hover:bg-[#FF6B47]/10 transition-colors duration-500"></div>
                                <div className="absolute bottom-4 left-4 w-6 h-6 bg-[#FF6B47]/5 rounded-full group-hover:bg-[#FF6B47]/10 transition-colors duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default InteriorPage;