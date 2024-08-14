import React from "react";
import Card from "./Card";
import Card2 from "./Card2";


const Skills = () => {
    return(
        <div className="">
            <div className="flex justify-center mt-8">
            <Card/>
            <p className="text-gray-500 text text-3xl text-center justify-center grid content-center bg-black  font-[poppins] hover:text-white duration-300">My Skills</p>
            <Card2/>    
            </div>

        </div>
    )

}

export default Skills