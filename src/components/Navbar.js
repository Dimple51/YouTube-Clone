import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn, CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, setCategory, setSearchSuggestion } from "../utils/appSlice";
import { useState } from "react";
import { SEARCH_SUGGESTIONS_API } from "../constant/youtube";
import axios from "axios";

const Navbar = () => {
    const [input, setInput] = useState("");
    const [suggestion, setSuggestion] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1); // State to track selected suggestion
    const dispatch = useDispatch();
    const { searchSuggestion } = useSelector((store) => store.app);

    const searchVideo = () => {
        if (selectedIndex !== -1) {
            setInput(searchSuggestion[selectedIndex]);
        }
        dispatch(setCategory(input));
        setSuggestion(false);
        setSelectedIndex(-1);
    };

    const toggleHandler = () => {
        dispatch(toggleSidebar());
    };

    const showSuggestion = async () => {
        try {
            const res = await axios.get(SEARCH_SUGGESTIONS_API + input);
            dispatch(setSearchSuggestion(res?.data[1]));
        } catch (error) {
            console.log(error);
        }
    };

    const openSuggestion = () => {
        setSuggestion(true);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            searchVideo();
        } else if (e.key === "ArrowDown") {
            if (selectedIndex < searchSuggestion.length - 1) {
                setSelectedIndex(selectedIndex + 1);
            }
        } else if (e.key === "ArrowUp") {
            if (selectedIndex > 0) {
                setSelectedIndex(selectedIndex - 1);
            }
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            showSuggestion();
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, [input]);

   return (
        <div className="flex fixed top-0 justify-center items-center w-full z-10 bg-white border-b border-gray-200">
            <div className="flex w-[96%] py-3 justify-between items-center">
                <div className="flex items-center space-x-4">
                    <GiHamburgerMenu onClick={toggleHandler} size="24px" className="cursor-pointer hover:text-gray-700 transition-colors" />
                    <a href="/" onClick={(e) => { e.preventDefault(); window.location.reload(); }}>
                        <img className="px-4" width={"115px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png" alt="yt_logo" />
                    </a>
                </div>
                <div className="flex w-[40%] items-center relative">
                    <div className="flex w-full">
                        <input
                            value={input}
                            onFocus={openSuggestion}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown} // Add this event listener
                            type="text"
                            placeholder="Search"
                            className="w-full py-2 px-4 border border-gray-400 rounded-l-full outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        />
                        <button onClick={searchVideo} className="py-2 border border-gray-400 rounded-r-full px-4 hover:bg-gray-100 transition-colors">
                            <CiSearch size="24px" />
                        </button>
                    </div>
                    {
                        (suggestion && searchSuggestion.length !== 0) &&
                        <div className="absolute top-full left-0 w-full mt-1 py-2 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                            <ul>
                                {
                                    searchSuggestion.map((text, idx) => (
                                        <div
                                            key={idx}
                                            className={`flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer ${selectedIndex === idx ? 'bg-gray-200' : ''}`}
                                        >
                                            <CiSearch size="24px" />
                                            <li className="px-2 text-md font-medium">{text}</li>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>
                    }
                </div>
                <div className="flex w-[10%] justify-between items-center">
                    <IoIosNotificationsOutline size={"24px"} className="cursor-pointer hover:text-gray-700 transition-colors" />
                    <CiVideoOn size={"24px"} className="cursor-pointer hover:text-gray-700 transition-colors" />
                    {/* <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={35} round={true} className="hover:scale-110 transition-transform" /> */}
                    <Avatar src="https://static.vecteezy.com/system/resources/previews/020/389/525/original/hand-drawing-cartoon-girl-cute-girl-drawing-for-profile-picture-vector.jpg" size={35} round={true} className="hover:scale-110 transition-transform"  />

                </div>
            </div>
        </div>
    );
}

export default Navbar;

