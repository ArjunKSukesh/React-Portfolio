import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Tech from "./components/Tech";

export default function App() {
  return (
    <div className="overflow-x-hidden text-white antialiased bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {/* <div className="fixed top-0 z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div> */}
      <div className="container mx-auto px-8">
        <NavBar />
        <Home />
        <About />
        <Tech/>
        <Project/>
        <Contact/>

      </div>
    </div>

  )
}
