import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import "swiper/css";
import NavLayout from "./components/layout/nav.layout";
import { useEffect, useRef, useState } from "react";
import { getDarkMode, getStyledType } from "./shared/local-storage";
import { ParallaxProvider } from "react-scroll-parallax";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "icon", href: "/logo.ico", sizes: "128x128", type: "image/x-icon" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const isDev = import.meta.env.MODE === "development";
  const getStyle = getStyledType();
  const [scrollEl, setScrollElement] = useState<HTMLDivElement | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScrollElement(ref.current);
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      getDarkMode() ? "dark" : ""
    );

    const preventRightClick = (e: Event) => {
      if (isDev) return;
      e.preventDefault();
    };

    const disableDevTools = (e: any) => {
      if (isDev) return;
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
      }
    };

    window.addEventListener("contextmenu", preventRightClick);
    window.addEventListener("keydown", disableDevTools);

    return () => {
      window.removeEventListener("contextmenu", preventRightClick);
      window.removeEventListener("keydown", disableDevTools);
    };
  }, []);

  return (
    <html lang="en" data-theme="">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Kenneth Andales | Portfolio" />
        <meta
          property="og:description"
          content="Explore my portfolio and see the projects I've worked on."
        />
        <meta
          property="og:image"
          content="https://kenneth-andales.github.io/images/profile.png"
        />
        <meta property="og:url" content="https://portfolio.ksoftdev.site" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kenneth Andales | Portfolio" />
        <meta
          name="twitter:description"
          content="Explore my portfolio and see the projects I've worked on."
        />
        <meta
          name="twitter:image"
          content="https://kenneth-andales.github.io/images/profile.png"
        />
        <meta name="twitter:url" content="https://portfolio.ksoftdev.site" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <Meta />
        <Links />
      </head>
      <body
        className="dark:bg-dark w-[100vw] overflow-x-hidden! select-none"
        // @ts-ignore
        ref={ref}
      >
        {getStyle === "gui" ? <NavLayout /> : null}
        {/* @ts-ignore */}
        <ParallaxProvider scrollContainer={scrollEl}>
          {children}
        </ParallaxProvider>
        <ScrollRestoration />
        <Scripts />
        {/* <PageLoaderLayout /> */}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 w-full h-[100vh] container grid place-items-center mx-auto">
      <img src="/images/404.svg" alt="404 not found" className="lg:w-3/4 lg:h-3/4" />
    </main>
  );
}
