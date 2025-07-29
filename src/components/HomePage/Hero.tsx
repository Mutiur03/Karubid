import { motion, easeOut } from 'framer-motion';
import { ArrowRight, Award, Sparkles, Users } from 'lucide-react';
import { quickStats } from '@/lib/Data';

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden pt-[4rem] pb-6 sm:pb-0" // pt matches navbar height, add bottom padding for mobile
        >
            {/* Background with parallax effect */}
            <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: easeOut }}
            >
                <img
                    src="/hero.jpg"
                    alt="Modern Interior Design"
                    className="w-full h-full object-cover"
                />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/65 to-accent/45"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
            </motion.div>

            {/* Floating particles with better positioning */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-accent/40 rounded-full"
                        style={{
                            left: `${15 + Math.random() * 70}%`,
                            top: `${15 + Math.random() * 70}%`,
                        }}
                        animate={{
                            y: [-15, 15, -15],
                            x: [-8, 8, -8],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Main Content - Better centered and aligned for mobile */}
            <div className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8"> {/* Reduce horizontal padding for mobile */}
                    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-6 sm:py-8 min-h-[calc(60vh-4rem)] sm:min-h-[calc(65vh-4rem)]">
                        <motion.div
                            className="max-w-5xl lg:max-w-none w-full space-y-4 sm:space-y-6" // More vertical space for mobile
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, staggerChildren: 0.1 }}
                        >
                            {/* Badge - Mobile optimized */}
                            <motion.div
                                className="inline-flex items-center px-4 py-2 bg-accent/20 backdrop-blur-md text-accent rounded-full text-sm font-medium border border-accent/30 shadow-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 136, 102, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                >
                                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                                </motion.div>
                                Premium Services in Dhaka
                            </motion.div>

                            {/* Main Heading - Better mobile typography */}
                            <motion.div
                                className="space-y-2" // More space between heading lines for mobile
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, staggerChildren: 0.15, delayChildren: 0.3 }}
                            >
                                <motion.h1
                                    className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[0.9] tracking-tight px-2 lg:px-0"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <motion.span
                                        className="block"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                    >
                                        Transform Your
                                    </motion.span>
                                    <motion.span
                                        className="block bg-gradient-to-r from-accent via-accent/90 to-accent/80 bg-clip-text text-transparent"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        Vision Into
                                    </motion.span>
                                    <motion.span
                                        className="block text-accent drop-shadow-lg"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.7 }}
                                    >
                                        Reality
                                    </motion.span>
                                </motion.h1>
                            </motion.div>

                            {/* Subtitle - Mobile optimized */}
                            <motion.p
                                className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-white/95 max-w-md sm:max-w-2xl leading-relaxed font-light px-2 sm:px-4 lg:px-0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                Expert interior design, technical services, and professional cleaning solutions that exceed expectations.
                            </motion.p>

                            {/* CTA Buttons - Mobile responsive */}
                            <motion.div
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center lg:items-start pt-4 px-2 sm:px-4 lg:px-0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                            >
                                <motion.button
                                    onClick={() => {
                                        const element = document.getElementById('contact');
                                        if (element) {
                                            const navHeight = window.innerWidth >= 1024 ? 80 : 64;
                                            const elementPosition = element.offsetTop - navHeight;
                                            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                                        }
                                    }}
                                    className="group bg-accent text-accent-foreground px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-2xl font-semibold text-sm sm:text-base lg:text-lg shadow-2xl backdrop-blur-sm border border-accent/20 w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px] touch-manipulation"
                                    whileHover={{
                                        scale: 1.05,
                                        y: -3,
                                        boxShadow: "0 25px 50px -12px rgba(255, 136, 102, 0.4)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="flex items-center justify-center">
                                        Start Your Project
                                        <motion.div
                                            className="ml-2"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </motion.div>
                                    </span>
                                </motion.button>

                                <motion.button
                                    onClick={() => {
                                        const element = document.getElementById('projects');
                                        if (element) {
                                            const navHeight = window.innerWidth >= 1024 ? 80 : 64;
                                            const elementPosition = element.offsetTop - navHeight;
                                            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                                        }
                                    }}
                                    className="group border-2 border-white/90 text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-2xl font-semibold text-sm sm:text-base lg:text-lg backdrop-blur-md w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px] hover:bg-white/10 touch-manipulation"
                                    whileHover={{
                                        scale: 1.05,
                                        y: -3,
                                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                                        borderColor: "rgba(255, 255, 255, 1)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span className="flex items-center justify-center">
                                        View Portfolio
                                        <motion.div
                                            className="ml-2"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </motion.div>
                                    </span>
                                </motion.button>
                            </motion.div>

                            {/* Enhanced Quick Stats - Mobile responsive */}
                            <motion.div
                                className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 pt-6 px-2 sm:px-4 lg:px-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, staggerChildren: 0.1, delayChildren: 1.0 }}
                            >
                                {quickStats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border border-white/20 shadow-lg"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                                        whileHover={{
                                            scale: 1.08,
                                            y: -8,
                                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                                            boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)"
                                        }}
                                    >
                                        <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-accent drop-shadow-lg">{stat.value}</div>
                                        <div className="text-xs sm:text-sm text-white/90 font-medium">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Improved Floating Achievement Cards - Hidden on mobile */}
            <motion.div
                className="absolute bottom-12 sm:bottom-16 right-4 sm:right-6 lg:right-12 bg-accent/95 backdrop-blur-md text-accent-foreground p-3 sm:p-4 rounded-2xl shadow-2xl hidden xl:block border border-accent/30 z-20 max-w-[160px] lg:max-w-[180px]"
                initial={{ opacity: 0, x: 50, y: 20 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -10, 0],
                }}
                transition={{
                    opacity: { duration: 0.6, delay: 1.5 },
                    x: { duration: 0.6, delay: 1.5 },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1, rotate: 2, y: -10 }}
            >
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <motion.div
                        className="bg-white/20 p-1.5 sm:p-2 rounded-xl"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                    <div>
                        <div className="text-base sm:text-lg font-bold">Premium</div>
                        <div className="text-xs sm:text-sm opacity-90">Quality Service</div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="absolute top-20 sm:top-24 right-4 sm:right-6 lg:right-12 bg-primary/95 backdrop-blur-md text-primary-foreground p-3 sm:p-4 rounded-2xl shadow-2xl hidden xl:block border border-primary/30 z-20 max-w-[160px] lg:max-w-[180px]"
                initial={{ opacity: 0, x: 50, y: -20 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -8, 0],
                }}
                transition={{
                    opacity: { duration: 0.6, delay: 2.0 },
                    x: { duration: 0.6, delay: 2.0 },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1, rotate: -2, y: -10 }}
            >
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <motion.div
                        className="bg-white/20 p-1.5 sm:p-2 rounded-xl"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                        <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                    <div>
                        <div className="text-base sm:text-lg font-bold">24/7</div>
                        <div className="text-xs sm:text-sm opacity-90">Expert Support</div>
                    </div>
                </div>
            </motion.div>


        </section>
    )
}

export default Hero
