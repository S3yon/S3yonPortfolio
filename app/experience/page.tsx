export default function Experience() {
  const experiences = [
    {
      title: "Rental Database and Operations Specialist",
      company: "Vistek",
      location: "Mississauga, ON",
      duration: "Feb 2022 - Present",
      type: "Full-time",
      achievements: [
        "Developed database solutions using SQL, maintaining inventory accuracy and optimizing daily operations across 3 departments",
        "Managed 100+ customer profiles in Microsoft Dynamic NAV, improving data accuracy and reducing billing errors",
        "Developed equipment recommendations across 3+ channels, increasing client retention and satisfaction",
        "Improved POS system speed by identifying workflow inefficiencies and optimizing daily operations",
      ],
    },
    {
      title: "Technical Support Analyst",
      company: "Canon",
      location: "Mississauga, ON",
      duration: "Jul 2020 – Feb 2022",
      type: "Full-time",
      achievements: [
        "Provided troubleshooting for software/hardware issues using root cause analysis, reducing ticket resolution time",
        "Collaborated with engineering teams to stabilize support systems, resulting in 15% increase in customer satisfaction scores",
        "Documented 50+ recurring issues in technical knowledge base, cutting support ticket volume",
        "Trained new support staff on diagnostic procedures and internal tools, improving onboarding and reducing escalations",
      ],
    },
    {
      title: "Technical Support Advisor",
      company: "Transcom",
      location: "Remote",
      duration: "Oct 2019 – Jul 2020",
      type: "Full-time",
      achievements: [
        "Supported 500+ customers by diagnosing technical issues and guiding self-resolution, reducing repeat inquiries",
        "Conducted research to identify and implement new solutions, improving support accuracy and service quality",
        "Adapted to remote support workflows while collaborating across teams to maintain high service quality",
      ],
    },
  ]

  return (
    <section className="flex-1 flex-grow overflow-y-auto px-3 lg:px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-text-accent mb-6 mt-8">Work Experience</h1>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border border-border-primary bg-bg-secondary/30 p-6 rounded">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-text-accent">{exp.title}</h2>
                  <p className="text-lg text-text-primary">{exp.company}</p>
                  <p className="text-sm text-text-secondary">{exp.location}</p>
                </div>
                <div className="mt-2 lg:mt-0 text-right">
                  <p className="text-sm text-text-primary">{exp.duration}</p>
                  <p className="text-xs text-text-secondary">{exp.type}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, achievementIdx) => (
                  <li key={achievementIdx} className="text-text-secondary text-sm">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
