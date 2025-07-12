import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CleaningPage: React.FC = () => {

    const [selectedService, setSelectedService] = useState('office');




    const galleryImages = [
        {
            before: "https://readdy.ai/api/search-image?query=messy%20corporate%20office%20space%20with%20dusty%20surfaces%20cluttered%20desks%20stained%20carpets%20and%20dirty%20windows%20before%20professional%20cleaning%20service&width=400&height=300&seq=before1&orientation=landscape",
            after: "https://readdy.ai/api/search-image?query=pristine%20modern%20corporate%20office%20space%20with%20gleaming%20floors%20spotless%20glass%20surfaces%20professional%20cleaning%20results%20bright%20contemporary%20workspace&width=400&height=300&seq=after1&orientation=landscape",
            title: "Corporate Office Transformation",
            location: "Dubai Business Bay"
        },
        {
            before: "https://readdy.ai/api/search-image?query=untidy%20luxury%20hotel%20lobby%20with%20dusty%20marble%20floors%20smudged%20glass%20surfaces%20and%20worn%20furniture%20before%20professional%20cleaning&width=400&height=300&seq=before2&orientation=landscape",
            after: "https://readdy.ai/api/search-image?query=immaculate%20luxury%20hotel%20lobby%20with%20polished%20marble%20floors%20crystal%20clear%20glass%20pristine%20furniture%20elegant%20hospitality%20cleaning%20results&width=400&height=300&seq=after2&orientation=landscape",
            title: "Luxury Hotel Lobby",
            location: "Dubai Marina"
        },
        {
            before: "https://readdy.ai/api/search-image?query=cluttered%20residential%20living%20room%20with%20dusty%20surfaces%20stained%20upholstery%20dirty%20floors%20before%20professional%20home%20cleaning%20service&width=400&height=300&seq=before3&orientation=landscape",
            after: "https://readdy.ai/api/search-image?query=spotless%20modern%20residential%20living%20room%20with%20pristine%20furniture%20gleaming%20surfaces%20fresh%20clean%20home%20environment%20professional%20results&width=400&height=300&seq=after3&orientation=landscape",
            title: "Residential Deep Clean",
            location: "Palm Jumeirah"
        }
    ];

    const servicePackages = [
        {
            type: 'office',
            title: 'Office Cleaning',
            icon: 'fas fa-building',
            packages: [
                {
                    name: 'Basic Office Clean',
                    price: 'AED 150',
                    frequency: 'Weekly',
                    features: ['Desk & Surface Cleaning', 'Trash Removal', 'Floor Vacuuming', 'Restroom Sanitization']
                },
                {
                    name: 'Premium Office Clean',
                    price: 'AED 250',
                    frequency: 'Bi-weekly',
                    features: ['Complete Deep Clean', 'Window Cleaning', 'Carpet Deep Clean', 'Kitchen Area Sanitization', 'Air Freshening']
                },
                {
                    name: 'Executive Office Clean',
                    price: 'AED 400',
                    frequency: 'Monthly',
                    features: ['Full Office Detailing', 'Upholstery Cleaning', 'Equipment Sanitization', 'Meeting Room Setup', 'Premium Eco Products']
                }
            ]
        },
        {
            type: 'hotel',
            title: 'Hotel Cleaning',
            icon: 'fas fa-bed',
            packages: [
                {
                    name: 'Standard Room Service',
                    price: 'AED 80',
                    frequency: 'Daily',
                    features: ['Room Cleaning', 'Bathroom Sanitization', 'Linen Change', 'Amenity Restocking']
                },
                {
                    name: 'Luxury Suite Service',
                    price: 'AED 150',
                    frequency: 'Daily',
                    features: ['Premium Room Detailing', 'Marble Surface Care', 'Fine Linen Service', 'Personalized Amenities', 'Balcony Cleaning']
                },
                {
                    name: 'Full Hotel Maintenance',
                    price: 'AED 2500',
                    frequency: 'Monthly',
                    features: ['Complete Property Clean', 'Lobby & Common Areas', 'Restaurant Sanitization', 'Pool Area Maintenance', 'Event Space Preparation']
                }
            ]
        },
        {
            type: 'residential',
            title: 'Residential Cleaning',
            icon: 'fas fa-home',
            packages: [
                {
                    name: 'Regular Home Clean',
                    price: 'AED 120',
                    frequency: 'Weekly',
                    features: ['Living Areas Clean', 'Kitchen Sanitization', 'Bathroom Deep Clean', 'Floor Mopping']
                },
                {
                    name: 'Deep Home Clean',
                    price: 'AED 200',
                    frequency: 'Bi-weekly',
                    features: ['Complete Home Detailing', 'Appliance Cleaning', 'Window Washing', 'Closet Organization', 'Eco-Friendly Products']
                },
                {
                    name: 'Luxury Villa Service',
                    price: 'AED 350',
                    frequency: 'Monthly',
                    features: ['Full Villa Maintenance', 'Garden Area Clean', 'Pool Cleaning', 'Garage Organization', 'Premium Care Products']
                }
            ]
        }
    ];

    const cleaningProcess = [
        {
            step: 1,
            title: 'Initial Assessment',
            description: 'Comprehensive evaluation of your space and specific cleaning requirements',
            icon: 'fas fa-search'
        },
        {
            step: 2,
            title: 'Custom Plan Development',
            description: 'Tailored cleaning strategy designed for your unique needs and schedule',
            icon: 'fas fa-clipboard-list'
        },
        {
            step: 3,
            title: 'Professional Execution',
            description: 'Expert team implements the cleaning plan using premium eco-friendly products',
            icon: 'fas fa-users'
        },
        {
            step: 4,
            title: 'Quality Assurance',
            description: 'Thorough inspection and client approval to ensure exceptional results',
            icon: 'fas fa-check-circle'
        }
    ];

    const { scrollYProgress } = useScroll();
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);




    return (
        <div className="min-h-screen bg-white" style={{ minHeight: '1024px' }}>


            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{
                        opacity: heroOpacity,
                        scale: heroScale,
                        backgroundImage: `url('https://readdy.ai/api/search-image?query=pristine%20modern%20corporate%20office%20space%20with%20gleaming%20floors%20spotless%20glass%20surfaces%20professional%20cleaning%20results%20bright%20contemporary%20workspace%20with%20emerald%20and%20gold%20accents&width=1440&height=1024&seq=cleaning-hero&orientation=landscape')`
                    }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                >
                    <div className="absolute inset-0 bg-emerald-900/70"></div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative z-10 max-w-7xl mx-auto px-6 text-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Professional Cleaning Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Premium eco-friendly cleaning solutions for offices, hotels, and residential properties across Dubai
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-amber-600 text-white px-8 py-4 text-lg rounded-lg hover:bg-amber-700 transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                        Book Cleaning Service
                    </motion.button>
                </motion.div>
            </section>

            {/* Service Categories */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">Our Cleaning Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive cleaning solutions tailored to meet the unique needs of different environments
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {servicePackages.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                                    className="text-amber-600 text-5xl mb-6 text-center"
                                >
                                    <i className={service.icon}></i>
                                </motion.div>
                                <h3 className="text-2xl font-bold text-emerald-800 mb-4 text-center">{service.title}</h3>
                                <div className="space-y-4 mb-6">
                                    {service.packages.slice(0, 1).map((pkg, pkgIndex) => (
                                        <div key={pkgIndex} className="text-center">
                                            <div className="text-3xl font-bold text-amber-600 mb-2">{pkg.price}</div>
                                            <div className="text-gray-600">Starting from / {pkg.frequency}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center">
                                    <button
                                        onClick={() => setSelectedService(service.type)}
                                        className="text-amber-600 hover:text-amber-700 font-semibold cursor-pointer"
                                    >
                                        View Packages <i className="fas fa-arrow-right ml-2"></i>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Packages Detail */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-emerald-800 mb-6">Service Packages & Pricing</h2>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex justify-center space-x-4 mb-8"
                        >
                            {servicePackages.map((service) => (
                                <motion.button
                                    key={service.type}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedService(service.type)}
                                    className={`px-6 py-3 rounded-lg font-semibold cursor-pointer whitespace-nowrap transition-colors ${selectedService === service.type
                                        ? 'bg-amber-600 text-white'
                                        : 'bg-gray-100 text-emerald-800 hover:bg-gray-200'
                                        }`}
                                >
                                    <i className={`${service.icon} mr-2`}></i>
                                    {service.title}
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        key={selectedService}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {servicePackages.find(s => s.type === selectedService)?.packages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.03 }}
                                className="bg-gray-50 p-8 rounded-lg border-2 border-transparent hover:border-amber-600 transition-all duration-300"
                            >
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-emerald-800 mb-2">{pkg.name}</h3>
                                    <div className="text-4xl font-bold text-amber-600 mb-1">{pkg.price}</div>
                                    <div className="text-gray-600">{pkg.frequency}</div>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <i className="fas fa-check text-amber-600 mr-3"></i>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors cursor-pointer whitespace-nowrap">
                                    Choose Package
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Cleaning Process */}
            <section id="process" className="py-20 bg-emerald-800">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Cleaning Process</h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            A systematic approach ensuring consistent, high-quality results every time
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {cleaningProcess.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                className="text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0, rotate: 180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                                    className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <i className={`${step.icon} text-white text-2xl`}></i>
                                </motion.div>
                                <div className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-white/80 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before/After Gallery */}
            <section id="gallery" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">Before & After Gallery</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See the remarkable transformations achieved through our professional cleaning services
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryImages.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                <div className="relative">
                                    <div className="grid grid-cols-2 gap-1">
                                        <div className="relative">
                                            <img
                                                src={item.before}
                                                alt="Before cleaning"
                                                className="w-full h-48 object-cover object-top"
                                            />
                                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                                                Before
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <img
                                                src={item.after}
                                                alt="After cleaning"
                                                className="w-full h-48 object-cover object-top"
                                            />
                                            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
                                                After
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-emerald-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 flex items-center">
                                        <i className="fas fa-map-marker-alt text-amber-600 mr-2"></i>
                                        {item.location}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eco-Friendly Approach */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-5xl font-bold text-emerald-800 mb-8"
                            >
                                Eco-Friendly Cleaning Solutions
                            </motion.h2>
                            <div className="space-y-6">
                                {/* Eco-friendly features */}
                                {[{
                                    icon: "fas fa-leaf",
                                    title: "Green Certified Products",
                                    desc: "We use only environmentally certified cleaning products that are safe for your family, pets, and the planet."
                                },
                                {
                                    icon: "fas fa-shield-alt",
                                    title: "Health-Safe Practices",
                                    desc: "Our cleaning methods prioritize indoor air quality and eliminate harmful chemicals from your environment."
                                },
                                {
                                    icon: "fas fa-recycle",
                                    title: "Sustainable Methods",
                                    desc: "We implement waste reduction strategies and use reusable materials wherever possible."
                                },
                                {
                                    icon: "fas fa-award",
                                    title: "Environmental Certifications",
                                    desc: "Certified by leading environmental organizations for our commitment to sustainable cleaning practices."
                                }].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 60 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                        className="flex items-start"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, type: "spring" }}
                                            className="text-amber-600 text-2xl mr-4 mt-1"
                                        >
                                            <i className={feature.icon}></i>
                                        </motion.div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-emerald-800 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                src="https://readdy.ai/api/search-image?query=eco-friendly%20cleaning%20products%20with%20green%20leaves%20natural%20ingredients%20sustainable%20bottles%20environmental%20protection%20clean%20white%20background%20professional%20product%20photography&width=600&height=500&seq=eco-products&orientation=portrait"
                                alt="Eco-friendly cleaning products"
                                className="w-full h-96 object-cover object-top rounded-lg shadow-xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">Service Areas in Dubai</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We provide professional cleaning services across Dubai's key business and residential districts
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            {/* Service area items with stagger animation */}
                            {[{
                                title: "Business Bay",
                                description: "Corporate offices and commercial towers"
                            },
                            {
                                title: "Dubai Marina",
                                description: "Luxury hotels and residential towers"
                            },
                            {
                                title: "Downtown Dubai",
                                description: "Premium offices and hospitality venues"
                            },
                            {
                                title: "Palm Jumeirah",
                                description: "Luxury villas and resort properties"
                            },
                            {
                                title: "DIFC & ADGM",
                                description: "Financial district offices and facilities"
                            }
                            ].map((area, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex items-center"
                                >
                                    <div className="text-amber-600 text-2xl mr-4">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-emerald-800">{area.title}</h3>
                                        <p className="text-gray-600">{area.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                            <div className="bg-amber-600 text-white p-4 rounded-lg">
                                <p className="font-semibold">Service Radius: 50km from Dubai city center</p>
                                <p className="text-sm mt-1">Contact us for locations outside our standard service area</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <img
                                src="https://readdy.ai/api/search-image?query=Dubai%20city%20skyline%20map%20with%20modern%20skyscrapers%20business%20districts%20marina%20palm%20jumeirah%20aerial%20view%20professional%20service%20coverage%20area&width=600&height=500&seq=dubai-map&orientation=portrait"
                                alt="Dubai service areas map"
                                className="w-full h-96 object-cover object-top rounded-lg shadow-xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>




        </div>
    );
};

export default CleaningPage;