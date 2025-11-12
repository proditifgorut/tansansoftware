import {
  Code,
  BrainCircuit,
  Database,
  Server,
  Cloud,
  Cpu,
  BarChart,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface Tech {
  name: string;
  icon: JSX.Element;
}

const techList: Tech[] = [
  { name: "React", icon: <Code className="w-8 h-8" /> },
  { name: "Python", icon: <BrainCircuit className="w-8 h-8" /> },
  { name: "TensorFlow", icon: <Cpu className="w-8 h-8" /> },
  { name: "Scikit-learn", icon: <BarChart className="w-8 h-8" /> },
  { name: "Next.js", icon: <Code className="w-8 h-8" /> },
  { name: "Node.js", icon: <Server className="w-8 h-8" /> },
  { name: "Vercel", icon: <Cloud className="w-8 h-8" /> },
  { name: "AWS", icon: <Database className="w-8 h-8" /> },
];

const TechStack = () => {
  const { t } = useTranslation();
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        {t("techStack.title")}{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {t("techStack.titleHighlight")}
        </span>
      </h2>
      <p className="mt-4 mb-10 text-xl text-muted-foreground text-center">
        {t("techStack.description")}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {techList.map(({ name, icon }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center text-center p-4 rounded-lg bg-card/50 transition-all duration-300 hover:bg-card"
          >
            <div className="p-4 bg-muted/50 rounded-full mb-2">{icon}</div>
            <p className="text-sm font-medium">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
