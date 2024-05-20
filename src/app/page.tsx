import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
       <section className="flex">
          <div className="bg-primary content-center flex-col p-4 w-1/2">
            <div className="text-white m-auto w-1/2 ">
              <h1 className="font-heading text-5xl mb-4">This is the title</h1>
              <div className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
              </div>
              <div className="mt-3">
                <Link href="/contact" className="btn mr-3">
                  Contact Us
                </Link>
                <Link href="/contact" class="btn">
                  Our Portfolio
                </Link>
              </div>
            </div>
          </div>
          <div className="w-100">
              <Image src="https://source.unsplash.com/random" alt="feature image"  width={800}
      height={800}
      className="max-w-full h-auto"/>
          </div>
      </section>

    </main>
  );
}
