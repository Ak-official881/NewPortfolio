import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
    {
        title: "BMI Wala",
        description: "A simple and lightweight tool to check your BMI. Enter your details and get instant health insights!",
        tech: ["React.js", "CSS", "Vite"],
        live: "https://bmi-wala.vercel.app/",
        github: "https://github.com/Ak-official881/BMI-Wala",
        image: "/bmi.png"
    },
    {
        title: "Fussion of Weather (Basic FOW)",
        description: "A sleek and dynamic weather app for real-time updates. Enter your location and get instant forecasts with ease!",
        tech: ["JavaScript", "API", "HTML/CSS"],
        live: "http://fussion-of-weather.vercel.app/",
        github: "https://github.com/Ak-official881/Weather-app",
        image: "/fow.png"
    },
    {
        title: "TaskUs",
        description: "A comprehensive task manager application to organize and track your daily tasks effectively.",
        tech: ["React.js", "Tailwind CSS", "Node.js"],
        live: "https://task-us.vercel.app/log-in",
        github: "https://github.com/Ak-official881/taskus",
        image: "/taskus.png"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 lg:px-12 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-white mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="group glass-panel rounded-2xl overflow-hidden border border-glassBorder hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full bg-slate-900/40"
                        >
                            {/* Project Image */}
                            <div className="w-full h-52 relative overflow-hidden bg-slate-800/50">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <Code2 className="w-16 h-16 text-slate-700 group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                )}
                            </div>

                            <div className="px-8 pb-8 pt-6 flex flex-col flex-grow relative z-20">
                                <h3 className="text-2xl font-outfit font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <a href={project.live} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-slate-900 text-white transition-all font-medium text-sm">
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                    <a href={project.github} className="p-3 rounded-xl bg-white/5 hover:bg-white/20 text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
