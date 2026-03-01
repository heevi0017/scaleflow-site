"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { TrendingUp, DollarSign, ArrowRight } from 'lucide-react'
import Link from "next/link"

const cases = [
  {
    title: "Инфобиз с нуля",
    metric: "$20 000",
    metricLabel: "в первый запуск",
    tags: ["Упаковка", "Разработка инфопродукта", "TikTok", "Reels", "Meta Ads", "Контент-маркетинг"],
    color: "from-blue-500/20 to-cyan-500/20",
    icon: <TrendingUp className="w-6 h-6" />,
    slug: "infobiz",
  },
  {
    title: "Магазин корейской косметики (США)",
    metric: "с $30k до $120k/мес",
    metricLabel: "рост выручки",
    tags: ["E-Commerce", "Meta Ads", "Google Ads", "E-mail Marketing"],
    color: "from-purple-500/20 to-pink-500/20",
    icon: <DollarSign className="w-6 h-6" />,
    slug: "korean-cosmetics",
  },
]

export function Work() {
  return (
    <section id="cases" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Кейсы
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-md"
          >
            Реальные результаты наших клиентов.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <GlassCard className="h-full flex flex-col group">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />
                <div className="relative z-10">
                  <span className="text-sm font-medium text-white/50 mb-4 block uppercase tracking-wider">
                    {item.title}
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-white/10">
                      {item.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gradient">
                      {item.metric}
                    </h3>
                  </div>
                  <p className="text-white/60 text-lg mb-8">{item.metricLabel}</p>
                  <div className="flex flex-wrap items-center gap-3 mb-8">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/cases/${item.slug}`}
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-medium group/link"
                  >
                    Подробнее
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
