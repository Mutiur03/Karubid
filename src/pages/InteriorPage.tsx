import { useState } from "react";
import {
    Home,
    Building,
    Square,
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
import Consultation from "@/components/Consultation";

const InteriorPage = () => {
    const [currentBeforeAfter, setCurrentBeforeAfter] = useState(0);
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

    const beforeAfterProjects = [
        {
            title: "Modern Living Room Transformation",
            location: "Dhanmondi, Dhaka",
            before:
                "https://readdy.ai/api/search-image?query=outdated%20living%20room%20with%20old%20furniture%20beige%20walls%20traditional%20decor%20before%20renovation%20simple%20interior%20space%20needing%20modern%20update&width=600&height=400&seq=before1&orientation=landscape",
            after:
                "https://readdy.ai/api/search-image?query=luxurious%20modern%20living%20room%20with%20navy%20blue%20and%20gold%20accents%20contemporary%20furniture%20elegant%20lighting%20sophisticated%20interior%20design%20transformation&width=600&height=400&seq=after1&orientation=landscape",
        },
        {
            title: "Executive Office Redesign",
            location: "Gulshan, Dhaka",
            before:
                "https://readdy.ai/api/search-image?query=traditional%20office%20space%20with%20basic%20furniture%20plain%20walls%20outdated%20corporate%20interior%20before%20professional%20renovation%20simple%20workspace&width=600&height=400&seq=before2&orientation=landscape",
            after:
                "https://readdy.ai/api/search-image?query=premium%20executive%20office%20with%20modern%20furniture%20navy%20blue%20and%20gold%20color%20scheme%20sophisticated%20corporate%20interior%20design%20luxury%20workspace&width=600&height=400&seq=after2&orientation=landscape",
        },
        {
            title: "Master Bedroom Suite",
            location: "Banani, Dhaka",
            before:
                "https://readdy.ai/api/search-image?query=basic%20bedroom%20with%20simple%20furniture%20plain%20white%20walls%20minimal%20decor%20before%20luxury%20renovation%20standard%20residential%20interior&width=600&height=400&seq=before3&orientation=landscape",
            after:
                "https://readdy.ai/api/search-image?query=elegant%20master%20bedroom%20with%20luxury%20bedding%20navy%20blue%20and%20gold%20accents%20sophisticated%20lighting%20premium%20interior%20design%20hotel%20style%20bedroom&width=600&height=400&seq=after3&orientation=landscape",
        },
    ];

    const portfolioProjects = [
        {
            title: "Luxury Apartment",
            category: "Residential",
            location: "Uttara, Dhaka",
            image:
                "https://readdy.ai/api/search-image?query=stunning%20luxury%20penthouse%20interior%20with%20floor%20to%20ceiling%20windows%20modern%20furniture%20navy%20blue%20and%20gold%20accents%20sophisticated%20living%20space&width=400&height=300&seq=portfolio1&orientation=landscape",
        },
        {
            title: "Corporate Headquarters",
            category: "Commercial",
            location: "Motijheel, Dhaka",
            image:
                "https://readdy.ai/api/search-image?query=modern%20corporate%20office%20interior%20with%20open%20plan%20design%20professional%20furniture%20navy%20blue%20and%20gold%20color%20scheme%20contemporary%20workspace&width=400&height=300&seq=portfolio2&orientation=landscape",
        },
        {
            title: "Boutique Hotel Lobby",
            category: "Commercial",
            location: "Chittagong",
            image:
                "https://readdy.ai/api/search-image?query=elegant%20hotel%20lobby%20with%20luxury%20seating%20marble%20floors%20sophisticated%20lighting%20navy%20blue%20and%20gold%20interior%20design%20hospitality%20space&width=400&height=300&seq=portfolio3&orientation=landscape",
        },
        {
            title: "Family Villa",
            category: "Residential",
            location: "Bashundhara, Dhaka",
            image:
                "https://readdy.ai/api/search-image?query=beautiful%20family%20villa%20interior%20with%20comfortable%20seating%20warm%20lighting%20navy%20blue%20and%20gold%20accents%20elegant%20residential%20design&width=400&height=300&seq=portfolio4&orientation=landscape",
        },
        {
            title: "Restaurant Interior",
            category: "Commercial",
            location: "Sylhet",
            image:
                "https://readdy.ai/api/search-image?query=upscale%20restaurant%20interior%20with%20elegant%20dining%20tables%20sophisticated%20lighting%20navy%20blue%20and%20gold%20color%20scheme%20luxury%20dining%20space&width=400&height=300&seq=portfolio5&orientation=landscape",
        },
        {
            title: "Modern Apartment",
            category: "Residential",
            location: "Mirpur, Dhaka",
            image:
                "https://readdy.ai/api/search-image?query=contemporary%20apartment%20interior%20with%20modern%20furniture%20clean%20lines%20navy%20blue%20and%20gold%20accents%20sophisticated%20residential%20design&width=400&height=300&seq=portfolio6&orientation=landscape",
        },
    ];

    const teamMembers = [
        {
            name: "Fatima Rahman",
            title: "Lead Interior Designer",
            specialization: "Luxury Residential Design",
            bio: "With over 12 years of experience in high-end residential projects, Fatima brings a unique blend of traditional Bangladeshi aesthetics and contemporary design principles.",
            image:
                "https://readdy.ai/api/search-image?query=professional%20female%20interior%20designer%20in%20elegant%20business%20attire%20smiling%20confidently%20against%20clean%20white%20background%20creative%20professional%20portrait&width=300&height=400&seq=team1&orientation=portrait",
            email: "fatima@karubiddesign.com",
            phone: "+880 1712 345 678",
        },
        {
            name: "Ahmed Hassan",
            title: "Commercial Design Director",
            specialization: "Corporate & Hospitality",
            bio: "Ahmed specializes in creating functional yet luxurious commercial spaces. His portfolio includes prestigious hotels, offices, and retail environments across Bangladesh.",
            image:
                "https://readdy.ai/api/search-image?query=professional%20male%20interior%20designer%20in%20navy%20blazer%20smiling%20warmly%20against%20clean%20white%20background%20creative%20director%20portrait&width=300&height=400&seq=team2&orientation=portrait",
            email: "ahmed@karubiddesign.com",
            phone: "+880 1812 234 567",
        },
        {
            name: "Nusrat Jahan",
            title: "Senior Design Consultant",
            specialization: "Space Planning & Color Theory",
            bio: "Nusrat's expertise in space optimization and color psychology helps create harmonious environments that enhance both functionality and aesthetic appeal.",
            image:
                "https://readdy.ai/api/search-image?query=elegant%20female%20design%20consultant%20wearing%20professional%20attire%20smiling%20professionally%20against%20clean%20white%20background%20interior%20design%20expert&width=300&height=400&seq=team3&orientation=portrait",
            email: "nusrat@karubiddesign.com",
            phone: "+880 1912 345 678",
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

    const pricingPackages = [
        {
            name: "Essential",
            price: "৳ 1,50,000",
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
            price: "৳ 3,50,000",
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
            price: "৳ 7,50,000",
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

    const handlePackageSelection = (packageName: string) => {
        setSelectedPackage(packageName);
        // You can add additional logic here like:
        // - Opening a contact form
        // - Redirecting to a checkout page
        // - Showing a confirmation modal
        console.log(`Selected package: ${packageName}`);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Services Section */}
            <section id="services" className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20">
                            Our Services
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Interior Design and Fit-Out Solutions
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            We transform spaces into aesthetically pleasing and functional environments tailored to your preferences and needs. Our offerings include:
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="group relative bg-card border border-border p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative bg-gradient-to-br from-accent/10 to-accent/20 w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3 border border-accent/20">
                                <Lightbulb className="w-8 h-8 text-accent transition-colors duration-500" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent/30 rounded-full transition-colors duration-500"></div>
                                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent/20 rounded-full transition-colors duration-500"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                                Customized Interior Design
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Conceptualization, 3D rendering, and design consultations tailored to your vision and space requirements.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {["Design Conceptualization", "3D Rendering", "Design Consultations", "Space Planning"].map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                                        <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-colors border border-accent/20">
                                            <Check className="w-3 h-3 text-accent" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="group relative bg-card border border-border p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative bg-gradient-to-br from-accent/10 to-accent/20 w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3 border border-accent/20">
                                <Hammer className="w-8 h-8 text-accent transition-colors duration-500" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent/30 rounded-full transition-colors duration-500"></div>
                                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent/20 rounded-full transition-colors duration-500"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                                Fit-Out Services
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Complete fit-out solutions including partitioning, flooring, painting, and cabinet installation.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {["Gypsum Partitioning", "Professional Painting", "Flooring Installation", "Cabinet Installation"].map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                                        <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-colors border border-accent/20">
                                            <Check className="w-3 h-3 text-accent" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="group relative bg-card border border-border p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative bg-gradient-to-br from-accent/10 to-accent/20 w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3 border border-accent/20">
                                <Square className="w-8 h-8 text-accent transition-colors duration-500" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent/30 rounded-full transition-colors duration-500"></div>
                                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent/20 rounded-full transition-colors duration-500"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                                Space Optimization
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Maximizing functionality and visual appeal for homes, offices, and retail spaces.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {["Home Optimization", "Office Spaces", "Retail Environments", "Visual Appeal Enhancement"].map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                                        <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-colors border border-accent/20">
                                            <Check className="w-3 h-3 text-accent" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts and Figures Section */}
            <section className="py-20 bg-gray-800 min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20">
                            About Us
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-background mb-6">
                            Key Facts and Figures
                        </h2>
                        <p className="text-xl text-background/70 max-w-3xl mx-auto mb-8">
                            Transforming spaces into aesthetically pleasing and functional environments with our expertise and experience
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-background/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="text-4xl font-bold text-accent mb-2">10+</div>
                            <div className="text-background/80">Years in Business across Bangladesh</div>
                        </div>
                        <div className="text-center bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-background/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="text-4xl font-bold text-accent mb-2">500+</div>
                            <div className="text-background/80">Projects completed nationwide</div>
                        </div>
                        <div className="text-center bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-background/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="text-4xl font-bold text-accent mb-2">100+</div>
                            <div className="text-background/80">Satisfied Clients in Bangladesh</div>
                        </div>
                        <div className="text-center bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-background/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="text-4xl font-bold text-accent mb-2">25+</div>
                            <div className="text-background/80">Team of experienced professionals</div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        <div className="text-center bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-background/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="text-3xl font-bold text-accent mb-2">Sustainability</div>
                            <div className="text-background/80">Committed to using eco-friendly materials and practices in all projects</div>
                        </div>
                        <div className="text-center bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-background/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="text-3xl font-bold text-accent mb-2">Quality</div>
                            <div className="text-background/80">Rigorous quality control measures ensure excellence in every project</div>
                        </div>
                        <div className="text-center bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-background/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="text-3xl font-bold text-accent mb-2">98%</div>
                            <div className="text-background/80">Client Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Process */}
            <section id="process" className="py-12 md:py-20 bg-gradient-to-br from-muted/50 to-background">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20">
                            Our Process
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                            Our Design Process
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                            A systematic approach to creating exceptional interiors from
                            initial concept to final installation
                        </p>
                    </div>
                    <div className="relative">
                        {/* Desktop timeline */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent via-accent/50 to-accent hidden lg:block"></div>

                        {/* Mobile timeline */}
                        <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent lg:hidden"></div>

                        <div className="space-y-8 md:space-y-12">
                            {designProcess.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start lg:items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                                >
                                    {/* Mobile step number */}
                                    <div className="flex lg:hidden w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full items-center justify-center text-accent-foreground font-bold text-lg relative z-10 shadow-lg flex-shrink-0 mr-4">
                                        <span>{step.step}</span>
                                        <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
                                    </div>

                                    <div className="md:flex-1 lg:pr-8">
                                        <div
                                            className={`relative bg-card border border-border p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} group overflow-hidden w-full`}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            <div className="relative flex flex-col md:flex-row items-start md:items-center mb-4 md:mb-6">
                                                <div
                                                    className={`bg-gradient-to-br from-accent/10 to-accent/20 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-0 md:mr-4 transition-all duration-500 border border-accent/20 ${index % 2 === 0 ? "lg:order-2 lg:ml-4 lg:mr-0" : ""}`}
                                                >
                                                    <step.icon className="w-5 h-5 md:w-6 md:h-6 text-accent transition-colors duration-500" />
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                                                {step.description}
                                            </p>

                                            <div className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-500 border border-accent/20"></div>
                                        </div>
                                    </div>

                                    {/* Desktop step number */}
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
            <section id="portfolio" className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20">
                            Our Work
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                            Design Portfolio
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                            Explore our collection of stunning interior design projects across
                            residential and commercial spaces
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-4">
                            <button
                                onClick={() => setSelectedFilter("all")}
                                className={`group px-4 md:px-6 py-2 md:py-3 rounded-2xl md:rounded-3xl font-semibold transition-all duration-300 flex items-center space-x-1 md:space-x-2 border text-sm md:text-base ${selectedFilter === "all"
                                    ? "bg-accent text-accent-foreground shadow-lg border-accent"
                                    : "bg-card text-foreground border-accent hover:bg-accent hover:text-accent-foreground"
                                    }`}
                            >
                                <Grid3X3 className="w-3 h-3 md:w-4 md:h-4" />
                                <span className="whitespace-nowrap">All Projects</span>
                            </button>
                            <button
                                onClick={() => setSelectedFilter("Residential")}
                                className={`group px-4 md:px-6 py-2 md:py-3 rounded-2xl md:rounded-3xl font-semibold transition-all duration-300 flex items-center space-x-1 md:space-x-2 border text-sm md:text-base ${selectedFilter === "Residential"
                                    ? "bg-accent text-accent-foreground shadow-lg border-accent"
                                    : "bg-card text-foreground border-accent hover:bg-accent hover:text-accent-foreground"
                                    }`}
                            >
                                <Home className="w-3 h-3 md:w-4 md:h-4" />
                                <span className="whitespace-nowrap">Residential</span>
                            </button>
                            <button
                                onClick={() => setSelectedFilter("Commercial")}
                                className={`group px-4 md:px-6 py-2 md:py-3 rounded-2xl md:rounded-3xl font-semibold transition-all duration-300 flex items-center space-x-1 md:space-x-2 border text-sm md:text-base ${selectedFilter === "Commercial"
                                    ? "bg-accent text-accent-foreground shadow-lg border-accent"
                                    : "bg-card text-foreground border-accent hover:bg-accent hover:text-accent-foreground"
                                    }`}
                            >
                                <Building className="w-3 h-3 md:w-4 md:h-4" />
                                <span className="whitespace-nowrap">Commercial</span>
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
            <section className="py-20 bg-foreground">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20">
                            Transformations
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-background mb-6">
                            Transformation Gallery
                        </h2>
                        <p className="text-xl text-background/70 max-w-3xl mx-auto">
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
                                className="group relative bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-border"
                            >
                                {/* Background pattern */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative text-center mb-6">
                                    <div className="relative inline-block">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-32 h-40 object-cover rounded-2xl mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105"
                                        />
                                        {/* Image overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Decorative elements */}
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                                            <Star className="w-3 h-3 text-accent-foreground" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-accent font-semibold mb-1">
                                        {member.title}
                                    </p>
                                    <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20">
                                        <Medal className="w-4 h-4 mr-2" />
                                        {member.specialization}
                                    </div>
                                </div>

                                <p className="relative text-muted-foreground text-center mb-6 leading-relaxed group-hover:text-foreground transition-colors">
                                    {member.bio}
                                </p>

                                <div className="relative space-y-3">
                                    <div className="flex items-center justify-center text-muted-foreground p-2 rounded-lg hover:bg-accent/5 transition-colors">
                                        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 border border-accent/20">
                                            <Mail className="w-4 h-4 text-accent" />
                                        </div>
                                        <span className="text-sm">{member.email}</span>
                                    </div>
                                    <div className="flex items-center justify-center text-muted-foreground p-2 rounded-lg hover:bg-accent/5 transition-colors">
                                        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 border border-accent/20">
                                            <Phone className="w-4 h-4 text-accent" />
                                        </div>
                                        <span className="text-sm">{member.phone}</span>
                                    </div>
                                </div>

                                {/* Decorative corner element */}
                                <div className="absolute top-4 right-4 w-8 h-8 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-colors duration-500 border border-accent/20"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Packages */}
            <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20">
                            Pricing
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Design Packages
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Choose the perfect design package that fits your project scope and
                            budget requirements
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingPackages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`group relative bg-card p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-border ${pkg.popular ? "ring-2 ring-accent scale-105" : ""} ${selectedPackage === pkg.name ? "ring-2 ring-green-500 bg-green-50/50" : ""}`}
                            >
                                {/* Background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {pkg.popular && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-6 py-2 rounded-xl text-sm font-semibold shadow-lg flex items-center">
                                            <Crown className="w-4 h-4 mr-2" />
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="relative text-center mb-8">
                                    <div className="w-20 h-20 bg-gradient-to-br from-accent/10 to-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-500">
                                        {index === 0 ? (
                                            <Gem className="w-8 h-8 text-accent transition-colors duration-500" />
                                        ) : index === 1 ? (
                                            <Crown className="w-8 h-8 text-accent transition-colors duration-500" />
                                        ) : (
                                            <Star className="w-8 h-8 text-accent transition-colors duration-500" />
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                                        {pkg.name}
                                    </h3>
                                    <div className="text-4xl font-bold text-accent mb-4 flex items-center justify-center">
                                        <span>{pkg.price}</span>
                                        <span className="text-lg text-muted-foreground ml-2">/project</span>
                                    </div>
                                    <p className="text-muted-foreground">{pkg.description}</p>
                                </div>

                                <ul className="relative space-y-4 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                                            <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-accent/20 transition-colors border border-accent/20">
                                                <Check className="w-4 h-4 text-accent" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => handlePackageSelection(pkg.name)}
                                    className={`relative w-full py-4 rounded-3xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${selectedPackage === pkg.name
                                        ? "bg-green-500 text-white hover:bg-green-600"
                                        : pkg.popular
                                            ? "bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:shadow-lg"
                                            : "bg-background text-accent border-2 border-accent hover:bg-accent hover:text-accent-foreground"
                                        }`}
                                >
                                    {selectedPackage === pkg.name ? (
                                        <>
                                            <Check className="w-4 h-4" />
                                            <span>Selected</span>
                                        </>
                                    ) : (
                                        <>
                                            <ArrowRight className="w-4 h-4" />
                                            <span>Select Package</span>
                                        </>
                                    )}
                                </button>

                                {/* Decorative elements */}
                                <div className="absolute top-4 right-4 w-8 h-8 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-colors duration-500 border border-accent/20"></div>
                                <div className="absolute bottom-4 left-4 w-6 h-6 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-colors duration-500 border border-accent/20"></div>
                            </div>
                        ))}
                    </div>

                    {selectedPackage && (
                        <div className="mt-12 text-center">
                            <div className="bg-green-50 border border-green-200 rounded-3xl p-6 max-w-md mx-auto">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                        <Check className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">
                                    Package Selected!
                                </h3>
                                <p className="text-green-700 mb-4">
                                    You've selected the <strong>{selectedPackage}</strong> package.
                                </p>
                                <div className="space-y-3">
                                    <button className="w-full bg-green-500 text-white py-3 rounded-3xl font-semibold hover:bg-green-600 transition-colors">
                                        Get Started Now
                                    </button>
                                    <button
                                        onClick={() => setSelectedPackage(null)}
                                        className="w-full bg-gray-100 text-gray-700 py-3 rounded-3xl font-semibold hover:bg-gray-200 transition-colors"
                                    >
                                        Change Selection
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Consultation Modal */}
            <Consultation />
        </div>
    );
};

export default InteriorPage;