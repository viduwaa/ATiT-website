"use client"

import { useEffect, type ReactNode } from "react"
import Lenis from "lenis"

interface SmoothScrollProviderProps {
    children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })

        let frameId: number

        const raf = (time: number) => {
            lenis.raf(time)
            frameId = requestAnimationFrame(raf)
        }

        frameId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(frameId)
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}
