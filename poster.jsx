const { useEffect } = React;

const Icon = ({ name, className, size = 24 }) => {
    useEffect(() => {
        lucide.createIcons();
    }, [name]);
    return <i data-lucide={name} className={className} style={{ width: size, height: size }}></i>;
};

// Component for Zero Point Survey Items
const StepUpItem = ({ letter, title, icon, isTeam, sub }) => (
    <div className={`relative flex items-center gap-4 p-4 rounded-xl mb-3 transition-all ${isTeam ? 'bg-white text-dark-slate shadow-xl scale-105 z-20 border-l-8 border-nhs-blue' : 'text-slate-400 border border-slate-700/50'}`}>
        <div className={`font-display text-4xl w-12 text-center ${isTeam ? 'text-nhs-blue' : 'text-slate-500'}`}>
            {letter}
        </div>
        <div className="flex flex-col">
            <span className="font-display uppercase tracking-wider text-lg leading-none">{title}</span>
            <span className={`text-xs font-bold uppercase mt-1 ${isTeam ? 'text-nhs-blue' : 'text-slate-500'}`}>{sub}</span>
        </div>
        
        {/* Visual Connection Line for TEAM */}
        {isTeam && (
            <div className="team-connector absolute -right-8 top-1/2 -translate-y-1/2 flex items-center">
                <div className="w-8 h-2 bg-nhs-blue"></div>
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-nhs-blue"></div>
            </div>
        )}
    </div>
);

