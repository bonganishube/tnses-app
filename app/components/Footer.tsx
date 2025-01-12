import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/logo.png"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AtSign, Facebook, Instagram, Linkedin, MapPin } from "lucide-react"

type FooterItemProps = {
  text: string;
  link: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ text, link }) => {
  return (
    <li>
      <Link href={link} className="duration-200 hover:text-blue-600 dark:hover:text-blue-500">
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
      <h1 className="text-base md:text-lg font-semibold text-slate-200 dark:text-gray-100">
        {title}
      </h1>
      <ul className="text-sm md:text-base space-y-3">
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
      { id: 2, text: "About Us", link: "#about" },
      { id: 3, text: "Services", link: "#services" },
      { id: 4, text: "FAQ", link: "#faq" },
      { id: 5, text: "Team", link: "#team" },
      { id: 6, text: "Testimonials", link: "#testimonials" },
      { id: 7, text: "Contact Us", link: "#contact" },
    ]
  },
  {
    id: 2,
    title: "Services",
    items: [
      { id: 1, text: "Applied Digital Skills", link: "#services" },
      { id: 2, text: "Blueprint", link: "#services" },
      { id: 3, text: "Consultation & Mentoring", link: "#services" },
      { id: 4, text: "Recruitment & Fieldwork", link: "#services" },
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

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondaryColor dark:bg-gray-900 py-20 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="w-full text-slate-200 dark:text-gray-300 grid grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-b-gray-200 dark:border-b-gray-800">
          <div>
            <Link href="#" className="flex gap-1 items-center">
              <Image src={Logo} alt="Logo" width={30} height={30} className="rounded-[5px]" />
              <p className="font-tertiary text-base md:text-lg">Tnses</p>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin />
            <span className="text-sm md:text-base">Belhar, Pentech</span>
          </div>
          <div className="flex items-center space-x-2">
            <AtSign />
            <span className="text-sm md:text-base">info@tnses.org</span>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="">
            <Instagram />
            </Link>
            <Link href="">
            <Facebook />
            </Link>
            <Link href="">
            <Linkedin />
            </Link>
            <span className="text-sm md:text-base"></span>
          </div>
        </div>
        <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-8 py-10 text-slate-200 dark:text-gray-300 font-extralight">
          {
            footerItems.map(item => (
              <FooterBlockItem key={item.id} {...item} />
            ))
          }
          <div className="space-y-5 col-span-2 md:col-span-3 lg:col-span-1">
            <h1 className="text-lg font-semibold text-slate-200 dark:text-gray-100">
              Subscribe
            </h1>
            <p className="max-w-xl">
              Subscribe to get the Blueprint Magazine
            </p>
            <form onSubmit={undefined} className="grid w-full relative max-w-xl">
              <div className="flex flex-col gap-3 w-full relative">
                <Input type="Email" placeholder="johndoe@gmail.com" />
                <Button className="bg-primaryColor">Subscribe</Button>
              </div>
            </form>
          </div>
        </nav>
        <div className="w-full flex flex-col md:flex-row gap-4 items-center sm:justify-between py-3 border-t border-gray-200 dark:border-t-gray-800 text-slate-200 dark:text-gray-300">
          <div className="flex text-center sm:text-left sm:min-w-max font-extralight">
            <p className="text-sm md:text-base"> © 2024 TNSES, All rights reserved. </p>
          </div>
          <div className="flex justify-center sm:justify-end w-full gap-3">
            {/* Add social icons here */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
