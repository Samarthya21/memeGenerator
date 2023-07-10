'use client';
import React from "react"
import { useState } from "react";

export default function Meme(){
    const[getMeme,setMeme]=React.useState({
        lower:"Lower Text",
        upper:"Upper Text",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    function handleChange(event) {
        setMeme(prev => {
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
        })
      }
      function handleClick(event){
        console.log(getMeme)
      }
      
    return(
       
     <div className="h-64 w-full p-5 ">
        <div className="flex lg:flex-row flex-col gap-4   justify-evenly mt-16">
        <form className="lg:w-1/4 w-full ">

            <input type="text "
            placeholder="Top text"
            className="px-2 h-12 w-full border border-gray-700 rounded "
            onChange={handleChange}
            name="upper"
            ></input>
        
            <input 
            placeholder="Bottom text"
            className="px-2 h-12 w-full border border-gray-700 rounded "
            type="text"
            onChange={handleChange}
            name="lower"
            >

            </input>
        </form>
     
        </div>
        <div className="w-full flex justify-center">
        <button 
        onClick={handleClick}
         className="lg:w-4/6  w-full mt-16  bg-[#672280] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Get a new  image
</button>
        </div>
        <div className="meme">
                <img src={getMeme.randomImage} className="meme--image ml-96" />
                <h2 className="meme--text top">{getMeme.upper}</h2>
                <h2 className="meme--text bottom">{getMeme.lower}</h2>
            </div>
        
     </div> 
      
    );
}