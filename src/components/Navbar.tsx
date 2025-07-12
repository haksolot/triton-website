import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="w-screen relative flex flex-row h-full items-center justify-center gap-4">
      <div className="bg-white/40 backdrop-blur-md flex flex-row items-center justify-center gap-5 md:gap-8 p-2 px-7 rounded-2xl ring-2 ring-green-600">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="select-none text-sm md:text-base cursor-pointer"
        >
          About
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="select-none text-sm md:text-base cursor-pointer"
        >
          Services
        </Link>
        <Link
          to="whyus"
          smooth={true}
          duration={500}
          className="select-none text-sm md:text-base cursor-pointer"
        >
          Why us ?
        </Link>
        <Link
          to="contacts"
          smooth={true}
          duration={500}
          className="select-none text-sm md:text-base cursor-pointer"
        >
          Contacts
        </Link>
      </div>
    </div>
  );
}
