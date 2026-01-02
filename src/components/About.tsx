import { Briefcase, TrendingUp, Database } from "lucide-react";

const experiences = [
  {
    role: "Amazon Account Manager",
    company: "Karrma Ltd",
  },
  {
    role: "E-commerce Market Analyst",
    company: "Data Analyst Intern",
  },
  {
    role: "Marketing Manager & Specialist",
    company: "J & J Sons",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Content */}
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
                About Me
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Practical, Profitability-Focused Consulting
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I bring hands-on experience managing multi-platform e-commerce
                  businesses, with deep expertise that translates directly into
                  measurable results for my clients.
                </p>
                <p>
                  My specialization spans Amazon Seller Central—including
                  listings, PPC campaigns, inventory management, and
                  compliance—Shopify store optimization and performance
                  tracking, and eBay marketplace listing optimization.
                </p>
                <p>
                  With a strong background in data analysis using Python, Excel,
                  and Power BI, I take a practical, profitability-focused
                  approach to every engagement.
                </p>
              </div>
            </div>

            {/* Experience Cards */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                Experience Snapshot
              </p>

              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-card p-5 rounded-lg border border-border shadow-card"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-secondary rounded-md">
                        {index === 0 && (
                          <Briefcase className="h-5 w-5 text-primary" />
                        )}
                        {index === 1 && (
                          <TrendingUp className="h-5 w-5 text-primary" />
                        )}
                        {index === 2 && (
                          <Database className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-3">
                  Tools & Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Amazon Seller Central",
                    "Shopify",
                    "eBay",
                    "Python",
                    "Excel",
                    "Power BI",
                    "PPC",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
