import { Instagram, Facebook, Linkedin } from 'lucide-react';
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="text-2xl font-bold mb-4">KARUBID</div>
                        <p className="text-white/80 mb-6">
                            Creating exceptional interior spaces that inspire and delight.
                            Your vision, our expertise.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300"
                            >
                                <Instagram className="w-5 h-5 text-[#f47c48] transition-colors duration-300" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300"
                            >
                                <Facebook className="w-5 h-5 text-[#f47c48] transition-colors duration-300" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300"
                            >
                                <Linkedin className="w-5 h-5 text-[#f47c48] transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <span className="text-white/80">Residential Design</span>
                            </li>
                            <li>
                                <span className="text-white/80">Commercial Design</span>
                            </li>
                            <li>
                                <span className="text-white/80">Space Planning</span>
                            </li>
                            <li>
                                <span className="text-white/80">Custom Furniture</span>
                            </li>
                            <li>
                                <span className="text-white/80">Color Consultation</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => { const element = document.getElementById('services'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }}
                                    className="text-white/80 hover:text-[#f47c48] cursor-pointer"
                                >
                                    Services
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => { const element = document.getElementById('portfolio'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }}
                                    className="text-white/80 hover:text-[#f47c48] cursor-pointer"
                                >
                                    Portfolio
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => { const element = document.getElementById('process'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }}
                                    className="text-white/80 hover:text-[#f47c48] cursor-pointer"
                                >
                                    Process
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => { const element = document.getElementById('team'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }}
                                    className="text-white/80 hover:text-[#f47c48] cursor-pointer"
                                >
                                    Team
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => { const element = document.getElementById('contact'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }}
                                    className="text-white/80 hover:text-[#f47c48] cursor-pointer"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-white/80 mb-4">
                            Subscribe for design inspiration and project updates.
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:border-[#f47c48]"
                            />
                            <button className="w-full bg-[#f47c48] text-white py-3 rounded-lg hover:bg-[#e6947c] transition-colors font-semibold">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/20 pt-8 text-center">
                    <p className="text-white/60">
                        © 2025 KARUBID Tech. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;