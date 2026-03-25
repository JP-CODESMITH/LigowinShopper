
import type { Metadata } from "next";
import { inter, montserrat, playfair, jetbrains } from "@/app/ui/fonts";
import "./globals.css";
import Menus from "./components/menu";
import Gmail from "./components/gmail";

export const metadata: Metadata = {
  title: "This is LIGOWIN China to Nigeria plug",
  description: "We trade world wide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${montserrat.className} ${playfair.className} ${jetbrains.className} antialiased bg-ocean-abyss text-text-soft`}
        suppressHydrationWarning={true}
      >
        <Menus />
        <main>{children}</main>
        <section className="w-screen flex flex-col h-auto z-30 px-10 md:px-20 gap-8 py-10">
          <div className="md:grid grid-cols-3 gap-8 justify-evenly ">
            <div className="flex gap-3 flex-col">
              {" "}
              <p className="text-text-bright">Lagos</p>
              <p className="text-text-muted">
                New dawn estate aco phase 2 launge fact Abuja
              </p>
              <p className="text-text-muted">
                office: <a href=""></a>
              </p>
            </div>
            <div className="flex gap-3 flex-col">
              {" "}
              <p className="text-text-bright">Lagos</p>
              <p className="text-text-muted">
                New dawn estate aco phase 2 launge fact Abuja
              </p>
              <p className="text-text-muted">
                office: <a href=""></a>
              </p>
            </div>
            <div className="flex gap-3 flex-col">
              {" "}
              <p className="text-text-bright">Lagos</p>
              <p className="text-text-muted">
                New dawn estate aco phase 2 launge fact Abuja
              </p>
              <p className="text-text-muted">
                office: <a href=""></a>
              </p>
            </div>
          </div>
          <Gmail />
          <div className="w-full h-10 flex justify-center items-center gap-5">
            <p className="text-text-bright font-semibold outline-port-slate">
              contact us
            </p>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook-icon lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="https://wa.me/+2349160582481"
            target="_blank"
            rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle-code-icon lucide-message-circle-code"
              >
                <path d="m10 9-3 3 3 3" />
                <path d="m14 15 3-3-3-3" />
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
              </svg>
            </a>
          </div>
        </section>{" "}
      </body>
    </html>
  );
}
