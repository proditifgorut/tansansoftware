import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Algorithm } from "@/data/ai-services";
import { useTranslation } from "react-i18next";
import PricingTierCard from "./PricingTierCard";

interface AlgorithmCardProps {
  algorithm: Algorithm;
}

const AlgorithmCard = ({ algorithm }: AlgorithmCardProps) => {
  const { t } = useTranslation();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{t(algorithm.nameKey)}</CardTitle>
        <CardDescription>{t(algorithm.descriptionKey)}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {algorithm.pricing.map((tier) => (
            <PricingTierCard key={tier.levelKey} tier={tier} orderSubject={t(algorithm.nameKey)} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlgorithmCard;
