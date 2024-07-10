import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";



export default function NavBar() {
    return (
        <nav className="flex items-center justify-between py-6 mb-10 text-amber-400">
            <div>
                <h1 className="uppercase font-bold text-2xl">Arjun K</h1>
            </div>
            <div className="flex m-8 items-center gap-4 justify-center text-2xl">
                <a href="https://www.linkedin.com/in/arjun-k-sukesh/">
                    <FaLinkedin className="hover:text-blue-500"/>
                </a>
                <a href="https://github.com/ArjunKSukesh">
                    <FaGithub className="hover:text-white"/>
                </a>
                <a href="https://www.instagram.com/this.is_.arjun?igsh=MW13MjIxeTE5ZHR6cw==">
                    <FaInstagramSquare className="hover:text-red-700 "/>
                </a>
            </div>
        </nav>
    )
}
