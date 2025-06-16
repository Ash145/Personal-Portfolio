import React from 'react'
import SingleSkill from './SingleSkill';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaVuejs } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerMotion/variants'

const skills = [
    { 
        skill: 'HTML', 
        icon: FaHtml5 
    },
    { 
        skill: 'CSS', 
        icon: FaCss3Alt 
    },
    { 
        skill: 'JavaScript', 
        icon: IoLogoJavascript 
    },
    { 
        skill: 'VueJS', 
        icon: FaVuejs 
    },
    { 
        skill: 'NuxtJS', 
        icon: SiNuxtdotjs 
    },
    { 
        skill: 'TailwindCSS', 
        icon: RiTailwindCssFill 
    },
    { 
        skill: 'Python', 
        icon: FaPython 
    }
]

const AllSkills = () => {
  return (
    <div>
        <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
            {skills.map((item, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={fadeIn('up', `0.${index}`)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{once: false, amount: 0}}
                    >
                        <SingleSkill text={item.skill} imgSvg={<item.icon/>}/>
                    </motion.div>
                );
            })}
        </div>
    </div>
  )
}

export default AllSkills