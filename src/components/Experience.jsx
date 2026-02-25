import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-white mb-4">
                        Experience & <span className="text-gradient">Education</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">

                    {/* Experience Item */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500/30 bg-slate-900 group-hover:bg-cyan-500/10 text-cyan-400 group-hover:text-cyan-300 shadow shadow-cyan-500/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                            <Briefcase className="w-5 h-5" />
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl border border-glassBorder hover:border-cyan-500/30 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                                <h3 className="font-outfit font-bold text-xl text-white">Web Developer Intern</h3>
                                <span className="text-sm font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full w-fit">Jan 2025 - July 2025</span>
                            </div>
                            <div className="text-slate-300 font-medium mb-4 flex items-center gap-2">
                                Zidio Development
                            </div>
                            <p className="text-slate-400 font-light text-sm leading-relaxed">
                                Working as a Web-Intern contributing to various scalable projects. Developing interactive user interfaces and optimizing performance using modern web technologies.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education Item */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/30 bg-slate-900 group-hover:bg-blue-500/10 text-blue-400 group-hover:text-blue-300 shadow shadow-blue-500/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                            <GraduationCap className="w-5 h-5" />
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl border border-glassBorder hover:border-blue-500/30 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                                <h3 className="font-outfit font-bold text-xl text-white">Degree in Electronics and Communication Engineering</h3>
                                <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full w-fit">2021 - 2025</span>
                            </div>
                            <div className="text-slate-300 font-medium mb-4">
                                Chandigarh Engineering College
                            </div>
                            <p className="text-slate-400 font-light text-sm leading-relaxed">
                                Focused on Data Structures, Algorithms, Object-Oriented Programming in C++, and Database Management Systems.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
