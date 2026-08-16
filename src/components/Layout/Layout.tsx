import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

interface LayoutProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutVariants> {
  children: React.ReactNode;
}

const layoutVariants = cva("flex w-full", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
    gap: {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-8",
    },
  },
  defaultVariants: {
    direction: "column",
    align: "start",
    gap: "md",
  },
});

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, direction, align, gap, children, ...props }, ref) => {

    

    return (
      <div
        ref={ref}
        className={cn(
          layoutVariants({
            direction,
            align,
            gap,
            className,
          })
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Layout.displayName = "Layout";

export { Layout, layoutVariants };
