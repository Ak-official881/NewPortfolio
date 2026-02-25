import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-panel border-b border-glassBorder' : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <Code2 className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    <span className="text-2xl font-outfit font-bold tracking-tight text-white group-hover:text-cyan-100 transition-colors">
                        Abhishek<span className="text-cyan-400">.</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://drive.google.com/file/d/1Jyqtf3ukbFzCjSwCAJN5o5aQ-giaMRze/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 font-medium text-sm shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    >
                        Resume View
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-300 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-panel border-b border-glassBorder animate-in slide-in-from-top-2">
                    <div className="flex flex-col px-6 py-4 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-cyan-400 font-medium py-2 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://drive.google.com/file/d/1Jyqtf3ukbFzCjSwCAJN5o5aQ-giaMRze/view?usp=drivesdk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 text-center px-5 py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Resume View
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
