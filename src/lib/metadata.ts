import type { Metadata } from "next";

export const sharedMetadata: Metadata = {
  metadataBase: new URL("https://psvfreelanceforge.in"),
  title: "PSV Freelance Forge",
  description:
    "Innovative digital solutions for modern brands. We specialize in cutting-edge web development, creative design, and strategic digital experiences.",
  icons: {
    icon: [
      { url: "/images/main-logo.jpg" },
      { url: "/images/main-logo.jpg", rel: "shortcut icon" },
    ],
    apple: "/images/main-logo.jpg",
  },
  openGraph: {
    title: "Next-Gen Digital Solutions for Modern Brands",
    description:
      "Innovative digital solutions for modern brands. We specialize in web development, design, and digital strategy.",
    images: [
      {
        url: "/images/main-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Logo",
      },
    ],
    siteName: "Next-Gen Digital Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next-Gen Digital Solutions for Modern Brands",
    description:
      "Innovative digital solutions for modern brands. We specialize in web development, design, and digital strategy.",
    images: ["/images/main-logo.jpg"],
  },
};
