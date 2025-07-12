import { motion } from 'framer-motion';
import useHomeStore from '@/store/Home';
import { useEffect } from 'react';
import { aboutFeatures } from '@/lib/Data';

function About() {
    const { projectsCount, clientsCount, experienceCount, setProjectsCount, setClientsCount, setExperienceCount } = useHomeStore();

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
    return (
        <motion.section
            id="about"
            className="py-16 sm:py-20 bg-primary/5"
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
    )
}

export default About
