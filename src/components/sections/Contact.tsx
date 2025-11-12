import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const phoneNumber = "+6283119226089";

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        {t("contact.title")}{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {t("contact.titleHighlight")}
        </span>
      </h2>
      <p className="mt-4 mb-8 text-xl text-muted-foreground text-center">
        {t("contact.description")}
      </p>

      <div className="text-center mb-10">
        <p className="text-muted-foreground">{t("contact.phone")}</p>
        <a
          href={`tel:${phoneNumber}`}
          className="text-xl font-semibold flex items-center justify-center gap-2 mt-2 hover:text-primary transition-colors"
        >
          <Phone className="w-5 h-5" />
          {phoneNumber}
        </a>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>{t("contact.cardTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">{t("contact.nameLabel")}</Label>
              <Input type="text" id="name" placeholder={t("contact.namePlaceholder")} />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">{t("contact.emailLabel")}</Label>
              <Input type="email" id="email" placeholder={t("contact.emailPlaceholder")} />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="message">{t("contact.messageLabel")}</Label>
              <Textarea id="message" placeholder={t("contact.messagePlaceholder")} />
            </div>
            <Button type="submit" className="w-full">{t("contact.sendMessage")}</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
