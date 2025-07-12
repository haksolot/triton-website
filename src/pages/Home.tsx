import Footer from "../components/Footer";
import { RoughNotation } from "react-rough-notation";
import { Link } from "react-scroll";
import WorldMap from "../components/WorldMap";
import { Flame, Ship, Wrench, ArrowDown } from "lucide-react";
import DotBackground from "../components/DotBackground";

export default function Home() {
  return (
    <div className="flex flex-col w-screen">
      <div className="flex flex-col w-screen relative items-center">
        <h1 className="z-10 select-none text-2xl md:text-4xl mt-[50vh] mb-[30vh] transform -translate-y-1/2 font-poppins font-extralight text-center leading-normal w-11/12">
          Powering the Future with <br />
          <RoughNotation
            type="underline"
            show={true}
            color="green"
            strokeWidth={2}
          >
            <span className="font-normal inline-block">
              Sustainable Drilling
            </span>
          </RoughNotation>
        </h1>

        <Link
          to="about"
          smooth={true}
          duration={500}
          className="flex items-center"
        >
          <ArrowDown
            size={40}
            className="relative cursor-pointer animate-bounce"
          />
        </Link>
      </div>

      <div
        id="about"
        className="z-10 pt-36 self-center flex flex-col gap-20 items-center w-10/12"
      >
        <div className="self-center font-montserrat text-2xl md:text-4xl font-medium text-center flex flex-col gap-3">
          Who are we ?
          <div className="font-montserrat font-extralight text-xl md:text-2xl text-left">
            A new-generation drilling company led by{" "}
            <span className="font-light">experts in Oil & Gas</span> and
            <span className="font-light"> Geothermal</span> operations.
          </div>
        </div>

        <div className="flex flex-col self-center gap-20">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="z-10 font-montserrat text-2xl md:text-4xl font-medium flex flex-col gap-3">
              Our mission
              <div className="font-montserrat font-extralight text-xl md:text-2xl">
                Deliver{" "}
                <span className="font-light">
                  low-emission, high-efficiency
                </span>{" "}
                rig solutions to support{" "}
                <span className="font-light">sustainable energy</span>{" "}
                production.
              </div>
            </div>

            <div className="ring-2 ring-green-600 self-center rounded-2xl w-full overflow-hidden">
              <img
                src="/image-1.jpg"
                alt="image-1"
                className="w-full h-auto grayscale"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-20 items-center">
            <div className="flex-1 ring-2 ring-green-500 self-center rounded-2xl w-full overflow-hidden">
              <img
                src="/image-2.jpg"
                alt="image-2"
                className="w-full h-auto grayscale"
              />
            </div>
            <div className="z-10 flex-1 font-montserrat text-2xl md:text-4xl font-medium flex flex-col gap-3">
              Our Technology
              <div className="font-montserrat font-extralight text-xl md:text-2xl">
                In partnership with a top-tier Canadian rig manufacturer, our
                rigs are built to{" "}
                <span className="font-light">
                  save up to 60,000 tons of CO₂
                </span>{" "}
                over their lifetime.
              </div>
            </div>
          </div>
        </div>

        <div className="font-montserrat text-2xl md:text-4xl text-center font-medium flex flex-col gap-3 items-center">
          Our focus
          <div className="font-montserrat font-extralight text-xl md:text-2xl">
            We target onshore markets with high potential for green tech,
            including <span className="font-light">Sub-Saharan Africa</span> and{" "}
            <span className="font-light">France</span>.
          </div>
          <div className="md:w-[70vw] lg:w-[50vw] xl:w-[30vh]">
            <WorldMap />
          </div>
        </div>
      </div>
      <div id="services" className="flex flex-col gap-10 items-center">
        <div className="z-10 font-poppins text-2xl font-extralight self-center">
          Our Services
        </div>
        <div className="z-10 bg-white/25 backdrop-blur-sm w-3/4 h-fit justify-center flex flex-row items-center p-4 gap-3 rounded-2xl ring-2 ring-green-600">
          <Flame color="green" size={40} className="aspect-square w-1/4" />
          <div className="flex flex-col flex-1 gap-3">
            <div className="font-montserrat text-xl font-normal">
              Geothermal & Hydrocarbon Drilling
            </div>
            <div className="font-poppins text-xl font-extralight">
              High-performance, low-emission rigs for sustainable energy
              projects.
            </div>
          </div>
        </div>
        <div className="z-10 bg-white/25 backdrop-blur-sm w-3/4 h-fit justify-center flex flex-row items-center p-4 gap-3 rounded-2xl ring-2 ring-green-600">
          <Ship color="green" size={40} className="aspect-square w-1/4" />
          <div className="flex flex-col flex-1 gap-3">
            <div className="font-montserrat text-xl font-normal">
              Well Intervention
            </div>
            <div className="font-poppins text-xl font-extralight">
              Efficient solutions to maintain and optimize existing wells.
            </div>
          </div>
        </div>
        <div className="z-10 bg-white/25 backdrop-blur-sm w-3/4 h-fit justify-center flex flex-row items-center p-4 gap-3 rounded-2xl ring-2 ring-green-600">
          <Wrench color="green" size={40} className="aspect-square w-1/4" />
          <div className="flex flex-col flex-1 gap-3">
            <div className="font-montserrat text-xl font-normal">
              Engineering & Project Support
            </div>
            <div className="font-poppins text-xl font-extralight">
              From feasibility studies to full project execution.
            </div>
          </div>
        </div>
        <div
          id="whyus"
          className="z-10 font-poppins text-2xl font-extralight self-center"
        >
          Why choose us ?
        </div>
        <div className="z-10 bg-white/25 backdrop-blur-sm w-3/4 h-fit justify-center flex flex-row items-center p-4 gap-3 rounded-2xl ring-2 ring-green-600 text-justify-center font-poppins text-xl font-light">
          <span className="p-4 font-montserrat font-bold sm:text-5xl text-3xl text-green-700">
            30+
          </span>
          years of combined experience in energy drilling.
        </div>
        <div className="z-10 bg-white/25 backdrop-blur-sm w-3/4 h-fit justify-center flex flex-row items-center p-4 gap-3 rounded-2xl ring-2 ring-green-600 text-justify-center font-poppins text-xl font-light">
          <span className="p-4 font-montserrat font-bold sm:text-5xl text-3xl text-green-700">
            60,000
          </span>
          tons of CO₂ saved per rig over its full lifecycle.
        </div>
        <div className="z-10 bg-white/25 backdrop-blur-sm w-3/4 h-fit justify-center flex flex-row items-center p-4 gap-3 rounded-2xl ring-2 ring-green-600 text-justify-center font-poppins text-xl font-light">
          <span className="p-4 font-montserrat font-bold sm:text-5xl text-3xl text-green-700">
            100+
          </span>
          rigs built by our Canadian manufacturing partner.
        </div>
      </div>
      <div
        id="contacts"
        className="z-40 flex flex-col gap-10 items-center mt-20"
      >
        <Footer />
      </div>
      {/* FONDU HAUT */}
      <div className="pointer-events-none fixed top-0 left-0 w-full h-24 z-30 bg-gradient-to-b from-white to-transparent" />

      {/* FONDU BAS */}
      <div className="pointer-events-none fixed bottom-0 left-0 w-full h-24 z-30 bg-gradient-to-t from-white to-transparent" />

      <DotBackground />
    </div>
  );
}
