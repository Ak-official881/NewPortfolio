import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 lg:px-12 relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-white mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-panel p-8 rounded-2xl relative group"
                    >
                        {/* Subtle glow effect behind card */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                        <div className="relative space-y-6 text-lg text-slate-300 font-light leading-relaxed">
                            <p>
                                I am <strong className="text-white font-medium">Abhishek</strong>, a software developer with strong problem-solving skills and expertise in C++ and web development. I specialize in building scalable, high-performance applications with a focus on efficiency and user experience.
                            </p>
                            <p>
                                My professional focus lies in building interactive and efficient web applications using React.js, Next.js, and JavaScript. With a focus on performance and scalability, I ensure seamless user experiences and optimized system architecture.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {/* Stats/Highlight cards */}
                        {[
                            { title: "Experience", desc: "MERN Stack" },
                            { title: "Languages", desc: "C++ & JS" },
                            { title: "Architecture", desc: "Scalable Systems" },
                            { title: "Problem Solving", desc: "DSA Practitioner" }
                        ].map((item, index) => (
                            <div key={index} className="glass-panel p-6 rounded-2xl border border-glassBorder hover:border-cyan-500/30 transition-colors">
                                <h3 className="text-cyan-400 font-outfit font-semibold text-xl mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
