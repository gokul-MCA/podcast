'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  return (
    <section className=" container mx-auto flex flex-col items-center justify-center h-screen">
      <Image src="/logo.png" alt="logo" width="130" height="130" priority className="absolute top-0 left-0 p-3"/>
      <Button variant='outline' className ='m-3 absolute top-0 right-0 bg-blue-500 hover:bg-blue-600'><Link href='/admin' className="flex items-center gap-1" >
        <FaRegUserCircle className="w-4 h-4"/> Login</Link></Button>
      <h2 className=" text-2xl font-semibold ">Welcome to Podcasts!</h2>
      <p className="text-lg p-2 pb-5">Let's get started by creating a new podcast or importing a podcast from another hosting platform.</p>
      <div className="flex gap-2 p-5">
        
        <Link
          className="border flex flex-col items-center gap-2 p-2 rounded-xl overflow-hidden hover:shadow-lg hover:scale-105 z-0 hover:z-10 transition-all hover:hue-rotate-15"
          href="/rec"
          target=""
        >
          <Image
            src="/podcast.jpg"
            alt="mic"
            width={300}
            height={250}
            priority
          />
          <p className=" text-lg">Create New Podcast</p>
        </Link>

        <Link
          className="border flex flex-col items-center gap-2 p-2 rounded-xl overflow-hidden hover:shadow-lg hover:scale-105 z-0 hover:z-10 transition-all hover:hue-rotate-15"
          href="/upload"
          target=""
        >
          <Image
            src="/folder.jpg"
            alt="folder"
            width={300}
            height={250}
            priority
          />
          <p className=" text-lg">Upload Existing Podcast</p>
        </Link>

        <Link
          className="border flex flex-col items-center gap-2 p-2 rounded-xl overflow-hidden hover:shadow-lg hover:scale-105 z-0 hover:z-10 transition-all hover:hue-rotate-15"
          href="/playlist"
          target=""
        >
          <Image src="/play.jpg" alt="play" width={300} height={250} priority />
          <p className="tex-lg">Library</p>
        </Link>
      </div>
    </section>
    
  );
}
