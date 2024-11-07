"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-full w-full items-center justify-center bg-zinc-50 dark:bg-zinc-900 transition-colors",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
              [--white-gradient:repeating-linear-gradient(100deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_7%,rgba(255,255,255,0)_10%,rgba(255,255,255,0)_12%,rgba(255,255,255,0.05)_16%)]
              [--dark-gradient:repeating-linear-gradient(100deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.1)_7%,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_12%,rgba(0,0,0,0.1)_16%)]
              [--aurora:repeating-linear-gradient(100deg,rgba(100, 149, 237, 0.4)_10%,rgba(75, 0, 130, 0.4)_15%,rgba(30, 144, 255, 0.4)_20%,rgba(138, 43, 226, 0.4)_25%,rgba(65, 105, 225, 0.4)_30%)]
              [background-image:var(--white-gradient),var(--aurora)]
              dark:[background-image:var(--dark-gradient),var(--aurora)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              filter blur-[10px] mix-blend-multiply opacity-75 dark:opacity-50
              after:content-[""] after:absolute after:inset-0
              after:[background-image:var(--white-gradient),var(--aurora)]
              after:dark:[background-image:var(--dark-gradient),var(--aurora)]
              after:[background-size:200%,_100%]
              after:animate-aurora after:[background-attachment:fixed]
              after:mix-blend-multiply pointer-events-none
              absolute -inset-[10px] opacity-50 will-change-transform
            `,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,rgba(0,0,0,0)_70%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};