const Poster = () => {
    const handlePrint = () => window.print();

    return (
        <div className="relative">
            <div className="poster-container w-full bg-white text-dark-slate shadow-2xl overflow-hidden flex flex-col a3-ratio relative font-sans">
                
                {/* HEADER */}
                <header className="poster-header bg-dark-slate text-white p-8 flex justify-between items-end border-b-8 border-nhs-blue shrink-0 z-30 relative">
                    <div>
                        <h1 className="poster-title font-display text-7xl uppercase tracking-tighter leading-[0.9]">
                            Trauma <span className="text-nhs-blue">Brief</span>
                        </h1>
                        <p className="poster-subtitle text-xl font-bold text-slate-400 mt-2 tracking-wide uppercase">
                            Relational Coordination &bull; Zero Point Survey
                        </p>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="text-sm font-bold text-slate-400">PURDY ET AL. (2020)</div>
                        <div className="text-sm font-bold text-slate-500">UK EM PROTOCOL</div>
                    </div>
                </header>

                <div className="poster-body flex grow overflow-hidden">
                    
                    {/* LEFT SIDEBAR: ZERO POINT SURVEY (22%) */}
                    <div className="poster-sidebar w-[24%] bg-dark-slate p-6 flex flex-col z-20 relative shadow-2xl">
                        <h2 className="text-white font-display text-2xl uppercase mb-6 border-b border-slate-600 pb-4">
                            <span className="text-nhs-blue">Pre-Brief</span> Check
                        </h2>
                        
                        <div className="poster-steps flex flex-col justify-center h-full pb-12">
                            <StepUpItem letter="S" title="Self" sub="Ready?" />
                            <StepUpItem letter="T" title="Team" sub="The Briefing" isTeam={true} />
                            <StepUpItem letter="E" title="Env" sub="Kit Check" />
                            <StepUpItem letter="P" title="Patient" sub="Pre-Alert" />
                            <StepUpItem letter="U" title="Update" sub="Mental Model" />
                            <StepUpItem letter="P" title="Priority" sub="First 10 mins" />
                        </div>

                        {/* Relational Coordination Badge */}
                        <div className="mt-auto bg-slate-800 p-4 rounded-xl border border-slate-700">
                            <div className="text-center">
                                <div className="text-slate-400 text-[10px] font-bold uppercase mb-2">Relational Coordination</div>
                                <div className="flex justify-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-nhs-blue"></div>
                                    <div className="w-2 h-2 rounded-full bg-nhs-blue"></div>
                                    <div className="w-2 h-2 rounded-full bg-nhs-blue"></div>
                                </div>
                                <div className="text-white text-xs font-bold mt-2 leading-tight">
                                    Goals &bull; Knowledge &bull; Respect
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MAIN CONTENT: 6 STEP PROTOCOL (78%) */}
                    <div className="poster-main w-[76%] bg-slate-50 p-6 md:p-8 flex flex-col relative">
                        
                        {/* Background Watermark */}
                        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
                            <Icon name="activity" size={400} />
                        </div>

                        {/* Grid Layout */}
                        <div className="poster-grid grid grid-cols-2 gap-6 h-full">

                            {/* 1. INTRODUCTIONS */}
                            <div className="col-span-1 bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-slate-800"></div>
                                <div className="absolute top-4 right-4 text-slate-200 font-display text-6xl opacity-50">1</div>
                                
                                <h3 className="font-display text-3xl text-dark-slate uppercase mb-4 relative z-10">Introductions</h3>
                                <div className="mt-auto space-y-4 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-green-100 p-2 rounded-lg"><Icon name="sticker" className="text-safe-green" size={32} /></div>
                                        <span className="text-xl font-bold text-slate-700">Names on Gowns</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-slate-100 p-2 rounded-lg"><Icon name="crown" className="text-dark-slate" size={32} /></div>
                                        <span className="text-xl font-bold text-slate-700">Identify Leader</span>
                                    </div>
                                </div>
                            </div>

                            {/* 2. WHAT WE KNOW */}
                            <div className="col-span-1 bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-slate-800"></div>
                                <div className="absolute top-4 right-4 text-slate-200 font-display text-6xl opacity-50">2</div>

                                <h3 className="font-display text-3xl text-dark-slate uppercase mb-4 relative z-10">What We Know</h3>
                                <div className="mt-auto space-y-4 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-blue-100 p-2 rounded-lg"><Icon name="activity" className="text-nhs-blue" size={32} /></div>
                                        <div className="leading-tight">
                                            <span className="text-xl font-bold text-slate-700 block">ATMIST Details</span>
                                            <span className="text-sm text-slate-500 font-bold uppercase">Synthesize the Pre-Alert</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. PLAN A (Dominant) */}
                            <div className="col-span-1 bg-nhs-blue text-white rounded-2xl p-6 shadow-lg flex flex-col relative overflow-hidden row-span-2">
                                <div className="absolute top-4 right-4 text-white/20 font-display text-8xl">3</div>
                                <div className="absolute -bottom-8 -right-8 text-white/10 rotate-12">
                                    <Icon name="arrow-right-circle" size={180} />
                                </div>

                                <h3 className="font-display text-4xl uppercase mb-2 relative z-10">Plan A</h3>
                                <p className="text-blue-200 font-bold uppercase tracking-widest text-sm mb-6">What We Expect</p>

                                <div className="mt-auto relative z-10 bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
                                    <div className="flex items-start gap-3 mb-4">
                                        <Icon name="check-circle-2" className="text-white shrink-0 mt-1" size={28} />
                                        <p className="text-2xl font-bold leading-tight">Primary Survey &amp; CT Pan Scan</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Icon name="check-circle-2" className="text-white shrink-0 mt-1" size={28} />
                                        <p className="text-2xl font-bold leading-tight">"We expect to <span className="text-yellow-300 underline">intubate</span> immediately."</p>
                                    </div>
                                </div>
                            </div>

                            {/* 4. PLAN B (Contingency) */}
                            <div className="col-span-1 bg-white border-4 border-alert-red rounded-2xl p-6 shadow-sm flex flex-col relative overflow-hidden row-span-2">
                                <div className="absolute top-4 right-4 text-alert-red/10 font-display text-8xl">4</div>
                                
                                <h3 className="font-display text-4xl text-alert-red uppercase mb-2 relative z-10">Plan B</h3>
                                <p className="text-red-800 font-bold uppercase tracking-widest text-sm mb-6">What Might Change</p>

                                <div className="mt-auto relative z-10 space-y-4">
                                     <div className="bg-red-50 p-4 rounded-xl border-l-4 border-alert-red">
                                        <p className="text-sm font-bold text-red-800 uppercase mb-1">Airway Failure?</p>
                                        <p className="text-2xl font-bold text-dark-slate">"SAD <span className="text-slate-400 text-lg mx-1">&rarr;</span> Scalpel"</p>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded-xl border-l-4 border-alert-red">
                                        <p className="text-sm font-bold text-red-800 uppercase mb-1">Lose Output?</p>
                                        <p className="text-2xl font-bold text-dark-slate">"CPR <span className="text-slate-400 text-lg mx-1">&rarr;</span> Thoracotomy"</p>
                                    </div>
                                </div>
                            </div>

                            {/* 5. ROLES */}
                            <div className="col-span-1 bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col relative">
                                <div className="absolute top-0 left-0 w-2 h-full bg-slate-800"></div>
                                <div className="absolute top-4 right-4 text-slate-200 font-display text-6xl opacity-50">5</div>
                                
                                <h3 className="font-display text-3xl text-dark-slate uppercase mb-4">Assign Roles</h3>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {['Airway', 'Drugs', 'Access', 'Scribe'].map(role => (
                                        <span key={role} className="bg-slate-100 px-3 py-2 rounded-lg text-lg font-bold text-slate-800 border border-slate-300">
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 6. SPEAK UP */}
                            <div className="col-span-1 bg-safe-green/10 border-2 border-safe-green rounded-2xl p-6 shadow-sm flex flex-col relative justify-center items-center text-center">
                                <div className="absolute top-4 right-4 text-safe-green/20 font-display text-6xl opacity-50">6</div>
                                
                                <Icon name="megaphone" className="text-safe-green mb-2" size={40} />
                                <h3 className="font-display text-2xl text-safe-green uppercase leading-none mb-1">Speak Up</h3>
                                <p className="font-bold text-green-900 text-lg">"What have I missed?"</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <button 
                onClick={handlePrint}
                className="print-button no-print fixed bottom-8 right-8 bg-dark-slate hover:bg-black text-white font-bold py-4 px-8 rounded-full shadow-2xl flex items-center gap-3 transition-all z-50 border-4 border-white hover:scale-105 group"
            >
                <Icon name="printer" className="w-6 h-6 group-hover:text-nhs-blue transition-colors" />
                Print A3 Poster
            </button>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Poster />);
