import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Home,
    Building,
    MapPin,
    Check,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    X,
    Sparkles,
    Shield,
    Award,
    Users,
    Star
} from 'lucide-react';
import Consultation from '@/components/Consultation';

const beforeAfterProjects = [
    {
        title: "Corporate Office Deep Clean",
        location: "Business District, Dubai & Dhaka",
        before: "https://readdy.ai/api/search-image?query=messy%20corporate%20office%20space%20with%20dusty%20surfaces%20cluttered%20desks%20stained%20carpets%20and%20dirty%20windows%20before%20professional%20cleaning%20service&width=400&height=300&seq=before1&orientation=landscape",
        after: "https://readdy.ai/api/search-image?query=pristine%20modern%20corporate%20office%20space%20with%20gleaming%20floors%20spotless%20glass%20surfaces%20professional%20cleaning%20results%20bright%20contemporary%20workspace&width=400&height=300&seq=after1&orientation=landscape"
    },
    {
        before:
            "https://readdy.ai/api/search-image?query=untidy%20luxury%20hotel%20lobby%20with%20dusty%20marble%20floors%20smudged%20glass%20surfaces%20and%20worn%20furniture%20before%20professional%20cleaning&width=400&height=300&seq=before2&orientation=landscape",
        after:
            "https://readdy.ai/api/search-image?query=immaculate%20luxury%20hotel%20lobby%20with%20polished%20marble%20floors%20crystal%20clear%20glass%20pristine%20furniture%20elegant%20hospitality%20cleaning%20results&width=400&height=300&seq=after2&orientation=landscape",
        title: "Luxury Hotel Lobby",
        location: "Dubai & Dhaka",
    },
    {
        before:
            "https://readdy.ai/api/search-image?query=cluttered%20residential%20living%20room%20with%20dusty%20surfaces%20stained%20upholstery%20dirty%20floors%20before%20professional%20home%20cleaning%20service&width=400&height=300&seq=before3&orientation=landscape",
        after:
            "https://readdy.ai/api/search-image?query=spotless%20modern%20residential%20living%20room%20with%20pristine%20furniture%20gleaming%20surfaces%20fresh%20clean%20home%20environment%20professional%20results&width=400&height=300&seq=after3&orientation=landscape",
        title: "Residential Deep Clean",
        location: "Dubai & Dhaka",
    },
];
const CleaningPage: React.FC = () => {
    const [currentBeforeAfter, setCurrentBeforeAfter] = useState(0);
    const [selectedService, setSelectedService] = useState('residential');
    const [selectedPackages, setSelectedPackages] = useState<{ name: string; type: string; price: string; frequency: string }[]>([]);
    const [isAutoSliding, setIsAutoSliding] = useState(true);

    // Auto-sliding effect for before/after gallery
    useEffect(() => {
        if (!isAutoSliding) return;

        const interval = setInterval(() => {
            setCurrentBeforeAfter((prev) => (prev + 1) % beforeAfterProjects.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [isAutoSliding, beforeAfterProjects.length]);

    const cleaningServices = [
        {
            title: "Residential Cleaning",
            description: "Deep cleaning, post-construction cleaning, and routine maintenance for homes",
            icon: Home,
            features: [
                "Deep cleaning services",
                "Post-construction cleanup",
                "Routine maintenance cleaning",
                "Kitchen & bathroom sanitization"
            ],
            image: "https://readdy.ai/api/search-image?query=modern%20residential%20home%20cleaning%20service%20pristine%20living%20room%20professional%20results%20bright%20clean%20space&width=400&height=300&seq=residential&orientation=landscape"
        },
        {
            title: "Commercial Cleaning",
            description: "Office cleaning, retail store maintenance, and industrial space cleaning",
            icon: Building,
            features: [
                "Office cleaning services",
                "Retail store maintenance",
                "Industrial space cleaning",
                "Professional workspace sanitization"
            ],
            image: "https://readdy.ai/api/search-image?query=modern%20commercial%20office%20cleaning%20service%20pristine%20workspace%20professional%20maintenance%20bright%20corporate%20environment&width=400&height=300&seq=commercial&orientation=landscape"
        },
        {
            title: "Specialized Services",
            description: "Window cleaning, carpet cleaning, and sanitation for specialized environments",
            icon: Sparkles,
            features: [
                "Professional window cleaning",
                "Deep carpet cleaning",
                "Specialized sanitation services",
                "Custom cleaning solutions"
            ],
            image: "https://readdy.ai/api/search-image?query=specialized%20cleaning%20services%20window%20cleaning%20carpet%20maintenance%20professional%20equipment%20pristine%20results&width=400&height=300&seq=specialized&orientation=landscape"
        }
    ];

    const keyFacts = [
        {
            title: "Years in Business",
            value: "10+ year",
            description: "Established cleaning service provider in Dubai & Dhaka"
        },
        {
            title: "Completed Projects",
            value: "Over 50",
            description: "Successfully completed cleaning projects in Dubai & Dhaka"
        },
        {
            title: "Client Satisfaction",
            value: "150+ satisfied clients",
            description: "Happy customers across Dubai & Dhaka"
        },
        {
            title: "Team Experience",
            value: "25 professionals",
            description: "Experienced and trained cleaning staff in Dubai & Dhaka"
        },
        {
            title: "Service Commitment",
            value: "Eco-friendly products",
            description: "Using environmentally safe cleaning solutions"
        },
        {
            title: "Project Duration",
            value: "4-6 hours residential, 8-10 hours commercial",
            description: "Average cleaning time for optimal results"
        },
        {
            title: "Satisfaction Rate",
            value: "95%",
            description: "Client satisfaction guarantee"
        }
    ];



    const servicePackages = [
        {
            type: 'residential',
            title: 'Residential Cleaning',
            packages: [
                {
                    name: 'Basic Home Clean',
                    price: '৳ 1,500',
                    frequency: 'Weekly',
                    features: ['Living areas cleaning', 'Kitchen sanitization', 'Bathroom deep clean', 'Floor mopping', 'Trash removal']
                },
                {
                    name: 'Deep Home Clean',
                    price: '৳ 2,500',
                    frequency: 'Bi-weekly',
                    features: ['Complete home detailing', 'Appliance cleaning', 'Window washing', 'Closet organization', 'Eco-friendly products']
                },
                {
                    name: 'Luxury Villa Service',
                    price: '৳ 4,000',
                    frequency: 'Monthly',
                    features: ['Full villa maintenance', 'Garden area clean', 'Pool cleaning', 'Garage organization', 'Premium care products']
                }
            ]
        },
        {
            type: 'commercial',
            title: 'Commercial Cleaning',
            packages: [
                {
                    name: 'Basic Office Clean',
                    price: '৳ 2,000',
                    frequency: 'Weekly',
                    features: ['Desk & surface cleaning', 'Restroom sanitization', 'Floor vacuuming', 'Trash removal', 'Basic maintenance']
                },
                {
                    name: 'Premium Office Clean',
                    price: '৳ 3,500',
                    frequency: 'Bi-weekly',
                    features: ['Complete deep clean', 'Window cleaning', 'Carpet deep clean', 'Kitchen area sanitization', 'Air freshening']
                },
                {
                    name: 'Executive Office Service',
                    price: '৳ 5,000',
                    frequency: 'Monthly',
                    features: ['Full office detailing', 'Upholstery cleaning', 'Equipment sanitization', 'Meeting room setup', 'Premium eco products']
                }
            ]
        },
        {
            type: 'specialized',
            title: 'Specialized Services',
            packages: [
                {
                    name: 'Window Cleaning',
                    price: '৳ 1,000',
                    frequency: 'Monthly',
                    features: ['Interior window cleaning', 'Exterior window cleaning', 'Frame cleaning', 'Streak-free results', 'Safety equipment']
                },
                {
                    name: 'Carpet Deep Clean',
                    price: '৳ 1,800',
                    frequency: 'Quarterly',
                    features: ['Professional steam cleaning', 'Stain removal', 'Odor elimination', 'Fabric protection', 'Fast drying']
                },
                {
                    name: 'Sanitation Service',
                    price: '৳ 3,000',
                    frequency: 'As needed',
                    features: ['Hospital-grade disinfection', 'Air quality improvement', 'Surface sanitization', 'Equipment sterilization', 'Health compliance']
                }
            ]
        }
    ];

    const cleaningProcess = [
        {
            step: 1,
            title: "Initial Assessment",
            description: "Comprehensive evaluation of your space and specific cleaning requirements",
            icon: Shield
        },
        {
            step: 2,
            title: "Custom Plan Development",
            description: "Tailored cleaning strategy designed for your unique needs and schedule",
            icon: Star
        },
        {
            step: 3,
            title: "Professional Execution",
            description: "Expert team implements the cleaning plan using premium eco-friendly products",
            icon: Users
        },
        {
            step: 4,
            title: "Quality Assurance",
            description: "Thorough inspection and client approval to ensure exceptional results",
            icon: Award
        }
    ];

    const selectedPackagesData = servicePackages.find(s => s.type === selectedService)?.packages || [];

    const handlePackageSelect = (packageName: string) => {
        const currentServicePackages = servicePackages.find(s => s.type === selectedService);
        const selectedPackage = currentServicePackages?.packages.find(p => p.name === packageName);

        if (!selectedPackage) return;

        setSelectedPackages(prev => {
            const existingIndex = prev.findIndex(p => p.name === packageName);
            if (existingIndex >= 0) {
                // Remove if already selected
                return prev.filter((_, index) => index !== existingIndex);
            } else {
                // Add new selection
                return [...prev, {
                    name: selectedPackage.name,
                    type: selectedService,
                    price: selectedPackage.price,
                    frequency: selectedPackage.frequency
                }];
            }
        });
    };

    const getTotalPrice = () => {
        const total = selectedPackages.reduce((sum, pkg) => {
            const price = parseInt(pkg.price.replace('৳ ', '').replace(',', ''));
            return sum + price;
        }, 0);
        return total.toLocaleString();
    };

    const isPackageSelected = (packageName: string) => {
        return selectedPackages.some(p => p.name === packageName);
    };

    const removePackage = (packageName: string) => {
        setSelectedPackages(prev => prev.filter(p => p.name !== packageName));
    };

    return (
        <div className="min-h-screen bg-background">

            {/* Services Section */}
            <motion.section
                id="services"
                className="py-20 bg-muted/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.1 }}
                        >
                            Our Services
                        </motion.div>
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            Cleaning Services
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.15 }}
                        >
                            Our cleaning services ensure a hygienic, spotless environment for your home or workplace
                        </motion.p>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {cleaningServices.map((service, index) => (
                            <motion.div
                                key={index}
                                className="group relative bg-card border border-border p-6 sm:p-8 rounded-3xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{
                                    y: -4,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <motion.div
                                    className="relative bg-gradient-to-br from-accent/10 to-accent/20 w-16 sm:w-20 h-16 sm:h-20 rounded-3xl flex items-center justify-center mb-6 border border-accent/20"
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <service.icon className="w-6 sm:w-8 h-6 sm:h-8 text-accent" />
                                </motion.div>

                                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-200">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors text-sm sm:text-base"
                                            whileHover={{ x: 2, transition: { duration: 0.1 } }}
                                        >
                                            <motion.div
                                                className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-colors border border-accent/20"
                                                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                                            >
                                                <Check className="w-3 h-3 text-accent" />
                                            </motion.div>
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                                <motion.div
                                    className="flex items-center text-accent font-semibold group-hover:text-foreground transition-colors cursor-pointer text-sm sm:text-base"
                                    whileHover={{ x: 2, transition: { duration: 0.1 } }}
                                >
                                    <span>Learn More</span>
                                    <motion.div
                                        className="ml-2 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-foreground/10 transition-all duration-200"
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.1 }
                                        }}
                                    >
                                        <ArrowRight className="w-3 h-3" />
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Key Facts Section */}
            <motion.section
                id='portfolio'
                className=" bg-primary min-h-screen py-20 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.3 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="inline-block px-4 py-2 bg-accent-foreground/20 text-accent-foreground rounded-full text-sm font-medium mb-4"
                            whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
                        >
                            Key Facts and Figures
                        </motion.div>
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent-foreground mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.05 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            Our Track Record
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-accent-foreground/80 max-w-3xl mx-auto px-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.05 }}
                            transition={{ duration: 0.3, delay: 0.15 }}
                        >
                            Delivering exceptional cleaning services with proven results and client satisfaction
                        </motion.p>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {keyFacts.map((fact, index) => (
                            <motion.div
                                key={index}
                                className="bg-accent-foreground/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-accent-foreground/20 text-center"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.05 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{
                                    scale: 1.02,
                                    y: -2,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <h3 className="text-base sm:text-lg font-semibold text-accent-foreground mb-2">
                                    {fact.title}
                                </h3>
                                <motion.div
                                    className="text-xl sm:text-2xl font-bold text-accent-foreground mb-2"
                                    whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                                >
                                    {fact.value}
                                </motion.div>
                                <p className="text-accent-foreground/80 text-xs sm:text-sm">
                                    {fact.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Service Packages */}
            <motion.section
                id='pricing'
                className="py-20 bg-background min-h-screen"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.3 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20"
                            whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
                        >
                            Packages & Pricing
                        </motion.div>
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.05 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            Service Packages
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 px-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.05 }}
                            transition={{ duration: 0.3, delay: 0.15 }}
                        >
                            Choose the perfect cleaning package that fits your needs and budget
                        </motion.p>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                            {servicePackages.map((service, index) => (
                                <motion.button
                                    key={service.type}
                                    onClick={() => setSelectedService(service.type)}
                                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-3xl font-semibold transition-all duration-200 flex items-center space-x-2 border text-sm sm:text-base ${selectedService === service.type
                                        ? "bg-accent text-accent-foreground shadow-lg border-accent"
                                        : "bg-card text-foreground border-accent hover:bg-accent hover:text-accent-foreground"
                                        }`}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.05 }}
                                    transition={{ duration: 0.2, delay: index * 0.05 }}
                                    whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>{service.title}</span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                        key={selectedService}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {selectedPackagesData.map((pkg, index) => (
                            <motion.div
                                key={index}
                                className={`group relative bg-card border-2 p-6 sm:p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer ${isPackageSelected(pkg.name)
                                    ? 'border-accent bg-accent/5 shadow-lg'
                                    : 'border-border hover:border-accent/50'
                                    }`}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{
                                    y: -4,
                                    transition: { duration: 0.2 }
                                }}
                                onClick={() => handlePackageSelect(pkg.name)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Selection indicator */}
                                <motion.div
                                    className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${isPackageSelected(pkg.name)
                                        ? 'bg-accent border-accent'
                                        : 'border-muted-foreground/30 group-hover:border-accent/50'
                                        }`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isPackageSelected(pkg.name) && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Check className="w-4 h-4 text-accent-foreground" />
                                        </motion.div>
                                    )}
                                </motion.div>

                                <div className="relative text-center mb-6">
                                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-200">
                                        {pkg.name}
                                    </h3>
                                    <motion.div
                                        className="text-3xl sm:text-4xl font-bold text-accent mb-2"
                                        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                                    >
                                        {pkg.price}
                                    </motion.div>
                                    <p className="text-muted-foreground text-sm sm:text-base">
                                        {pkg.frequency}
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors text-sm sm:text-base"
                                            whileHover={{ x: 2, transition: { duration: 0.1 } }}
                                        >
                                            <motion.div
                                                className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-colors border border-accent/20"
                                                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                                            >
                                                <Check className="w-3 h-3 text-accent" />
                                            </motion.div>
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>

                                <motion.button
                                    className={`w-full py-2 sm:py-3 rounded-3xl transition-all duration-200 font-semibold text-sm sm:text-base ${isPackageSelected(pkg.name)
                                        ? 'bg-accent text-accent-foreground'
                                        : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                                        }`}
                                    whileHover={{
                                        scale: 1.01,
                                        transition: { duration: 0.1 }
                                    }}
                                    whileTap={{ scale: 0.99 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePackageSelect(pkg.name);
                                    }}
                                >
                                    {isPackageSelected(pkg.name) ? 'Selected' : 'Select Package'}
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Selected packages summary */}
                    {selectedPackages.length > 0 && (
                        <motion.div
                            className="mt-12 bg-card border border-accent/20 p-6 sm:p-8 rounded-3xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
                                Selected Packages
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                {selectedPackages.map((pkg, index) => (
                                    <motion.div
                                        key={`${pkg.name}-${pkg.type}`}
                                        className="flex items-center justify-between bg-accent/10 p-4 rounded-2xl border border-accent/20"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <div>
                                            <p className="font-semibold text-foreground">{pkg.name}</p>
                                            <p className="text-sm text-muted-foreground">{pkg.frequency}</p>
                                            <p className="text-xs text-accent capitalize">{pkg.type}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="font-bold text-accent">{pkg.price}</span>
                                            <motion.button
                                                onClick={() => removePackage(pkg.name)}
                                                className="text-red-500 hover:text-red-700 transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <X className="w-4 h-4" />
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-accent mb-4">
                                    Total: ৳ {getTotalPrice()}
                                </div>
                                <motion.button
                                    className="bg-accent text-accent-foreground px-8 py-3 rounded-3xl font-semibold hover:bg-accent/90 transition-all duration-200"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Book Selected Packages
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.section>

            {/* Cleaning Process */}
            <motion.section
                id="process"
                className="py-20 bg-muted/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <motion.div
                            className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20"
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            Our Process
                        </motion.div>
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                        >
                            Our Cleaning Process
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            A systematic approach ensuring consistent, high-quality results every time
                        </motion.p>
                    </motion.div>
                    <div className="relative">
                        <motion.div
                            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent via-accent/50 to-accent hidden lg:block"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                        <div className="space-y-8 sm:space-y-12">
                            {cleaningProcess.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                                    initial={{
                                        opacity: 0,
                                        x: index % 2 === 0 ? -30 : 30
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0
                                    }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="flex-1 lg:pr-8 w-full">
                                        <motion.div
                                            className={`relative bg-card border border-border p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} group overflow-hidden`}
                                            whileHover={{
                                                y: -8,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            <div className="relative flex flex-col sm:flex-row items-center mb-6">
                                                <motion.div
                                                    className={`bg-gradient-to-br from-accent/10 to-accent/20 w-12 sm:w-16 h-12 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 mr-0 sm:mr-4 border border-accent/20 ${index % 2 === 0 ? "lg:order-2 lg:ml-4 lg:mr-0" : ""}`}
                                                    whileHover={{
                                                        scale: 1.1,
                                                        rotate: 5,
                                                        transition: { duration: 0.2 }
                                                    }}
                                                >
                                                    <step.icon className="w-5 sm:w-6 h-5 sm:h-6 text-accent" />
                                                </motion.div>
                                                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-200 text-center sm:text-left">
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors text-sm sm:text-base text-center lg:text-left">
                                                {step.description}
                                            </p>
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        className="hidden lg:flex w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full items-center justify-center text-accent-foreground font-bold text-xl relative z-10 shadow-lg my-4 lg:my-0"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <span>{step.step}</span>
                                        <motion.div
                                            className="absolute inset-0 bg-accent rounded-full opacity-20"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 2,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    </motion.div>
                                    <div className="flex-1 lg:pl-8"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Before/After Gallery */}
            <motion.section
                id="portfolio"
                className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <motion.div
                            className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20"
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            Transformations
                        </motion.div>
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                        >
                            Before & After Gallery
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-primary-foreground/80 max-w-3xl mx-auto px-4"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            Witness the remarkable transformations achieved through our professional cleaning services
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="relative max-w-5xl mx-auto"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        onMouseEnter={() => setIsAutoSliding(false)}
                        onMouseLeave={() => setIsAutoSliding(true)}
                    >
                        <motion.div
                            className="bg-card p-4 sm:p-8 rounded-3xl shadow-2xl border border-border"
                            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                        >
                            <motion.div
                                className="grid md:grid-cols-2 gap-4 sm:gap-8"
                                key={currentBeforeAfter}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="relative group"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <motion.div
                                        className="absolute -top-2 -left-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-3xl text-xs sm:text-sm font-semibold z-10"
                                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                    >
                                        <X className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2 inline" />Before
                                    </motion.div>
                                    <motion.img
                                        src={beforeAfterProjects[currentBeforeAfter].before}
                                        alt="Before"
                                        className="w-full h-48 sm:h-64 object-cover rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                                        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                                    />
                                </motion.div>
                                <motion.div
                                    className="relative group"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <motion.div
                                        className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-3xl text-xs sm:text-sm font-semibold z-10"
                                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                    >
                                        <Check className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2 inline" />After
                                    </motion.div>
                                    <motion.img
                                        src={beforeAfterProjects[currentBeforeAfter].after}
                                        alt="After"
                                        className="w-full h-48 sm:h-64 object-cover rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                                        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                                    />
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="text-center mt-6 sm:mt-8"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <motion.h3
                                    className="text-xl sm:text-2xl font-bold text-foreground mb-2"
                                    key={`title-${currentBeforeAfter}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {beforeAfterProjects[currentBeforeAfter].title}
                                </motion.h3>
                                <motion.p
                                    className="text-accent font-semibold flex items-center justify-center text-sm sm:text-base"
                                    key={`location-${currentBeforeAfter}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    <MapPin className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                                    {beforeAfterProjects[currentBeforeAfter].location}
                                </motion.p>
                            </motion.div>
                        </motion.div>

                        {/* Navigation and indicators */}
                        <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-4">
                            <motion.button
                                onClick={() => {
                                    setCurrentBeforeAfter((prev) =>
                                        prev === 0 ? beforeAfterProjects.length - 1 : prev - 1
                                    );
                                    setIsAutoSliding(false);
                                    setTimeout(() => setIsAutoSliding(true), 3000);
                                }}
                                className="group bg-accent text-accent-foreground p-3 sm:p-4 rounded-3xl hover:bg-accent/90 transition-all duration-200"
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                            </motion.button>

                            {/* Slide indicators */}
                            <div className="flex space-x-2">
                                {beforeAfterProjects.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => {
                                            setCurrentBeforeAfter(index);
                                            setIsAutoSliding(false);
                                            setTimeout(() => setIsAutoSliding(true), 3000);
                                        }}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentBeforeAfter
                                            ? 'bg-accent scale-125'
                                            : 'bg-accent/40 hover:bg-accent/70'
                                            }`}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    />
                                ))}
                            </div>

                            <motion.button
                                onClick={() => {
                                    setCurrentBeforeAfter(
                                        (prev) => (prev + 1) % beforeAfterProjects.length
                                    );
                                    setIsAutoSliding(false);
                                    setTimeout(() => setIsAutoSliding(true), 3000);
                                }}
                                className="group bg-accent text-accent-foreground p-3 sm:p-4 rounded-3xl hover:bg-accent/90 transition-all duration-200"
                                initial={{ opacity: 0, x: 15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </motion.button>
                        </div>

                        {/* Auto-slide progress indicator */}
                        <div className="flex justify-center mt-4">
                            <div className="w-32 h-1 bg-accent/20 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-accent"
                                    initial={{ width: "0%" }}
                                    animate={{
                                        width: isAutoSliding ? "100%" : "0%"
                                    }}
                                    transition={{
                                        duration: isAutoSliding ? 4 : 0,
                                        ease: "linear",
                                        repeat: isAutoSliding ? Infinity : 0
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Eco-Friendly Section */}
            <motion.section
                id="contact"
                className="py-20 bg-background"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div
                                className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20"
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            >
                                Contact & Location
                            </motion.div>
                            <motion.h2
                                className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                Karubid Technical Services L.L.C
                            </motion.h2>
                            <div className="space-y-4 sm:space-y-6">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                                        Office Address
                                    </h3>
                                    <p className="text-muted-foreground text-sm sm:text-base">
                                        Office - 6-071, M Floor, Abdulla Kamber Business Centre - Office-6, Hor Al Anz, Dubai, UAE.
                                    </p>
                                    <p className="text-muted-foreground text-sm sm:text-base">
                                        Land Mark: Beside Abu Baker Al Siddique Metro Station
                                    </p>
                                    <p className="text-muted-foreground text-sm sm:text-base">
                                        Landline: +971 4 528 4067
                                    </p>
                                    <p className="text-muted-foreground text-sm sm:text-base">
                                        Locations: Dubai, UAE & Dhaka, Bangladesh
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                                        Email Contacts
                                    </h3>
                                    <ul className="text-muted-foreground text-sm sm:text-base space-y-1">
                                        <li>info@karubidtech.com</li>
                                        
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                                        Eco-Friendly Features
                                    </h3>
                                    <ul className="text-muted-foreground text-sm sm:text-base space-y-1">
                                        <li>Green Certified Products</li>
                                        <li>Health-Safe Practices</li>
                                        <li>Environmental Certifications</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <motion.img
                                src="https://readdy.ai/api/search-image?query=eco-friendly%20cleaning%20products%20with%20green%20leaves%20natural%20ingredients%20sustainable%20bottles%20environmental%20protection%20clean%20white%20background%20professional%20product%20photography&width=600&height=500&seq=eco-products&orientation=portrait"
                                alt="Eco-friendly cleaning products"
                                className="w-full h-64 sm:h-96 object-cover rounded-3xl shadow-xl"
                                whileHover={{
                                    scale: 1.03,
                                    transition: { duration: 0.2 }
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Consultation Modal */}
            <Consultation />
        </div>
    );
};

export default CleaningPage;