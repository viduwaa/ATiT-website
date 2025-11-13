"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { eventsData } from "@/data/home-data"

type EventCategory = "All" | "Workshop" | "Competition" | "Seminar"

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>("All")

  const categories: EventCategory[] = ["All", "Workshop", "Competition", "Seminar"]

  const filteredEvents =
    selectedCategory === "All" ? eventsData : eventsData.filter((event) => event.category === selectedCategory)

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
          className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent"
          >
            Events & Workshops
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Explore our upcoming and past events designed to inspire, educate, and innovate
          </motion.p>
        </div>
      </section>

      {/* Filter buttons */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-secondary to-primary text-primary-foreground shadow-lg shadow-primary/40"
                    : "bg-card border border-border/50 text-foreground hover:border-secondary/50"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Events grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="rounded-xl overflow-hidden bg-card border border-border/50 hover:border-secondary/50 transition-all group cursor-pointer h-full flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm text-xs font-semibold text-background">
                        {event.category}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-secondary font-semibold mb-3">{event.date}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{event.description}</p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="mt-4 text-sm font-semibold text-secondary hover:text-accent transition-colors flex items-center gap-2"
                    >
                      Register Now →
                    </motion.button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No events found in this category.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
