import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Dropdown = ({ items, onMouseLeave }) => {
  return (
    <motion.div
      initial={{ opacity:  0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25 }}
      className="absolute top-full right-0 w-40 bg-white dark:bg-black rounded-md shadow-md py-2"
      onMouseLeave={onMouseLeave}
    >
      {items.map((item, idx) => (
        <Link key={idx} href={item.link}>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {item.name}
          </motion.a>
        </Link>
      ))}
    </motion.div>
  );
};

export default Dropdown;