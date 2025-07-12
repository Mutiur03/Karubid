import { motion } from 'framer-motion'
import { projects } from '@/lib/Data'
function Projects() {
    return (
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
                                transition={{ duration: 0.2 }}
                            >
                                <motion.div
                                    className="text-center text-primary-foreground p-6"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.2 }}
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
    )
}

export default Projects
