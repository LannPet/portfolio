import { useEffect, useState } from "react";
import img1 from "../../../assets/projects/programmatic/img1.webp";
import img2 from "../../../assets/projects/programmatic/img2.avif";
import img3 from "../../../assets/projects/programmatic/img3.avif";
import img4 from "../../../assets/projects/programmatic/img4.avif";
import img5 from "../../../assets/projects/programmatic/img5.avif";
import old from "../../../assets/projects/programmatic/old_img.avif";
import video from "../../../assets/projects/programmatic/video.mov";

export default function Programmatic(){

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
                    iPROM Programmatic Platform
                </div>
                <div className="flex flex-col font-light xl:px-0 px-4 xl:text-xl text-lg leading-relaxed">
                    <p className="font-poppins mb-5 font-light ">
                        Originally built two decades ago, iPROM’s Programmatic Platform—a key system that connects advertisers, publishers, and ad platforms across multiple regions—has been completely rebuilt from scratch. 
                        I refactored the frontend using React, creating a modern, high-performance foundation.
                    </p>
                    <p className="font-poppins mb-5 font-light">
                    The updated platform supports seamless programmatic media buying for major brands, offering a GDPR-compliant, privacy-first environment and covering markets from Germany through the Adriatic region and beyond 
                    . I redesigned the UI to align with iPROM’s modern stylesheet and ensure full mobile responsiveness.
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
                            TypeScript, React.js, Tailwind CSS, Tailwind fluid, React Router
                        </div>
                    </li>
                    <li className="flex flex-col gap-2">
                        <div className="font-medium">Device</div>
                        <div className="font-light">Mobile, desktop</div>
                    </li>

                </ul>
                    <div className="font-light w-full text-center text-gray-500 mt-20 font-poppins xl:text-xl text-lg">
                            - Still in development -
                    </div>
            </section>
             <section className="w-full max-w-[1100px] xl:px-0 px-4 flex flex-col font-light justify-center items-center mt-20 xl:mt-20 mb-20">
           
                <div className="flex flex-col justify-center items-center ">
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-1">
                        <div className="aspect-[14201/5577] hidden md:block">
                            <img
                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                            src={img1}
                            width={14201}
                            height={5577}
                            className="rounded-2xl w-full h-full hidden md:block"
                            alt=""
                            />
                        </div>
                        <div className="aspect-[6792/5577] md:hidden block">
                            <img
                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                            src={img4}
                            width={6792}
                            height={5577}
                            className="rounded-2xl w-full h-full md:hidden block"
                            alt=""
                            />
                        </div>
                       
                    </div>
                    <p className="font-poppins mt-10 mb-20 xl:text-xl text-lg font-light leading-relaxed">
                        The main dashboard provides a clear overview of how an owner’s websites are performing within the programmatic network. 
                        It is designed to be simple, minimalistic, and easy to understand and use.
                    </p>
                </div>


                <div className="flex flex-col">
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        <div className="aspect-[6912/6240]">
                            <img
                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                            src={img2}
                            width={6912}
                            height={6240}
                            className="rounded-2xl"
                            alt=""
                            />
                        </div>
                        <div className="aspect-[6912/6240]">
                            <img
                            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                            src={img3}
                            width={6912}
                            height={6240}
                            className="rounded-2xl"
                            alt=""
                            />  
                        </div>
                           
                    </div>
                    <p className="font-poppins mt-10 mb-20 xl:text-xl text-lg font-light leading-relaxed">
                        By adapting the platform to mobile, the platform is now much more accessible for clients and employees who need to manage campaigns or check performance on the go.
                    </p>
                </div>
                   <div className="flex flex-row">
                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        <div className="relative overflow-hidden rounded-2xl w-full h-[20em] xl:h-[50em] pl-40 py-10 shadow-md bg-cover bg-center"
                            style={{ backgroundImage: `url(${img5})` }}
                            >
                            {/* your video or other content goes here */}
                            <div className="bg-black p-5 translate-x-5 rounded-2xl w-fit aspect-[1069/4476]">
                                <img
                                src={old}
                                width={1069}
                                height={4476}
                                className="w-full h-full rounded-bl-xl"
                                />
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl w-full h-[20em] xl:h-[50em] pl-40 py-10 shadow-md bg-cover bg-center"
                            style={{ backgroundImage: `url(${img5})` }}
                            >
                            {/* your video or other content goes here */}
                            <div className="bg-black p-5 translate-x-5 rounded-2xl w-fit">
                               <video
                                src={video}
                                className="w-full h-full rounded-bl-xl"
                                autoPlay
                                loop
                                muted
                                playsInline
                                /> 
                            </div>
                        </div>
                        
                    </div>
    
                </div>
                    <p className="font-poppins text-start mt-10 mb-5  xl:text-xl text-lg font-light leading-relaxed">
                        The new navbar is interactive and responsive, allowing users to expand or collapse it with a simple button click. This improves usability, especially on smaller screens, and provides a cleaner, more modern user experience.
                    </p>  
                    <p className="font-poppins text-start mb-20 xl:text-xl text-lg font-light leading-relaxed">
                        In addition, the component was built to be fully reusable across other projects, making it easier to maintain consistency in design and functionality throughout iPROM’s internal tools.
                    </p>
                  

            </section>

        </div>
        
        </>
    )
}