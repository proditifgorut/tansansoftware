import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { portfolioData } from "@/data/portfolio";
import { Link } from "react-router-dom";

interface PortfolioProps {
  limit?: number;
}

const Portfolio = ({ limit }: PortfolioProps) => {
  const { t } = useTranslation();
  const projects = limit ? portfolioData.slice(0, limit) : portfolioData;

  return (
    <section id="portfolio" className="container py-24 sm:py-32 bg-muted/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          {t("portfolio.title")}{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {t("portfolio.titleHighlight")}
          </span>
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          {t("portfolio.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden flex flex-col">
            <img
              src={project.image}
              alt={t(project.titleKey)}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{t(project.titleKey)}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3">{t(project.descriptionKey)}</p>
            </CardContent>
            <CardFooter>
              <Link to={`/portfolio/${project.id}`} className="w-full">
                <Button variant="outline" className="w-full">{t("portfolio.viewDetails")}</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {limit && portfolioData.length > limit && (
        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button size="lg">{t("portfolio.viewAll")}</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
