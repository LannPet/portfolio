
import { useEffect, useState } from "react";
import img1 from "../../../assets/projects/previewPage/previewP_img1.avif";
import img2 from "../../../assets/projects/previewPage/previewP_img1_desktop.avif";
import img3 from "../../../assets/projects/previewPage/lang_select.avif";
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
                    iPROM Preview page
                </div>
                <div className="flex flex-col font-light xl:px-0 px-4 xl:text-xl text-lg leading-relaxed">
                    <p className="font-poppins mb-5 font-light ">
                        The iPROM Preview Page is used to test the functionality of new ad creatives and see how they behave on a website.
                    </p>
                    <p className="font-poppins font-light">
                        Originally built with raw PHP, the project has been fully refactored using React.js. The updated version is now mobile-friendly, supports both English and Slovenian languages, and includes a new feature that allows iPROM’s ad trafficking team to quickly access ad or campaign settings by simply clicking on the Ad or Campaign ID.
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
                            React.js,
                        </div>
                    </li>
                    <li className="flex flex-col gap-2">
                        <div className="font-medium">Device</div>
                        <div className="font-light">Mobile, desktop</div>
                    </li>
                    <li className="flex flex-col gap-2">
                        <div className="font-medium">Page link</div>
                        <div onClick={() => window.location.href = "https://preview.adserver.si/?q=eyJpZCI6MTM4MDQwNiwibCI6InNpIiwibHkiOiJsYXlvdXRfbWFpbiIsImF1IjoiMjQ0N180NTU5NSJ9"} className="font-light cursor-pointer underline-offset-4 underline">Check Live site</div>
                    </li>
                </ul>
            </section>

            <section className="w-full max-w-[1100px] xl:px-0 px-4 flex flex-col font-light justify-center items-center mt-20 xl:mt-5 mb-20">
                <div className="flex flex-col">
                    <div className="aspect-[3000/2250]">
                        <img
                        src={img1}
                        width={3000}
                        height={2250}
                        className="rounded-2xl"
                        alt=""
                        /> 
                    </div>
                    <p className="font-poppins mb-5 xl:text-xl text-lg font-light leading-relaxed">
                        All ad information is encoded directly into the URL and decoded within the application, which removes the need for a backend. 
                    </p>
                    <p className="font-poppins mb-5  xl:text-xl text-lg font-light leading-relaxed">
                        The new version also introduces mobile-first improvements, with a responsive layout and optimized navigation for smaller screens. 
                    </p>
                    <p className="font-poppins mb-20 xl:text-xl text-lg font-light leading-relaxed">
                        Today, the tool is actively used by both employees and clients, 
                        as each new campaign includes a preview link that allows clients to validate their 
                        creatives before launch.
                    </p>
                </div>
                 <div className="flex flex-col">
                    <div className="grid xl:grid-cols-2 mb-20 gap-5">
                        <div className="aspect-[1282/1260]">
                            <img
                            src={img2}
                            className="rounded-2xl"
                            width={1282}
                            height={1260}
                            alt=""
                            /> 
                        </div>
                        <div className="aspect-[4944/3576]">
                            <img
                            src={img3}
                            className="rounded-2xl"
                            width={4944}
                            height={3576}
                            alt=""
                            /> 
                        </div>
                    </div>
                    <p className="font-poppins mb-20 xl:text-xl text-lg font-light leading-relaxed">
                        This project was developed solo and is now a core part of iPROM’s 
                        campaign workflow, ensuring faster validation and smoother 
                        collaboration between internal teams and clients.
                    </p>
                </div>

                <div onClick={() => window.location.href = "https://preview.adserver.si/?q=eyJpZCI6MTM4MDQwNiwibCI6InNpIiwibHkiOiJsYXlvdXRfbWFpbiIsImF1IjoiMjQ0N180NTU5NSJ9"} className="w-full hover:bg-gray-100 transition-all cursor-pointer duration-300 flex mt-10 xl:w-[500px] flex-row justify-center gap-5 hover:gap-10 items-center border-[2px] text-xl rounded-full p-4 ">
                    checkout project
                    <ArrowRight size={20} />
                </div>
            </section>
        </div>
        </>

    )
}