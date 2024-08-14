import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Card = () => {
    return (
        <div className="grid h-screen w-full place-content-center bg-black px-4 py-12 text-white scale-[1.]">
            <TiltCard />
        </div>
    );
};

const TiltCard = ()  => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSPring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        ["17.5deg", "-17.5deg"] 
    );
    
    const rotateY = useTransform(
        mouseXSPring,
        [-0.5, 0.5],
        ["-17.5deg", "17.5deg"] 
    );
    


    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };


    return (
        <motion.div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
        }}
        
        className="relative h-72 w-72 rounded-xl bg-gray-800 hover:shadow-2xl hover:shadow-white duration-300">
            <div
            style={{
                transform: 'translateZ(100px)',
                transformStyle: 'preserve-3d',
            }}
            className="absolute inset-4 grid place-content-center bg-slate-700 rounded-xl shadow-2xl">
                <p
                style={{
                    transform: 'translate(50px)',
                }}
                className="text-center text-2xl font-bold mr-[100px]">
                    JavaScript
                </p>
            </div>
        </motion.div>
        
    )
}

    

export default Card