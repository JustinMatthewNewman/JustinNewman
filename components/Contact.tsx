import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/map-min.png";

import { Input } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { useTheme } from "../contexts/ThemeContext";

const Contact = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Here you need to update your styles based on the theme
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
    // add other style updates as needed
  }, [theme]);

  return (
    <div id="contact" className="w-full" style={{ zIndex: "10" }}>
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#9caacc]">
          Contact
        </p>
        <h2 className="py-4">Brighten up my day.</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div
            style={{
              backgroundColor: `${theme.contactContainer}`,
              color: `${theme.text}`,
            }}
            className="col-span-3 lg:col-span-2 w-full h-full shadow-xl rounded-xl p-4"
          >
            <div className="lg:p-4 h-full ">
              <div>
                <Image className="rounded-xl" src={ContactImg} alt="/" />
              </div>
              <div>
                <h2 className="py-2">Justin Newman</h2>
                <p>Jr. Software Engineer | Metalinguist LLC</p>
                {/* <p className="py-4">
                  Unlock the Power of Code: Freelance or Full-Time, Let's
                  Collaborate!
                </p> */}
                <p className="py-4">
                  Ready to take your projects to the next dimension? I specialize in crafting
                  immersive 3D data visualizations that bring data to life. With
                  a strong command of technologies like React, Next.js,
                  Material-UI, and Next UI, I&apos;m equipped to transform your ideas
                  into captivating user experiences. 
                </p>
              </div>

              <div>
                <p className="uppercase pt-8">STAY CONNECTED</p>
                <div className="flex items-center justify-between py-8">
                  <Link href="https://www.linkedin.com/in/justin-newman-15650b185">
                    <button className="rounded-full p-4 bg-purple-500 text-white">
                      <FaLinkedinIn style={{ fontSize: "36px" }} />
                    </button>
                  </Link>
                  <Link href="https://github.com/JustinMatthewNewman">
                    <button className="rounded-full p-4 bg-purple-500 text-white">
                      <FaGithub style={{ fontSize: "36px" }} />
                    </button>
                  </Link>
                  <Link href="https://www.instagram.com/justin_m_newman/">
                    <button className="rounded-full p-4 bg-purple-500 text-white">
                      <AiOutlineInstagram style={{ fontSize: "36px" }} />
                    </button>
                  </Link>
                  <Link href="/resume">
                    <button className="rounded-full p-4 bg-purple-500 text-white">
                      <BsFillPersonLinesFill style={{ fontSize: "36px" }} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div
            style={{
              backgroundColor: `${theme.contactContainer}`,
              color: `${theme.text}`,
            }}
            className="col-span-3 w-full h-auto shadow-xl rounded-xl lg:p-4"
          >
            <div className="p-4">
              <form
                action="https://getform.io/f/ebf4de1b-62ca-49f4-9068-698928c79b23"
                method="POST"
                encType="multipart/form-data"
              >
                <Spacer y={2.5} />

                <div className="grid md:grid-cols-2 gap-10 w-full py-2 border-gray-300">
                  <div className="flex flex-col">
                    <Input
                      style={{ color: `${theme.text}` }}
                      type="text"
                      name="name"
                      css={{ $$inputColor: `${theme.inputBackground}` }}
                      shadow={false}
                      labelPlaceholder="name"
                      status="secondary"
                    />
                  </div>

                  <div className="flex flex-col">
                    <Input
                      style={{ color: `${theme.text}` }}
                      type="text"
                      name="phone"
                      css={{ $$inputColor: `${theme.inputBackground}` }}
                      shadow={false}
                      labelPlaceholder="phone"
                      status="secondary"
                    />
                  </div>
                </div>
                <Spacer y={1.5} />

                <div className="flex flex-col py-2">
                  <Input
                    style={{ color: `${theme.text}` }}
                    type="email"
                    name="email"
                    css={{ $$inputColor: `${theme.inputBackground}` }}
                    shadow={false}
                    labelPlaceholder="email"
                    status="secondary"
                  />
                </div>
                <Spacer y={1.5} />
                <div className="flex flex-col py-2">
                  <Input
                    style={{ color: `${theme.text}` }}
                    type="text"
                    name="subject"
                    css={{ $$inputColor: `${theme.inputBackground}` }}
                    shadow={false}
                    labelPlaceholder="subject"
                    status="secondary"
                  />
                </div>
                <Spacer y={2.5} />
                <div className="flex flex-col py-2">
                  <Textarea
                    style={{ color: `${theme.text}` }}
                    rows={10}
                    css={{ $$inputColor: `${theme.inputBackground}` }}
                    shadow={false}
                    labelPlaceholder="message"
                    status="secondary"
                  ></Textarea>
                </div>
                <Spacer y={3.7} />
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;