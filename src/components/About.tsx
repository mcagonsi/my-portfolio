import { motion } from "framer-motion";
import TechStack from "./TechStack";
export default function About() {
    return (
        <section id="about" className="py-20 px-4 bg-white text-black max-w-full mx-auto">
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-center mb-12">
                About Me
            </motion.h2>

            {/* 2-Column Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-gray-500 text-lg leading-relaxed">
                <p className="text-center md:text-left">
                    I started my journey in the medical field, driven by a passion for problem-solving and making a tangible impact. Over time, I realized my curiosity extended beyond healthcare — I was drawn to technology’s ability to create scalable, innovative solutions.
                </p>
                <p className="xl:mt-20 text-center md:text-left">
                    Now, as a Fullstack Developer, I channel my analytical thinking and attention to detail into building high-performance applications. With hands-on experience in frontend and backend development, I specialize in crafting seamless digital experiences and optimizing systems for efficiency. My unique background allows me to approach challenges with a fresh perspective, blending logic, creativity, and a strong problem-solving mindset. Let’s build something transformative together.
                </p>
            </motion.div>

            {/* Why Hire Me */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }} className="mt-20">
                <h3 className="text-2xl font-semibold text-center mb-6">
                    Why You Should Hire Me
                </h3>
                <div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-7">
                    {[
                        "Strong Problem-Solving Skills",
                        "Critical Thinking",
                        "Leadership Skills",
                        "Communication & Collaboration",
                        "Excellent Time-Management Skills",
                        "Adaptability & Continuous Learning",
                    ].map((skill, i) => (
                        <motion.span
                            key={i}
                            className="px-4 py-2 border border-white rounded-full text-md hover:bg-white hover:text-black transition"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
                <motion.div>
                    <TechStack />
                </motion.div>
            </motion.div>
        </section>
    );
}