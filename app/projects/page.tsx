"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { projectsData } from "@/data/home-data"

export default function ProjectsPage() {
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

      {/* Hero section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div
          className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Innovative solutions and creative implementations by ATIT members
          </motion.p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all group cursor-pointer h-full flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-xs font-semibold text-background">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary font-semibold cursor-pointer hover:bg-primary/40 transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center gap-2"
                  >
                    View Details →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-accent/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Have an Idea?</h2>
          <p className="text-muted-foreground mb-8">
            We're always looking for innovative project ideas. Collaborate with us and bring your vision to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-secondary to-primary text-primary-foreground font-semibold hover:shadow-xl hover:shadow-primary/40 transition-shadow"
          >
            Submit Your Idea
          </motion.button>
        </div>
      </section>
    </main>
  )
}
