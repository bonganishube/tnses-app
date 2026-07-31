import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Use on dark (navy) backgrounds */
  invert?: boolean;
  align?: "left" | "center";
  className?: string;
};

/**
 * The single heading treatment shared by every landing section so the
 * eyebrow / title / description rhythm stays identical down the page.
 */
export const SectionHeading = ({
  eyebrow,
  title,
  description,
  invert = false,
  align = "left",
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      "flex flex-col gap-5",
      align === "center" && "items-center text-center",
      className
    )}
  >
    <Reveal>
      <span
        className={cn("section-eyebrow", invert && "section-eyebrow-invert")}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primaryColor" />
        {eyebrow}
      </span>
    </Reveal>
    <Reveal delay={80}>
      <h2 className={cn("section-title", invert && "text-white")}>{title}</h2>
    </Reveal>
    {description ? (
      <Reveal delay={160}>
        <p
          className={cn(
            "section-subtitle",
            invert && "text-slate-300",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      </Reveal>
    ) : null}
  </div>
);

export default SectionHeading;
