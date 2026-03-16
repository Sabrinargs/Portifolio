import FotoCSS from "../assets/images/CSS.png"
import FotoHTML from "../assets/images/HTML.png"
import FotOREACT from "../assets/images/react.png"
import FotoJACASCRIPT from "../assets/images/JAVASCRIPT.png"
import FotoC from "../assets/images/c.png"

function Skills() {
    return (
        <section id="Skills" className="flex gap-4 justify-center items-center py-30 pt-10">
            <div className="justify-center">
                <h2 className="text-[#FF4B57] text-xl font-bold">SKILLS</h2>
            </div>
             <div className="relative w-1 h-20 bg-[#3F435C] rounded-lg shadow-lg flex items-center justify-center"></div>
            <div className="flex justify-center gap-5">
                <div className="relative w-[6rem] h-[5.5rem] bg-[#3F435C] rounded-lg shadow-lg flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src={FotoCSS}
                            alt="GitHub Sabrina"
                            className="w-10 h-10 object-cover"
                        />
                        <p className="text-white">CSS</p>
                    </div>
                </div>
                <div className="relative w-[6rem] h-[5.5rem] bg-[#3F435C] rounded-lg shadow-lg flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src={FotoHTML}
                            alt="GitHub Sabrina"
                            className="w-10 h-10 object-cover"
                        />
                        <p className="text-white">HTML</p>
                    </div>
                </div>
                <div className="relative w-[6rem] h-[5.5rem] bg-[#3F435C] rounded-lg shadow-lg flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src={FotoJACASCRIPT}
                            alt="GitHub Sabrina"
                            className="w-10 h-10 object-cover"
                        />
                        <p className="text-white">JavaScript</p>
                    </div>
                </div>
                <div className="relative w-[6rem] h-[5.5rem] bg-[#3F435C] rounded-lg shadow-lg flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src={FotOREACT}
                            alt="GitHub Sabrina"
                            className="w-10 h-10 object-cover"
                        />
                        <p className="text-white">REACT</p>
                    </div>
                </div>
                <div className="relative w-[6rem] h-[5.5rem] bg-[#3F435C] rounded-lg shadow-lg flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src={FotoC}
                            alt="GitHub Sabrina"
                            className="w-10 h-10 object-cover"
                        />
                        <p className="text-white">C#</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills 