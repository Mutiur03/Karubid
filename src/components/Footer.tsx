import { Instagram, Facebook, Linkedin } from 'lucide-react';
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
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
                                <span className="text-white/80">Interior Design & Fit-out</span>
                            </li>
                            <li>
                                <span className="text-white/80">Professional Cleaning</span>
                            </li>
                            <li>
                                <span className="text-white/80">Technical Services</span>
                            </li>
                            {/* <li>
                                <span className="text-white/80">Space Planning</span>
                            </li>
                            <li>
                                <span className="text-white/80">Maintenance Solutions</span>
                            </li> */}
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
                                    onClick={() => { const element = document.getElementById('projects'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }}
                                    className="text-white/80 hover:text-[#f47c48] cursor-pointer"
                                >
                                    Projects
                                </button>
                            </li>
                            {/* <li>
                                <button
                                    onClick={() => { const element = document.getElementById('why-choose-us'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }}
                                    className="text-white/80 hover:text-[#f47c48] cursor-pointer"
                                >
                                    Process
                                </button>
                            </li> */}
                            {/* <li>
                                <button
                                    onClick={() => { const element = document.getElementById('team'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } }}
                                    className="text-white/80 hover:text-[#f47c48] cursor-pointer"
                                >
                                    Team
                                </button>
                            </li> */}
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