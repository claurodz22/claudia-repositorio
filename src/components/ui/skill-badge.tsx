"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const SkillBadge = ({
  name,
  color,
  delay = 0,
}: {
  name: string
  color: string
  delay?: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ scale: 1.1 }}
      className={cn("px-4 py-2 rounded-full text-white font-medium shadow-lg", color)}
    >
      {name}
    </motion.div>
  )
}

