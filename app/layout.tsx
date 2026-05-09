import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Planet Farmstay – Soulful Lodging near Mayiladuthurai",
  description:
    "Experience slow living on five acres of lush farmland near Mayiladuthurai. Traditional cottages, group accommodation, pet-friendly farm stay, and event venues.",
  keywords:
    "farmstay Mayiladuthurai, farm stay Tamil Nadu, cottages near Chidambaram, group accommodation, pet friendly stay, heritage tour base",
  openGraph: {
    title: "Happy Planet Farmstay",
    description:
      "Soulful lodging & group accommodation on five acres of lush farmland near Mayiladuthurai.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
