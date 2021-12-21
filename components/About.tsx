import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto mb-20 ">
      <h2 className="text-5xl tracking-tight font-extrabold mb-4">About</h2>
      <motion.div
        className="bg-white p-5 shadow-lg rounded-md text-xl"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
      >
        <p>
          Growing up, I loved puzzles and math was effortless. To me, programs
          are just like puzzles waiting to be solved. My ultimate goal is to
          impact the world in a positive way and make the most of the future,
          which is why I’m passionate about technology and software development.
        </p>
        <p>
          Now, I’m a front-end engineer with 4+ years of software development
          experience who knows how to leverage back-end services to create a
          full user experience.
        </p>
        <p>
          My competitive nature drives me to be the best at what I do. My
          personal philosophy favors simple and intuitive application design and
          implementation. On my free time, I enjoy playing soccer and video
          gaming.
        </p>
      </motion.div>
    </section>
  );
}
