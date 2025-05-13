import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-12  md:grid-cols-3 md:grid-rows-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-6 rounded-2xl border border-neutral-300 bg-white p-6 transition duration-300 hover:shadow-2xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {header}
      <div className="transition duration-300 group-hover/bento:translate-x-3">
        {icon}
        <div className="mt-4 mb-3 font-sans text-2xl font-extrabold text-neutral-700 dark:text-neutral-100">
          {title}
        </div>
        <div className="font-sans text-lg font-medium text-neutral-700 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
