import { desc } from "../index.js";
import profilePic from '../assets/arjun.jpg';
import {  motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x:-100, opacity: 0},
    visible:{
        x:0,
        opacity : 1,
        transition: {duration:0.5, delay:delay}
    }
});

export default function Home() {
    return (
        <div className="border-b border-neutral-900 pb-4  lg:mb-36 ">
            <div className="flex flex-wrap ">
                <div className="w-full lg:w-1/2 ">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-5 lg:text-8xl">
                            Arjun K
                        </motion.h1>
                        <motion.span 
                          variants={container(0.5)}
                          initial="hidden"
                          animate="visible"
                         className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p 
                          variants={container(1)}
                          initial="hidden"
                          animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">{desc}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                        initial={{x:100,opacity:0}} 
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay:0.5}}
                        src={profilePic} alt="arjun" className="w-96 h-[410px] rounded-2xl object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}
