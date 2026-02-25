import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "Languages", items: ["C++", "JavaScript", "SQL", "HTML", "CSS"] },
    { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS"] },
    { category: "Backend & DB", items: ["MERN Stack", "DBMS"] },
    { category: "Concepts", items: ["DSA", "OS", "SDLC", "Optimization"] }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 lg:px-12 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-white mb-4">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-panel rounded-2xl p-6 border border-glassBorder hover:bg-white/5 transition-colors group"
                        >
                            <h3 className="text-xl font-outfit font-semibold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-lg bg-slate-800/80 text-cyan-200 text-sm font-medium border border-cyan-500/10 hover:border-cyan-500/40 hover:bg-slate-800 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
