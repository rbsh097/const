"use client";
import React from "react";
import Image from "next/image";
import { MapPin, FileText, Headset } from "lucide-react";

export default function ContactDetails() {
    const contactInfo = [
        {
            img: "/images/contact/service-station.png",
            icon: MapPin,
            subtitle: "SERVICE STATION",
            title: "2580 MARK AVENUE",
            title2: "BERLIN."
        },
        {
            img: "/images/contact/make-a-quote.png",
            icon: FileText,
            subtitle: "MAKE A QUOTE",
            title: "INFO@RENOVA.COM",
            title2: ""
        },
        {
            img: "/images/contact/call-us.png",
            icon: Headset,
            subtitle: "CALL US 24/7",
            title: "+2569 (25) 215868",
            title2: ""
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Info Cards */}
                    <div className="flex flex-col gap-10">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="group">
                                {/* Image Container */}
                                <div className="relative w-full h-[300px] lg:h-[220px] overflow-hidden mb-6 bg-gray-200">
                                    <Image
                                        src={item.img}
                                        alt={item.subtitle}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                {/* Content */}
                                <div className="flex items-start gap-6 px-4">
                                    <div className="p-4 border border-orange-500 rounded-full text-orange-500 shrink-0">
                                        <item.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <span className="block text-orange-500 font-bold text-sm tracking-widest mb-1 uppercase">
                                            {item.subtitle}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase leading-tight">
                                            {item.title}
                                            {item.title2 && <br />}
                                            {item.title2}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Map and Form */}
                    <div className="flex flex-col gap-12 h-full">
                        {/* Map Section */}
                        <div className="w-full h-[400px] bg-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.708819077209!2d13.40228737672283!3d52.52044397206138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1709664585123!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>

                        {/* Form Section */}
                        <div className="bg-white p-2">
                            <span className="block text-orange-500 font-bold text-sm tracking-widest mb-2 uppercase">
                                GET IN TOUCH
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 uppercase">
                                NEEDS HELP? LET'S GET IN TOUCH
                            </h2>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full bg-gray-100 border-none p-4 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700 placeholder-gray-500"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-gray-100 border-none p-4 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700 placeholder-gray-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Subject"
                                        className="w-full bg-gray-100 border-none p-4 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700 placeholder-gray-500"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        rows={6}
                                        placeholder="Type Your Message"
                                        className="w-full bg-gray-100 border-none p-4 focus:ring-2 focus:ring-orange-500 outline-none text-gray-700 placeholder-gray-500 resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-orange-600 text-white font-bold py-4 px-10 uppercase tracking-wider hover:bg-orange-700 transition-colors"
                                >
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
