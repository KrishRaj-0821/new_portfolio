import React, { useState, useEffect } from 'react';
import {
  Server,
  Database,
  Globe,
  Layers,
  Cpu,
  Shield,
  Zap,
  Cloud,
  ArrowRight,
  Play,
  RotateCcw,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function SystemArchitecture() {
  const [activeStep, setActiveStep] = useState(0); // 0 = Idle, 1 = User, 2 = Frontend, 3 = API, 4 = Backend, 5 = Database, 6 = Return
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedNode, setSelectedNode] = useState('pipeline');
  const [simulationLog, setSimulationLog] = useState('System ready. Click "Dispatch Request" to trace packet lifecycle.');

  const corePipeline = [
    {
      id: 'user',
      title: 'USER / CLIENT',
      role: 'Interaction & Dispatch',
      desc: 'Mobile-first client views trigger structured events and asynchronous HTTP requests.',
      icon: Globe,
      color: '#38bdf8',
      step: 1
    },
    {
      id: 'frontend',
      title: 'FRONTEND UI',
      role: 'Reactive State & DOM',
      desc: 'React component hierarchy, Tailwind utility layouts, client validation & local state caching.',
      icon: Layers,
      color: '#818cf8',
      step: 2
    },
    {
      id: 'api',
      title: 'REST API GATEWAY',
      role: 'Routing & Serializers',
      desc: 'RESTful endpoints, route parameter parsing, JSON validation & CORS access policies.',
      icon: Zap,
      color: '#a78bfa',
      step: 3
    },
    {
      id: 'backend',
      title: 'DJANGO BACKEND',
      role: 'Business Logic & Services',
      desc: 'Python & Django viewsets, architectural services, scheduling algorithms & advisory engines.',
      icon: Server,
      color: '#10b981',
      step: 4
    },
    {
      id: 'database',
      title: 'RELATIONAL DBMS',
      role: 'Persistence & Integrity',
      desc: 'Normalized relational schemas, ACID transactions, doctor slot indexing & consultation logs.',
      icon: Database,
      color: '#f59e0b',
      step: 5
    }
  ];

  const supportingNodes = [
    {
      id: 'auth',
      title: 'AUTH & SECURITY',
      desc: 'Credential validation, token sessions & sanitization.',
      icon: Shield,
      color: '#ec4899'
    },
    {
      id: 'ai',
      title: 'AI / ALGORITHMS',
      desc: 'Smart crop heuristics (AAGAM) & dynamic revision schedulers (Guru Jii).',
      icon: Cpu,
      color: '#c084fc'
    },
    {
      id: 'cache',
      title: 'STORAGE & CACHE',
      desc: 'Chrome Storage persistence (Quick Notes) & local browser state.',
      icon: Database,
      color: '#06b6d4'
    },
    {
      id: 'deploy',
      title: 'CI/CD & HOSTING',
      desc: 'Vercel, Netlify & GitHub Actions deployment environments.',
      icon: Cloud,
      color: '#ffffff'
    }
  ];

  const triggerSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(1);
    setSimulationLog('PACKET DISPATCHED: POST /api/v1/request -> Client payload initialized.');

    setTimeout(() => {
      setActiveStep(2);
      setSimulationLog('FRONTEND: JSON payload sanitized; dynamic state updated.');
    }, 700);

    setTimeout(() => {
      setActiveStep(3);
      setSimulationLog('API GATEWAY: Route matched; headers verified; passing to Django middleware.');
    }, 1400);

    setTimeout(() => {
      setActiveStep(4);
      setSimulationLog('BACKEND SERVICE: Python viewset executed; relational transaction planned.');
    }, 2100);

    setTimeout(() => {
      setActiveStep(5);
      setSimulationLog('DATABASE: Query executed in 14ms; relational rows committed.');
    }, 2800);

    setTimeout(() => {
      setActiveStep(6);
      setSimulationLog('RESPONSE 200 OK: Data stream returned to client. Total round-trip latency: 38ms.');
      setIsSimulating(false);
    }, 3500);
  };

  const resetSimulation = () => {
    setActiveStep(0);
    setIsSimulating(false);
    setSimulationLog('System reset. Click "Dispatch Request" to trace packet lifecycle.');
  };

  return (
    <section
      id="system-architecture"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 z-10 border-t border-white/[0.08]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STAGE 04 // ARCHITECT</span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            I Think In Systems.
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            Software is not just code written in isolation; it is a pipeline of connected nodes moving data safely and predictably from human intent to database state.
          </p>
        </div>

        {/* Packet Dispatch Simulator Controls */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <button
            onClick={triggerSimulation}
            disabled={isSimulating}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              isSimulating
                ? 'bg-purple-600/50 text-purple-200 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:scale-[1.02]'
            }`}
          >
            <Play className={`w-3.5 h-3.5 fill-current ${isSimulating ? 'animate-spin' : ''}`} />
            <span>{isSimulating ? 'Tracing Stream...' : 'Dispatch Request'}</span>
          </button>

          <button
            onClick={resetSimulation}
            className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Reset Pipeline"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Real-time Telemetry Log Bar */}
      <div className="mb-8 p-3 sm:p-4 rounded-2xl bg-dark-950/80 border border-white/10 font-mono text-xs flex items-center justify-between gap-4 backdrop-blur-md">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
          <span className="text-slate-500 shrink-0 hidden sm:inline">TELEMETRY //</span>
          <span className="text-purple-300 truncate">{simulationLog}</span>
        </div>
        <div className="text-[11px] text-slate-500 shrink-0">
          STEP: <span className="text-cyan-400 font-bold">{activeStep}/5</span>
        </div>
      </div>

      {/* Core Flow Pipeline Visualization (USER -> FRONTEND -> API -> BACKEND -> DATABASE) */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {corePipeline.map((node, idx) => {
            const Icon = node.icon;
            const isActive = activeStep === node.step || (activeStep === 6);
            const isCompleted = activeStep > node.step;

            return (
              <div
                key={node.id}
                className={`p-5 rounded-3xl border transition-all duration-500 flex flex-col justify-between relative overflow-hidden group ${
                  isActive
                    ? 'bg-purple-950/30 border-purple-400/60 shadow-glow-purple scale-[1.02]'
                    : isCompleted
                    ? 'bg-dark-900 border-emerald-500/30'
                    : 'bg-dark-900 surface-panel border-white/10'
                }`}
              >
                {/* Traveling packet light pulse */}
                {isActive && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center border shadow-md"
                      style={{
                        backgroundColor: `${node.color}15`,
                        borderColor: `${node.color}35`,
                        color: node.color
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="mono-chip text-slate-400 text-[10px]">
                      0{node.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold font-heading text-white">
                      {node.title}
                    </h3>
                    <span className="text-[10px] font-mono text-cyan-400/90 block">
                      {node.role}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {node.desc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono">
                  <span className={isActive ? 'text-cyan-400 font-bold' : 'text-slate-500'}>
                    {isActive ? 'ACTIVE' : isCompleted ? 'DONE' : 'STANDBY'}
                  </span>
                  {idx < corePipeline.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden lg:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Concepts Orbiting the System (AUTH, AI, CACHE, DEPLOY) */}
        <div className="pt-4">
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-3">
            // SUPPORTING SUBSYSTEMS &amp; INFRASTRUCTURE
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supportingNodes.map((sup) => {
              const SupIcon = sup.icon;
              return (
                <div
                  key={sup.id}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all flex items-start gap-3"
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{
                      backgroundColor: `${sup.color}15`,
                      borderColor: `${sup.color}30`,
                      color: sup.color
                    }}
                  >
                    <SupIcon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h4 className="text-xs font-bold font-heading text-white">
                      {sup.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-sans leading-snug">
                      {sup.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
