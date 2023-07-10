'use client';
import React from "react"
import { useState } from "react";

export default function Meme(){
    const[meme,setMeme]=React.useState({
        lower:"Botttom Text",
        upper:"Top Text",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prev => ({
            ...prev,
            randomImage: url
        }))
        
    }
    function handleChange(event) {
        setMeme(prev => {
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
        })
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
        onClick={getMemeImage}
         className="lg:w-4/6  w-full   bg-[#672280] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Get a new  image
</button>
        </div>
        <div className="meme p-2">
                <img src={meme.randomImage} className="meme--image ml-96" />
                <h2 className="meme--text top">{meme.upper}</h2>
                <h2 className="meme--text bottom">{meme.lower}</h2>
            </div>
        
     </div> 
      
    );
}