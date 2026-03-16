import { motion } from "framer-motion";
import Desenho from "../assets/images/Desenho.png";

function Aboutme() {
    return (
        <section id="Aboutme" className="w-full flex justify-center py-20 px-6">

            <div className="w-full max-w-5xl flex gap-4 items-center">

                <motion.div
                    className="mt-10 w-full bg-[#35394E] shadow-xl relative rounded-lg overflow-hidden"

                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="w-full h-[25rem] rounded-lg overflow-hidden">
                        <img
                            src={Desenho}
                            alt="GitHub Sabrina"
                            className="w-full h-full object-cover opacity-10"
                        />
                    </div>
                    <p className="py-8 absolute inset-0 text-white text-base md:text-lg text-center leading-relaxed max-w-3xl mx-auto">

                        Sou estudante de{" "}
                        <span className="text-[#FF4B57] font-semibold">
                            Sistemas de Informação
                        </span>{" "}
                        e apaixonada por tecnologia e desenvolvimento de software.
                        Gosto de transformar ideias em projetos reais e ver uma simples ideia
                        se tornar uma aplicação funcional e bem estruturada.
                        <br /><br />

                        Atualmente tenho focado meus estudos em{" "}
                        <span className="text-[#FF4B57] font-semibold">
                            desenvolvimento web
                        </span>
                        , utilizando tecnologias como{" "}
                        <span className="text-[#FF4B57] font-semibold">
                            React, JavaScript, HTML, CSS e Node.js
                        </span>.
                        Durante minha jornada venho criando projetos que envolvem desde
                        interfaces interativas até a construção de APIs e integração com
                        banco de dados.
                        <br /><br />

                        Sou curiosa, dedicada e estou sempre buscando evoluir na área
                        de tecnologia. Gosto de aprender coisas novas, enfrentar desafios
                        e aprimorar constantemente minhas habilidades como desenvolvedora.

                    </p>
                </motion.div>

                <div className="relative w-1 h-20 bg-[#3F435C] rounded-lg shadow-lg flex items-center justify-center"></div>
                <div className="flex flex-col items-center">
                    <p className="text-[#FF4B57] text-xl font-bold tracking-widest ">
                        SOBRE MIM
                    </p>
                </div>


            </div>

        </section>
    )
}

export default Aboutme