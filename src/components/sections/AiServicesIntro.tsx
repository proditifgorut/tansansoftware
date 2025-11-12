import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BarChart, Database, BrainCircuit, Cpu } from "lucide-react";

const services = [
  {
    titleKey: "aiServicesIntro.dataAnalysisTitle",
    descriptionKey: "aiServicesIntro.dataAnalysisDesc",
    link: "/data-analysis",
    icon: <BarChart className="w-10 h-10 mb-4 text-primary" />,
  },
  {
    titleKey: "aiServicesIntro.dataMiningTitle",
    descriptionKey: "aiServicesIntro.dataMiningDesc",
    link: "/data-mining",
    icon: <Database className="w-10 h-10 mb-4 text-primary" />,
  },
  {
    titleKey: "aiServicesIntro.dataScienceTitle",
    descriptionKey: "aiServicesIntro.dataScienceDesc",
    link: "/data-science",
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
  },
  {
    titleKey: "aiServicesIntro.machineLearningTitle",
    descriptionKey: "aiServicesIntro.machineLearningDesc",
    link: "/machine-learning",
    icon: <Cpu className="w-10 h-10 mb-4 text-primary" />,
  },
];

const AiServicesIntro = () => {
  const { t } = useTranslation();

  return (
    <section id="ai-services" className="container py-24 sm:py-32 bg-muted/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          {t("aiServicesIntro.title")}
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          {t("aiServicesIntro.description")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <Card key={service.link} className="flex flex-col text-center items-center justify-between">
            <CardHeader>
              {service.icon}
              <CardTitle>{t(service.titleKey)}</CardTitle>
              <CardDescription>{t(service.descriptionKey)}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link to={service.link}>
                <Button variant="outline">{t("aiServicesIntro.learnMore")}</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AiServicesIntro;
