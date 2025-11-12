import AlgorithmCard from "@/components/shared/AlgorithmCard";
import { aiServices, ServiceCategory } from "@/data/ai-services";
import { useTranslation } from "react-i18next";

const DataAnalysisPage = () => {
  const { t } = useTranslation();
  const serviceData = aiServices.find(s => s.id === 'data-analysis') as ServiceCategory;

  return (
    <div className="container py-12 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          {t(serviceData.titleKey)}
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          {t(serviceData.descriptionKey)}
        </p>
      </div>
      <div className="space-y-12">
        {serviceData.algorithms.map(algo => (
          <AlgorithmCard key={algo.id} algorithm={algo} />
        ))}
      </div>
    </div>
  );
};

export default DataAnalysisPage;
