import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto mb-20">
      <h2 className="ml-5 md:ml-0 text-3xl font-extrabold mb-4 uppercase tracking-wider">
        About
      </h2>
      <motion.div
        className="bg-white p-5 shadow-lg md:rounded-md text-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
      >
        <p>
          I'm a frontend engineer specializing in React based in Saipan, USA.
        </p>
        <p>
          I have about 4 years of professional software development experience.
        </p>
        <p>I have a degree in Computer Science.</p>
        <p>
          I create pixel-perfect, responsive web applications leveraging
          back-end services to create a full user experience.
        </p>
      </motion.div>
    </section>
  );
}
