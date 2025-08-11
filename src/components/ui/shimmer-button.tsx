import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";

interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 61, 61, 0.7),rgba(255, 255, 255, 0))",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            "--shimmer-color": shimmerColor,
            "--shimmer-size": shimmerSize,
            "--shimmer-duration": shimmerDuration,
            "--border-radius": borderRadius,
            "--background": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [border-radius:var(--border-radius)] [background:var(--background)]",
          "duration-300 ease-in-out hover:scale-105",
          className
        )}
        {...props}
        ref={ref}
      >
        <div
          className={cn(
            "absolute inset-0 z-0 bg-[linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.2)_100%)]"
          )}
        />

        {/* spark container */}
        <div
          className={cn(
            "absolute inset-[-100%] z-20 block h-[200%] w-[200%] [animation-duration:var(--shimmer-duration)] [animation-iteration-count:infinite] [animation-name:shimmer] [animation-timing-function:linear]",
            "bg-[linear-gradient(110deg,transparent,45%,var(--shimmer-color),55%,transparent)]",
            "group-hover:bg-[linear-gradient(110deg,transparent,40%,var(--shimmer-color),60%,transparent)]"
          )}
        />

        {/* backdrop */}
        <div
          className={cn(
            "absolute inset-[var(--shimmer-size)] z-10 rounded-[calc(var(--border-radius)-var(--shimmer-size))] [background:var(--background)]"
          )}
        />

        {/* content */}
        <div className="relative z-30">{children}</div>
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };
