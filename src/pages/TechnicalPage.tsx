import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Wrench,
    Zap,
    Droplets,
    Hammer,
    Settings,
    CheckCircle,
    Users,
    Calendar,
    Clock,
    Building2,
    ShieldCheck,
    TrendingUp
} from 'lucide-react';

const TechnicalPage: React.FC = () => {
    const [selectedService, setSelectedService] = useState('plumbing');

    const technicalServices = [
        {
            type: 'plumbing',
            title: 'Plumbing Services',
            icon: Droplets,
            description: 'Complete plumbing installation, repair, and maintenance services for residential and commercial properties.',
            features: [
                'Installation of pipes and fixtures',
                'Leak detection and repair',
                'Emergency plumbing services',
                'Water heater installation',
                'Drain cleaning and maintenance'
            ],
            image: '/plumber.jpg'
        },
        {
            type: 'electrical',
            title: 'Electrical Work',
            icon: Zap,
            description: 'Expert electrical services including wiring, lighting installations, and troubleshooting for safe operations.',
            features: [
                'Wiring and rewiring systems',
                'Lighting design and installation',
                'Electrical panel upgrades',
                'Outlet and switch installation',
                'Electrical safety inspections'
            ],
            image: '/electrician.jpg'
        },
        {
            type: 'masonry',
            title: 'Masonry & Tile Work',
            icon: Building2,
            description: 'Professional masonry services including floor and wall tiling, stonework, and repairs.',
            features: [
                'Floor and wall tile installation',
                'Natural stone work',
                'Grout repair and replacement',
                'Waterproofing solutions',
                'Custom tile designs'
            ],
            image: '/tile.jpg'
        },
        {
            type: 'carpentry',
            title: 'Carpentry Services',
            icon: Hammer,
            description: 'Custom woodwork and carpentry solutions including furniture assembly and repair services.',
            features: [
                'Custom furniture assembly',
                'Cabinet installation',
                'Wooden fixture repairs',
                'Door and window installation',
                'Custom woodwork projects'
            ],
            image: '/carpentry.jpg'
        }
    ];

    const technicalProcess = [
        {
            step: 1,
            title: 'Assessment & Planning',
            description: 'Comprehensive evaluation of technical requirements and project scope',
            icon: Settings
        },
        {
            step: 2,
            title: 'Expert Installation',
            description: 'Professional implementation by certified technicians using quality materials',
            icon: Wrench
        },
        {
            step: 3,
            title: 'Quality Testing',
            description: 'Thorough testing and inspection to ensure optimal performance',
            icon: CheckCircle
        },
        {
            step: 4,
            title: 'Maintenance Support',
            description: 'Ongoing support and maintenance services for long-term reliability',
            icon: ShieldCheck
        }
    ];

    const companyFacts = [
        {
            icon: Calendar,
            label: 'Years in Business',
            value: '1+',
            description: 'Year of dedicated service'
        },
        {
            icon: Building2,
            label: 'Completed Projects',
            value: '50+',
            description: 'Successfully delivered projects'
        },
        {
            icon: Users,
            label: 'Satisfied Clients',
            value: '150+',
            description: 'Happy customers served'
        },
        {
            icon: Users,
            label: 'Expert Team',
            value: '25',
            description: 'Experienced professionals'
        },
        {
            icon: Clock,
            label: 'Project Duration',
            value: '4-5 hrs',
            description: 'Residential cleaning average'
        },
        {
            icon: TrendingUp,
            label: 'Satisfaction Rate',
            value: '95%',
            description: 'Client satisfaction guarantee'
        }
    ];

    // const teamMembers = [
    //     {
    //         name: 'Ahmed Al-Rashid',
    //         title: 'Lead Technical Supervisor',
    //         specialization: 'Plumbing & HVAC Systems',
    //         experience: '8+ years',
    //         image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20technical%20supervisor%20in%20work%20uniform%20with%20tools%20confident%20expert%20portrait&width=300&height=400&seq=tech-team1&orientation=portrait',
    //         phone: '+971 50 123 7890',
    //         email: 'ahmed@karubidtechnical.com'
    //     },
    //     {
    //         name: 'Carlos Rodriguez',
    //         title: 'Senior Electrician',
    //         specialization: 'Electrical Systems & Lighting',
    //         experience: '10+ years',
    //         image: 'https://readdy.ai/api/search-image?query=experienced%20electrician%20in%20safety%20gear%20holding%20electrical%20tools%20professional%20technical%20expert%20portrait&width=300&height=400&seq=tech-team2&orientation=portrait',
    //         phone: '+971 50 234 8901',
    //         email: 'carlos@karubidtechnical.com'
    //     },
    //     {
    //         name: 'Michael Thompson',
    //         title: 'Master Carpenter',
    //         specialization: 'Custom Woodwork & Assembly',
    //         experience: '12+ years',
    //         image: 'https://readdy.ai/api/search-image?query=skilled%20carpenter%20with%20wooden%20tools%20and%20work%20apron%20professional%20craftsman%20portrait%20workshop%20background&width=300&height=400&seq=tech-team3&orientation=portrait',
    //         phone: '+971 50 345 9012',
    //         email: 'michael@karubidtechnical.com'
    //     }
    // ];

    return (
        <div className="min-h-screen bg-background ">
            <section id="services" className="py-20 bg-background min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-8 sm:mb-12"
                    >
                        <div className="inline-block px-3 sm:px-4 py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-4 border border-accent/20">
                            Our Expertise
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">
                            Technical Solutions
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                            Fast, reliable technical services for your property.
                        </p>
                    </motion.div>

                    {/* Service Categories */}
                    <div className="flex flex-wrap justify-center gap-1 sm:gap-4 mb-6 sm:mb-8 px-4">
                        {technicalServices.map((service) => (
                            <motion.button
                                key={service.type}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedService(service.type)}
                                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-1 sm:space-x-2 border text-xs sm:text-sm ${selectedService === service.type
                                    ? 'bg-accent text-accent-foreground shadow-lg border-accent'
                                    : 'bg-card text-foreground border-border hover:bg-accent hover:text-accent-foreground'
                                    }`}
                            >
                                <service.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="hidden sm:inline">{service.title}</span>
                                <span className="sm:hidden">{service.title.split(' ')[0]}</span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Selected Service Detail */}
                    <motion.div
                        key={selectedService}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"
                    >
                        <div className="px-4 lg:px-0">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gradient-to-br from-accent/10 to-accent/20 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 border border-accent/20"
                            >
                                {React.createElement(technicalServices.find(s => s.type === selectedService)?.icon || Settings, {
                                    className: "w-6 h-6 sm:w-8 sm:h-8 text-accent"
                                })}
                            </motion.div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                                {technicalServices.find(s => s.type === selectedService)?.title}
                            </h3>
                            <p className="text-muted-foreground mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                                {technicalServices.find(s => s.type === selectedService)?.description}
                            </p>
                            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                                {technicalServices.find(s => s.type === selectedService)?.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-foreground text-sm sm:text-base">
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-2 sm:mr-3 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-accent text-accent-foreground px-6 sm:px-8 py-2 sm:py-3 rounded-xl hover:bg-accent/90 transition-all duration-300 font-semibold text-sm sm:text-base w-full sm:w-auto"
                            >
                                Request Service
                            </motion.button>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="px-4 lg:px-0"
                        >
                            <img
                                src={technicalServices.find(s => s.type === selectedService)?.image}
                                alt={technicalServices.find(s => s.type === selectedService)?.title}
                                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-3xl shadow-xl"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Technical Process */}
            <section id='process' className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-muted to-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <div className="inline-block px-3 sm:px-4 py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-4 border border-accent/20">
                            Our Process
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">
                            How We Work
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                            Simple steps for quality results.
                        </p>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {technicalProcess.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="bg-accent w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
                                </div>
                                <div className="bg-accent/10 text-accent w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-xs sm:text-sm font-bold border border-accent/20">
                                    {step.step}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 px-2">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base px-2">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Facts & Figures */}
            <section id='portfolio' className="py-12 sm:py-16 lg:py-20 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <div className="inline-block px-3 sm:px-4 py-2 bg-accent/20 text-accent rounded-full text-xs sm:text-sm font-medium mb-4 border border-accent/20">
                            Key Facts
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 px-4">
                            Key Facts and Figures
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 max-w-3xl mx-auto px-4">
                            Our results in numbers.
                        </p>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {companyFacts.map((fact, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-card/10 backdrop-blur-sm p-6 sm:p-8 rounded-3xl text-center border border-primary-foreground/10 hover:bg-card/20 transition-all duration-300 group"
                            >
                                <div className="bg-accent w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <fact.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />
                                </div>
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">{fact.value}</div>
                                <h3 className="text-lg sm:text-xl font-semibold text-primary-foreground mb-2">{fact.label}</h3>
                                <p className="text-primary-foreground/80 text-sm sm:text-base">{fact.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sustainability Initiatives */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-muted to-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="inline-block px-3 sm:px-4 py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-accent/20">
                                Sustainability
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                                Eco-Friendly Commitment
                            </h2>
                            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                                We use sustainable, eco-friendly products and materials.
                            </p>
                            <div className="space-y-3 sm:space-y-4">
                                {[
                                    'Eco-friendly cleaning products',
                                    'Energy-efficient solutions',
                                    'Sustainable materials sourcing',
                                    'Waste reduction practices'
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-center"
                                    >
                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-2 sm:mr-3 flex-shrink-0" />
                                        <span className="text-foreground text-sm sm:text-base">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="order-1 lg:order-2"
                        >
                            <img
                                src="/solar.jpg"
                                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-3xl shadow-xl"
                                alt="Eco-friendly technical solutions"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TechnicalPage;
