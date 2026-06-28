import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  scale?: number;
};

export const TiltCard = ({
  children,
  className,
  scale = 1.02,
  ...props
}: TiltCardProps & React.ComponentPropsWithoutRef<typeof motion.div>) => {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn("transition-all duration-300", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
export default TiltCard;
