import { Button } from "@/components/ui/button";
import { Code2, BrainCircuit, Database, BarChart, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import * as React from "react";

const aiComponents: { title: string; href: string; description: string, icon: JSX.Element }[] = [
  {
    title: "aiServices.dataAnalysis.title",
    href: "/data-analysis",
    description: "aiServicesIntro.dataAnalysisDesc",
    icon: <BarChart className="h-4 w-4" />
  },
  {
    title: "aiServices.dataMining.title",
    href: "/data-mining",
    description: "aiServicesIntro.dataMiningDesc",
    icon: <Database className="h-4 w-4" />
  },
  {
    title: "aiServices.dataScience.title",
    href: "/data-science",
    description: "aiServicesIntro.dataScienceDesc",
    icon: <BrainCircuit className="h-4 w-4" />
  },
  {
    title: "aiServices.machineLearning.title",
    href: "/machine-learning",
    description: "aiServicesIntro.machineLearningDesc",
    icon: <Cpu className="h-4 w-4" />
  },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Code2 className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Tansan Software
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("header.services")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem href="/pricing" title={t("header.webDev")}>
                      {t("pricing.description")}
                    </ListItem>
                    {aiComponents.map((component) => (
                      <ListItem
                        key={t(component.title)}
                        title={t(component.title)}
                        href={component.href}
                        icon={component.icon}
                      >
                        {t(component.description)}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/portfolio" className={navigationMenuTriggerStyle()}>
                    {t("header.portfolio")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                 <NavigationMenuLink asChild>
                  <a href="/#contact" className={navigationMenuTriggerStyle()}>
                    {t("header.contact")}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="flex items-center gap-2">
            <Button
              variant={currentLanguage === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => changeLanguage("en")}
            >
              EN
            </Button>
            <Button
              variant={currentLanguage === "id" ? "default" : "ghost"}
              size="sm"
              onClick={() => changeLanguage("id")}
            >
              ID
            </Button>
          </div>
          <a href="/#pricing">
            <Button>{t("header.getStarted")}</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: JSX.Element }
>(({ className, title, children, icon, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href!}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon} {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
