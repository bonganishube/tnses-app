import { Badge } from "@/components/ui/badge";
import { Eye, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 lg:py-40 bg-tertiaryColor" id="about">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row gap-16">
        <div className="flex md:flex-1">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            className="w-full h-[400px] md:h-full object-cover rounded-lg aspect-video hover:aspect-square"
          ></iframe>
        </div>
        <div className="lg:w-1/2 space-y-12 text-gray-700 dark:text-gray-300">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline" className="text-lg font-tertiary">
                About
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left text-secondaryColor font-bold">
                Making the world a better place
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-left my-4">
              The National Socio-Economic Support (TNSES) is a registered Nonprofit Organisation (NPO 240-957) founded in 2019, based in Cape Town, South Africa. We are a team of passionate individuals committed to making a positive impact. Through collaboration and dedication, we work to create meaningful change and support those in need.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-6 p-4 rounded-md bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900">
              <span className="rounded-md bg-secondaryColor dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex shadow-md">
                <Sparkles className="h-6 w-6" />
              </span>
              <h2 className="font-semibold text-xl text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p>To provide vital support and resourses that empower individuals and strengthen communities</p>
            </div>
            <div className="space-y-6 p-4 rounded- bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-900">
              <span className="rounded-md bg-secondaryColor dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex shadow-md">
                <Eye className="h-6 w-6" />
              </span>
              <h2 className="font-semibold text-xl text-gray-900 dark:text-white">
                Our Vision
              </h2>
              <p>A future where everyone has the opportunity to thrive and contribute to a stronger, united society.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
