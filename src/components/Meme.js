'use client';
import React from "react"
export default function Meme(){
    function handleClick(e) {
        e.preventDefault();
        alert('You clicked submit.');
      }
    return(
       
     <div className="h-64 w-full p-5 ">
        <div className="flex lg:flex-row flex-col gap-4   justify-evenly mt-16">
        <form className="lg:w-1/4 w-full ">

            <input type="text "
            placeholder="Top text"
            className="h-12 w-full border border-gray-700 rounded "
            ></input>
        </form>
        <form className="lg:w-1/4 w-full ">
            <input 
            placeholder="Bottom text"
            className="h-12 w-full border border-gray-700 rounded "
            type="text"></input>
        </form>
     
        </div>
        <div className="w-full flex justify-center">
        <button 
        onClick={handleClick}
         className="lg:w-4/6  w-full mt-16  bg-[#672280] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Get a new meme image
</button>
        </div>
        
     </div>   
    );
}