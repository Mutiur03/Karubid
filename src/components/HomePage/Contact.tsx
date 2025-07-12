import { contactInfo } from '@/lib/Data';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

function Contact() {
    const socialIcons = [Facebook, Instagram, Linkedin, Twitter];
    return (
        <motion.section
            id="contact"
            className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background via-secondary/5 to-background"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-16"
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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 px-4">
                        Start Your Project Today
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                        Ready to transform your space? Contact us for a free consultation
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
                    <motion.div
                        className="bg-gradient-to-br from-secondary/50 to-input/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-border/50"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }
                        }}
                        viewport={{ once: true }}
                    >
                        <form className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <motion.div
                                    className="group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label className="block text-foreground font-semibold mb-2 text-sm sm:text-base group-focus-within:text-accent transition-colors duration-300">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-sm sm:text-base bg-background/80 backdrop-blur-sm hover:bg-background focus:bg-background touch-manipulation"
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
                                        className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-sm sm:text-base bg-background/80 backdrop-blur-sm hover:bg-background focus:bg-background touch-manipulation"
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
                                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-sm sm:text-base bg-background/80 backdrop-blur-sm hover:bg-background focus:bg-background touch-manipulation"
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
                                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none text-sm sm:text-base bg-background/80 backdrop-blur-sm hover:bg-background focus:bg-background touch-manipulation"
                                    placeholder="Tell us about your project"
                                ></textarea>
                            </motion.div>
                            <motion.button
                                className="w-full bg-accent text-accent-foreground py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg touch-manipulation"
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
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8">Contact Information</h3>
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
                                            className="bg-accent/10 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent/20"
                                            whileHover={{
                                                backgroundColor: "rgba(255, 136, 102, 0.2)",
                                                scale: 1.1
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base group-hover:text-accent transition-colors duration-300">{contact.title}</h4>
                                            <p className="text-muted-foreground text-xs sm:text-sm md:text-base whitespace-pre-line">{contact.content}</p>
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
                                        className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent border border-accent/20 touch-manipulation"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3 }}
                                        whileHover={{
                                            scale: 1.1,
                                            y: -3,

                                            backgroundColor: "rgba(255, 136, 102, 1)",
                                            color: "white",
                                            boxShadow: "0 10px 25px -5px rgba(255, 136, 102, 0.25)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact
