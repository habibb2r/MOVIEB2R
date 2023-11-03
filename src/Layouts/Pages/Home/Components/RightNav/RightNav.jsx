import { Link } from "react-router-dom";
import {RiHeartAddFill, RiNotification2Fill} from 'react-icons/ri'
import {BiSolidUserCircle} from 'react-icons/bi'
import { useContext } from "react";
import { AuthContext } from "../../../../../Firebase/AuthProvider";
import { useSelector } from "react-redux";
import useBookMarkList from "../../../../../Hooks/useBookMarkList";

const RightNav = () => {
    const {user} = useContext(AuthContext)
    // const {bookMarks} = useSelector((state)=> state.bookMarkSlice)
    const [bookmarks] = useBookMarkList()
    
    return (
        <div className="fixed rightnav rounded-full p-2 bg-black bg-opacity-25 text-5xl right-[3%] top-[40%] max-w-2xl z-10">
           <div className="flex flex-col justify-center items-center gap-4 md:gap-5">
           { user ? <Link><img className="h-[50px] rounded-full" src={user.photoURL} alt="" /></Link> : <Link><BiSolidUserCircle className="text-white"></BiSolidUserCircle></Link>}
            <Link to='/favoritelist' className="relative">
            <RiHeartAddFill className="text-red-500"></RiHeartAddFill>
            <p className="text-[17px] absolute top-[-15%] bg-white py-[2px] px-[5px] rounded-full text-red-500 right-[-20%]">{bookmarks.length}</p>
            </Link>
            <Link className="relative">
            <RiNotification2Fill className="text-yellow-400"></RiNotification2Fill>
            <p className="text-[17px] absolute top-[30%] bg-white py-[2px] px-[5px] rounded-full text-red-700 left-[20%]">1</p>
            </Link>
           </div>
            
        </div>
    );
};

export default RightNav;