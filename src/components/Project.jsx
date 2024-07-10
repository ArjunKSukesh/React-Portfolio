import { PROJECTS } from '../index.js'
import { FaGithub } from "react-icons/fa";
import {motion} from "framer-motion";

export default function Project() {
    return <div className="border-b border-neutral-900 pb-4 ">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="text-center text-4xl my-20">Projects</motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className='flex flex-wrap mb-8 lg:justify-center'>
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1.5}}
                    className='w-full lg:w-1/4'>
                        <img src={project.image} alt={project.title} className='mb-6 rounded-lg object-cover w-52 h-52' />
                    </motion.div>
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1.5}}
                    className='w-full max-w-xl lg:h-3/4'>
                        <div className='flex gap-2'>
                            <h6 className='mb-2 font-semibold'>{project.title} </h6>
                            <a href={project.gitHub}>
                            <FaGithub className='w-5 h-5 cursor-pointer hover:text-blue-500' />
                            </a>

                        </div>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className='px-2 py-1 mr-2 text-sm font-medium rounded bg-neutral-900 text-purple-900 mb-20'>{tech}</span>

                        ))}

                    </motion.div>
                </div>
            ))}

        </div>
    </div>

}
