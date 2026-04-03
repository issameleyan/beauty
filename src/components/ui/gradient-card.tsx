import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative flex flex-col justify-between h-full w-full overflow-hidden rounded-2xl p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg",
  {
    variants: {
      gradient: {
        rose: "bg-gradient-to-br from-rose-50 to-pink-100/50",
        pink: "bg-gradient-to-br from-pink-50 to-rose-100/50",
        amber: "bg-gradient-to-br from-amber-50 to-yellow-100/50",
        purple: "bg-gradient-to-br from-purple-50 to-pink-100/50",
        teal: "bg-gradient-to-br from-teal-50 to-emerald-100/50",
        sky: "bg-gradient-to-br from-sky-50 to-cyan-100/50",
      },
    },
    defaultVariants: {
      gradient: "rose",
    },
  }
);

export interface GradientCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  badgeText: string;
  badgeColor: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageUrl: string;
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  ({ className, gradient, badgeText, badgeColor, title, description, ctaText, ctaHref, imageUrl, ...props }, ref) => {
    const imageAnimation = {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.1, rotate: 3 },
    };

    return (
      <motion.div initial="rest" whileHover="hover" animate="rest">
        <div
          ref={ref}
          className={cn(cardVariants({ gradient }), className)}
        >
          <motion.img
            variants={imageAnimation}
            transition={{ duration: 0.4, ease: "easeOut" as const }}
            src={imageUrl}
            alt={title}
            className="absolute -right-4 -bottom-4 h-40 w-40 object-contain opacity-20"
          />

          <div className="relative z-10 flex flex-col gap-4">
            <span
              className="inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white"
              style={{ backgroundColor: badgeColor }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              {badgeText}
            </span>

            <div>
              <h3 className="text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>

            <a
              href={ctaHref}
              className="mt-2 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
);
GradientCard.displayName = "GradientCard";

export { GradientCard, cardVariants };
