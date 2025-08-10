"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <Navbar />

      {/* Decorative Borders */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </div>

      <div className="px-4 py-10 md:py-20">
        {/* Animated Heading */}
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold text-neutral-900 md:text-5xl lg:text-7xl dark:text-neutral-100">
          {"Your stories, beautifully told"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Share your thoughts, ideas, and creativity with the world. Start your
          blogging journey today and connect with readers everywhere.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/loginSignup">
            <button className="w-60 transform rounded-lg bg-indigo-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400">
              Login
            </button>
          </Link>

          <Link href="/loginSignup">
            <button className="w-60 transform rounded-lg border border-neutral-300 bg-white px-6 py-2 font-medium text-neutral-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800">
              Explore Blogs
            </button>
          </Link>
        </motion.div>

        {/* Image preview */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-neutral-300 dark:border-neutral-700">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="Blogging concept"
              className="aspect-[16/9] h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl text-neutral-900 dark:text-neutral-100">
          BlogSphere
        </h1>
      </div>
      <Link href="/loginSignup">
        <button className="w-24 transform rounded-lg bg-indigo-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 md:w-32 dark:bg-indigo-500 dark:hover:bg-indigo-400">
          Login
        </button>
      </Link>
    </nav>
  );
};
