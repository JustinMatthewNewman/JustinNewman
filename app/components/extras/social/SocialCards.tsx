import React from "react";
import Social from "../../extras/social/Social";
import Social2 from "../../extras/social/Social2";
import Social3 from "../../extras/social/Social3";

function SocialCards() {


  return (
    <div className="flex flex-col md:flex-row items-center justify-center m-5 gap-4">
      <Social/>
      <Social2/>
      <Social3/>
    </div>
  );
}

export default SocialCards;
