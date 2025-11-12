import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PricingTier } from "@/data/ai-services";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { OrderForm } from "@/components/shared/OrderForm";

interface PricingTierCardProps {
  tier: PricingTier;
  orderSubject: string;
}

const PricingTierCard = ({ tier, orderSubject }: PricingTierCardProps) => {
  const { t } = useTranslation();
  const features = t(tier.featuresKey, { returnObjects: true }) as string[];

  return (
    <Card className="flex flex-col bg-background/50">
      <CardHeader>
        <CardTitle className="text-xl">{t(tier.levelKey)}</CardTitle>
        <div className="text-3xl font-bold">{t(tier.priceKey)}</div>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        {Array.isArray(features) && features.map((feature: string) => (
          <div key={feature} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">{t(tier.ctaKey)}</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("orderModal.title", { subject: `${orderSubject} - ${t(tier.levelKey)}` })}</DialogTitle>
              <DialogDescription>
                {t("orderModal.description")}
              </DialogDescription>
            </DialogHeader>
            <OrderForm orderSubject={`${orderSubject} - ${t(tier.levelKey)}`} t={t} />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default PricingTierCard;
