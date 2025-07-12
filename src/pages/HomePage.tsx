import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Settings, ArrowRight, BrushCleaning, Facebook, Instagram, Linkedin, Twitter, Star } from 'lucide-react';
import { testimonials, projects, aboutFeatures, contactInfo } from '@/lib/Data';
import useHomeStore from '@/store/Home';
import Hero from '@/components/HomePage/Hero';

const HomePage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const location = useLocation();

    // Use Zustand store for counter values
    const { projectsCount, clientsCount, experienceCount, setProjectsCount, setClientsCount, setExperienceCount } = useHomeStore();

    const socialIcons = [Facebook, Instagram, Linkedin, Twitter];

    // Create statsData with store values
    const statsData = [
        {
            count: projectsCount,
            label: "Completed Projects",
            suffix: "+",
        },
        {
            count: clientsCount,
            label: "Satisfied Clients",
            suffix: "+",
        },
        {
            count: experienceCount,
            label: "Years Experience",
            suffix: "+",
        },
        {
            count: "24/7",
            label: "Support Available",
            suffix: "",
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

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
    }, [setProjectsCount, setClientsCount, setExperienceCount]);

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
            <Hero />
            {/* Services Section with scroll animations */}
            <motion.section
                id="services"
                className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
                    >
                        <motion.div
                            className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 136, 102, 0.2)" }}
                            transition={{ duration: 0.5 }}
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
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
                    >
                        {/* Interior Design Service */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
                        >
                            <Link to="/interior" className="group block">
                                <motion.div
                                    className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 h-full relative overflow-hidden"
                                    initial={{ scale: 1, y: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                                    whileHover={{
                                        scale: 1.03,
                                        y: -8,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
                                        transition: { duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }
                                    }}
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
                                            initial={{ rotate: 0, scale: 1 }}
                                            whileHover={{
                                                rotate: 8,
                                                scale: 1.1,
                                                transition: { duration: 0.2, ease: "easeOut" }
                                            }}
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
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.25, 0.25, 0.75] }}
                        >
                            <motion.div
                                className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 h-full relative overflow-hidden group cursor-pointer"
                                initial={{ scale: 1, y: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                                whileHover={{
                                    scale: 1.03,
                                    y: -8,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
                                    transition: { duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }
                                }}
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
                                        initial={{ rotate: 0, scale: 1 }}
                                        whileHover={{
                                            rotate: 8,
                                            scale: 1.1,
                                            transition: { duration: 0.2, ease: "easeOut" }
                                        }}
                                    >
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
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.25, 0.25, 0.75] }}
                        >
                            <motion.div
                                className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 h-full relative overflow-hidden group cursor-pointer"
                                initial={{ scale: 1, y: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                                whileHover={{
                                    scale: 1.03,
                                    y: -8,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
                                    transition: { duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }
                                }}
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
                                        initial={{ rotate: 0, scale: 1 }}
                                        whileHover={{
                                            rotate: 8,
                                            scale: 1.1,
                                            transition: { duration: 0.2, ease: "easeOut" }
                                        }}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
                    >
                        <motion.div
                            className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 136, 102, 0.2)" }}
                            transition={{ duration: 0.5 }}
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
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl shadow-lg bg-card border border-border/50 cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }
                                }}
                                viewport={{ once: true }}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }
                            }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
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
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
                            >
                                {statsData.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center lg:text-left group"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
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
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }
                            }}
                            viewport={{ once: true }}
                        >
                            {/* Enhanced Feature Cards */}
                            {aboutFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4 p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
                                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                >
                                    <motion.div
                                        className={`${feature.bgColor} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${feature.borderColor}`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <feature.icon className={`w-6 h-6 ${feature.textColor}`} />
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
                    >
                        <motion.div
                            className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 border border-accent/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
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
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                transition: { duration: 0.5, ease: [0.25, 0.25, 0.25, 0.75] }
                            }}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
                    >
                        <motion.div
                            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 border border-accent/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
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
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }
                            }}
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
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }
                            }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Contact Information</h3>
                                <div className="space-y-4 sm:space-y-6">
                                    {contactInfo.map((contact, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start space-x-3 sm:space-x-4 group"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
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
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, duration: 0.3 }}
                                            whileHover={{
                                                scale: 1.1,
                                                y: -3,
                                                backgroundColor: "rgba(255, 136, 102, 1)",
                                                color: "white",
                                                boxShadow: "0 10px 25px -5px rgba(255, 136, 102, 0.25)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
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