import { motion } from "framer-motion";
import IMGdEX1 from "../assets/images/ImagemdeEX1.jpg"
import IMGdEX2 from "../assets/images/ImagemdeEX2.jpg"
import IMGdEX3 from "../assets/images/ImagemdeEX3.jpeg"

function Projects() {
    return (
        <section id="Projects" className="w-full flex justify-center px-6 gap-8">

            <div className="flex items-center gap-4">
                <p className="text-[#FF4B57] text-xl font-bold tracking-widest ">
                    PROJECTS
                </p>
                <div className="relative w-1 h-20 bg-[#3F435C] rounded-lg shadow-lg flex items-center justify-center"></div>
            </div>

            <motion.div
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ duration: 0.2 }}
                className="relative w-[30rem] h-[25rem] bg-[#3F435C] rounded-lg shadow-lg flex items-start justify-center z-0 hover:z-50">
                <img
                    src={IMGdEX1}
                    alt="GitHub Sabrina"
                    className="w-full h-[15rem] object-cover rounded-lg"
                />
            </motion.div>

            <motion.div
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ duration: 0.2 }}
                className="relative w-[30rem] h-[25rem] bg-[#3F435C] rounded-lg shadow-lg flex items-start justify-center z-0 hover:z-50">
                <img
                    src={IMGdEX2}
                    alt="GitHub Sabrina"
                    className="w-full h-[15rem] object-cover rounded-lg"
                />
            </motion.div>

            <motion.div
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ duration: 0.2 }}
                className="relative w-[30rem] h-[25rem] bg-[#3F435C] rounded-lg shadow-lg flex items-start justify-center z-0 hover:z-50">
                <img
                    src={IMGdEX3}
                    alt="GitHub Sabrina"
                    className="w-full h-[15rem] object-cover rounded-lg"
                />
            </motion.div>
        </section>
    )
}

export default Projects