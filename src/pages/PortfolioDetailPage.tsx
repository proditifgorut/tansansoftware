import { useParams, Navigate } from "react-router-dom";
import { portfolioData, ProjectPricingTier } from "@/data/portfolio";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { OrderForm } from "@/components/shared/OrderForm";

const PortfolioDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { t } = useTranslation();

  const project = portfolioData.find(p => p.id === projectId);

  if (!project) {
    return <Navigate to="/404" />;
  }

  const ProjectPricingCard = ({ tier }: { tier: ProjectPricingTier }) => {
    const orderSubject = `${t(project.titleKey)} - ${t(tier.levelKey)}`;
    return (
      <Card className="flex flex-col bg-background/50">
        <CardHeader>
          <CardTitle className="text-xl">{t(tier.levelKey)}</CardTitle>
          <div className="text-3xl font-bold">{t(tier.priceKey)}</div>
        </CardHeader>
        <CardContent className="flex-grow space-y-3">
          {tier.features.map((feature: string) => (
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
                <DialogTitle>{t("orderModal.title", { subject: orderSubject })}</DialogTitle>
                <DialogDescription>
                  {t("orderModal.description")}
                </DialogDescription>
              </DialogHeader>
              <OrderForm orderSubject={orderSubject} t={t} />
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="container py-12 sm:py-16">
      {/* Project Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          {t(project.titleKey)}
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          {t(project.descriptionKey)}
        </p>
      </div>

      {/* Project Details */}
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3">
          <img src={project.image} alt={t(project.titleKey)} className="rounded-lg shadow-lg w-full mb-8" />
          <h2 className="text-2xl font-semibold mb-4">About The Project</h2>
          <p className="text-muted-foreground leading-relaxed">
            {t(project.longDescriptionKey)}
          </p>
        </div>

        {/* Pricing Section */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-semibold text-center">{t("portfolio.pricingTitle")}</h2>
          {project.pricing.map(tier => (
            <ProjectPricingCard key={tier.levelKey} tier={tier} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;
