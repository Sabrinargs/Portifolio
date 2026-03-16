import Foto from "../assets/images/FotoSabrina.png"
import Skills from "./Skills"

function Hero() {
    return (
        <section id="home" className="flex justify-center pt-32">
            <div className="flex items-center gap-20">
                <div>
                    <div className="text-5xl text-white">
                        <h1>Olá, sou Sabrina</h1>
                        <h1>uma Desenvolvedora</h1>
                        <h1 className="font-bold">Full-Stack</h1>
                    </div>
                    <div className="text-[#7279BD]">
                        <p>Apaixonada por tecnologia, criando aplicações web e transformando <br /> ideias em realidade através do código.</p>
                        <Skills />
                    </div>
                </div>
                
                <div className="relative w-60 h-80 bg-[#FF4B57] rounded-lg shadow-lg flex justify-center">
                    <img
                        src={Foto}
                        alt="Sabrina"
                        className="absolute -top-20 w-64 object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero