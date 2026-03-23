import type { Metadata } from "next";
import { inter } from '@/app/ui/fonts'
import "./globals.css";
import Menus from "./components/menu";


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
        className={ ` '${inter.className}'antialiased bg-deep-ocean text-neutral-white`}
        suppressHydrationWarning={true}
      >
        <Menus />
        <main>{children}</main>
        <section className="w-screen flex flex-col h-auto z-30 px-10 md:px-20 gap-8 py-10">
          <div className="md:grid grid-cols-3 gap-8 justify-evenly ">
            <div className="flex gap-3 flex-col">
              {" "}
              <p className="text-white">Lagos</p>
              <p>Huntersville, 957 Hill Hills Suite 491, United States</p>
              <p>
                office: <a href=""></a>
              </p>
            </div>
            <div className="flex gap-3 flex-col">
              {" "}
              <p className="text-white">Lagos</p>
              <p>Huntersville, 957 Hill Hills Suite 491, United States</p>
              <p>
                office: <a href=""></a>
              </p>
            </div>
            <div className="flex gap-3 flex-col">
              {" "}
              <p className="text-white">Lagos</p>
              <p>Huntersville, 957 Hill Hills Suite 491, United States</p>
              <p>
                office: <a href=""></a>
              </p>
            </div>
          </div>
          <div className="w-80 md:w-90 lg:w-100 p-5 rounded-full self-center bg-gray-800 grid grid-cols-[auto_5fr_auto] justify-center items-center flex-row">
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
              className="lucide lucide-mail-icon lucide-mail mr-1"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <input
              type="text"
              name="text"
              id=""
              placeholder="send us a gmail"
              className=" p-2 self-start border-none outline outline-gray-500 mr-1 w-auto bg-transparent text-white font-semibold placeholder:text-gray-400"
            />
            <a
              href="mailto:contact@ligowinshopper.com"
              className=" bg-gray-800 text-white font-semibold underline"
            >
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
                className="lucide lucide-send-icon lucide-send"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
            </a>
          </div>
          <div className="w-full h-10 flex justify-center items-center gap-5">
            <p className="text-white font-semibold outline-gray-800">
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
