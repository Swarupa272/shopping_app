import React from "react";  
import {  ShoppingBagIcon, Home, BookType, Contact } from "lucide-react"; 

function Navbar() {
    return(
        <div className="flex justify-between bg-gray-800 p-4">
            <div className="flex items-center gap-4">
                <ul className='flex text-white gap-4 text-2xl'>
                    <li className="cursor-pointer hover:text-blue-500 flex duration-200 items-center">
                        <Home className="text-white" />Home</li>
                    <li className="cursor-pointer hover:text-blue-500 flex duration-200 items-center">
                        <ShoppingBagIcon className="text-white" /> Products</li>
                    <li className="cursor-pointer hover:text-blue-500 flex duration-200 items-center">
                        <BookType className="text-white" />About</li>
                    <li className="cursor-pointer hover:text-blue-500 flex duration-200 items-center ">
                        <Contact className="text-white" />Contact Us</li>
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <button className="bg-blue-500 text-white px-4 py-2 cursor-pointer hover:bg-blue-400 ">Login</button>
                <button className="bg-green-500 text-white px-4 py-2 cursor-pointer hover:bg-blue-400">Sign Up</button>
            </div>
        </div>
    )
}
export default Navbar;