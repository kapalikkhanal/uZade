"use client";

import config from "@/config/config.json";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = ({ src }: { src?: string }) => {
  // destructuring items from config object
  const {
    logo,
    logo_darkmode,
    logo_width,
    logo_height,
    logo_text,
    title,
  }: {
    logo: string;
    logo_darkmode: string;
    logo_width: any;
    logo_height: any;
    logo_text: string;
    title: string;
  } = config.site;

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const resolvedLogo =
    mounted && (theme === "dark" || resolvedTheme === "dark")
      ? logo_darkmode
      : logo;
  const logoPath = src ? src : resolvedLogo;

  return (
    <Link href="/" className="navbar-brand inline-block">
      {logoPath ? (
        // <Image
        //   width={logo_width.replace("px", "") * 2}
        //   height={logo_height.replace("px", "") * 2}
        //   src={logoPath}
        //   alt={title}
        //   priority
        //   style={{
        //     height: logo_height.replace("px", "") + "px",
        //     width: logo_width.replace("px", "") + "px",
        //   }}
        // />
        <div className="flex justify-center items-center flex-row space-x-1">
          <h1 className="text-3xl bg-[#c39736] rounded-[10px] p-[2px] px-[4px] text-black">µZ</h1>
          <h1 className="text-3xl">MuseZade</h1>
        </div>
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
