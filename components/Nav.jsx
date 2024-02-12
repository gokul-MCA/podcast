import { AiOutlineSearch } from "react-icons/ai";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="z-10 flex w-full justify-center border-b bg-background p-3 items-center">

      <div className="absolute left-3 flex space-x-3">
        <Image src="/logo.png" alt="kg" width="100" height="100"/>
      </div>

      <div>
        <form className="flex w-28 items-center rounded-3xl border border-border px-4 sm:w-56 lg:w-96">
          {/* important bg-background focus:outline-none */}
          <input
            type="text"
            placeholder="search"
            className="h-10 w-full border-none  bg-background focus:outline-none"
          />
          <button className=" border-l pl-2">
            <AiOutlineSearch />
          </button>
        </form>
      </div>

      <div className="absolute right-3 flex space-x-3">
        <ModeToggle />  
      </div>
    </div>
  );
};

export default Nav;
