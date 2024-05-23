import Image from "next/image";
import Link from "next/link";
import Feature from "./components/featurebar";
import What from "./components/whatwedo";

export default function Home() {
  return (
    <main>
        <section id="intro" className="flex  text-white py-32">
          <div className="background-circles">
              <span></span>
              <span></span>
              <span></span>
          </div>
            <div className="relative content-center  m-auto text-center content">
              <div className="glass"></div>
              <h1 className="text-9xl font-heading mb-5">THis is a Title</h1>
              <div >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
              <Link href="#" className="btn mt-5 inline-block"> Contact Us</Link>
            </div>
        </section>
        <Feature/>
        <What/>
    </main>
  );
}
