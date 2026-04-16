"use client";
import React from "react";
import DynamicGridLayer from "./DynamicGridLayer";

const LandingHero = () => {
  return (
    <div className="w-full text-foreground max-w-7xl mx-auto">
      
      {/* HERO / IDENTITY */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        {/* Left copy */}
        <div className="flex flex-col justify-center px-9 py-16 gap-6">
          <div className="flex items-center gap-2 text-blue-600 font-mono text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for collaboration · Fairfax, VA
          </div>
          <h1 className="text-6xl font-light tracking-tighter leading-[1.1]">
            Justin Matthew<br />
            <span className="italic text-blue-600">Newman</span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md font-light">
            Software Engineer specializing in <span className="text-foreground font-medium">Full-stack Development</span> and 
            <span className="text-foreground font-medium"> Geospatial Ops</span>. Currently building scalable enterprise 
            solutions at ECS Limited.
          </p>
          <div className="flex items-center gap-3 flex-wrap mt-2">
            <a href="mailto:newma4jm@gmail.com" className="text-sm font-medium  hover:opacity-80 px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5">
              Get in touch ↗
            </a>
            <a href="https://newmanjustin.com/science" className="text-sm text-muted-foreground border border-border hover:border-foreground hover:text-foreground px-6 py-3 rounded-xl transition-colors">
              View Projects
            </a>
          </div>
        </div>

        {/* Right visual: Terminal / Tech Stack Mockup */}
        <div className="relative overflow-hidden flex items-center justify-center">

          <DynamicGridLayer />
          <div className="relative z-10 border  rounded-2xl p-6 w-80 backdrop-blur-xl shadow-2xl">
            <div className="flex gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
            </div>
            <div className="space-y-3 font-mono text-[11px]">
              <div className="text-blue-400">newman@jmu:~$ <span className="text-slate-400">fetch skills</span></div>
              <div className="grid grid-cols-2 gap-2 ">
                <div>• C# / .NET</div>
                <div>• React.js</div>
                <div>• SQL / LINQ</div>
                <div>• Python3</div>
                <div>• AWS / Azure</div>
                <div>• Redis / Git</div>
              </div>
              <div className="pt-2 text-emerald-400/80">
                &gt; Security: Ghidra, Digital Forensics
              </div>
            </div>
          </div>
        </div>
      </div>

    
      {/* FOOTER / CONTACT */}
      <div className="flex items-center justify-between px-9 py-8 flex-wrap gap-6">
        <div className="space-y-1">
          <p className="text-sm font-light italic">
            "Design patterns over hardcoded logic."
          </p>
          <p className="text-[10px] font-mono uppercase tracking-widest">
            Fairfax, Virginia · +1 (804) 832-9881
          </p>
        </div>
        <div className="flex gap-4">
          <button className="text-[11px] font-mono">GITHUB</button>
          <button className="text-[11px] font-mono">LINKEDIN</button>
          <button className="text-[11px] font-mono">RESUME.PDF</button>
        </div>
      </div>

    </div>
  );
};

export default LandingHero;