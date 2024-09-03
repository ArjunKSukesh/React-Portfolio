import NearNestPic from './assets/hostel.jpg';
import SkillLancePic from './assets/freelancing.jpg';
import AiChatbot from './assets/ai_chatbot.jpg'


export const desc = `I craft user-friendly web applications that are
 both beautiful and functional. My expertise lies in  ReactJs, ExpressJs, MongoDB
 and NodeJs. I'm a passionate developer who thrives on challenges and embraces new technologies. 
 Let's collaborate on your next project!
`

export const aboutMe = `Hello there! I'm Arjun K, a passionate Web Developer With a strong background in computer science 
and a love for coding, I specialize in creating visually appealing and user-friendly websites. 
I believe that every project is an opportunity to learn and grow, and I enjoy taking up challenges that push my boundaries.
Throughout my journey as a developer, I have worked on various projects, both individually and collaboratively, using technologies like HTML, CSS, JavaScript, React, Nodejs and Expressjs.
I am always excited to explore new technologies and keep up with the latest industry trends.
If you have a project in mind or want to connect for any opportunities, feel free to get in touch. Let's collaborate and create something amazing together!`


export const PROJECTS = [
    {
        title : "NearNest",
        image : NearNestPic,
        description : "Android application designed to help students in discovering suitable accommodation houses or rooms near the College of Engineering Trivandrum",
        technologies : ["Bootstrap, React Native, Firebase"],
        gitHub : "https://github.com/ArjunKSukesh/NearNest"

    },
    {
        title : "SkillLance",
        image : SkillLancePic,
        description : "Web application platforms connect freelancers with clients seeking a wide range of digital services, from graphic design to web development,often starting at a competitive price per gig",
        technologies : ["Tailwind CSS, React Js, Node Js, Express Js, MongoDB"],
        gitHub : "https://github.com/ArjunKSukesh/SkillLance"

    },
    {
        title : "ASKme",
        image : AiChatbot,
        description : "Developed an AI chatbot using the MERN stack, leveraging the Gemini API for advanced natural language understanding and generation. Capable of answering user questions and providing informative responses on a wide range of topics.",
        technologies : ["React Js, Express Js, Node Js, MongoDB, Clerk Js "],
        gitHub : "https://github.com/ArjunKSukesh/ASKme"

    }
]

