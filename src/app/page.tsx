import Image from "next/image";
import Link from "next/link";
import Bubbles from "./components/bubbles";

export default function Home() {
  return (
    <main>
        <section id="intro" className="flex bg-primary text-white min-h-1/2">
            <div className="content-center w-50 m-auto text-center content">
              <h1 className="text-6xl font-heading mb-5">THis is a Title</h1>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
              <Link href="#" className="btn"/>
            </div>
            <Bubbles sectionId="intro"/>
        </section>
        <section id="portfolio">
            
        </section>
    </main>
  );
}
