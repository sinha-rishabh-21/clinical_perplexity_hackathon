"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const team = [
  {
    name: "Diptanshu Mahakud",
    role: "Full Stack & AI Engineer",
    image: "/diptanshu.jpg",
    bio: "I'm a developer who loves working across the stack — from crafting smooth user experiences to building robust backend systems.Always curious, always building.",
    github: "https://github.com/DiptanshuMahakud",
    linkedin: "https://www.linkedin.com/in/diptanshu-mahakud/",
    email: "diptanshumahakud@gmail.com",
  },
  {
    name: "Rishabh Sinha",
    role: "Full Stack & AI Engineer",
    image: "/rishabh2.jpg",
    bio: "I handle the backend, APIs, and data workflows. I enjoy solving complex problems and making sure our systems scale reliably and perform smoothly.",
    github: "http://github.com/sinha-rishabh-21",
    linkedin: "http://linkedin.com/in/rishabh-sinha-94347a25a/",
    email: "02sinharishabh15@gmail.com",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-inter">
      <div className="h-[20vh]"></div>
      <div className="px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        <div className="grid gap-12 max-w-5xl mx-auto sm:grid-cols-1 md:grid-cols-2">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mb-4 object-cover"
              />
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-base mb-4">{member.bio}</p>
              <div className="flex gap-4 mt-auto">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="text-red-600 hover:text-red-800 transition"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
