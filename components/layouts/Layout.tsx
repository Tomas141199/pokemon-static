import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from "../ui";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title = "PokemonApp" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Fernando Herrera" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta
          property="og:title"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre tiene el titulo ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      {/* Navbar */}
      <Navbar />

      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
