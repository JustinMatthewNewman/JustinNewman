import React from "react";

// import Image from "next/image";
// import bgLines from "../../../public/images/background/looper-pattern.svg";
import ResumeHero from "../resume/ResumeHero";
import ResumeContentTwoColumn from "../resume/ResumeContentTwoColumn";
import ResumeContentRows from "../resume/ResumeContentRows";
import DocumentsContent from "../documents/DocumentsContent";
import CoursesContent from "../documents/CoursesContent";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
// import lines from '../../../public/images/background/six-04.svg';

export default function ResumePage() {
  return (
    <div className="w-full">
      <ResumeHero />
      {/* <Image
      className="lg:hidden"
          src={lines}
          alt="Background"
          quality={100}
          priority
          style={{
            zIndex: -1,
            marginTop: 3,
            opacity: "70%",
            position: 'fixed',
            width: '100%',
            transform: 'scaleY(-1)'

          }}
        /> */}
      <div className="container flex flex-col md:flex-row items-center justify-center mt-5 gap-4 max-w-[1200px]">
        <h4
          style={{
            marginLeft: "12px",
            fontSize: "1.2rem",
            fontWeight: "700",
            fontFamily:
              "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          }}
        >
          +1(804) 832-9881 ⋄ Fairfax, VA
        </h4>
      </div>

      <div className="container flex flex-col md:flex-row items-center justify-center mt-5 gap-4 max-w-[1200px]">
        <h4
          style={{
            marginLeft: "12px",
            fontSize: "1.2rem",
            fontWeight: "700",
            fontFamily:
              "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          }}
        >
          Jr. Software Developer ⋄ CsWithJustin@gmail.com ⋄ ECS Limited
        </h4>
      </div>

      <div className="container flex flex-col md:flex-row items-center justify-center mt-6 gap-4 max-w-[1200px]">
        <ResumeContentTwoColumn />
      </div>

      <div className="container flex flex-col md:flex-row items-center justify-center mt-6 gap-4 max-w-[1200px]">
        <ResumeContentRows />
      </div>

      <div className="container items-center justify-center mt-6 gap-4 max-w-[1200px]">
       <DocumentsContent/>
      </div>
      <div className="container items-center justify-center mt-6 gap-4 max-w-[1200px]">
       <CoursesContent/>
       </div>
       <div className="flex justify-center py-12">
        <Link href="/resume">
          <div className="rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp
              size={30}
            />
          </div>
        </Link>
      </div>
    </div>
  );

}
