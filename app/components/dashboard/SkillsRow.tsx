import React from 'react'

function SkillsRow() {
  return (
    <div>
       {/* CORE STATS (Experience Metrics) */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-t border-slate-500/20">
          {[
            { num: "400+", label: "Support Tickets Resolved", tag: "at ECS Limited" },
            { num: "BS CS", label: "James Madison University", tag: "Class of 2023" },
            { num: "2.5yr", label: "Professional Experience", tag: "Full-stack Dev" },
            { num: "∞", label: "Side Quest Interest", tag: "Finance & Gaming" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col gap-1.5 p-7 border-r last:border-r-0 border-slate-500/20 hover:bg-muted/30 transition-colors cursor-default">
              <div className="text-3xl font-light tracking-tight text-foreground">{s.num}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
              <div className="text-xs font-mono text-blue-600 mt-1">{s.tag}</div>
            </div>
          ))}
        </div>

        {/* PROFESSIONAL LOG */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-slate-500/20">
          <div className="p-9 border-r border-slate-500/20">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 mb-8">Professional History</h2>
            <div className="space-y-10">
              <div className="relative pl-6 border-l border-border">
                <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-600" />
                <h3 className="text-sm font-medium">Junior Software Developer @ ECS Limited</h3>
                <p className="text-[11px] text-muted-foreground mb-3 italic">Dec 2024 — Present</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Optimizing .NET MAUI mobile applications and refactoring legacy components.
                  Implementing scalable caching services and complex SQL/LINQ reporting.
                </p>
              </div>
              <div className="relative pl-6 border-l border-border">
                <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-border" />
                <h3 className="text-sm font-medium">Junior Software Engineer @ Metalinguist LLC</h3>
                <p className="text-[11px] text-muted-foreground mb-3 italic">Feb 2023 — Dec 2024</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Focused on React dashboards and AWS DynamoDB architecture.
                  Integrated Google OAuth 2.0 and dynamic data visualization tools.
                </p>
              </div>
            </div>
          </div>

          {/* PROJECTS / SIDE QUESTS */}
          <div className="p-9 bg-muted/20">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 mb-8">Side Quests</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-5 bg-background border border-border/60 rounded-xl group hover:border-blue-500/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-medium">Finance Manager Pro</h4>
                  <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Active</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Next.js & Firebase dashboard featuring a liquid glass UI for real-time family expense tracking.
                </p>
              </div>
              <div className="p-5 bg-background border border-border/60 rounded-xl group hover:border-blue-500/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-medium">NYXCraft.live</h4>
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Deployment</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  PaperMC Minecraft infrastructure with live gaming stats portal and automated subscription systems.
                </p>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default SkillsRow
 {/* CORE STATS (Experience Metrics) */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-500/20">
          {[
            { num: "400+", label: "Support Tickets Resolved", tag: "at ECS Limited" },
            { num: "BS CS", label: "James Madison University", tag: "Class of 2023" },
            { num: "2.5yr", label: "Professional Experience", tag: "Full-stack Dev" },
            { num: "∞", label: "Side Quest Interest", tag: "Finance & Gaming" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col gap-1.5 p-7 border-r last:border-r-0 border-slate-500/20 hover:bg-muted/30 transition-colors cursor-default">
              <div className="text-3xl font-light tracking-tight text-foreground">{s.num}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
              <div className="text-xs font-mono text-blue-600 mt-1">{s.tag}</div>
            </div>
          ))}
        </div>

        {/* PROFESSIONAL LOG */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-slate-500/20">
          <div className="p-9 border-r border-slate-500/20">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 mb-8">Professional History</h2>
            <div className="space-y-10">
              <div className="relative pl-6 border-l border-border">
                <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-600" />
                <h3 className="text-sm font-medium">Junior Software Developer @ ECS Limited</h3>
                <p className="text-[11px] text-muted-foreground mb-3 italic">Dec 2024 — Present</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Optimizing .NET MAUI mobile applications and refactoring legacy components.
                  Implementing scalable caching services and complex SQL/LINQ reporting.
                </p>
              </div>
              <div className="relative pl-6 border-l border-border">
                <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-border" />
                <h3 className="text-sm font-medium">Junior Software Engineer @ Metalinguist LLC</h3>
                <p className="text-[11px] text-muted-foreground mb-3 italic">Feb 2023 — Dec 2024</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Focused on React dashboards and AWS DynamoDB architecture.
                  Integrated Google OAuth 2.0 and dynamic data visualization tools.
                </p>
              </div>
            </div>
          </div>

          {/* PROJECTS / SIDE QUESTS */}
          <div className="p-9 bg-muted/20">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 mb-8">Side Quests</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-5 bg-background border border-border/60 rounded-xl group hover:border-blue-500/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-medium">Finance Manager Pro</h4>
                  <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Active</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Next.js & Firebase dashboard featuring a liquid glass UI for real-time family expense tracking.
                </p>
              </div>
              <div className="p-5 bg-background border border-border/60 rounded-xl group hover:border-blue-500/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-medium">NYXCraft.live</h4>
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Deployment</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  PaperMC Minecraft infrastructure with live gaming stats portal and automated subscription systems.
                </p>
              </div>
            </div>
          </div>
        </div>
