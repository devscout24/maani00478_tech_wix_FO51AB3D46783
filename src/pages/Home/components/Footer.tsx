import Logo from "@/assets/svgs/logo.svg?react";
import FacebookIcon from "@/assets/icons/ic_baseline-facebook.svg?react";
import YoutubeIcon from "@/assets/icons/mdi_youtube.svg?react";
import InstagramIcon from "@/assets/icons/mdi_instagram.svg?react";
import TwitterIcon from "@/assets/icons/ri_twitter-x-fill.svg?react";

export function Footer() {
  return (
    <footer className="px-4 py-6 bg-muted/50 space-y-6">
      <Logo className="w-[8.375rem] h-[2rem] text-primary" />

      <div className="flex items-center gap-4">
        {[
          <FacebookIcon className="size-5" />,
          <YoutubeIcon className="size-5" />,
          <InstagramIcon className="size-5" />,
          <TwitterIcon className="size-5" />,
        ].map((icon, i) => (
          <div key={i} className="w-fit p-2.5 rounded-full bg-muted">
            {icon}
          </div>
        ))}
      </div>

      <div className="flex items-start justify-between">
        <ul className="space-y-4">
          {["Home", "All Trips", "About Us", "Contact", "FAQ"].map((item) => (
            <li key={item} className="cursor-pointer hover:underline">
              {item}
            </li>
          ))}
        </ul>

        <ul className="space-y-4">
          {[
            "Travel Agencies Login",
            "Legal Warning",
            "Privacy Policy",
            "Cookies Policy",
          ].map((item) => (
            <li key={item} className="cursor-pointer hover:underline">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-muted-foreground text-center text-[0.75rem]">
          Copyright © 2025 lastminute - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
