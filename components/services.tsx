"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { AlertTriangle, TrendingDown, Shuffle, Layers, Bot, CheckCircle, User, Megaphone } from 'lucide-react'

const problems = [
  {
    icon: <TrendingDown className="w-8 h-8 text-red-400" />,
    text: "Работаешь на износ — доход не растёт",
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-orange-400" />,
    text: "Сливаешь бюджет на рекламу без результата",
  },
  {
    icon: <Shuffle className="w-8 h-8 text-yellow-400" />,
    text: "Нет системы — клиенты то есть, то нет",
  },
]

const whyUs = [
  {
    icon: <Layers className="w-8 h-8 text-blue-400" />,
    title: "Full Cycle",
    description: "Упаковка + трафик + органика",
  },
  {
    icon: <Bot className="w-8 h-8 text-purple-400" />,
    title: "Реальный AI",
    description: "Матрица смыслов, AI-агенты, аналитика",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-green-400" />,
    title: "Честность",
    description: "Тестируем гипотезы, масштабируем что работает",
  },
]

const services = [
  {
    icon: <User className="w-8 h-8 text-blue-400" />,
    title: "Упаковка личного бренда",
    description: "Позиционирование, матрица смыслов, система контента через Threads и Telegram.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-purple-400" />,
    title: "Full Cycle ведение",
    description: "Meta Ads + контент-маркетинг + органика. Полное ведение под ключ.",
  },
]

export function Services() {
  return (
    <>
      {/* Problems Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 text-balance"
            >
              Знакомо?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col items-center text-center group">
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                    {problem.icon}
                  </div>
                  <p className="text-xl font-semibold text-white/80 leading-relaxed">{problem.text}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ScaleFlow Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 text-balance"
            >
              Почему <span className="text-blue-400">ScaleFlow</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col group">
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Услуги
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col justify-between group">
                  <div>
                    <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-white/60 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="mt-8">
                    <a
                      href="https://tally.so/r/9qdRJK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors"
                    >
                      Узнать больше <div className="w-4 h-[1px] bg-current transition-all group-hover:w-8" />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
