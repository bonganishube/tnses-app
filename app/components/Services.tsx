import { Badge } from "@/components/ui/badge";
import React from "react";
import Image1 from "@/public/services/image1.jpg";
import Image2 from "@/public/services/image2.jpg";
import Image from "next/image";
import {
  AppWindow,
  BookOpenText,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  FileUser,
  MailCheck,
  TvMinimalPlay,
  University,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-20" id="services">
      <div className="mx-auto container px-4">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline" className="text-lg font-tertiary">
              {" "}
              Services
            </Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left text-secondaryColor font-bold">
              Why choose us
            </h4>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-left my-4">
              Explore the key services we provide to support our mission and
              make a real difference in the community.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 mx-auto">
          <div className="relative w-full h-auto md:col-span-2">
            <div className="bg-secondaryColor rounded-lg flex justify-between flex-row flex-wrap">
              <div className="p-5  xl:p-8 w-full md:w-1/2 ">
                <div className="block text-white">
                  <span className="rounded-md bg-[#1d2f61] dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex shadow-md">
                    <TvMinimalPlay />
                  </span>
                </div>
                <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                  Applied digital skills
                </h3>
                <p className="text-xs font-normal text-gray-300 w-full mb-8 xl:w-64">
                Our Applied Digital Skills service offers tailored training to boost your career with essential digital tools.{" "}
                </p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-secondaryColor text-white"
                    >
                      View More
                      <ChevronRight />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        <span className="rounded-md w-max p-3 flex shadow-md mb-4">
                          <TvMinimalPlay />
                        </span>
                        Applied digital skills
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Our Applied Digital Skills service is designed to equip
                        you with practical, in-demand digital skills to thrive
                        in today’s tech-driven job market. We offer tailored
                        training in essential tools and platforms, from data
                        analysis and project management to digital marketing and
                        software proficiency. Whether you're looking to enhance
                        your existing skill set or learn new, job-relevant
                        abilities, our expert-led courses ensure you're ready to
                        meet the challenges of your career with confidence and
                        competence.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-primaryColor">
                        <Link href="/sign-up">Sign Up</Link>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <div className="relative hidden h-auto md:w-1/2 md:block">
                <Image
                  src={Image1}
                  alt="Header tailwind Section"
                  className="h-full ml-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full h-auto">
            <div className="bg-emerald-700 rounded-lg p-5  xl:p-8 h-full">
              <div className="block text-white">
                <span className="rounded-md bg-emerald-600 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex shadow-md">
                  <BookOpenText />
                </span>
              </div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                Blueprint magazine
              </h3>
              <p className="text-xs font-normal text-white mb-8"> 
              Blueprint Magazine delivers expert insights, industry trends, and career advice to inspire professional growth and development.{" "}
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-emerald-700 text-white"
                  >
                    View More
                    <ChevronRight />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      <span className="rounded-md w-max p-3 flex shadow-md mb-4">
                        <BookOpenText />
                      </span>
                      Blueprint magazine
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                    Blueprint Magazine is a comprehensive resource designed to inform, inspire, and empower professionals across various industries. With a focus on career development, industry insights, and personal growth, the magazine features expert interviews, in-depth articles, and thought-provoking content. Whether you're seeking the latest trends, tips on skill development, or advice on navigating the ever-evolving job market, Blueprint Magazine is your go-to source for staying ahead of the curve. Our carefully curated content aims to help you make informed decisions, refine your professional strategies, and ultimately, achieve greater success in your career.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-primaryColor">
                      <Link href="/sign-up">Sign Up</Link>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <div className="relative w-full h-auto">
            <div className="bg-sky-700 rounded-lg p-5 xl:p-8 h-full">
              <div className="block text-white">
                <span className="rounded-md bg-sky-600 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex shadow-md">
                  <BriefcaseBusiness />
                </span>
              </div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                Monitoring & evaluation
              </h3>
              <p className="text-xs font-normal text-white mb-8">
              Our Monitoring & Evaluation service tracks progress, measures impact, and provides insights to enhance project outcomes.{" "}
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-sky-700 text-white"
                  >
                    View More
                    <ChevronRight />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      <span className="rounded-md w-max p-3 flex shadow-md mb-4">
                        <BriefcaseBusiness />
                      </span>
                      Monitoring & evaluation
                    </AlertDialogTitle>
                    <AlertDialogDescription> 
                    Our Monitoring & Evaluation service is designed to help organizations measure the effectiveness and impact of their projects and initiatives. By systematically tracking progress, assessing outcomes, and analyzing data, we provide valuable insights that drive informed decision-making and continuous improvement. We work closely with clients to develop customized M&E frameworks, ensuring that both qualitative and quantitative indicators are effectively captured. Whether you're focused on enhancing project performance, ensuring accountability, or refining strategies for future success, our service offers the tools and expertise needed to optimize results, demonstrate impact, and foster long-term growth.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-primaryColor">
                      <Link href="/sign-up">Sign Up</Link>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>

          <div className="relative w-full h-auto">
            <div className="bg-indigo-700 rounded-lg p-5  xl:p-8 h-full">
              <div className="block text-white">
                <span className="rounded-md bg-indigo-600 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex shadow-md">
                  <Building2 />
                </span>
              </div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                Recruitment & training
              </h3>
              <p className="text-xs font-normal text-white mb-8">
              Our Recruitment & Training service attracts top talent and develops essential skills to drive your team's success.{" "}
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-indigo-700 text-white"
                  >
                    View More
                    <ChevronRight />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      <span className="rounded-md w-max p-3 flex shadow-md mb-4">
                        <Building2 />
                      </span>
                      Recruitment & training
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                    Our Recruitment & Training service is designed to help organizations build high-performing teams by attracting top talent and providing tailored training to enhance skills and productivity. We work closely with clients to understand their specific hiring needs, ensuring the right candidates are selected to fit both the role and the company culture. Beyond recruitment, we offer customized training programs aimed at improving employee performance, leadership abilities, and overall team effectiveness. Whether you're looking to fill critical positions or invest in the growth of your current workforce, our comprehensive approach ensures that your team is well-equipped to meet both short-term objectives and long-term organizational goals.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-primaryColor">
                      <Link href="/sign-up">Sign Up</Link>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <div className="relative w-full h-auto">
            <div className="bg-violet-700 rounded-lg p-5 xl:p-8 h-full">
              <div className="block text-white">
                <span className="rounded-md bg-violet-600 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex shadow-md">
                  <FileUser />
                </span>
              </div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                CV write-up assistance
              </h3>
              <p className="text-xs font-normal text-white mb-8">
                Every life plan policy has a built-in wealth bonus, and we
                contribute too{" "}
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-violet-700 text-white"
                  >
                    View More
                    <ChevronRight />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      <span className="rounded-md w-max p-3 flex shadow-md mb-4">
                        <FileUser />
                      </span>
                      CV write-up assistance
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-primaryColor">
                      <Link href="/sign-up">Sign Up</Link>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <div className="relative w-full h-auto md:col-span-2">
            <div className="bg-secondaryColor rounded-lg flex justify-between flex-row flex-wrap">
              <div className="p-5  xl:p-8 w-full md:w-1/2 ">
                <div className="block text-white">
                  <span className="rounded-md bg-[#1d2f61] dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex shadow-md">
                    <University />
                  </span>
                </div>
                <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                  College & university application support
                </h3>
                <p className="text-xs font-normal text-gray-300 w-full mb-8 xl:w-64">
                  Get quoted and covered in under 10 minutes online. no
                  paperwork or waiting any more{" "}
                </p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-secondaryColor text-white"
                    >
                      View More
                      <ChevronRight />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        <span className="rounded-md w-max p-3 flex shadow-md mb-4">
                          <University />
                        </span>
                        College & university application support
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-primaryColor">
                        <Link href="/sign-up">Sign Up</Link>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <div className="relative hidden h-auto md:w-1/2 md:block">
                <Image
                  src={Image2}
                  alt="Header tailwind Section"
                  className="h-full ml-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full h-auto">
            <div className="bg-emerald-700 rounded-lg p-5 xl:p-8 h-full">
              <div className="block text-white">
                <span className="rounded-md bg-emerald-600 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex shadow-md">
                  <AppWindow />
                </span>
              </div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                Scholarship & bursary application support
              </h3>
              <p className="text-xs font-normal text-white mb-8">
                Every life plan policy has a built-in wealth bonus, and we
                contribute too{" "}
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-emerald-700 text-white"
                  >
                    View More
                    <ChevronRight />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      <span className="rounded-md w-max p-3 flex shadow-md mb-4">
                        <AppWindow />
                      </span>
                      Scholarship & bursary application support
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-primaryColor">
                      <Link href="/sign-up">Sign Up</Link>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <div className="relative w-full h-auto">
            <div className="bg-sky-700 rounded-lg p-5 xl:p-8 h-full">
              <div className="block text-white">
                <span className="rounded-md bg-sky-600 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex shadow-md">
                  <MailCheck />
                </span>
              </div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                Job readiness & interview guidance
              </h3>
              <p className="text-xs font-normal text-white mb-8">
                Every life plan policy has a built-in wealth bonus, and we
                contribute too{" "}
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-sky-700 text-white"
                  >
                    View More
                    <ChevronRight />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      <span className="rounded-md w-max p-3 flex shadow-md mb-4">
                        <MailCheck />
                      </span>
                      Job readiness & interview guidance
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-primaryColor">
                      <Link href="/sign-up">Sign Up</Link>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
