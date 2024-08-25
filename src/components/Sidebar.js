import React from 'react';
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineHistory, MdOutlineWatchLater } from "react-icons/md";
import { BsPlayBtn, BsDownload } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { useSelector } from "react-redux";

const sidebarItem = [
    {
        icons: <CiHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Shorts"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscriptions"
    },
    {
        icons: <MdOutlineVideoLibrary size="24px" />,
        title: "Library"
    },
    {
        icons: <MdOutlineHistory size="24px" />,
        title: "History"
    },
    {
        icons: <BsPlayBtn size="24px" />,
        title: "Your Videos"
    },
    {
        icons: <MdOutlineWatchLater size="24px" />,
        title: "Watch Later"
    },
    {
        icons: <AiOutlineLike size="24px" />,
        title: "Liked Videos"
    },
    {
        icons: <BsDownload size="24px" />,
        title: "Downloads"
    },
];

const Sidebar = () => { 
    const open = useSelector((store)=>store.app.open);
     
    return (
        <div className={`relative left-0 ${open? "w-[21%]" : "w-[7%]"} p-4 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden transition-width duration-300`}>
            <div className="space-y-5">

            {
                sidebarItem.map((item, index) => {
                    return (
                        <div key={index} className='flex items-center my-3 ml-2 hover:bg-gray-200 p-1 rounded-lg cursor-pointer transition-colors duration-200'>
                            {item.icons}
                            <p className={`ml-6 text-lg whitespace-nowrap ${open ? "": 'hidden'}`}>{item.title}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

 
export default Sidebar

