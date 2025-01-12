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
                  Get quoted and covered in under 10 minutes online. no
                  paperwork or waiting any more{" "}
                </p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="sm" variant="outline" className="bg-secondaryColor text-white">View More<ChevronRight /></Button>
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
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-primaryColor"><Link href="/sign-up">Sign Up</Link></AlertDialogAction>
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
                We’ve eliminated old analogue process with state-of-the art tech{" "}
              </p>
              <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="sm" variant="outline" className="bg-emerald-700 text-white">View More<ChevronRight /></Button>
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
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-primaryColor"><Link href="/sign-up">Sign Up</Link></AlertDialogAction>
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
                Every life plan policy has a built-in wealth bonus, and we
                contribute too{" "}
              </p>
              <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="sm" variant="outline" className="bg-sky-700 text-white">View More<ChevronRight /></Button>
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
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-primaryColor"><Link href="/sign-up">Sign Up</Link></AlertDialogAction>
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
                We’ve eliminated old analogue process with state-of-the art tech{" "}
              </p>
              <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="sm" variant="outline" className="bg-indigo-700 text-white">View More<ChevronRight /></Button>
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
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-primaryColor"><Link href="/sign-up">Sign Up</Link></AlertDialogAction>
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
                    <Button size="sm" variant="outline" className="bg-violet-700 text-white">View More<ChevronRight /></Button>
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
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-primaryColor"><Link href="/sign-up">Sign Up</Link></AlertDialogAction>
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
                    <Button size="sm" variant="outline" className="bg-secondaryColor text-white">View More<ChevronRight /></Button>
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
                      <AlertDialogAction className="bg-primaryColor"><Link href="/sign-up">Sign Up</Link></AlertDialogAction>
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
                    <Button size="sm" variant="outline" className="bg-emerald-700 text-white">View More<ChevronRight /></Button>
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
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-primaryColor"><Link href="/sign-up">Sign Up</Link></AlertDialogAction>
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
                    <Button size="sm" variant="outline" className="bg-sky-700 text-white">View More<ChevronRight /></Button>
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
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-primaryColor"><Link href="/sign-up">Sign Up</Link></AlertDialogAction>
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
