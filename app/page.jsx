import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className=" container mx-auto flex flex-col items-center justify-center h-screen">
      <h2 className=" text-2xl font-semibold ">Welcome to Podcasts!</h2>
      <p className="text-lg p-2 pb-5">Let's get started by creating a new podcast or importing a podcast from another hosting platform.</p>
      <div className="flex gap-2 p-5">
        <Link
          className="border flex flex-col items-center gap-2 p-2 rounded-xl overflow-hidden hover:shadow-lg hover:scale-105 z-0 hover:z-10 transition-all hover:hue-rotate-15"
          href=""
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
          href=""
          target=""
        >
          <Image
            src="/folder.jpg"
            alt="folder"
            width={300}
            height={250}
            priority
          />
          <p className=" text-lg">Import Existing Podcast</p>
        </Link>

        <Link
          className="border flex flex-col items-center gap-2 p-2 rounded-xl overflow-hidden hover:shadow-lg hover:scale-105 z-0 hover:z-10 transition-all hover:hue-rotate-15"
          href=""
          target=""
        >
          <Image src="/play.jpg" alt="play" width={300} height={250} priority />
          <p className="tex-lg">Play</p>
        </Link>
      </div>
    </section>
    // heelo
  );
}
