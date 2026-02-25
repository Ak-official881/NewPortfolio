import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Code2 } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 px-6 lg:px-12 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium text-cyan-300"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            Available for new opportunities
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl xl:text-7xl font-outfit font-extrabold tracking-tight text-white leading-[1.1]">
                            Hi, I'm <br />
                            <span className="text-gradient">Abhishek</span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-medium text-slate-300">
                            Software Developer
                        </h2>
                    </div>

                    <p className="max-w-xl text-lg text-slate-400 leading-relaxed font-light">
                        Tech Enthusiast • Web & Data Explorer • C++ & DSA Practitioner. <br />
                        I specialize in building scalable, high-performance web applications and crafting interactive digital experiences. Let's build cool projects together! 🚀💻
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                        >
                            View Projects
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-panel text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                        >
                            <Mail className="w-5 h-5" />
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Right side Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:flex justify-center lg:justify-end"
                >
                    <div className="w-full max-w-[400px] xl:max-w-[480px] aspect-square rounded-full border border-glassBorder glass-panel flex items-center justify-center p-2 relative overflow-hidden group">
                        {/* Spinning glowing border wrappers */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full border-2 border-cyan-500/30 animate-spin-slow" style={{ animationDuration: '20s' }} />
                        <div className="absolute inset-4 rounded-full border-t-2 border-r-2 border-blue-500/40 animate-spin-reverse-slow" style={{ animationDuration: '15s' }} />

                        {/* Profile Image container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border border-glassBorder z-10 bg-slate-900">
                            <img
                                src="/profile.jpg"
                                alt="Abhishek's Profile"
                                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
                                onError={(e) => {
                                    e.target.src = "https://ui-avatars.com/api/?name=Abhishek&size=512&background=0D1117&color=22D3EE";
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
