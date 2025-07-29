import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Settings } from 'lucide-react';
import { GiVacuumCleaner } from 'react-icons/gi';
function Services() {
    return (
        <motion.section
            id="services"
            className="py-16 sm:py-20 bg-primary/10 min-h-[calc(100vh-4rem)]"
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
                        className="h-full"
                    >
                        <Link to="/interior" className="group block h-full">
                            <motion.div
                                className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 h-full min-h-[320px] relative overflow-hidden flex flex-col"
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

                                <div className="relative z-10 flex flex-col h-full">
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
                                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 flex-grow">
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
                        className="h-full"
                    >
                        <Link to={"/cleaning"} className="group block h-full">
                            <motion.div
                                className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 h-full min-h-[320px] relative overflow-hidden flex flex-col"
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

                                <div className="relative z-10 flex flex-col h-full">
                                    <motion.div
                                        className="bg-gradient-to-br from-accent/20 to-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-accent/20"
                                        initial={{ rotate: 0, scale: 1 }}
                                        whileHover={{
                                            rotate: 8,
                                            scale: 1.1,
                                            transition: { duration: 0.2, ease: "easeOut" }
                                        }}
                                    >
                                        <GiVacuumCleaner className="w-8 h-8 text-accent" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                                        Cleaning Services
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 flex-grow">
                                        Professional cleaning services ensuring a hygienic, spotless environment for your home or workplace.
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

                    {/* Technical Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.25, 0.25, 0.75] }}
                        className="h-full"
                    >
                        <Link to="/technical" className="group block h-full">
                            <motion.div
                                className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 h-full min-h-[320px] relative overflow-hidden flex flex-col"
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

                                <div className="relative z-10 flex flex-col h-full">
                                    <motion.div
                                        className="bg-gradient-to-br from-accent/20 to-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-accent/20"
                                        initial={{ rotate: 0, scale: 1 }}
                                        whileHover={{
                                            rotate: 8,
                                            scale: 1.1,
                                            transition: { duration: 0.2, ease: "easeOut" }
                                        }}
                                    >
                                        <Settings className="w-8 h-8 text-accent" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                                        Technical Services
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 flex-grow">
                                        Expert technical solutions including plumbing, electrical work, masonry, carpentry, and building maintenance services.
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
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Services
