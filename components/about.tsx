"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Обо мне
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="max-w-3xl">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="shrink-0">
                <img
                  src="/images/alex-photo.jpeg"
                  alt="Алекс"
                  className="w-28 h-28 rounded-full object-cover border-2 border-white/10"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Алекс, 20 лет</h3>
                <p className="text-white/60 leading-relaxed text-lg">
                  3 года в маркетинге. Работал с Meta Ads, e-com, инфобизом. Выгорел, попал в депрессию - долго выбирался. Теперь строю ScaleFlow чтобы помочь брендам расти системно - без хаоса и слива бюджетов.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
