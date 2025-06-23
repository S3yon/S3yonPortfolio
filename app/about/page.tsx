export default function About() {
  return (
    <section className="flex-1 flex-grow overflow-y-auto">
      <div className="h-full flex flex-col">
        {/* Tab bar */}
        <div className="flex items-center bg-bg-secondary/30 border-b border-border-primary px-4">
          <div className="flex items-center gap-1">
            <div className="bg-bg-tertiary text-text-primary px-3 py-1 text-sm rounded-t border-t border-l border-r border-border-secondary">
              personal.ts
            </div>
            <div className="text-text-secondary px-3 py-1 text-sm hover:text-text-primary cursor-pointer">work.ts</div>
            <div className="text-text-secondary px-3 py-1 text-sm hover:text-text-primary cursor-pointer">gear.ts</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl">
            <pre className="text-sm text-text-primary leading-relaxed font-mono">
              <div className="flex">
                <div className="text-text-secondary w-8 text-right mr-4 select-none">1</div>
                <div>
                  <span className="text-blue-400">const</span> <span className="text-text-accent">NAME</span> ={" "}
                  <span className="text-green-400">{"Seyon Sri"}</span>;
                </div>
              </div>
              <div className="flex">
                <div className="text-text-secondary w-8 text-right mr-4 select-none">2</div>
                <div></div>
              </div>
              <div className="flex">
                <div className="text-text-secondary w-8 text-right mr-4 select-none">3</div>
                <div>
                  <span className="text-blue-400">let</span> <span className="text-text-accent">location</span> ={" "}
                  <span className="text-green-400">{"Greater Toronto Area, Canada"}</span>;
                </div>
              </div>
              <div className="flex">
                <div className="text-text-secondary w-8 text-right mr-4 select-none">4</div>
                <div></div>
              </div>
              <div className="flex">
                <div className="text-text-secondary w-8 text-right mr-4 select-none">5</div>
                <div>
                  <span className="text-blue-400">let</span> <span className="text-text-accent">hobbies</span> = [
                </div>
              </div>
              <div className="flex">
                <div className="text-text-secondary w-8 text-right mr-4 select-none">6</div>
                <div className="ml-4">
                  <span className="text-green-400">{"Programming"}</span>,
                </div>
              </div>
              <div className="flex">
                <div className="text-text-secondary w-8 text-right mr-4 select-none">7</div>
                <div className="ml-4">
                  <span className="text-green-400">{"Gaming"}</span>,
                </div>
              </div>
              <div className="flex">
                <div className="text-text-secondary w-8 text-right mr-4 select-none">8</div>
                <div className="ml-4">
                  <span className="text-green-400">{"Cycling"}</span>,
                </div>
              </div>
              <div className="flex">
                <div className="text-text-secondary w-8 text-right mr-4 select-none">9</div>
                <div className="ml-4">
                  <span className="text-green-400">{"Guitar"}</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-text-secondary w-8 text-right mr-4 select-none">10</div>
                <div className="ml-4">
                  <span className="text-text-secondary">// {"Sleeping"}</span>
                </div>
              </div>
              <div className="flex">
                <div className="text-text-secondary w-8 text-right mr-4 select-none">11</div>
                <div>];</div>
              </div>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
