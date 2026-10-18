import React, { useState, useEffect } from 'react';
import { Terminal, Smartphone, Code, Play, RefreshCw, Send, Check, Copy } from 'lucide-react';

export const LivePlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'api' | 'mobile' | 'algorithms' | 'ui'>('api');

  // API Tester State
  const [endpoint, setEndpoint] = useState<string>('/api/v1/portfolio/stats');
  const [method, setMethod] = useState<'GET' | 'POST'>('GET');
  const [apiResponse, setApiResponse] = useState<any>({
    status: 200,
    statusText: 'OK',
    latency: '14ms',
    data: {
      engineer: 'Worku Edosa',
      department: 'Computer Science & Engineering',
      specialization: 'Full Stack & Mobile Development',
      coreSkills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Mobile Apps', 'Node.js'],
      metrics: {
        shippedApps: 18,
        uptimeTarget: '99.9%',
        testCoverage: '94%',
      },
      timestamp: new Date().toISOString(),
    },
  });
  const [apiLoading, setApiLoading] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);

  const runApiRequest = () => {
    setApiLoading(true);
    setTimeout(() => {
      let data = {};
      const latencyMs = Math.floor(Math.random() * 25) + 8;

      if (endpoint.includes('stats')) {
        data = {
          engineer: 'Worku Edosa',
          department: 'Computer Science & Engineering (CSE)',
          specialization: 'Full Stack & Mobile Development',
          coreSkills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Mobile Apps', 'Node.js'],
          metrics: { shippedApps: 18, uptime: '99.98%' },
          timestamp: new Date().toISOString(),
        };
      } else if (endpoint.includes('projects')) {
        data = {
          count: 4,
          results: [
            { id: 'flowmetric-saas', stack: ['React', 'Node.js', 'PostgreSQL'], status: 'production' },
            { id: 'nexasync-mobile', stack: ['React Native', 'Expo', 'SQLite'], status: 'production' },
            { id: 'cloudgrid-gateway', stack: ['Express', 'Docker', 'Redis'], status: 'active' },
          ],
        };
      } else if (endpoint.includes('auth')) {
        data = {
          tokenType: 'Bearer',
          expiresIn: 3600,
          claims: { user: 'yerosanedosa21@gmail.com', role: 'CSE_ENGINEER' },
        };
      }

      setApiResponse({
        status: 200,
        statusText: 'OK',
        latency: `${latencyMs}ms`,
        data,
      });
      setApiLoading(false);
    }, 280);
  };

  const copyCurl = () => {
    const curl = `curl -X ${method} "https://api.workuedosa.dev${endpoint}" -H "Accept: application/json"`;
    navigator.clipboard.writeText(curl);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  // Mobile App Simulator State
  const [mobileScreen, setMobileScreen] = useState<'wallet' | 'analytics' | 'security'>('wallet');
  const [balance, setBalance] = useState<number>(8450.72);
  const [transactions, setTransactions] = useState([
    { id: 1, title: 'Freelance Frontend Contract', amount: '+ $1,250.00', positive: true, time: 'Today' },
    { id: 2, title: 'AWS Cloud Hosting', amount: '- $42.50', positive: false, time: 'Yesterday' },
    { id: 3, title: 'CSE Research Materials', amount: '- $85.00', positive: false, time: '3 days ago' },
  ]);
  const [biometricUnlocked, setBiometricUnlocked] = useState(true);

  const addQuickTransaction = () => {
    const newTx = {
      id: Date.now(),
      title: 'Mobile Micro-Payment Demo',
      amount: '+ $120.00',
      positive: true,
      time: 'Just now',
    };
    setTransactions([newTx, ...transactions]);
    setBalance((prev) => prev + 120);
  };

  // Algorithm Visualizer State
  const [array, setArray] = useState<number[]>([45, 18, 72, 33, 89, 12, 60, 25, 95, 50]);
  const [sorting, setSorting] = useState(false);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [comparisons, setComparisons] = useState(0);

  const randomizeArray = () => {
    if (sorting) return;
    const newArr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 85) + 15);
    setArray(newArr);
    setActiveIndices([]);
    setComparisons(0);
  };

  const runBubbleSort = async () => {
    if (sorting) return;
    setSorting(true);
    const arr = [...array];
    let comps = 0;
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        comps++;
        setComparisons(comps);
        setActiveIndices([j, j + 1]);
        await new Promise((resolve) => setTimeout(resolve, 140));

        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 140));
        }
      }
    }
    setActiveIndices([]);
    setSorting(false);
  };

  // Interactive UI Sandbox State
  const [uiBorderRadius, setUiBorderRadius] = useState<number>(16);
  const [uiThemeColor, setUiThemeColor] = useState<string>('teal');
  const [uiShowBlur, setUiShowBlur] = useState<boolean>(true);

  return (
    <section id="playground" className="py-20 lg:py-28 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold tracking-wider text-teal-400 uppercase mb-3">
            Real Engineering In Action
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
            Interactive Engineering Workbench
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Test live REST API routing, simulate cross-platform mobile user flows, and run in-browser Computer Science algorithms directly.
          </p>
        </div>

        {/* Workbench Mode Tabs (Zero pill: clean functional segmented buttons) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-zinc-900 border border-zinc-800 rounded-xl mb-8 max-w-fit">
          <button
            onClick={() => setActiveTab('api')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'api'
                ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-teal-400" />
            <span>REST API Endpoint Tester</span>
          </button>

          <button
            onClick={() => setActiveTab('mobile')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'mobile'
                ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
            <span>Mobile App UI Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('algorithms')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'algorithms'
                ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Code className="w-3.5 h-3.5 text-emerald-400" />
            <span>CSE Algorithm Visualizer</span>
          </button>

          <button
            onClick={() => setActiveTab('ui')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'ui'
                ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Code className="w-3.5 h-3.5 text-sky-400" />
            <span>CSS & Component Sandbox</span>
          </button>
        </div>

        {/* Workbench Content Panels */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 overflow-hidden">
          {/* TAB 1: REST API Endpoint Tester */}
          {activeTab === 'api' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span className="font-semibold text-white">Target Protocol</span>
                  <span aria-hidden="true">·</span>
                  <span>HTTP/1.1 REST Gateway</span>
                  <span aria-hidden="true">·</span>
                  <span>JSON Payload</span>
                </div>

                <button
                  onClick={copyCurl}
                  className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg flex items-center gap-1.5 transition-colors self-start sm:self-auto"
                >
                  {copiedCurl ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-teal-400" />
                      <span>Copied cURL!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy cURL</span>
                    </>
                  )}
                </button>
              </div>

              {/* Endpoint Request Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-2">
                  <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value as any)}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-xs font-mono font-bold text-teal-400 focus:outline-none focus:border-teal-400"
                  >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                  </select>
                </div>

                <div className="sm:col-span-7">
                  <select
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-xs font-mono text-zinc-200 focus:outline-none focus:border-teal-400"
                  >
                    <option value="/api/v1/portfolio/stats">/api/v1/portfolio/stats (Full Stack Profile)</option>
                    <option value="/api/v1/projects?category=all">/api/v1/projects?category=all</option>
                    <option value="/api/v1/auth/token">/api/v1/auth/token (JWT Bearer Specs)</option>
                  </select>
                </div>

                <div className="sm:col-span-3">
                  <button
                    onClick={runApiRequest}
                    disabled={apiLoading}
                    className="w-full py-2 px-4 text-xs font-semibold text-zinc-950 bg-teal-400 hover:bg-teal-300 active:scale-95 transition-all rounded-lg flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    {apiLoading ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Send className="w-3.5 h-3.5" />
                    )}
                    <span>{apiLoading ? 'Executing...' : 'Dispatch Request'}</span>
                  </button>
                </div>
              </div>

              {/* Status & Latency Strip */}
              <div className="flex items-center gap-6 text-xs font-mono">
                <div>
                  <span className="text-zinc-500">Status: </span>
                  <span className="text-emerald-400 font-bold">{apiResponse.status} {apiResponse.statusText}</span>
                </div>
                <div>
                  <span className="text-zinc-500">Server Latency: </span>
                  <span className="text-teal-400 font-bold tabular-nums">{apiResponse.latency}</span>
                </div>
                <div>
                  <span className="text-zinc-500">Content-Type: </span>
                  <span className="text-zinc-300">application/json</span>
                </div>
              </div>

              {/* JSON Response Terminal View */}
              <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-5 font-mono text-xs overflow-x-auto text-zinc-300 max-h-80">
                <pre>{JSON.stringify(apiResponse.data, null, 2)}</pre>
              </div>
            </div>
          )}

          {/* TAB 2: Mobile UI Simulator */}
          {activeTab === 'mobile' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex justify-center">
                {/* Smartphone Device Frame */}
                <div className="w-[320px] h-[580px] bg-zinc-950 rounded-[40px] border-4 border-zinc-700/80 shadow-2xl overflow-hidden flex flex-col relative">
                  {/* Dynamic Island / Notch */}
                  <div className="h-6 w-full flex items-center justify-center pt-2">
                    <div className="w-20 h-3.5 bg-zinc-800 rounded-full" />
                  </div>

                  {/* Mobile Screen Header */}
                  <div className="px-5 py-3 flex items-center justify-between border-b border-zinc-800/60">
                    <div>
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider">NexaSync Mobile</div>
                      <div className="text-sm font-bold text-white">Worku Edosa</div>
                    </div>
                    <button
                      onClick={() => setBiometricUnlocked(!biometricUnlocked)}
                      className="text-[11px] px-2 py-0.5 rounded border border-zinc-700 text-zinc-300"
                    >
                      {biometricUnlocked ? 'Locked' : 'Unlocked'}
                    </button>
                  </div>

                  {/* Mobile App Body */}
                  <div className="flex-1 p-5 overflow-y-auto space-y-4">
                    {/* Balance Card */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-900/60 to-zinc-900 border border-teal-500/20 text-white">
                      <div className="text-[11px] text-teal-300/80 font-medium">Total Available Assets</div>
                      <div className="text-2xl font-bold font-mono tracking-tight mt-1 tabular-nums">
                        ${balance.toFixed(2)}
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-2 flex items-center gap-1.5">
                        <span className="text-teal-400">Encrypted SQLite</span>
                        <span>·</span>
                        <span>Auto-Sync</span>
                      </div>
                    </div>

                    {/* Quick Action Button */}
                    <button
                      onClick={addQuickTransaction}
                      className="w-full py-2 bg-teal-400 hover:bg-teal-300 text-zinc-950 font-semibold rounded-xl text-xs active:scale-95 transition-all shadow-sm"
                    >
                      Simulate Incoming Payment
                    </button>

                    {/* Recent Transactions List */}
                    <div>
                      <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        Recent Activity
                      </div>
                      <div className="space-y-2">
                        {transactions.map((tx) => (
                          <div
                            key={tx.id}
                            className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-between"
                          >
                            <div>
                              <div className="text-xs font-medium text-white truncate max-w-[150px]">
                                {tx.title}
                              </div>
                              <div className="text-[10px] text-zinc-500">{tx.time}</div>
                            </div>
                            <span
                              className={`text-xs font-mono font-semibold tabular-nums ${
                                tx.positive ? 'text-teal-400' : 'text-zinc-300'
                              }`}
                            >
                              {tx.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Bottom Navigation Bar */}
                  <div className="px-6 py-3 bg-zinc-950 border-t border-zinc-800 flex items-center justify-around text-[10px] text-zinc-400">
                    <span className="text-teal-400 font-semibold">Wallet</span>
                    <span>Insights</span>
                    <span>Cards</span>
                    <span>Profile</span>
                  </div>
                </div>
              </div>

              {/* Mobile Specs Description */}
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
                  Mobile Architecture Specifications
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Cross-Platform React Native & Offline Sync
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  The mobile interactive preview on the left demonstrates client-side reactive state, touch handling, localized encrypted persistence (SQLite / MMKV), and instant optimistic updates.
                </p>
                <div className="space-y-2 text-xs text-zinc-400 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Cross-platform compatibility (iOS & Android via single codebase)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>60 FPS gesture responsiveness with hardware acceleration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span>Offline-first transaction queuing with server reconciliation</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CSE Algorithm Visualizer */}
          {activeTab === 'algorithms' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Bubble Sort Algorithm Visualizer
                  </h3>
                  <div className="text-xs text-zinc-400">
                    Computer Science & Engineering core foundations: Time Complexity O(N²), Space Complexity O(1)
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={randomizeArray}
                    disabled={sorting}
                    className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Shuffle Array</span>
                  </button>

                  <button
                    onClick={runBubbleSort}
                    disabled={sorting}
                    className="px-4 py-1.5 text-xs font-semibold text-zinc-950 bg-teal-400 hover:bg-teal-300 disabled:opacity-50 active:scale-95 transition-all rounded-lg flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{sorting ? 'Sorting...' : 'Execute Sort'}</span>
                  </button>
                </div>
              </div>

              {/* Comparisons Metric */}
              <div className="flex items-center gap-6 text-xs text-zinc-400">
                <div>
                  <span>Comparisons made: </span>
                  <span className="text-white font-mono font-bold tabular-nums">{comparisons}</span>
                </div>
                <div>
                  <span>Status: </span>
                  <span className={sorting ? 'text-teal-400 font-bold' : 'text-zinc-300 font-medium'}>
                    {sorting ? 'Iterating through elements' : 'Ready'}
                  </span>
                </div>
              </div>

              {/* Visual Bars Container */}
              <div className="h-56 bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex items-end justify-between gap-2 sm:gap-4">
                {array.map((value, idx) => {
                  const isActive = activeIndices.includes(idx);
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                      <span className="text-[11px] font-mono font-semibold text-zinc-400 tabular-nums">
                        {value}
                      </span>
                      <div
                        className={`w-full rounded-t-md transition-all duration-100 ${
                          isActive
                            ? 'bg-amber-400 shadow-md shadow-amber-500/20'
                            : 'bg-teal-500 hover:bg-teal-400'
                        }`}
                        style={{ height: `${(value / 100) * 80}%` }}
                      />
                      <span className="text-[10px] text-zinc-600 font-mono">[{idx}]</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: CSS & Component Sandbox */}
          {activeTab === 'ui' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    CSS3 & Reactive Styling Controller
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Demonstrating dynamic CSS layout controls and reactive Tailwind style variables.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-zinc-300 mb-1.5">
                      <span>Border Radius</span>
                      <span className="font-mono tabular-nums">{uiBorderRadius}px</span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="32"
                      value={uiBorderRadius}
                      onChange={(e) => setUiBorderRadius(Number(e.target.value))}
                      className="w-full accent-teal-400 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-300 mb-2">Accent Theme</label>
                    <div className="flex items-center gap-3">
                      {['teal', 'indigo', 'emerald', 'sky'].map((color) => (
                        <button
                          key={color}
                          onClick={() => setUiThemeColor(color)}
                          className={`px-3 py-1 text-xs capitalize rounded-lg border transition-colors ${
                            uiThemeColor === color
                              ? 'border-white text-white font-semibold bg-zinc-800'
                              : 'border-zinc-700 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="blurToggle"
                      checked={uiShowBlur}
                      onChange={(e) => setUiShowBlur(e.target.checked)}
                      className="accent-teal-400 rounded cursor-pointer"
                    />
                    <label htmlFor="blurToggle" className="text-xs text-zinc-300 cursor-pointer">
                      Enable Backdrop Filter Blur (CSS Glassmorphism)
                    </label>
                  </div>
                </div>
              </div>

              {/* Live Rendered Card & CSS Code */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                <div
                  className={`p-6 border border-zinc-700/80 transition-all duration-200 ${
                    uiShowBlur ? 'backdrop-blur-md bg-zinc-900/70' : 'bg-zinc-900'
                  }`}
                  style={{ borderRadius: `${uiBorderRadius}px` }}
                >
                  <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1">
                    HTML5 & CSS3 Dynamic Output
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Full Stack Engineering Component</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                    Rendered dynamically with React state hooks responding in &lt; 16ms per frame.
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      className={`px-4 py-2 text-xs font-semibold text-zinc-950 rounded-lg shadow-sm transition-transform active:scale-95 ${
                        uiThemeColor === 'teal'
                          ? 'bg-teal-400 hover:bg-teal-300'
                          : uiThemeColor === 'indigo'
                          ? 'bg-indigo-400 hover:bg-indigo-300'
                          : uiThemeColor === 'emerald'
                          ? 'bg-emerald-400 hover:bg-emerald-300'
                          : 'bg-sky-400 hover:bg-sky-300'
                      }`}
                    >
                      Interactive CTA
                    </button>
                    <span className="text-xs text-zinc-400">HTML · CSS · JS</span>
                  </div>
                </div>

                {/* Generated CSS snippet */}
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300 overflow-x-auto">
                  <div className="text-zinc-500 mb-1">/* Generated CSS Rule */</div>
                  <code>{`.card { border-radius: ${uiBorderRadius}px; ${
                    uiShowBlur ? 'backdrop-filter: blur(12px); ' : ''
                  }accent: ${uiThemeColor}; }`}</code>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
