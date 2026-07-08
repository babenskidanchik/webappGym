import * as React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = {
  default:
    "bg-black text-white hover:bg-neutral-800 px-4 py-2 rounded-xl transition",
  outline:
    "border border-neutral-300 px-4 py-2 rounded-xl hover:bg-neutral-100 transition",
};

export function Button({ className, variant = "default", ...props }) {
  return (
    <button
      className={cn(buttonVariants[variant], className)}
      {...props}
    />
  );
}