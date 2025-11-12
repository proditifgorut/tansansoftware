import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              {t("hero.title1")}
            </span>{" "}
            {t("hero.title2")}
          </h1>{" "}
          {t("hero.title3")}{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              {t("hero.title4")}
            </span>{" "}
            {t("hero.title5")}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          {t("hero.description")}
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="#pricing">
            <Button className="w-full md:w-1/3" size="lg">{t("hero.exploreServices")}</Button>
          </a>
          <a href="#contact">
            <Button variant="outline" className="w-full md:w-1/3" size="lg">
              {t("hero.contactUs")}
            </Button>
          </a>
        </div>
      </div>

      <div className="z-10">
        <div className="w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg shadow-2xl">
            <img src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0A0A0A/FFFFFF?text=AI+Dashboard" alt="AI Dashboard" className="rounded-lg" />
        </div>
      </div>

    </section>
  );
};

export default Hero;
