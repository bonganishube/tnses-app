import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/original_logo.png"
import { Input } from "@/components/ui/input"
import { AtSign, Facebook, Instagram, Linkedin, MapPin } from "lucide-react"

type FooterItemProps = {
  text: string;
  link: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ text, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="text-slate-300 transition-colors duration-200 hover:text-primaryColor"
      >
        {text}
      </Link>
    </li>
  )
}

type FooterBlockItemProps = {
  title: string;
  items: { id: number; text: string; link: string }[]; // Array of objects with id, text, and link
}

const FooterBlockItem: React.FC<FooterBlockItemProps> = ({ title, items }) => {
  return (
    <div className="space-y-5">
      <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
        {title}
      </h3>
      <ul className="space-y-3 text-sm">
        {
          items.map(item => (
            <FooterItem key={item.id} {...item} />
          ))
        }
      </ul>
    </div>
  )
}

const footerItems = [
  {
    id: 1,
    title: "Navigation",
    items: [
      { id: 1, text: "Home", link: "#home" },
      { id: 2, text: "What We Do", link: "#services" },
      { id: 3, text: "About Us", link: "#about" },
      { id: 4, text: "Team", link: "#team" },
      { id: 5, text: "Testimonials", link: "#testimonials" },
      { id: 6, text: "Contact Us", link: "#contact" },
    ]
  },
  {
    id: 2,
    title: "Services",
    items: [
      { id: 1, text: "Applied Digital Skills", link: "#services" },
      { id: 2, text: "Blueprint", link: "#services" },
      { id: 3, text: "Professional Development", link: "#services" },
      { id: 4, text: "Monitoring & Evaluation", link: "#services" },
    ]
  },
  {
    id: 3,
    title: "Support",
    items: [
      { id: 1, text: "Terms & Conditions", link: "#" },
      { id: 2, text: "Privacy Policy", link: "#" },
    ]
  },
]

const socials = [
  { id: 1, label: "Instagram", icon: Instagram, link: "#" },
  { id: 2, label: "Facebook", icon: Facebook, link: "#" },
  { id: 3, label: "LinkedIn", icon: Linkedin, link: "#" },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondaryColor-900 pt-12 lg:pt-12">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Identity + quick contact */}
        <div className="grid gap-8 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
          <Link href="#home" className="group flex items-center gap-2.5">
            <Image
              src={Logo}
              alt="TNSES"
              width={36}
              height={36}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            {/* <p className="font-display text-xl font-bold tracking-[0.06em] text-white">
              TNSES
            </p> */}
          </Link>

          <div className="flex items-center gap-3 text-slate-300">
            <MapPin className="h-5 w-5 shrink-0 text-primaryColor" />
            <span className="text-sm">Belhar, Pentech, Cape Town</span>
          </div>

          <a
            href="mailto:info@tnses.org"
            className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
          >
            <AtSign className="h-5 w-5 shrink-0 text-primaryColor" />
            <span className="text-sm">info@tnses.org</span>
          </a>

          <div className="flex items-center gap-3 lg:justify-end">
            {socials.map(({ id, label, icon: Icon, link }) => (
              <Link
                key={id}
                href={link}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center border border-white/15 text-slate-300 transition-colors duration-200 hover:border-primaryColor hover:bg-primaryColor hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Link columns + subscribe */}
        <nav className="grid grid-cols-2 gap-8 gap-y-10 py-12 md:grid-cols-3 lg:grid-cols-4">
          {
            footerItems.map(item => (
              <FooterBlockItem key={item.id} {...item} />
            ))
          }
          <div className="col-span-2 space-y-5 md:col-span-3 lg:col-span-1">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
              Subscribe
            </h3>
            <p className="max-w-xl text-sm text-slate-300">
              Get Blueprint Magazine in your inbox.
            </p>
            <form className="flex w-full max-w-sm flex-col gap-3">
              <Input
                type="email"
                name="email"
                autoComplete="email"
                aria-label="Email address"
                placeholder="you@example.com"
                className="rounded-none border-white/15 bg-white/5 text-white placeholder:text-slate-500 focus-visible:border-primaryColor focus-visible:ring-2 focus-visible:ring-primaryColor/25 focus-visible:ring-offset-0"
              />
              <button
                type="submit"
                className="btn-square w-full justify-center bg-primaryColor py-3.5 text-white hover:bg-primaryColor-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </nav>

        <div className="flex flex-col items-center gap-3 border-t border-white/10 py-6 text-sm text-slate-400 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} TNSES. All rights reserved.</p>
          <p className="font-display text-xs uppercase tracking-[0.14em]">
            NPO 240-957 · Cape Town, South Africa
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
