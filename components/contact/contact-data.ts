export const services = [
  "Ny webbplats",
  "Förbättra befintlig webbplats",
  "SEO & synlighet",
  "Webbapp / speciallösning",
  "Annat",
];

export const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  services: [] as string[],
  subject: "",
  message: "",
  website: "",
};

export type ContactData = typeof initialForm;
export type ContactStatus = "idle" | "sending" | "success" | "error";

export const fieldClass =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 font-sans text-base text-ink placeholder:text-ink-muted/45 outline-none transition-colors duration-300 focus:border-ink";
