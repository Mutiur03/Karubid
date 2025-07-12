import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/lib/Data'
import { Star } from 'lucide-react'
function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);
    return (
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
    )
}

export default Testimonials
