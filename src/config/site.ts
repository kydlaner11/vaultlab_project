export type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

export const navItems: NavItem[] = [
  { name: "Home", href: "#top" },
  { name: "About", href: "#about" },
  {
    name: "Pages",
    href: "#",
    children: [
      { name: "Services", href: "#services" },
      { name: "Work", href: "#work" },
    ],
  },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#contact" },
];

export const siteConfig = {
  name: "Vaultlab",
  tagline: "Growth Strategy, SEO & Performance Marketing",
  description:
    "Vaultlab helps brands scale through SEO, performance media, and conversion-focused design. Strategy-led growth systems that compound.",
  url: "https://vaultlab.vercel.app",
  email: "vaultlabproject@gmail.com",
  locale: "en_US",
  keywords: [
    "growth marketing agency",
    "SEO strategy",
    "performance marketing",
    "conversion-focused design",
    "digital growth strategist",
    "brand and UI design",
  ],
} as const;
