import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5, FaPython, FaNodeJs, FaGitAlt, FaAws } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiMongodb, SiExpress, SiCplusplus } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"

        }
    }
})


export default function Tech() {
    return <div className="border-b border-neutral-900 pb-24 flex flex-col gap-5">
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
         className="text-center text-4xl my-20">Technologies</motion.h1>
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4 ">
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"

                className="rounded-2xl border-4 p-4 border-neutral-800">
                <FaHtml5 className="text-7xl text-red-500" />
            </motion.div>
            <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-4 border-neutral-800">
                <RiTailwindCssFill className="text-7xl text-cyan-500" />
            </motion.div>
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-4 border-neutral-800">
                <GrMysql className="text-7xl text-cyan-400 " />
            </motion.div>
            <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-4 border-neutral-800">
                <SiMongodb className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-4 border-neutral-800">
                <SiCplusplus className="text-7xl  text-sky-600 " />
            </motion.div>
            <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-4 border-neutral-800">
                <IoLogoJavascript className="text-7xl text-amber-400 " />
            </motion.div>
        </motion.div>
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 3 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-4 border-neutral-800">
                <FaPython className="text-7xl text-blue-400" />
            </motion.div>
            <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-4 border-neutral-800">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-4 border-neutral-800">
                <FaNodeJs className="text-7xl text-green-400" />
            </motion.div>
            <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-4 border-neutral-800">
                <SiExpress className="text-7xl text-white" />
            </motion.div>
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-4 border-neutral-800">
                <FaGitAlt className="text-7xl text-red-600" />
            </motion.div>

            <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-4 border-neutral-800">
                <FaAws className="text-7xl bg-sky-950 text-white rounded" />
            </motion.div>
        </motion.div>
    </div>

}
