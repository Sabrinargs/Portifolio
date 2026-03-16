import FotoGit from "../assets/images/git.png"
import FotoLinkedin from "../assets/images/linkedin.png"
import { motion } from "framer-motion";

function Navbar() {
    return (
        <section id="Navbar" className="bg-[#202336] shadow-lg rounded-lg px-10 py-4 flex gap-4 items-center">

            <div className="flex">
                <h3 className="text-white font-bold text-xl">S</h3>
                <h3 className="text-[#FF4B57] font-bold text-xl">R</h3>
                <h3 className="text-white font-bold text-xl">GS</h3>
            </div>

            <div className="flex gap-3 items-center">

                <motion.a
                    href="https://github.com/Sabrinargs"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    transition={{ duration: 0.2 }}
                >
                    <img
                        src={FotoGit}
                        alt="GitHub Sabrina"
                        className="w-8 h-8 object-cover"
                    />
                </motion.a>

                <motion.a
                    href="https://www.linkedin.com/in/sabrina-ribeiro-b11614246/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    transition={{ duration: 0.2 }}
                >
                    <img
                        src={FotoLinkedin}
                        alt="LinkedIn Sabrina"
                        className="w-8 h-8 object-cover"
                    />
                </motion.a>

            </div>

            <div className="flex gap-8 ml-auto text-white">
                <motion.h3
                    whileHover={{ color: "#FF4B57" }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer"
                >
                    HOME
                </motion.h3>
                <motion.h3
                    whileHover={{ color: "#FF4B57" }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer"
                >
                    SKILLS
                </motion.h3>
                <motion.h3
                    whileHover={{ color: "#FF4B57" }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer"
                >
                    PROJECTS
                </motion.h3>
                <motion.h3
                    whileHover={{ color: "#FF4B57" }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer"
                >
                    CONTACT
                </motion.h3>
            </div>

        </section>
    )
}

export default Navbar