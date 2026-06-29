import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  center = false,
  light = false,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        center ? "items-center text-center mx-auto" : "items-start"
      )}
    >
      {badge && (
        <Badge variant={light ? "black" : "emerald"}>{badge}</Badge>
      )}
      <h2
        className={cn(
          "heading-md",
          light ? "text-white" : "text-[#09090b] dark:text-white"
        )}
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg max-w-2xl",
            light ? "text-white/80" : "text-[#71717a]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
