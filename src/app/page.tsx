import Image from "next/image";
import Link from "next/link";
import Bubbles from "./components/bubbles";

export default function Home() {
  return (
    <main>
        <section id="intro" className="flex bg-primary text-white min-h-screen">
            <div className="content-center w-50 m-auto text-center content">
              <h1 className="text-6xl font-heading mb-5">THis is a Title</h1>
              <div >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
              <Link href="#" className="btn mt-5 inline-block"> Contact Us</Link>
            </div>
            <Bubbles sectionId="intro"/>
        </section>
        <section id="feature" className="container m-auto ">
        <div className="grid grid-cols-3 gap-4">
       
          <div className="col-span-2 bg-gray-200 p-4">
       
            Big Grid Item
          </div>

   
          <div className="col-span-1 bg-gray-300 p-4">
         
            Small Grid Item 1
          </div>
          <div className="col-span-1 bg-gray-300 p-4">
            
            Small Grid Item 2
          </div>
        </div>
        </section>
        <section id="portfolio">
            
        </section>
    </main>
  );
}
