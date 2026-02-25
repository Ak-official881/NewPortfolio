import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-glassBorder bg-background relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-400 text-sm font-light">
                    &copy; {year} Abhishek. All rights reserved.
                </p>

                <p className="text-slate-400 text-sm font-light flex items-center gap-1">
                    Designed & Built with <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400 animate-pulse" />
                </p>
            </div>
        </footer>
    );
};

export default Footer;
