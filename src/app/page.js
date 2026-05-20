import Link from "next/link";
import Image from "next/image";


export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-pink-300 text-black bg-[linear-gradient(to_right,#00000040_1px,transparent_1px),linear-gradient(to_bottom,#00000040_1px,transparent_1px)] bg-[size:64px_64px]">
      
 <nav className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-12 py-8">

  {/* LOGO */}
  <Link href="/" className="transition hover:scale-105">
    <Image
      src="/logo.png"
      width={200}
      height={140}
      alt="Paw Club Logo"
      className="drop-shadow-[4px_4px_0px_black]"
    />
  </Link>

  {/* NAVIGATION */}
  <div className="hidden gap-16 text-xl font-black uppercase md:flex">
    <Link href="/about">About</Link>

    <Link href="/services">Services</Link>

    <Link href="/contact">Contact</Link>
  </div>

  {/* MENU BUTTON */}
  <button className="border-4 border-black bg-white p-4 shadow-[5px_5px_0px_black] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
    ☰
  </button>

</nav>
      <section className="flex min-h-screen items-center justify-center">
        <div className="relative text-center">
          <div className="absolute -left-24 top-12 rotate-[-15deg] text-5xl">
            ✨
          </div>

          <div className="absolute -right-20 top-24 text-6xl">
            🐾
          </div>

          <div className="absolute -bottom-10 right-0 rotate-[-8deg] border-4 border-black bg-yellow-300 px-6 py-3 text-2xl font-black uppercase shadow-[6px_6px_0px_black]">
            Fresh Look!
          </div>

          <h1 className="text-[90px] font-black uppercase leading-[0.9] tracking-tight text-white drop-shadow-[8px_8px_0px_#111] md:text-[150px]">
            Get
            <br />
            Groomed
            <br />
            Now
          </h1>

          <button className="mt-10 border-4 border-black bg-sky-300 px-12 py-5 text-2xl font-black uppercase shadow-[8px_8px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_black]">
            Book Now →
          </button>
        </div>
      </section>

      <div className="absolute bottom-0 left-0 flex w-full border-y-4 border-black bg-white py-4 text-2xl font-black uppercase">
        <div className="animate-marquee whitespace-nowrap">
          ● Currently Open ● Happy Pets Only ● Good Boy Grooming ● Currently Open ● Happy Pets Only ● Good Boy Grooming
        </div>
      </div>
    </main>
  );
}