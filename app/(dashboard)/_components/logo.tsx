import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/public/logo.png";

/** Wordmark shown in the dashboard top bar on small screens only —
 *  the sidebar carries the brand from md up. */
const Logo = () => (
  <Link href="/home" className="flex flex-row items-center gap-2 md:hidden">
    <span className="aspect-square size-7 rounded-lg">
      <Image src={LogoImage} alt="" className="rounded-[5px]" />
    </span>
    <span className="truncate font-tertiary text-lg tracking-wide text-secondaryColor">
      Tnses
    </span>
  </Link>
);

export default Logo;
