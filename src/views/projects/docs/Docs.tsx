
import { useEffect, useState } from "react";
import docsImg1 from "../../../assets/projects/docs/docs_img1.webp";
import docsImg1Desktop from "../../../assets/projects/docs/docs_img1_desktop.webp";
import docsImg2 from "../../../assets/projects/docs/docs_img2.webp";
import docsImg3Desktop from "../../../assets/projects/docs/docs_img3_desktop.webp";
import docsImg3 from "../../../assets/projects/docs/docs_img3.webp";
import { ArrowRight } from "lucide-react";


export default function Docs(){
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);    
    }, []);

    

    return (
        <>
        <div
            className={`w-full h-full flex flex-col justify-center items-center ${
            mounted ? "opacity-100" : "opacity-0"
            } transition-opacity duration-700`}
        >
            <section className="max-w-[1100px]">
                <div className="font-poppins xl:text-5xl xl:mt-32 mt-20 xl:mb-20 mb-10 text-2xl px-4 text-center">
                    iPROM Documentation page
                </div>
                <div className="flex flex-col font-light xl:px-0 px-4 xl:text-xl text-lg leading-relaxed">
                    <p className="font-poppins mb-5 font-light ">
                    iPROM Documentation page is a website that consists system integration
                    instructions, ad format descriptions, various specifications and
                    documentation.
                    </p>
                    <p className="font-poppins font-light">
                    Created to work as a cetralized location for all company documentation,
                    that can be accessed by clients and employees. Previously instructions
                    and documentation were sent via PDF.
                    </p>
                </div>
                <ul className="flex flex-col list-none gap-7 xl:px-0 px-4 mt-10 font-poppins xl:text-xl text-lg">
                    <li className="flex flex-col gap-2 xl:text-xl text-lg">
                        <div className="font-medium">Client</div>
                        <div className="font-light">iPROM d.o.o</div>
                    </li>
                    <li className="flex flex-col gap-2">
                        <div className="font-medium">Design & code</div>
                        <div className="font-light">Lan Peterca</div>
                    </li>
                    <li className="flex flex-col gap-2">
                        <div className="font-medium">Technology used</div>
                        <div className="font-light">
                        Typescript, React.js, Tailwind CSS, React router
                        </div>
                    </li>
                    <li className="flex flex-col gap-2">
                        <div className="font-medium">Device</div>
                        <div className="font-light">Mobile, desktop</div>
                    </li>
                    <li className="flex flex-col gap-2">
                        <div className="font-medium">Page link</div>
                        <div onClick={() => window.location.href = "https://docs.adserver.si/"} className="font-light cursor-pointer underline-offset-4 underline">Check Live site</div>
                    </li>
                </ul>
            </section>

            <section className="w-full max-w-[1100px] xl:px-0 px-4 flex flex-col font-light justify-center items-center mt-20 xl:mt-20 mb-20">
           
                <div className="flex flex-col justify-center items-center ">
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        <div className="aspect-[1667/1250]">
                            <img
                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                            src={docsImg1}
                            width={1667}
                            height={1250}
                            className="rounded-2xl w-full h-full"
                            alt=""
                            />
                        </div>
                        <div className="aspect-[1667/1250]">
                            <img
                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                            width={1667}
                            height={1250}
                            className="rounded-2xl w-full h-full"
                            src={docsImg1Desktop}
                            alt=""
                            />
                        </div>
                    </div>
                    <p className="font-poppins mt-10 mb-20 xl:text-xl text-lg font-light leading-relaxed">
                    The Specifications page features a straightforward navigation bar and a
                    search function, allowing users to easily browse through the available
                    documents. Each document also includes its own content sidebar,
                    enabling smooth navigation within the document itself.
                    </p>
                </div>

                <div className="flex flex-col xl:text-xl text-lg font-light">
                    <div className="aspect-[4096/3072]">
                        <img
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                        src={docsImg2}
                        width={4096}
                        height={3072}
                        className="rounded-2xl"
                        alt=""
                        />
                    </div>
                
                    <p className="font-poppins mt-10 mb-5 leading-relaxed">
                    The Format Presentation showcases visual examples of iPROM’s most
                    popular dynamic ad formats, including iPROM AdBreak, iPROM PagePeel,
                    iPROM Dynamic Background, iPROM Banner, and more.
                    </p>
                    <p className="font-poppins mb-20 leading-relaxed">
                    Additional formats will be added over time. All visual presentations
                    are available for both desktop and mobile devices.
                    </p>
                </div>

                <div className="flex flex-col">
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        <div className="aspect-[3308x5194]">
                            <img
                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                            src={docsImg3Desktop}
                            className="rounded-2xl"
                            width={3308}
                            height={5194}
                            alt=""
                            />
                        </div>
                         <div className="aspect-[3308x3782]">
                            <img
                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                            src={docsImg3}
                            className="rounded-2xl"
                            width={3308}
                            height={3782}
                            alt=""
                            />    
                        </div>
                       
                    </div>
                    <p className="font-poppins mt-10 mb-20 xl:text-xl text-lg font-light leading-relaxed">
                    There is also a Gallery page showcasing iPROM’s previous campaign
                    references. This allows clients to see how past creatives were
                    implemented across different iPROM ad formats.
                    </p>
                </div>

                <div onClick={() => window.location.href = "https://docs.adserver.si/"} className="w-full hover:bg-gray-100 transition-all cursor-pointer duration-300 flex mt-10 xl:w-[500px] flex-row justify-center gap-5 hover:gap-10 items-center border-[2px] text-xl rounded-full p-4 ">
                    checkout project
                    <ArrowRight size={20} />
                </div>
            </section>
        </div>
        </>

    )
}