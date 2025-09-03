import Navbar from "../components/navbar/Navbar"





export default function MainLayout(props: { children: React.ReactNode }){




return (

<>

<div className="flex flex-col w-full h-full xl:px-5 ">
    <Navbar/>
    <div className="w-full h-full">
        {props.children}        
    </div>
    
</div>





</>
)


}