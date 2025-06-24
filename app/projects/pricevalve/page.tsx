import { projects } from "@/lib/data"

export default function PriceValveProject() {
  const project = projects.find(p => p.slug === "pricevalve")
  
  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <section className="flex-1 flex-grow overflow-y-auto px-3 lg:px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 mt-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{project.icon}</span>
            <h1 className="text-2xl font-bold text-text-accent">{project.title}</h1>
          </div>
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            {project.description}
          </p>
          
          {project.award && (
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-4 py-2 rounded-full font-semibold text-sm mb-6">
              🏆 {project.award}
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-bg-tertiary text-text-primary rounded-full text-sm font-medium border border-border-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {project.links && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-text-accent mb-4">🔗 Project Links</h2>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-bg-secondary border border-border-primary rounded-lg text-text-primary hover:bg-bg-tertiary transition-colors"
                >
                  {link.label}
                  <span className="ml-2">↗</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-text-accent mb-6">⚡ Key Features</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="border border-border-primary bg-bg-secondary/30 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-text-accent mb-3">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-text-accent mb-6">🏗️ Technical Architecture</h2>
          <div className="space-y-6">
            <div className="border border-border-primary bg-bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-text-accent mb-3">Full-Stack TypeScript Implementation</h3>
              <p className="text-text-secondary leading-relaxed mb-3">
                Modern monorepo architecture with separate frontend and backend applications:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-1 ml-4">
                <li><strong>Frontend:</strong> Next.js 15 with App Router, TypeScript, and Tailwind CSS</li>
                <li><strong>Backend:</strong> Express.js server with TypeScript and modular service architecture</li>
                <li><strong>Development:</strong> Concurrent development servers with hot reloading</li>
                <li><strong>Build System:</strong> Unified build and deployment pipeline</li>
              </ul>
            </div>

            <div className="border border-border-primary bg-bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-text-accent mb-3">Steam API Integration</h3>
              <p className="text-text-secondary leading-relaxed mb-3">
                Comprehensive data collection from multiple Steam data sources:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-1 ml-4">
                <li><strong>Steam Web API:</strong> Official game metadata, pricing, and review data</li>
                <li><strong>SteamSpy API:</strong> Player engagement and ownership statistics</li>
                <li><strong>ITAD API:</strong> Historical pricing data and market trends</li>
                <li><strong>Real-time Processing:</strong> Live data fetching and analysis pipeline</li>
              </ul>
            </div>

            <div className="border border-border-primary bg-bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-text-accent mb-3">Revenue Optimization Engine</h3>
              <p className="text-text-secondary leading-relaxed mb-3">
                Advanced pricing algorithms with machine learning-inspired approaches:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-1 ml-4">
                <li><strong>Demand Estimation:</strong> Player behavior analysis and market demand modeling</li>
                <li><strong>Competitor Analysis:</strong> Market positioning and competitive pricing insights</li>
                <li><strong>Confidence Scoring:</strong> Statistical confidence levels for all recommendations</li>
                <li><strong>Revenue Forecasting:</strong> Short and long-term revenue predictions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Models & API */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-text-accent mb-6">📊 Data Models & API</h2>
          <div className="space-y-6">
            <div className="border border-border-primary bg-bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-text-accent mb-3">Core Game Analysis Model</h3>
              <div className="bg-bg-primary/50 p-4 rounded-lg font-mono text-sm text-text-secondary overflow-x-auto">
                <pre>{`interface Game {
  appId: number;
  name: string;
  developer: string;
  publisher: string;
  
  // Steam API Data
  steamData: SteamGameData;
  steamSpyData: SteamSpyData;
  
  // Analysis Results  
  priceAnalysis: PriceAnalysis;
  playerAnalysis: PlayerAnalysis;
  marketAnalysis: MarketAnalysis;
  reviewAnalysis: ReviewAnalysis;
  
  // Revenue Optimization
  revenuePredictions: RevenuePredictions;
}`}</pre>
              </div>
            </div>

            <div className="border border-border-primary bg-bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-text-accent mb-3">API Endpoints</h3>
              <div className="grid gap-3">
                <div className="bg-bg-primary/50 p-3 rounded-lg">
                  <span className="font-mono text-sm text-green-400">POST</span>
                  <span className="ml-3 font-mono text-sm">/api/analyze</span>
                  <span className="ml-3 text-text-secondary text-sm">Analyze single game</span>
                </div>
                <div className="bg-bg-primary/50 p-3 rounded-lg">
                  <span className="font-mono text-sm text-blue-400">GET</span>
                  <span className="ml-3 font-mono text-sm">/api/search</span>
                  <span className="ml-3 text-text-secondary text-sm">Search games</span>
                </div>
                <div className="bg-bg-primary/50 p-3 rounded-lg">
                  <span className="font-mono text-sm text-blue-400">GET</span>
                  <span className="ml-3 font-mono text-sm">/api/steam/:appId</span>
                  <span className="ml-3 text-text-secondary text-sm">Steam game data</span>
                </div>
                <div className="bg-bg-primary/50 p-3 rounded-lg">
                  <span className="font-mono text-sm text-blue-400">GET</span>
                  <span className="ml-3 font-mono text-sm">/api/steamspy/:appId</span>
                  <span className="ml-3 text-text-secondary text-sm">SteamSpy analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frontend Components */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-text-accent mb-6">🎨 Frontend Components</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-border-primary bg-bg-secondary/30 p-4 rounded-lg">
              <h3 className="font-semibold text-text-accent mb-2">Analysis Components</h3>
              <ul className="text-text-secondary text-sm space-y-1">
                <li>• NewGameHeader - Game info display</li>
                <li>• PricingAnalysisResults - Recommendations</li>
                <li>• RecommendedActions - Actionable insights</li>
                <li>• AnalysisCharts - Interactive visualizations</li>
                <li>• ExecutiveSummary - High-level overview</li>
              </ul>
            </div>
            <div className="border border-border-primary bg-bg-secondary/30 p-4 rounded-lg">
              <h3 className="font-semibold text-text-accent mb-2">Core Components</h3>
              <ul className="text-text-secondary text-sm space-y-1">
                <li>• GameSelector - Game discovery</li>
                <li>• SteamGameCard - Game information cards</li>
                <li>• Navbar - Navigation component</li>
                <li>• UI Components - shadcn/ui integration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-text-accent mb-6">🏆 Key Achievements</h2>
          <div className="space-y-4">
            {project.achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 border border-border-primary bg-bg-secondary/30 rounded-lg"
              >
                <span className="text-xl mt-1">🚀</span>
                <span className="text-text-secondary leading-relaxed">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Development Workflow */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-text-accent mb-6">⚙️ Development Workflow</h2>
          <div className="border border-border-primary bg-bg-secondary/30 p-6 rounded-lg">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-text-accent mb-3">Development Features</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Concurrent frontend/backend development</li>
                  <li>TypeScript across entire stack</li>
                  <li>ESLint configuration for code quality</li>
                  <li>Workspace-based monorepo structure</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-accent mb-3">Build & Deployment</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Unified build pipeline for both apps</li>
                  <li>Production-ready Express server</li>
                  <li>Next.js static optimization</li>
                  <li>Clean development scripts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}