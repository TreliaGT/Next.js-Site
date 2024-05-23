// Header.js
"use client";
import Link from "next/link";
import Image from "next/image";


const Featurebar = () => {
  
  return (
    <section className=" p-4">
        <div className="container bg-primary m-auto text-white flex justify-between items-center p-10 rounded ">
            <div>
                <h2 className="text-3xl mb-2 font-semibold font-heading">Feature Bar</h2>
                <p>Text about bar</p>
            </div>
            <div>
                <Link href="#" className="btn brown inline-block">Read More</Link>
            </div>
        </div>  
    </section>
  );
};

export default Featurebar;
