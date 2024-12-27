import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/logo.png"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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

const footerBlocks = [
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
    title: "Products",
    items: [
      { id: 1, text: "Unify Tailwind", link: "#" },
      { id: 2, text: "Unify Uno", link: "#" },
      { id: 3, text: "Tailset Builder", link: "#" },
    ]
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondaryColor dark:bg-gray-900 py-20 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="w-full text-slate-200 dark:text-gray-300 grid grid-cols-2 lg:grid-cols-4 gap-8 pb-4 border-b border-b-gray-200 dark:border-b-gray-800">
          <div>
            <Link href="#" className="flex gap-1 items-center">
              <Image src={Logo} alt="Logo" width={25} height={25} className="rounded-[5px]" />
              <p className="font-tertiary text-base">Tnses</p>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className="text-sm md:text-base">Belhar, Pentech</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
            </svg>
            <span className="text-sm md:text-base">+243 ......</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 md:w-6 md:h-6">
              <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
            </svg>
            <span className="text-sm md:text-base">info@tnses.org</span>
          </div>
        </div>
        <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-8 py-10 text-slate-200 dark:text-gray-300 font-extralight">
          {
            footerBlocks.map(footerBlock => (
              <FooterBlockItem key={footerBlock.id} {...footerBlock} />
            ))
          }
          <div className="space-y-5 col-span-2 md:col-span-3 lg:col-span-1">
            <h1 className="text-lg font-semibold text-slate-200 dark:text-gray-100">
              Subscribe to our newsletter
            </h1>
            <p className="max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis ex temporibus
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
            <p className="text-sm md:text-base"> © 2024 TNSES. All rights reserved </p>
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
