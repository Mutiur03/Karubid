import { motion } from 'framer-motion';
import { Users, Heart, DollarSign, Shield, Package, MessageCircle, Wrench, FileText, Headphones, LifeBuoy } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: Users,
            title: "Skilled Workforce",
            description: "Our team includes highly trained masons, tile laborers, plumbers, painters, and carpenters who deliver exceptional results. We invest in ongoing training to ensure our staff stays updated on industry trends and techniques"
        },
        {
            icon: Heart,
            title: "Client Centric Approach",
            description: "We work closely with clients to understand their unique requirements and offer tailored solutions that exceed expectations. Our commitment to customer satisfaction is unwavering."
        },
        {
            icon: DollarSign,
            title: "Competitive Pricing",
            description: "We provide high-quality services at cost-effective rates, ensuring value for money without compromising on quality"
        },
        {
            icon: Shield,
            title: "Sustainability and Safety",
            description: "We are committed to environmentally friendly practices and adhere to strict safety standards to ensure the well-being of our clients and workers"
        },
        {
            icon: Package,
            title: "End to End Solutions",
            description: "From planning to execution, we provide comprehensive solutions, eliminating the need for multiple contractors and ensuring a seamless project experience."
        }
    ];

    const proposalTerms = [
        {
            icon: MessageCircle,
            title: "Initial Consultation",
            description: "A free consultation to assess your requirements and understand your vision"
        },
        {
            icon: Wrench,
            title: "Full Service",
            description: "360-degree support covering all aspects of your construction project"
        },
        {
            icon: FileText,
            title: "Flexible Contracts",
            description: "Tailored service agreements based on your specific needs and requirements"
        },
        {
            icon: Headphones,
            title: "Dedicated Support",
            description: "A single point of contact for seamless project coordination and communication"
        },
        {
            icon: LifeBuoy,
            title: "Post-Project Support",
            description: "Ongoing maintenance and support options to ensure long-term satisfaction"
        }
    ];

    return (
        <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 bg-gray-800 text-white relative overflow-hidden">
            {/* Geometric Pattern Background */}
            {/* <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div> */}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center sm:text-left mb-12 sm:mb-16"
                >
                    <p className="text-xs sm:text-sm uppercase tracking-wider text-accent mb-3 sm:mb-4 font-medium">WHY CHOOSE US</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight text-white max-w-4xl mx-auto sm:mx-0 px-4 sm:px-0">
                        We work to an extremely high<br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>standard of customer satisfaction
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group p-4 sm:p-0"
                        >
                            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gray-700 rounded-full mb-4 sm:mb-6 mx-auto group-hover:bg-gray-600 transition-all duration-300 touch-manipulation">
                                <reason.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                            </div>

                            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white px-2 sm:px-0">
                                {reason.title}
                            </h3>

                            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm px-2 sm:px-0">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Proposal Terms Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="p-4 sm:p-6 lg:p-8"
                >
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 text-center px-4">
                        Proposal Terms
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 lg:mb-12 text-center max-w-3xl mx-auto px-4">
                        We are prepared to offer you the following benefits:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                        {proposalTerms.map((term, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center group p-4 sm:p-0"
                            >
                                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gray-700 rounded-full mb-4 sm:mb-6 mx-auto group-hover:bg-gray-600 transition-all duration-300 touch-manipulation">
                                    <term.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                </div>

                                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white px-2 sm:px-0">
                                    {term.title}
                                </h4>

                                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm px-2 sm:px-0">
                                    {term.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
