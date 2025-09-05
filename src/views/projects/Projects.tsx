import ipromDocs from "../../assets/projects/iprom_docs.avif";
import ipromCentral from "../../assets/projects/iprom_central.avif";
import ipromPreviewPage from "../../assets/projects/preview_page.avif";
import ipromDzog from "../../assets/projects/dzog.avif"
import ipromSvg from "../../assets/projects/iprom_frame.webp";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



interface ItemType{
    img: string,
    title: string,
    year: string,
    navTo: string,
    disabled?: boolean
    ready?: boolean
}

const items : ItemType[] = [
    {
        img: ipromDocs,
        title: "iPROM Documentation",
        year: "2024",
        navTo: "/project-iprom-docs",
        ready: true
    },
    {
        img: ipromCentral,
        title: "iPROM Programmatic",
        year: "2025",
        navTo: "/project-iprom-programmatic",
        ready: true
    },
    {
        img: ipromPreviewPage,
        title: "iPROM Preview page",
        year: "2024",
        navTo: "/project-iprom-previewpage",
        ready: true
    },
    {
        img: ipromDzog,
        title: "iPROM DZOG",
        year: "2024",
        navTo: "/project-iprom-dzog",
        ready: true,
    },
        {
        img: ipromSvg,
        title: "iPROM logo",
        year: "2024",
        navTo: "/project-none",
        disabled: true,
        ready: true
    },
]




export default function Projects(){
    const [visibleItems, setVisibleItems] = useState<ItemType[]>([])

    useEffect(() => {
        let i = 0;
        setVisibleItems([]); // reset for new format
        const interval = setInterval(() => {
            setVisibleItems((prev) => {
                if (i >= items.length) {
                    clearInterval(interval);
                    return prev;
                }
                const nextItem = items[i];
                i++;
                return [...prev, nextItem];
            });
        }, 100); // 100ms delay between items

        return () => clearInterval(interval);
    }, []);

    const navigate = useNavigate();



    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center mb-20">
                <section>
                    <div className="font-poppins xl:text-5xl mt-24 xl:mb-20 mb-10 text-2xl">
                        Projects
                    </div>
                </section>
                <section className="w-full min-h-[1200px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center xl:px-10 px-4">

                        {visibleItems.map((i, index) => {
                            return (
                                <div onClick={() => {
                                    if(i.disabled) return;
                                    navigate(i.navTo)
                                    
                                    }} key={index} className={`relative group ${i.disabled ? "" : "cursor-pointer"} group duration-500  ease-out transform opacity-0 animate-fade-in`}
                                    
                                    >
                                    <div className="aspect-square w-full overflow-hidden rounded-xl bg-transparent">
                                        <img
                                            src={i.img}
                                            alt={i.title}
                                            loading="lazy"
                                            className={`w-full h-full object-cover ${!i.ready && "opacity-10"} group-hover:scale-[98%] rounded-xl transition-all duration-300`}
                                        />
                                    </div>
                                    <div className={`absolute inset-0 font-poppins ${i.disabled ? "hidden" : "group-hover:bg-[rgb(255,255,255,0.8)]" } bg-[rgb(255,255,255,0)] transition-all duration-200  text-3xl overflow-hidden`}>
                                        <div className="flex text-center justify-center flex-col w-full h-full translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"> 
                                            <p className="group-hover:opacity-100 opacity-0 transition-all duration-200">{i.title}</p>
                                            <p className="group-hover:opacity-100 opacity-0 transition-all duration-200">{i.year}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </>
    )
}


