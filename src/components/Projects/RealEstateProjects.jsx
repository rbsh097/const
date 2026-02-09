"use client";
import React from "react";
import Image from "next/image";

const projects = [
    {
        src: "/images/projects/skyscraper.png",
        alt: "Luxury Skyscraper at Night",
        title: "City Center Heights",
    },
    {
        src: "/images/contact/service-station.png",
        alt: "Modern Commercial Building",
        title: "701 Rio Commercial",
    },
    {
        src: "/images/projects/skyscraper.png", // Reuse due to generation limit
        alt: "Residential Complex",
        title: "Ascent Apartments",
    },
    {
        src: "/images/contact/service-station.png", // Reuse due to generation limit
        alt: "Urban Living",
        title: "The Metropolitan",
    },
    {
        src: "/images/projects/skyscraper.png", // Reuse due to generation limit
        alt: "Office Park",
        title: "Tech Innovation Hub",
    },
    {
        src: "/images/contact/service-station.png", // Reuse due to generation limit
        alt: "Community Housing",
        title: "Riverside Residence",
    },
];

export default function RealEstateProjects() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-light text-gray-800 tracking-wide">
                        Real Estate Development Projects
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {projects.map((project, index) => (
                        <div key={index} className="relative group overflow-hidden h-64 md:h-80 w-full">
                            <Image
                                src={project.src}
                                alt={project.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay (Optional, for better text visibility or interaction) */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-lg font-bold tracking-wider uppercase border border-white px-6 py-2">
                                    View Project
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
