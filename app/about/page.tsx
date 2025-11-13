"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { aboutData, timelineData } from "@/data/additional-data"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent"
          >
            About ATIT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Pioneering innovation and excellence at Rajarata University
          </motion.p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl bg-card border border-border/50 p-8 hover:border-secondary/50 transition-all"
            >
              <h2 className="text-2xl font-bold mb-4 text-secondary">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">{aboutData.mission}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl bg-card border border-border/50 p-8 hover:border-primary/50 transition-all"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">{aboutData.vision}</p>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
            <motion.div
              className="grid md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {aboutData.values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50 p-6 hover:border-accent/50 transition-all"
                >
                  <h3 className="text-lg font-bold mb-2 text-accent">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div
          className="absolute -bottom-40 left-0 w-96 h-96 bg-gradient-to-tr from-accent/15 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex gap-6 ${index % 2 === 1 ? "flex-row-reverse md:flex-row-reverse" : "md:flex-row"}`}
              >
                <div className="flex-1 rounded-xl bg-card border border-border/50 p-6 hover:border-secondary/50 transition-all">
                  <p className="text-secondary font-bold mb-2">{item.year}</p>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="hidden md:flex items-center justify-center w-12">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-secondary to-primary ring-4 ring-background" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
