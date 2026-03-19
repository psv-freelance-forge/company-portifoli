import type { Metadata } from "next";

export const sharedMetadata: Metadata = {
  title: "Next-Gen Digital Solutions for Modern Brands",
  description:
    "Innovative digital solutions for modern brands. We specialize in cutting-edge web development, creative design, and strategic digital experiences.",
  icons: {
    icon: [
      { url: "/images/Main-logo.jfif" },
      { url: "/images/Main-logo.jfif", rel: "shortcut icon" },
    ],
    apple: "/images/Main-logo.jfif",
  },
  openGraph: {
    title: "Next-Gen Digital Solutions for Modern Brands",
    description:
      "Innovative digital solutions for modern brands. We specialize in web development, design, and digital strategy.",
    images: [
      {
        url: "/images/Main-logo.jfif",
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
    images: ["/images/Main-logo.jfif"],
  },
};
