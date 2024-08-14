import React from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import Skills from './Skills'
import { Car } from "lucide-react";
import Enskripsi from "./Enskripsi"
import Button from "./Button"


function Page () {
    const [text] =useTypewriter({
        words: ["Front end Developer", "Junior Programmer", 'The Honoured One'],
        loop: {},
        typeSpeed: 30,
        deleteSpeed: 20,
    });

    return (

        <div className="relative">
            <Enskripsi/>
            <div className="flex justify-center">
            <div className="mt-[50px]">
                <p className="text-gray-500 text text-lg text-center justify-center font-[poppins] mt-10">Junior Frontend Developer, still learning to code with javascript, react, and tailwind</p>
                <p className="text-gray-500 text text-lg text-center justify-center font-[poppins]">high school in Indonesia SMKTI Airlangga</p>
                <p className="text-gray-500 text text-lg text-center justify-center font-[poppins]">i wanna be a fullstack developer soon</p>
                <p className="text-gray-500 text text-lg text-center justify-center font-[poppins]">My dream is to get education abroad</p>
                <p className="text-gray-500 text text-lg text-center justify-center font-[poppins]">My hobbies are gaming, learn coding and go to gym</p>
                <p className="text-gray-500 text text-lg text-center justify-center font-[poppins]">My favorite Music genre is thrash metal and heavy metal </p>
                <p className="text-gray-500 text text-lg text-center justify-center font-[poppins]">Introvert guy cant socialize</p>
            <div className="mt-20 text-center">
            <div className="flex items-center gap-[300px]">
            <Button/>
            <Button/>

            </div>
        </div>
            </div>
            <div className="">
            <h1 className="text-3xl font-[Courier] text-white text-left"
         style={{margin: '0px'}}>
            Im a {'  '}
            <span className="text-red-700">
                {text}
            </span>
            <span>
                <Cursor cursorStyle="_" />
            </span>
        </h1>   
                <img 
                className="rounded-full border-4 border-red-900 ml-60 shadow-xl cursor-pointer mt-[100px] scale-100 hover:scale-[1.6] duration-500 ease-outrounded-full hover:animate-pulse duration-500 ease-out cursor-pointer" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9g17TKaRWmEAqL5DCO0mdYnxxkrZzB3Vkw&s"/>
            </div>
            </div>       

        <div>
        <Skills/>
        </div>
        </div>
    )
}

export default Page