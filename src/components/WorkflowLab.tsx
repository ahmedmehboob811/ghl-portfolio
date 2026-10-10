import React, { useState, useEffect } from 'react';
import {
  GitBranch,
  Play,
  RotateCcw,
  CheckCircle2,
  Clock,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Inbox,
  UserCheck,
  Kanban,
  Tag,
  GitFork,
  MessageSquare,
  CalendarCheck,
  ShoppingCart,
  Workflow,
  Sparkles,
  Database,
  CheckCircle,
  Copy,
  Check,
  AlertCircle,
  Activity,
} from 'lucide-react';
import { WORKFLOW_LAB_DEMOS, WorkflowNode } from '../data/portfolioData';

export const WorkflowLab: React.FC = () => {
  const [selectedWorkflowIndex, setSelectedWorkflowIndex] = useState(0);
  const currentWorkflow = WORKFLOW_LAB_DEMOS[selectedWorkflowIndex];

  const [selectedNodeId, setSelectedNodeId] = useState<string>(
    currentWorkflow.nodes[0].id
  );
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(-1);
  const [copiedPayload, setCopiedPayload] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  // Update selected node when workflow switches
  useEffect(() => {
    setSelectedNodeId(currentWorkflow.nodes[0].id);
    setActiveStepIndex(-1);
    setIsSimulating(false);
    setLogs([]);
  }, [selectedWorkflowIndex]);

  const selectedNode: WorkflowNode =
    currentWorkflow.nodes.find((n) => n.id === selectedNodeId) ||
    currentWorkflow.nodes[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Inbox':
        return <Inbox className="h-4 w-4" />;
      case 'UserCheck':
        return <UserCheck className="h-4 w-4" />;
      case 'Kanban':
        return <Kanban className="h-4 w-4" />;
      case 'Tag':
        return <Tag className="h-4 w-4" />;
      case 'GitFork':
        return <GitFork className="h-4 w-4" />;
      case 'MessageSquare':
        return <MessageSquare className="h-4 w-4" />;
      case 'Clock':
        return <Clock className="h-4 w-4" />;
      case 'CalendarCheck':
        return <CalendarCheck className="h-4 w-4" />;
      case 'ShoppingCart':
        return <ShoppingCart className="h-4 w-4" />;
      case 'Workflow':
        return <Workflow className="h-4 w-4" />;
      case 'Sparkles':
        return <Sparkles className="h-4 w-4" />;
      case 'Database':
        return <Database className="h-4 w-4" />;
      case 'CheckCircle':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <GitBranch className="h-4 w-4" />;
    }
  };

  const handleSimulateExecution = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStepIndex(0);
    setLogs([`[0.0s] Simulation started: ${currentWorkflow.name}`]);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < currentWorkflow.nodes.length) {
        setActiveStepIndex(step);
        setSelectedNodeId(currentWorkflow.nodes[step].id);
        setLogs((prev) => [
          ...prev,
          `[+${step * 0.6}s] Executed node: "${currentWorkflow.nodes[step].title}" (HTTP 200 OK)`,
        ]);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setLogs((prev) => [
          ...prev,
          `[Complete] All ${currentWorkflow.nodes.length} nodes resolved successfully with zero payload drops.`,
        ]);
      }
    }, 750);
  };

  const handleResetSimulation = () => {
    setIsSimulating(false);
    setActiveStepIndex(-1);
    setSelectedNodeId(currentWorkflow.nodes[0].id);
    setLogs([]);
  };

  const handleCopyPayload = () => {
    navigator.clipboard.writeText(JSON.stringify(selectedNode.outputData, null, 2));
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2000);
  };

  return (
    <section id="workflow-lab" className="py-20 border-t border-zinc-800/80 bg-[#09090b] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-purple-400 font-medium mb-2">
              <Activity className="h-4 w-4" />
              <span>INSIDE MY AUTOMATION WORKFLOWS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Interactive Workflow Automation Lab
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Step through production-grade automation logic. Click any node to inspect trigger criteria, action parameters,
              conditional branches, and live simulated JSON payloads.
            </p>
          </div>

          {/* Workflow Selector Tabs */}
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-1 rounded-xl">
            {WORKFLOW_LAB_DEMOS.map((wf, idx) => (
              <button
                key={wf.id}
                onClick={() => setSelectedWorkflowIndex(idx)}
                className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                  selectedWorkflowIndex === idx
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Workflow {idx + 1}: {idx === 0 ? 'Lead to Appointment' : 'n8n & AI Enrichment'}
              </button>
            ))}
          </div>
        </div>

        {/* Workflow Toolbar: Description & Live Simulation Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#131318] border border-zinc-800 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400 bg-purple-950/50 border border-purple-800/40 px-2 py-0.5 rounded">
              {currentWorkflow.triggerLabel}
            </span>
            <span className="text-xs text-zinc-300 font-medium">
              {currentWorkflow.summary}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSimulateExecution}
              disabled={isSimulating}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isSimulating
                  ? 'bg-purple-900/60 text-purple-300 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-500 text-white shadow-sm'
              }`}
            >
              <Play className="h-3.5 w-3.5" />
              <span>{isSimulating ? 'Executing Flow...' : 'Simulate Live Run'}</span>
            </button>

            <button
              onClick={handleResetSimulation}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs text-zinc-400 hover:text-zinc-200 bg-zinc-900 border border-zinc-800"
              title="Reset Simulation"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Stage: Node Sequence (Left) + Node Inspector (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Node Visual Graph */}
          <div className="lg:col-span-7 flex flex-col space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-400 px-1 mb-1">
              <span>Workflow Node Sequence ({currentWorkflow.nodes.length} Steps)</span>
              <span className="text-[11px] font-mono text-zinc-500">
                Click any node to inspect payload
              </span>
            </div>

            <div className="space-y-2.5 relative">
              {currentWorkflow.nodes.map((node, index) => {
                const isSelected = selectedNodeId === node.id;
                const isExecutedInSimulation = activeStepIndex >= index;
                const isCurrentlyExecuting = activeStepIndex === index;

                return (
                  <div key={node.id} className="relative">
                    {/* Visual connecting line between nodes */}
                    {index < currentWorkflow.nodes.length - 1 && (
                      <div className="absolute left-6 top-11 bottom-0 w-0.5 -mb-2.5 bg-zinc-800 -z-10" />
                    )}

                    <div
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`group cursor-pointer rounded-xl border p-3.5 transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? 'border-purple-500 bg-[#191924] shadow-md shadow-purple-950/30'
                          : isExecutedInSimulation
                          ? 'border-zinc-700 bg-[#14141c]'
                          : 'border-zinc-800/80 bg-[#121217] hover:border-zinc-700 hover:bg-[#15151c]'
                      }`}
                    >
                      {/* Step Number & Icon */}
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                          isCurrentlyExecuting
                            ? 'bg-purple-600 text-white border-purple-400 animate-pulse'
                            : isExecutedInSimulation
                            ? 'bg-emerald-950/60 text-emerald-400 border-emerald-700/50'
                            : isSelected
                            ? 'bg-purple-950/60 text-purple-300 border-purple-500/50'
                            : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                        }`}
                      >
                        {isExecutedInSimulation && !isCurrentlyExecuting ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          getIcon(node.iconName)
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-white group-hover:text-purple-300 transition-colors">
                              {node.title}
                            </span>
                            <span className="font-mono text-[10px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded">
                              {node.type.toUpperCase()}
                            </span>
                          </div>

                          {isCurrentlyExecuting && (
                            <span className="text-[10px] font-mono text-purple-400 flex items-center gap-1">
                              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-ping" />
                              Running
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-xs text-zinc-400 leading-relaxed line-clamp-2">
                          {node.description}
                        </p>

                        <div className="mt-2 flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                          <span>Step 0{index + 1}</span>
                          <span>·</span>
                          <span className="text-zinc-400 truncate">{node.subtitle}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Node Inspector & Live Payload Drawer */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="rounded-xl border border-zinc-800 bg-[#131318] p-5 shadow-lg">
              {/* Header */}
              <div className="flex items-start justify-between border-b border-zinc-800 pb-3 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 bg-purple-950/50 px-1.5 py-0.5 rounded border border-purple-800/40">
                      {selectedNode.type} Node Inspector
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      ID: {selectedNode.id}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-1">
                    {selectedNode.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {selectedNode.subtitle}
                  </p>
                </div>

                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-purple-400">
                  {getIcon(selectedNode.iconName)}
                </div>
              </div>

              {/* Node Specifications */}
              <div className="space-y-3 text-xs mb-4">
                <div>
                  <span className="text-zinc-500 text-[11px] uppercase tracking-wider font-semibold">
                    Description & Objective
                  </span>
                  <p className="mt-1 text-zinc-300 leading-relaxed">
                    {selectedNode.description}
                  </p>
                </div>

                {selectedNode.triggerEvent && (
                  <div className="rounded-lg bg-zinc-900/80 border border-zinc-800 p-2.5">
                    <span className="text-zinc-400 text-[10px] uppercase font-mono">
                      Trigger Event
                    </span>
                    <p className="text-purple-300 font-mono text-[11px] mt-0.5">
                      {selectedNode.triggerEvent}
                    </p>
                  </div>
                )}

                {selectedNode.actionDetails && (
                  <div className="rounded-lg bg-zinc-900/80 border border-zinc-800 p-2.5">
                    <span className="text-zinc-400 text-[10px] uppercase font-mono">
                      Action Execution Parameters
                    </span>
                    <p className="text-emerald-300 font-mono text-[11px] mt-0.5">
                      {selectedNode.actionDetails}
                    </p>
                  </div>
                )}

                {selectedNode.conditions && (
                  <div className="rounded-lg bg-zinc-900/80 border border-zinc-800 p-2.5">
                    <span className="text-zinc-400 text-[10px] uppercase font-mono">
                      Evaluated Logic Conditions
                    </span>
                    <ul className="mt-1 space-y-1">
                      {selectedNode.conditions.map((c, i) => (
                        <li key={i} className="text-amber-300 font-mono text-[11px]">
                          ✓ {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* JSON Payload Viewer */}
              <div className="border-t border-zinc-800 pt-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-300">
                    <Code2 className="h-3.5 w-3.5 text-purple-400" />
                    <span>Live Output Payload (JSON)</span>
                  </span>
                  <button
                    onClick={handleCopyPayload}
                    className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white transition-colors"
                  >
                    {copiedPayload ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400 font-mono">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="relative rounded-lg bg-[#0c0c10] border border-zinc-800 p-3 font-mono text-[11px] text-purple-200 overflow-x-auto max-h-56">
                  <pre className="whitespace-pre-wrap">
                    {JSON.stringify(selectedNode.outputData, null, 2)}
                  </pre>
                </div>
              </div>
            </div>

            {/* Execution Audit Log Console */}
            {logs.length > 0 && (
              <div className="rounded-xl border border-zinc-800 bg-[#0d0d12] p-3 font-mono text-[11px]">
                <div className="flex items-center justify-between text-zinc-400 mb-2 border-b border-zinc-800/80 pb-1.5">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Activity className="h-3 w-3" />
                    Live Execution Telemetry
                  </span>
                  <span className="text-[10px] text-zinc-500">{logs.length} events</span>
                </div>
                <div className="space-y-1 text-zinc-400 max-h-36 overflow-y-auto">
                  {logs.map((log, i) => (
                    <div key={i} className="text-zinc-300">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Note on real account connection */}
            <div className="flex items-start gap-2 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-400">
              <AlertCircle className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
              <span>
                Demonstration architecture. In production client builds, these endpoints run against authenticated GoHighLevel V2 API webhooks and secure n8n runner containers.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
