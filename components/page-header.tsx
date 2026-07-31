import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  /** Buttons or controls pinned to the right of the title */
  actions?: React.ReactNode;
  className?: string;
};

/**
 * Standard title block for dashboard pages, so every screen opens with the
 * same "where am I / what can I do here" rhythm.
 */
export const PageHeader = ({
  title,
  description,
  actions,
  className,
}: PageHeaderProps) => (
  <div
    className={cn(
      "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
      className
    )}
  >
    <div className="space-y-1">
      <h1 className="font-secondary text-2xl tracking-[-0.01em] text-secondaryColor sm:text-3xl">
        {title}
      </h1>
      {description ? (
        <p className="text-sm text-muted-foreground">{description}</p>
      ) : null}
    </div>
    {actions ? <div className="flex shrink-0 gap-2">{actions}</div> : null}
  </div>
);

export default PageHeader;
