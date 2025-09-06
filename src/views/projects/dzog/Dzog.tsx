
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import adApprove from "../../../assets/projects/dzog/adApprove.avif";
import adApproveMobile from "../../../assets/projects/dzog/adApprove_mobile.avif";
import adPreview from "../../../assets/projects/dzog/adPreview.avif";
import adPreviewMobile from "../../../assets/projects/dzog/adPreview_mobile.avif";
import colorModes from "../../../assets/projects/dzog/colorModes.avif";
import colorModesMobile from "../../../assets/projects/dzog/colorModes_mobile.avif";
import img1 from "../../../assets/projects/dzog/img1.avif";
import img1Mobile from "../../../assets/projects/dzog/img1_mobile.avif";
import multiUpload from "../../../assets/projects/dzog/multiUpload.avif";
import singleUplod from "../../../assets/projects/dzog/singleUpload.avif";





export default function Dzog(){
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
                    iPROM DZOG
                </div>
                <div className="flex flex-col font-light xl:px-0 px-4 xl:text-xl text-lg leading-relaxed">
                    <p className="font-poppins mb-5 font-light ">
                    iPROM Digital capture of Advertising Materials (DZOG) is a platform for uploading ad creatives that optimizes uploading and automates the verification of submitted files compliance.
                    The goal was to reduce the need for manual checks and increase consistency in creative preperation, which improves the speed and quality of advertising campaign execution.
                    </p>
                </div>
                <ul className="flex flex-col list-none gap-7 xl:px-0 px-4 mt-10 font-poppins xl:text-xl text-lg">
                    <li className="flex flex-col gap-2 xl:text-xl text-lg">
                        <div className="font-medium">Client</div>
                        <div className="font-light">iPROM d.o.o</div>
                    </li>
                    <li className="flex flex-col gap-2">
                        <div className="font-medium">Front-end</div>
                        <div className="font-light">Lan Peterca</div>
                    </li>
                    <li className="flex flex-col gap-2">
                        <div className="font-medium">Technology used (Front-end)</div>
                        <div className="font-light">
                            Typescript, React.js, Tailwind CSS, React router, Lucide React
                        </div>
                    </li>
                    <li className="flex flex-col gap-2">
                        <div className="font-medium">Device</div>
                        <div className="font-light">Mobile, desktop</div>
                    </li>
                    <li className="flex flex-col gap-2">
                        <div className="font-medium">Page link (requires registration)</div>
                        <div onClick={() => window.location.href = "https://creative.adserver.si/"} className="font-light cursor-pointer underline-offset-4 underline">Check Live site</div> 
                    </li>
                </ul>
            </section>

            <section className="w-full max-w-[1100px] xl:px-0 px-4 flex flex-col font-light justify-center items-center mt-20 xl:mt-20 mb-20">


                <div className="flex flex-col xl:text-xl text-lg font-light mb-5">
                    <div className="aspect-[8937/3707] md:block hidden">
                        <img
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                        src={img1}
                        width={8937}
                        height={3707}
                        className="rounded-2xl md:block hidden"
                        alt=""
                        />
                    </div>
                    <div className="aspect-[4164/5787] md:hidden block">
                        <img
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                        src={img1Mobile}
                        width={4164}
                        height={5787}
                        className="rounded-2xl md:hidden block"
                        alt=""
                        />
                    </div>
                    
                </div>
           
                <div className="flex flex-col justify-center items-center ">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="aspect-[4399/7814]">
                            <img
                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                            src={singleUplod}
                            width={4399}
                            height={7814}
                            className="rounded-2xl w-full h-full"
                            alt=""
                            />
                        </div>
                        <div className="aspect-[4399/7814]">
                            <img
                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                            className="rounded-2xl w-full h-full"
                            width={4399}
                            height={7814}
                            src={multiUpload}
                            alt=""
                            />
                        </div>
                        
                    </div>
                    <p className="font-poppins mt-10 mb-20 xl:text-xl text-lg font-light leading-relaxed">
                        iPROM DZOG lets you single and bulk upload ad creatives for faster campaign setup.
                        Name and structure files as instructed, and the system will recognize and automatically sort them by their properties.
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center ">
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-1">
                        <div className="aspect-[8937/3108] md:block hidden">
                            <img
                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                            src={adApprove}
                            width={8937}
                            height={3108}
                            className="rounded-2xl w-full h-full md:block hidden"
                            alt=""
                            />
                        </div>
                        <div className="aspect-[4164/3436] md:hidden block">
                            <img
                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                            src={adApproveMobile}
                            width={4164}
                            height={3436}
                            className="rounded-2xl w-full h-full md:hidden block"
                            alt=""
                            />
                        </div>
                    
                        <div className="aspect-[8937/3108] md:block hidden">
                            <img
                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                            className="rounded-2xl w-full h-full md:block hidden"
                            src={adPreview}
                            width={8937}
                            height={3108}
                            alt=""
                            />
                        </div>
                        <div className="aspect-[4164/3436] md:hidden block">
                            <img
                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                            className="rounded-2xl w-full h-full md:hidden block"
                            src={adPreviewMobile}
                            width={4164}
                            height={3436}
                            alt=""
                            />
                        </div>
                    </div>
                    <p className="font-poppins mt-10 mb-20 xl:text-xl text-lg font-light leading-relaxed">
                        Uploaded files appear in a data table, allowing quick ad previews and faster QA.
                        Each creative in iPROM DZOG has a status: In Review while specs and policy compliance are checked; Approved once it passes and is ready for trafficking; or Denied if it doesn’t meet requirements (format, size, naming, or policy)—in which case you’ll get feedback to fix and re-upload.
                    </p>
                </div>

                <div className="flex flex-col xl:text-xl text-lg font-light">
                    <div className="aspect-[8819/4218] md:block hidden">
                        <img
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                        src={colorModes}
                        width={8819}
                        height={4218}
                        className="rounded-2xl md:block hidden"
                        alt=""
                        />
                    </div>
                   <div className="aspect-[4164/3436] md:hidden block">
                        <img
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                        src={colorModesMobile}
                        width={4164}
                        height={3436}
                        className="rounded-2xl md:hidden block"
                        alt=""
                        />
                   </div>
                    
                    <p className="font-poppins mb-20 mt-10 leading-relaxed">
                        The platform supports both light and dark color themes.
                    </p>
                </div>

                <div onClick={() => window.location.href = "https://creative.adserver.si/"} className="w-full hover:bg-gray-100 transition-all cursor-pointer duration-300 flex mt-10 xl:w-[500px] flex-row justify-center gap-5 hover:gap-10 items-center border-[2px] text-xl rounded-full p-4 ">
                    checkout project
                    <ArrowRight size={20} />
                </div>
            </section>
        </div>
        </>

    )
}