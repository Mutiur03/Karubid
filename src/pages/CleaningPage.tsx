// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from 'react';

const CleaningPage: React.FC = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('office');
    const [bookingForm, setBookingForm] = useState({
        service: 'office',
        date: '',
        time: '',
        area: '',
        requirements: ''
    });

    const testimonials = [
        {
            name: "Ahmed Al-Mansouri",
            company: "Emirates Business Center",
            rating: 5,
            text: "KARUBID's office cleaning service is exceptional. Our workspace has never looked better, and their eco-friendly approach aligns perfectly with our corporate values.",
            image: "https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20businessman%20in%20elegant%20suit%20smiling%20confidently%20against%20clean%20white%20background%20modern%20corporate%20portrait&width=80&height=80&seq=cleaning-testimonial1&orientation=squarish"
        },
        {
            name: "Sarah Johnson",
            company: "Dubai Marina Hotel",
            rating: 5,
            text: "Outstanding hotel cleaning services. KARUBID maintains our luxury standards consistently, and their attention to detail is remarkable. Highly recommended for hospitality industry.",
            image: "https://readdy.ai/api/search-image?query=professional%20businesswoman%20with%20blonde%20hair%20wearing%20navy%20blue%20blazer%20smiling%20warmly%20against%20clean%20white%20background%20corporate%20headshot&width=80&height=80&seq=cleaning-testimonial2&orientation=squarish"
        },
        {
            name: "Mohammed Hassan",
            company: "Palm Jumeirah Residence",
            rating: 5,
            text: "Their residential cleaning service transformed our home. Professional team, reliable schedule, and they use only safe, eco-friendly products around our family.",
            image: "https://readdy.ai/api/search-image?query=confident%20middle%20eastern%20business%20executive%20in%20dark%20suit%20with%20professional%20smile%20against%20clean%20white%20background%20corporate%20portrait%20photography&width=80&height=80&seq=cleaning-testimonial3&orientation=squarish"
        }
    ];

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

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Booking submitted:', bookingForm);
    };

    const handleInputChange = (field: string, value: string) => {
        setBookingForm(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="min-h-screen bg-white" style={{ minHeight: '1024px' }}>
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="text-2xl font-bold text-emerald-800">
                                KARUBID
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="https://readdy.ai/home/32d18f95-c458-431f-b364-32e0a9abf8c9/a4c588a0-a16d-4c5d-bbd6-5c4998998175" data-readdy="true" className="text-emerald-800 hover:text-amber-600 transition-colors cursor-pointer">Back to Services</a>
                            <a href="#services" className="text-emerald-800 hover:text-amber-600 transition-colors cursor-pointer">Our Services</a>
                            <a href="#process" className="text-emerald-800 hover:text-amber-600 transition-colors cursor-pointer">Process</a>
                            <a href="#gallery" className="text-emerald-800 hover:text-amber-600 transition-colors cursor-pointer">Gallery</a>
                            <a href="#booking" className="text-emerald-800 hover:text-amber-600 transition-colors cursor-pointer">Book Now</a>
                            <button className="bg-amber-600 text-white px-6 py-2 !rounded-button hover:bg-amber-700 transition-colors cursor-pointer whitespace-nowrap">
                                Get Quote
                            </button>
                        </div>
                        <button
                            className="md:hidden cursor-pointer"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className="fas fa-bars text-emerald-800 text-xl"></i>
                        </button>
                    </div>
                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white border-t">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <a href="https://readdy.ai/home/32d18f95-c458-431f-b364-32e0a9abf8c9/a4c588a0-a16d-4c5d-bbd6-5c4998998175" data-readdy="true" className="block px-3 py-2 text-emerald-800 hover:text-amber-600 cursor-pointer">Back to Services</a>
                                <a href="#services" className="block px-3 py-2 text-emerald-800 hover:text-amber-600 cursor-pointer">Our Services</a>
                                <a href="#process" className="block px-3 py-2 text-emerald-800 hover:text-amber-600 cursor-pointer">Process</a>
                                <a href="#gallery" className="block px-3 py-2 text-emerald-800 hover:text-amber-600 cursor-pointer">Gallery</a>
                                <a href="#booking" className="block px-3 py-2 text-emerald-800 hover:text-amber-600 cursor-pointer">Book Now</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://readdy.ai/api/search-image?query=pristine%20modern%20corporate%20office%20space%20with%20gleaming%20floors%20spotless%20glass%20surfaces%20professional%20cleaning%20results%20bright%20contemporary%20workspace%20with%20emerald%20and%20gold%20accents&width=1440&height=1024&seq=cleaning-hero&orientation=landscape')`
                    }}
                >
                    <div className="absolute inset-0 bg-emerald-900/70"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Professional Cleaning Services
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Premium eco-friendly cleaning solutions for offices, hotels, and residential properties across Dubai
                    </p>
                    <button className="bg-amber-600 text-white px-8 py-4 text-lg !rounded-button hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
                        Book Cleaning Service
                    </button>
                </div>
            </section>

            {/* Service Categories */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">Our Cleaning Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive cleaning solutions tailored to meet the unique needs of different environments
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {servicePackages.map((service, index) => (
                            <div key={index} className="bg-white p-8 !rounded-button shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                                <div className="text-amber-600 text-5xl mb-6 text-center">
                                    <i className={service.icon}></i>
                                </div>
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Packages Detail */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-emerald-800 mb-6">Service Packages & Pricing</h2>
                        <div className="flex justify-center space-x-4 mb-8">
                            {servicePackages.map((service) => (
                                <button
                                    key={service.type}
                                    onClick={() => setSelectedService(service.type)}
                                    className={`px-6 py-3 !rounded-button font-semibold cursor-pointer whitespace-nowrap transition-colors ${selectedService === service.type
                                            ? 'bg-amber-600 text-white'
                                            : 'bg-gray-100 text-emerald-800 hover:bg-gray-200'
                                        }`}
                                >
                                    <i className={`${service.icon} mr-2`}></i>
                                    {service.title}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {servicePackages.find(s => s.type === selectedService)?.packages.map((pkg, index) => (
                            <div key={index} className="bg-gray-50 p-8 !rounded-button border-2 border-transparent hover:border-amber-600 transition-all duration-300">
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
                                <button className="w-full bg-amber-600 text-white py-3 !rounded-button hover:bg-amber-700 transition-colors cursor-pointer whitespace-nowrap">
                                    Choose Package
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cleaning Process */}
            <section id="process" className="py-20 bg-emerald-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Cleaning Process</h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            A systematic approach ensuring consistent, high-quality results every time
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {cleaningProcess.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <i className={`${step.icon} text-white text-2xl`}></i>
                                </div>
                                <div className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-white/80 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before/After Gallery */}
            <section id="gallery" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">Before & After Gallery</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See the remarkable transformations achieved through our professional cleaning services
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryImages.map((item, index) => (
                            <div key={index} className="bg-white !rounded-button shadow-lg overflow-hidden">
                                <div className="relative">
                                    <div className="grid grid-cols-2 gap-1">
                                        <div className="relative">
                                            <img
                                                src={item.before}
                                                alt="Before cleaning"
                                                className="w-full h-48 object-cover object-top"
                                            />
                                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs !rounded-button">
                                                Before
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <img
                                                src={item.after}
                                                alt="After cleaning"
                                                className="w-full h-48 object-cover object-top"
                                            />
                                            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs !rounded-button">
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eco-Friendly Approach */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-8">Eco-Friendly Cleaning Solutions</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="text-amber-600 text-2xl mr-4 mt-1">
                                        <i className="fas fa-leaf"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-emerald-800 mb-2">Green Certified Products</h3>
                                        <p className="text-gray-600">We use only environmentally certified cleaning products that are safe for your family, pets, and the planet.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-amber-600 text-2xl mr-4 mt-1">
                                        <i className="fas fa-shield-alt"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-emerald-800 mb-2">Health-Safe Practices</h3>
                                        <p className="text-gray-600">Our cleaning methods prioritize indoor air quality and eliminate harmful chemicals from your environment.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-amber-600 text-2xl mr-4 mt-1">
                                        <i className="fas fa-recycle"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-emerald-800 mb-2">Sustainable Methods</h3>
                                        <p className="text-gray-600">We implement waste reduction strategies and use reusable materials wherever possible.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-amber-600 text-2xl mr-4 mt-1">
                                        <i className="fas fa-award"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-emerald-800 mb-2">Environmental Certifications</h3>
                                        <p className="text-gray-600">Certified by leading environmental organizations for our commitment to sustainable cleaning practices.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://readdy.ai/api/search-image?query=eco-friendly%20cleaning%20products%20with%20green%20leaves%20natural%20ingredients%20sustainable%20bottles%20environmental%20protection%20clean%20white%20background%20professional%20product%20photography&width=600&height=500&seq=eco-products&orientation=portrait"
                                alt="Eco-friendly cleaning products"
                                className="w-full h-96 object-cover object-top !rounded-button shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">Service Areas in Dubai</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We provide professional cleaning services across Dubai's key business and residential districts
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="text-amber-600 text-2xl mr-4">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-emerald-800">Business Bay</h3>
                                    <p className="text-gray-600">Corporate offices and commercial towers</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-amber-600 text-2xl mr-4">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-emerald-800">Dubai Marina</h3>
                                    <p className="text-gray-600">Luxury hotels and residential towers</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-amber-600 text-2xl mr-4">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-emerald-800">Downtown Dubai</h3>
                                    <p className="text-gray-600">Premium offices and hospitality venues</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-amber-600 text-2xl mr-4">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-emerald-800">Palm Jumeirah</h3>
                                    <p className="text-gray-600">Luxury villas and resort properties</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-amber-600 text-2xl mr-4">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-emerald-800">DIFC & ADGM</h3>
                                    <p className="text-gray-600">Financial district offices and facilities</p>
                                </div>
                            </div>
                            <div className="bg-amber-600 text-white p-4 !rounded-button">
                                <p className="font-semibold">Service Radius: 50km from Dubai city center</p>
                                <p className="text-sm mt-1">Contact us for locations outside our standard service area</p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://readdy.ai/api/search-image?query=Dubai%20city%20skyline%20map%20with%20modern%20skyscrapers%20business%20districts%20marina%20palm%20jumeirah%20aerial%20view%20professional%20service%20coverage%20area&width=600&height=500&seq=dubai-map&orientation=portrait"
                                alt="Dubai service areas map"
                                className="w-full h-96 object-cover object-top !rounded-button shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking System */}
            <section id="booking" className="py-20 bg-emerald-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Book Your Cleaning Service</h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Schedule your professional cleaning service online and get an instant quote
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <form onSubmit={handleBookingSubmit} className="bg-white p-8 !rounded-button shadow-xl">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-emerald-800 font-semibold mb-2">Service Type</label>
                                    <select
                                        value={bookingForm.service}
                                        onChange={(e) => handleInputChange('service', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 !rounded-button focus:outline-none focus:border-amber-600 text-sm appearance-none cursor-pointer"
                                    >
                                        <option value="office">Office Cleaning</option>
                                        <option value="hotel">Hotel Cleaning</option>
                                        <option value="residential">Residential Cleaning</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-emerald-800 font-semibold mb-2">Preferred Date</label>
                                    <input
                                        type="date"
                                        value={bookingForm.date}
                                        onChange={(e) => handleInputChange('date', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 !rounded-button focus:outline-none focus:border-amber-600 text-sm cursor-pointer"
                                    />
                                </div>
                                <div>
                                    <label className="block text-emerald-800 font-semibold mb-2">Preferred Time</label>
                                    <select
                                        value={bookingForm.time}
                                        onChange={(e) => handleInputChange('time', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 !rounded-button focus:outline-none focus:border-amber-600 text-sm appearance-none cursor-pointer"
                                    >
                                        <option value="">Select Time</option>
                                        <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                                        <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                                        <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-emerald-800 font-semibold mb-2">Area Size (sq ft)</label>
                                    <input
                                        type="number"
                                        value={bookingForm.area}
                                        onChange={(e) => handleInputChange('area', e.target.value)}
                                        placeholder="Enter area size"
                                        className="w-full px-4 py-3 border border-gray-300 !rounded-button focus:outline-none focus:border-amber-600 text-sm"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label className="block text-emerald-800 font-semibold mb-2">Special Requirements</label>
                                <textarea
                                    rows={4}
                                    value={bookingForm.requirements}
                                    onChange={(e) => handleInputChange('requirements', e.target.value)}
                                    placeholder="Any specific cleaning requirements or instructions..."
                                    className="w-full px-4 py-3 border border-gray-300 !rounded-button focus:outline-none focus:border-amber-600 text-sm resize-none"
                                ></textarea>
                            </div>
                            <div className="mt-8 flex flex-col md:flex-row gap-4">
                                <button
                                    type="submit"
                                    className="flex-1 bg-amber-600 text-white py-3 !rounded-button hover:bg-amber-700 transition-colors font-semibold cursor-pointer whitespace-nowrap"
                                >
                                    Book Now
                                </button>
                                <button
                                    type="button"
                                    className="flex-1 bg-gray-100 text-emerald-800 py-3 !rounded-button hover:bg-gray-200 transition-colors font-semibold cursor-pointer whitespace-nowrap"
                                >
                                    Get Instant Quote
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">Client Testimonials</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Hear what our satisfied clients say about our professional cleaning services
                        </p>
                    </div>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="bg-white p-8 md:p-12 !rounded-button shadow-xl">
                            <div className="text-amber-600 text-6xl mb-6 text-center">
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
                                        <div className="font-bold text-emerald-800 text-lg">{testimonials[currentTestimonial].name}</div>
                                        <div className="text-gray-600">{testimonials[currentTestimonial].company}</div>
                                    </div>
                                </div>
                                <div className="flex justify-center mb-6">
                                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                        <i key={i} className="fas fa-star text-amber-600 text-xl mx-1"></i>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${index === currentTestimonial ? 'bg-amber-600' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-emerald-800">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for Professional Cleaning?</h2>
                    <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                        Transform your space with our premium cleaning services. Contact us today for a free consultation and quote.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <button className="bg-amber-600 text-white px-8 py-4 text-lg !rounded-button hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
                            Book Professional Cleaning
                        </button>
                        <div className="flex items-center space-x-6 text-white">
                            <a href="tel:+971xxxxxxxx" className="flex items-center hover:text-amber-400 transition-colors cursor-pointer">
                                <i className="fas fa-phone mr-2"></i>
                                +971 XX XXX XXXX
                            </a>
                            <a href="https://wa.me/971xxxxxxxx" className="flex items-center hover:text-amber-400 transition-colors cursor-pointer">
                                <i className="fab fa-whatsapp mr-2"></i>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-emerald-900 text-white py-12 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-2xl font-bold mb-4">KARUBID</div>
                            <p className="text-white/80 mb-4">
                                Professional cleaning services with eco-friendly solutions for offices, hotels, and homes across Dubai.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-amber-600 hover:text-white cursor-pointer">
                                    <i className="fab fa-facebook text-xl"></i>
                                </a>
                                <a href="#" className="text-amber-600 hover:text-white cursor-pointer">
                                    <i className="fab fa-instagram text-xl"></i>
                                </a>
                                <a href="#" className="text-amber-600 hover:text-white cursor-pointer">
                                    <i className="fab fa-linkedin text-xl"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#services" className="text-white/80 hover:text-amber-400 cursor-pointer">Our Services</a></li>
                                <li><a href="#process" className="text-white/80 hover:text-amber-400 cursor-pointer">Process</a></li>
                                <li><a href="#gallery" className="text-white/80 hover:text-amber-400 cursor-pointer">Gallery</a></li>
                                <li><a href="#booking" className="text-white/80 hover:text-amber-400 cursor-pointer">Book Now</a></li>
                                <li><a href="https://readdy.ai/home/32d18f95-c458-431f-b364-32e0a9abf8c9/a4c588a0-a16d-4c5d-bbd6-5c4998998175" data-readdy="true" className="text-white/80 hover:text-amber-400 cursor-pointer">All Services</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Cleaning Services</h3>
                            <ul className="space-y-2">
                                <li><span className="text-white/80">Office Cleaning</span></li>
                                <li><span className="text-white/80">Hotel Cleaning</span></li>
                                <li><span className="text-white/80">Residential Cleaning</span></li>
                                <li><span className="text-white/80">Deep Cleaning</span></li>
                                <li><span className="text-white/80">Eco-Friendly Solutions</span></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                            <div className="space-y-3 text-white/80">
                                <p><i className="fas fa-map-marker-alt text-amber-600 mr-2"></i>Dubai, UAE</p>
                                <p><i className="fas fa-phone text-amber-600 mr-2"></i>+971 XX XXX XXXX</p>
                                <p><i className="fas fa-envelope text-amber-600 mr-2"></i>cleaning@karubidtechnical.com</p>
                                <p><i className="fas fa-clock text-amber-600 mr-2"></i>24/7 Service Available</p>
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

            <style jsx>{`
        .!rounded-button {
          border-radius: 8px;
        }
        html {
          scroll-behavior: smooth;
        }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
        select {
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
        }
      `}</style>
        </div>
    );
};

export default CleaningPage;
