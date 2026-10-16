import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Nsikak Emmanuel Etim - Full Stack Developer | Nigeria",
  description: "Nsikak Emmanuel Etim from Nigeria - Full Stack Developer. Built many websites, apps. Skills: Next.js, Supabase, WordPress (hubstori.name.ng), Blogger (hubstori.blogspot.com), Google Indexing, AdSense Monetization. Contact: 08025238990, purestories0@gmail.com",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
