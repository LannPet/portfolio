import { useEffect, useState } from "react";
import lanSlika from "../../assets/lan_slika.avif"
import { ArrowRight } from "lucide-react";

export default function AboutMe(){
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);    
    }, []);

    


    return (
        <>
            <div
                className={`w-full h-full flex flex-col justify-center items-center mb-40 ${
                mounted ? "opacity-100" : "opacity-0"
                } transition-opacity duration-700`}
            >
                <section className="max-w-[1100px]">
                    
                    <div className="font-poppins xl:text-5xl xl:mt-32 mt-20 xl:mb-20 mb-10 text-2xl px-4 text-center">
                        Hi, I am Lan!
                    </div>
                    <div className="flex flex-col font-light xl:px-0 px-4 xl:text-xl text-lg leading-relaxed ">
                        <div className="w-full flex flex-col aspect-square justify-center items-center mb-20">
                            <img src={lanSlika} 
                                alt="" 
                                width={800}
                                height={800}
                                className="rounded-full w-[20em] shadow-md" 
                                loading="lazy" />
                        </div>
                        <p className="font-poppins mb-10 font-light leading-relaxed">
                           I’m a 26-year-old front-end developer from Ljubljana, Slovenia, 
                           currently working at the AdTech company iPROM. For the past two years I’ve been building fast, 
                           creative, and user-friendly digital experiences—but my journey into development wasn’t exactly straightforward.
                            My background is actually in electrical engineering, where I first got introduced to programming through Python and C++.
                            At the time, I wasn’t exactly passionate about coding—I thought I’d end up in robotics. 
                            But while working on my diploma thesis, I joined a small programming company where I used a Raspberry Pi, sensors, 
                            and custom UIs to modernize old industrial machines. That project opened my eyes to how powerful and creative programming could be.
                        </p>
                        <p className="font-poppins mb-10 font-light leading-relaxed">
                            My first full-time role was at Asit d.o.o., 
                            designing microcontroller programs for automated warehouses. 
                            While the work was challenging, I realized I wanted to push my creativity further and explore the broader world of software development. 
                            That led me to iPROM, where I found the perfect opportunity to grow as a web developer.
                            At iPROM, I started out maintaining and debugging serving scripts—the backbone of how ads are injected and displayed across websites. 
                            I also managed custom ad formats. Over time, 
                            I wanted to modernize our stack, so I proposed adopting React as a framework. 
                            Today, React powers every new project we build, and I’m proud to have been part of that transformation.
                        </p>
                        <p className="font-poppins mb-10 font-light leading-relaxed">
                            During my free time, I love to travel and ride motorcycles—and if I can combine the two, it’s even better. 
                            For the past four years, Gran Canaria has been my go-to winter motorcycle getaway, 
                            and one day I dream of living there. 
                            I also enjoy traveling to countries that offer a real culture shock, 
                            as I believe stepping out of your comfort zone is the fastest way to grow.
                        </p>
                        <p className="font-poppins text-center mb-5 font-light text-base leading-relaxed">
                            (Yes, ChatGPT helped me write this)
                        </p>
                    </div>
                </section>
                
                <section className="w-full max-w-[1100px] mt-5 px-4">
                    <div className="font-poppins xl:text-5xl xl:mt-32 mt-20 xl:mb-20 mb-10 text-2xl px-4 text-center">
                        My experience
                    </div>
                    <div className="mb-10 justify-center xl:justify-start font-poppins text-base flex flex-row items-center sm:flex-none flex-wrap"> 
                        <div className="text-center">Detailed version can be found on my LinkedIn</div>
                        <div className="flex flex-col sm:flex-row xl:flex-row justify-center items-center gap-2 group">
                
                            <ArrowRight size={20} className="group-hover:translate-x-28 group-hover:-ml-2 ml-2 rotate-90 sm:rotate-0 transition-all duration-300"/>
                            <a className="underline underline-offset-4" href="https://www.linkedin.com/in/lan-peterca-842312212/">LinkedIn</a>
                        </div>
                       
                    </div>
                    <div className="w-full flex flex-col justify-start border-b-2 text-xl mb-10">
                        <div className="font-medium font-poppins">Frontend Developer</div>
                        <div className="flex flex-col gap-1 text-base mb-2">
                            <div>iPROM d.o.o.</div>
                            <div>
                                2023 - present
                            </div>
                            <div>
                                Ljubljana, Slovenia
                            </div>
                            <div className="flex flex-row gap-2"> 
                                <div>
                                    Technology used:
                                </div>
                                <div className="font-medium">
                                    Javascript, Typescript, React.js, HTML, CSS, Tailwind, Vue 2
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-start border-b-2 text-xl mb-10">
                        <div className="font-medium font-poppins">Automation Engineer</div>
                        <div className="flex flex-col gap-1 text-base mb-2">
                            <div>ASIT d.o.o.</div>
                            <div>
                                Feb 2023 - Oct 2023
                            </div>
                            <div>
                                Ljubljana, Slovenia
                            </div>
                             <div className="flex flex-row gap-2"> 
                                <div>
                                    Technology used:
                                </div>
                                <div className="font-medium">
                                    Python, Tia Portal
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-start border-b-2 text-xl">
                        <div className="font-medium font-poppins">Computer Hardware Technician</div>
                        <div className="flex flex-col gap-1 text-base mb-2">
                            <div>E-Misija</div>
                            <div>
                                Jan 2019 - Sep 2021
                            </div>
                            <div>
                                Kamnik, Slovenia
                            </div>
                             <div className="flex flex-row gap-2"> 
                                <div>
                                    Technology used:
                                </div>
                                <div className="font-medium">
                                    Automatic screwdriver, my hands
                                </div>
                            </div>
                        </div>
                    </div>
                 

                </section>
                





            </div>     
        </>
    )
}