"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

interface WhoWeAreStat {
    label: string
    value: string
}

interface WhoWeAreData {
    title: string
    subtitle: string
    description: string
    highlights: string[]
    faculty: string
    department: string
    carouselImages: string[]
    stats: WhoWeAreStat[]
    badgeText?: string
    carouselEyebrow?: string
    carouselTitle?: string
    missionLabel?: string
    missionStatement?: string
}

interface WhoWeAreSectionProps {
    data: WhoWeAreData
}

export function WhoWeAreSection({ data }: WhoWeAreSectionProps) {
    const images = useMemo(() => data.carouselImages.filter(Boolean), [data.carouselImages])
    const [activeIndex, setActiveIndex] = useState(0)
    const badgeText = data.badgeText ?? "since 2015"
    const carouselEyebrow = data.carouselEyebrow ?? "Exploring tomorrow's ideas"
    const carouselTitle = data.carouselTitle ?? "Immersive Studios"
    const missionLabel = data.missionLabel ?? "mission"
    const missionStatement = data.missionStatement ??
        "Build compassionate technologies that move the Rajarata community forward."

    useEffect(() => {
        if (images.length <= 1) return

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length)
        }, 4500)

        return () => clearInterval(timer)
    }, [images])

    if (!data) return null

    return (
        <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-black pointer-events-none" />
            <div className="absolute -top-10 right-0 w-72 h-72 bg-secondary/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />

            <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-xs uppercase tracking-[0.3em] text-gray-300">
                        <span className="h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
                        {badgeText}
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-primary/80">{data.faculty}</p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-3">{data.title}</h2>
                        <p className="text-lg text-gray-300">{data.subtitle}</p>
                    </div>

                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                        {data.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {data.highlights.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                                <p className="text-sm text-gray-300">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                        {data.stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                                <p className="text-xs uppercase tracking-widest text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <motion.div
                        className="pt-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/about" className="inline-flex">
                            <motion.span
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-colors hover:border-white/40"
                            >
                                Explore more about us
                                <span aria-hidden className="text-lg">↗</span>
                            </motion.span>
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative aspect-4/3 rounded-4xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                        {images.length === 0 ? (
                            <div className="w-full h-full flex items-center justify-center text-gray-500">No images provided</div>
                        ) : (
                            images.map((image, index) => (
                                <motion.img
                                    key={image}
                                    src={image}
                                    alt={`ATIT culture ${index + 1}`}
                                    className="absolute inset-0 h-full w-full object-cover"
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: index === activeIndex ? 1 : 0, scale: index === activeIndex ? 1 : 1.02 }}
                                    transition={{ duration: 0.9 }}
                                    style={{ zIndex: index === activeIndex ? 2 : 1 }}
                                />
                            ))
                        )}

                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                        <div className="absolute top-6 right-6 px-4 py-3 rounded-2xl backdrop-blur-xl bg-black/40 border border-white/10 text-right">
                            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Department</p>
                            <p className="text-base font-semibold text-white">{data.department}</p>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-300">{carouselEyebrow}</p>
                                <p className="text-xl font-semibold text-white">{carouselTitle}</p>
                            </div>
                            <div className="flex gap-2">
                                {images.map((_, index) => (
                                    <span
                                        key={`dot-${index}`}
                                        className={`h-2 w-2 rounded-full transition-all ${index === activeIndex ? "bg-white scale-110" : "bg-white/40"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <motion.div
                        className="absolute -left-10 -bottom-10 hidden md:flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-5 shadow-2xl z-20"

                    >
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-200">{missionLabel}</p>
                        <p className="text-base text-white max-w-[180px]">
                            {missionStatement}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
