import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const OrderForm = ({ orderSubject, t }: { orderSubject: string, t: any }) => {
  const formSchema = z.object({
    fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
    websiteName: z.string().min(2, { message: "Website name must be at least 2 characters." }),
    contact: z.string().min(5, { message: "Please enter a valid contact." }),
    details: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      websiteName: "",
      contact: "",
      details: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const phoneNumber = "6283119226089";
    
    const messageTemplate = t("orderModal.whatsappMessage", {
      subject: orderSubject,
      name: values.fullName,
      website: values.websiteName,
      contact: values.contact,
      details: values.details || "N/A",
    });

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageTemplate)}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("orderModal.nameLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("orderModal.namePlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="websiteName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("orderModal.websiteNameLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("orderModal.websiteNamePlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("orderModal.contactLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("orderModal.contactPlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("orderModal.detailsLabel")}</FormLabel>
              <FormControl>
                <Textarea placeholder={t("orderModal.detailsPlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">{t("orderModal.submitButton")}</Button>
      </form>
    </Form>
  );
}
