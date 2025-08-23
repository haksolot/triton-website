import Footer from "../components/Footer";
import { RoughNotation } from "react-rough-notation";
import { Link } from "react-scroll";
import WorldMap from "../components/WorldMap";
import { Flame, Ship, Wrench, ArrowDown } from "lucide-react";
import DotBackground from "../components/DotBackground";
import ProfileCard from "../components/ProfileCard";

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
            className="z-10 relative cursor-pointer animate-bounce"
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
                // src="/image-1.jpg"
                src={`/image-1.jpg`}
                alt="image-1"
                className="w-full h-auto grayscale"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-20 items-center">
            <div className="flex-1 ring-2 ring-green-500 self-center rounded-2xl w-full overflow-hidden">
              <img
                src={`/image-2.jpg`}
                alt="image-2"
                className="w-full h-auto grayscale"
              />
            </div>
            <div className="z-10 flex-1 font-montserrat text-2xl md:text-4xl font-medium flex flex-col gap-3">
              Our Technology
              <div className="font-montserrat font-extralight text-xl md:text-2xl">
                With a deep understanding of international markets and current
                technologies, we deliver an integrated approach combining the
                most promising innovations. Our goal: design rigs that are
                high-performance, economically viable, and sustainable.
                <br />
                <br />
                In addition, our low-emission rigs are engineered to minimize
                environmental impact while supporting the energy transition.
              </div>
            </div>
          </div>
        </div>

        <div className="font-montserrat text-2xl md:text-4xl text-center font-medium flex flex-col gap-3 items-center">
          Our focus
          <div className="font-montserrat font-extralight text-xl md:text-2xl">
            We target onshore markets with high potential for green tech,
            including <span className="font-light">Sub-Saharan Africa</span>,
            <span className="font-light"> France</span>,
            <span className="font-light"> Europe</span>, and
            <span className="font-light"> South America</span>.
          </div>
          <div className="md:w-[70vw] lg:w-[50vw] xl:w-[30vh]">
            <WorldMap />
          </div>
        </div>
      </div>
      <div id="team" className="flex flex-col gap-10">
        <div className="z-10 font-poppins text-2xl font-extralight self-center">
          Our Team
        </div>
        <div className="flex md:flex-row flex-col gap-14 items-center justify-center mb-8">
          <ProfileCard
            name="Steve Lamet"
            role="Chief Operating Officer (COO)"
            shortBio="More than 29 years of experience in offshore and onshore drilling ..."
            fullBio="More than 29 years of experience in offshore and onshore drilling operations, international expansion and energy services management.
He has held leadership positions at SLB, Transocean and as CEO of Caroil, where he led the reactivation of platforms, the expansion of subsidiaries in Africa and Europe, and the signing of strategic contracts during challenging market cycles.
Founder of Triton, a company focused on sustainable drilling solutions and energy transition.
He has overseen drilling operations in Equatorial Guinea, Nigeria, Angola, Egypt, Croatia, Hungary, Romania, Ukraine, the United Kingdom and France, among other countries.
He brings a combination of field experience, operational leadership, and strategic focus on energy transition to the Salta Project."
            linkedin="https://www.linkedin.com/in/steve-lamet-9abb321b/"
            image="/steve.png"
          />
          <ProfileCard
            name="Pierre Studer"
            role="Managing Director"
            shortBio="He  is an industrial engineer with expertise in oil services ..."
            fullBio="He  is an industrial engineer with expertise in oil services, holding a DUT in Mechanics and an engineering degree earned in 2012.
He began his career at SMP France, working on drilling operations in Gabon, Kenya, and Houston, where he managed a $35 million high-powered drilling unit project. In 2015, he led SMP Gabon, overseeing 230 staff and negotiating major contracts with SHELL and ASSALA, including a $28 million redevelopment and an $8 million Plug & Abandon campaign
He later joined CAROIL as Country Manager, led key drilling campaigns including KARI, and steered the company through the COVID-19 crisis by restructuring and relaunching operations. As Country Director, he oversaw finance, HR, technical operations, and compliance.
In 2025, he became Managing Director at Triton, focused on developing sustainable, tech-driven drilling solutions"
            linkedin="https://www.linkedin.com/in/pierre-s-156b5a46/"
            image="/pierre.png"
          />
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
              projects (100% electrical rig)
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
              Efficient solutions to maintain and optimize existing wells, Plug
              and Abandon , well reconversion for energy storage.
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
            45
          </span>
          years of combined experience in energy drilling.
        </div>
        <div className="z-10 bg-white/25 backdrop-blur-sm w-3/4 h-fit justify-center flex flex-row items-center p-4 gap-3 rounded-2xl ring-2 ring-green-600 text-justify-center font-poppins text-xl font-light">
          <span className="p-4 font-montserrat font-bold sm:text-5xl text-3xl text-green-700">
            60,000
          </span>
          tons of CO₂ saved per rig over its full lifecycle.
        </div>
      </div>
        <div
          id="about"
          className="z-40 flex flex-row gap-3 items-center justify-center mt-20 p-14"
        >
          <p className="font-montserrat text-lg">More about our services:</p>
          <a
            href="/tritonpresentation.pdf"
            download
            className="font-montserrat text-lg font-bold px-4 py-2 bg-green-700 text-white rounded-xl shadow hover:bg-green-800 transition"
          >
            Download Presentation
          </a>
        </div>

      <div
        id="contacts"
        className="z-40 flex flex-col gap-10 items-center mt-20"
      >
        <Footer />
      </div>
      <div className="pointer-events-none fixed top-0 left-0 w-full h-24 z-30 bg-gradient-to-b from-white to-transparent" />

      <div className="pointer-events-none fixed bottom-0 left-0 w-full h-24 z-30 bg-gradient-to-t from-white to-transparent" />

      <DotBackground />
    </div>
  );
}
