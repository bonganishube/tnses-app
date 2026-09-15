import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  /** Usually a button pointing at the way out of the empty state */
  action?: React.ReactNode;
  className?: string;
};

/**
 * Replaces the bare "No courses found" strings, an empty screen should say
 * what is missing and offer the next step.
 */
export const EmptyState = ({
  icon: Icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) => (
  <div
    className={cn(
      "flex flex-col items-center justify-center rounded-2xl border border-dashed border-secondaryColor/15 bg-white/60 px-6 py-16 text-center",
      className
    )}
  >
    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondaryColor/5 text-secondaryColor">
      <Icon className="h-5 w-5" />
    </span>
    <p className="font-medium text-secondaryColor">{title}</p>
    {description ? (
      <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">
        {description}
      </p>
    ) : null}
    {action ? <div className="mt-6">{action}</div> : null}
  </div>
);

export default EmptyState;
