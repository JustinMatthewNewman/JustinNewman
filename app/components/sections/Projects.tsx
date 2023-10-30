"use client";
import React from "react";

import SocialProject from "../extras/socialprojects/SocialProject";
import SocialProject2 from "../extras/socialprojects/SocialProject2";
import SocialProject3 from "../extras/socialprojects/SocialProject3";
import SocialProject4 from "../extras/socialprojects/SocialProject4";

export default function Projects() {
  return (
    <div>
      <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 mb-12">
        <SocialProject />
        <SocialProject2 />
        <SocialProject3/>
        <SocialProject4/>
      </div>      
    </div>
  );
}
