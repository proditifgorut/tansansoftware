import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { OrderForm } from "@/components/shared/OrderForm";

const Pricing = () => {
  const { t } = useTranslation();
  const pricingPlans = t("pricing.plans", { returnObjects: true }) as any[];

  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        {t("pricing.title")}{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {t("header.webDev")}
        </span>
      </h2>
      <p className="mt-4 mb-10 text-xl text-muted-foreground text-center">
        {t("pricing.description")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan: any) => (
          <Card key={plan.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{plan.title}</CardTitle>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">{plan.price}</span>
                {(plan.period && (plan.price !== "Custom" && plan.price !== "Kustom")) && <span className="text-muted-foreground ml-2">/ {plan.period}</span>}
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              {plan.features.map((feature: string) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">{plan.cta}</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{t("orderModal.title", { subject: plan.title })}</DialogTitle>
                    <DialogDescription>
                      {t("orderModal.description")}
                    </DialogDescription>
                  </DialogHeader>
                  <OrderForm orderSubject={plan.title} t={t} />
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
