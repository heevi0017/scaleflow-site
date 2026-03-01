"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "ScaleFlow полностью изменил наш подход к маркетингу. Результаты превзошли все ожидания.",
    name: "Клиент 1",
    role: "Основатель стартапа",
  },
  {
    quote: "Системный подход и прозрачность — то, чего не хватало. Рекомендую всем, кто устал сливать бюджет.",
    name: "Клиент 2",
    role: "Владелец e-com бизнеса",
  },
  {
    quote: "За 3 месяца мы выросли в 4 раза. Лучшая инвестиция в маркетинг за всё время.",
    name: "Клиент 3",
    role: "Инфопредприниматель",
  },
]

export function Testimonials() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Отзывы
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col group">
                <Quote className="w-8 h-8 text-blue-400/50 mb-4" />
                <p className="text-white/70 leading-relaxed text-lg mb-8 flex-1">
                  {item.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center font-semibold text-white/60">
                    {item.name.charAt(item.name.length - 1)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-white/40 text-sm">{item.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
