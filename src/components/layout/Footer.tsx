import { Code2, Github, Linkedin, Phone, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const phoneNumber = "+6283119226089";

  return (
    <footer className="border-t">
      <div className="container grid grid-cols-1 sm:grid-cols-3 items-center gap-4 py-8 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start space-x-2">
          <Code2 className="h-6 w-6" />
          <span className="font-bold">Tansan Software</span>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-2">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{phoneNumber}</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © 2025 Tansan Software. {t("footer.rights")}
            </p>
        </div>

        <div className="flex items-center justify-center sm:justify-end space-x-4">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
