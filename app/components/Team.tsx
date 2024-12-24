import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Team1 from "../../public/team/team1.jpg"
import Team2 from "../../public/team/team2.jpg"
import Team3 from "../../public/team/team3.jpg"
import Team4 from "../../public/team/team4.jpg"
import Team5 from "../../public/team/team5.jpg"

const teamMembers = [
  {
    name: "Bonnie Green",
    role: "CEO",
    description:
      "Bonnie drives the company with a passion for excellence and a vision for success.",
    image: Team1,
    social: [
      { platform: "twitter", url: "https://twitter.com", icon: "/icons/twitter.svg" },
      { platform: "linkedin", url: "https://linkedin.com", icon: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com", icon: "/icons/github.svg" },
    ],
  },
  {
    name: "Jese Leos",
    role: "CFO",
    description:
      "Jese leads the tech team to build world-class products and solutions.",
    image: Team2,
    social: [
      { platform: "twitter", url: "https://twitter.com", icon: "/icons/twitter.svg" },
      { platform: "linkedin", url: "https://linkedin.com", icon: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com", icon: "/icons/github.svg" },
    ],
  },
  {
    name: "Jese Leos",
    role: "CTO",
    description:
      "Jese leads the tech team to build world-class products and solutions.",
    image: Team3,
    social: [
      { platform: "twitter", url: "https://twitter.com", icon: "/icons/twitter.svg" },
      { platform: "linkedin", url: "https://linkedin.com", icon: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com", icon: "/icons/github.svg" },
    ],
  },
  {
    name: "Jese Leos",
    role: "COO",
    description:
      "Jese leads the tech team to build world-class products and solutions.",
    image: Team4,
    social: [
      { platform: "twitter", url: "https://twitter.com", icon: "/icons/twitter.svg" },
      { platform: "linkedin", url: "https://linkedin.com", icon: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com", icon: "/icons/github.svg" },
    ],
  },
  {
    name: "Jese Leos",
    role: "CPO",
    description:
      "Jese leads the tech team to build world-class products and solutions.",
    image: Team5,
    social: [
      { platform: "twitter", url: "https://twitter.com", icon: "/icons/twitter.svg" },
      { platform: "linkedin", url: "https://linkedin.com", icon: "/icons/linkedin.svg" },
      { platform: "github", url: "https://github.com", icon: "/icons/github.svg" },
    ],
  },
];

export default function Team () {
  return (
    <section className="py-20 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
      <div className="flex gap-4 flex-col md:text-center">
            <div>
              <Badge variant="outline" className="text-lg font-tertiary">Team</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter text-secondaryColor font-bold mx-auto">
                Meet the talented people driving our vision forward
              </h4>
              <p className="text-lg max-w-3xl leading-relaxed tracking-tight my-4 mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe neque quia odit distinctio, eum minima doloribus! Rerum consequatur cum in quia similique ducimus dolore adipisci! Molestias deleniti dolorem harum incidunt!
              </p>
            </div>
          </div>
      </div>

      <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 container px-4 mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow p-6 dark:bg-gray-800"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="w-24 h-24 rounded-md object-cover"
            />
            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              {member.name}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {member.role}
            </span>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {member.description}
            </p>

            {/* <div className="flex justify-center mt-4 space-x-4">
              {member.social.map((social, socialIndex) => (
                <a
                  key={socialIndex}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <Image
                    src={social.icon}
                    alt={social.platform}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
