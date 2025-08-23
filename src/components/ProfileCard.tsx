import { useState } from "react";
import { createPortal } from "react-dom";
import { Linkedin } from "lucide-react";

type Props = {
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  linkedin: string;
  image: string;
};

export default function ProfileCard({
  name,
  role,
  shortBio,
  fullBio,
  linkedin,
  image,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="relative z-10 w-80 h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
      >
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-300"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="font-poppins text-xl font-bold">{name}</h1>
          <h2 className="font-montserrat text-lg text-gray-200">{role}</h2>
          <p className="mt-2 text-sm line-clamp-3">{shortBio}</p>

          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 mt-3"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>

      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-white/70 flex items-center justify-center z-50 animate-fadeIn backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="bg-white w-[90%] md:w-[800px] max-h-[85vh] rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image portrait */}
              <div className="w-full md:w-1/3 h-56 md:h-auto">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover md:rounded-l-xl md:rounded-tr-none rounded-t-xl"
                />
              </div>

              {/* Contenu */}
              <div className="flex-1 p-6 overflow-y-auto">
                {/* Close btn */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
                >
                  ✕
                </button>

                <h1 className="text-2xl font-bold">{name}</h1>
                <h2 className="text-md text-gray-600 mb-4">{role}</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {fullBio}
                </p>

                <div className="mt-6">
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <Linkedin className="w-5 h-5 mr-2" /> See on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
