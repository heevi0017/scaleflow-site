"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export default function KoreanCosmeticsCasePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        {/* Back link */}
        <Link
          href="/#cases"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад к кейсам
        </Link>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-balance"
        >
          Магазин корейской косметики на $120,000
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-white/60 mb-8"
        >
          E-Commerce / Beauty / USA
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {["E-Commerce", "Meta Ads", "Google Ads", "E-mail Marketing"].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Key Results */}
        <section className="mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
            className="text-3xl font-bold mb-8"
          >
            Что было сделано за 4 месяца
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "$120,360", label: "Доход с рекламы" },
              { value: "$24,550", label: "Сумма рекламных трат" },
              { value: "463%", label: "Средний ROAS" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={i + 1}
              >
                <GlassCard className="p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-white/50 text-sm">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Screenshots - GA */}
        <section className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
            className="space-y-6"
          >
            <div className="glass rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1107-lju19nR9QWboH1Y53QEraVgAyYu1hV.jpeg"
                alt="Google Analytics - источники трафика и конверсии"
                width={1200}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="glass rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1108-snuOLWfLXGiyGT0ofqT2tNfiNjziJT.jpeg"
                alt="Meta Ads Manager - результаты рекламных кампаний"
                width={1200}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </section>

        {/* About the project */}
        <section className="mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
            className="text-3xl font-bold mb-8"
          >
            Немного детальнее про проект
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
          >
            <GlassCard className="p-8 md:p-10 space-y-6">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-white/50 text-sm">ГЕО</span>
                  <span className="font-semibold">USA</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white/50 text-sm">Ниша</span>
                  <span className="font-semibold">Beauty</span>
                </div>
              </div>

              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  <strong className="text-white">Про компанию</strong>
                </p>
                <p>
                  Компания продает брендовую корейскую косметику на US гео.
                </p>
                <p>
                  Владелец магазина пришел ко мне через холодный трафик за помощью в агрессивном масштабировании, рассказала про свой неудачный опыт работы с маркетологами, но все же решилась на еще один отважный шаг.
                </p>
                <p>
                  Я сразу предложил перенести магазин на Shopify и объяснил все плюсы этой платформы.
                </p>
                <p>
                  После подтверждения мы перенесли магазин на Shopify и были готовы к запуску рекламы.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </section>

        {/* Strategy - Funnel */}
        <section className="mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
            className="text-3xl font-bold mb-8"
          >
            Стратегия
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
          >
            <GlassCard className="p-8 md:p-10 space-y-6">
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  <strong className="text-white">Рекламная воронка</strong>
                </p>
                <p>
                  Качественная корейская косметика и средства ухода за телом. Продукты преимущественно для женской аудитории.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7bb64501-afc9-403e-b9be-38b1c346957e-1wQSRt9OoszIh1ADpFffHmtglFWzdY.png"
                  alt="Рекламная воронка - ToF, аудитории, кампании, коммуникация"
                  width={1500}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </GlassCard>
          </motion.div>
        </section>

        {/* Unit Economics */}
        <section className="mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
            className="text-3xl font-bold mb-8"
          >
            Юнит-экономика
          </motion.h2>

          <div className="space-y-6">
            {/* Month 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={1}
            >
              <GlassCard className="p-6 md:p-8">
                <h3 className="text-lg font-semibold mb-4 text-white/70">Месяц 1</h3>
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6fac044e-b70f-4026-95f2-8f8147427b48-o7mjnIAzOyWd3pBizNT9k1uY6fySoc.png"
                    alt="Юнит-экономика месяц 1 - UAc 21314, CR 0.30%, ROAS 144%"
                    width={900}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6">
                  {[
                    { label: "UAc", value: "21,314" },
                    { label: "CR Rate", value: "0.30%" },
                    { label: "Buyers", value: "64" },
                    { label: "Ad Spend", value: "$5,035" },
                    { label: "ROAS", value: "144%" },
                    { label: "CRR", value: "96.96%" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <p className="text-white/40 text-xs mb-1">{item.label}</p>
                      <p className="font-semibold text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Month 4 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={2}
            >
              <GlassCard className="p-6 md:p-8">
                <h3 className="text-lg font-semibold mb-4 text-white/70">Месяц 4</h3>
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/91e08e36-b1e1-45eb-8809-775c803168cb-5EJ49Q7s7l7rgasOl34zo6kIJXNypa.png"
                    alt="Юнит-экономика месяц 4 - UAc 52559, CR 0.70%, ROAS 463%"
                    width={900}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6">
                  {[
                    { label: "UAc", value: "52,559" },
                    { label: "CR Rate", value: "0.70%" },
                    { label: "Buyers", value: "368" },
                    { label: "Ad Spend", value: "$24,600" },
                    { label: "ROAS", value: "463%" },
                    { label: "CRR", value: "22.49%" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <p className="text-white/40 text-xs mb-1">{item.label}</p>
                      <p className="font-semibold text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        {/* Email Marketing */}
        <section className="mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
            className="text-3xl font-bold mb-8"
          >
            E-mail Marketing
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
          >
            <GlassCard className="p-8 md:p-10 space-y-6">
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Настроены 5 автоматических email-потоков для увеличения повторных покупок и лояльности:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li><strong className="text-white">Customer Win-back Flow</strong> - возврат клиентов, которые не покупали 1-3 месяца</li>
                  <li><strong className="text-white">Shipping Confirmation Flow</strong> - подтверждение отправки для повышения лояльности</li>
                  <li><strong className="text-white">Order Confirmation Flow</strong> - подтверждение заказа</li>
                  <li><strong className="text-white">Abandoned Cart Flow</strong> - возврат брошенных корзин</li>
                  <li><strong className="text-white">Welcome Series Flow</strong> - приветственная серия с промокодом</li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6f745c3c-47f0-46fc-a578-85fb94eeadb0-1J9bPqpCW5TtPyKYVmZee97aErHfBf.png"
                  alt="Email flow диаграммы - Win-back, Shipping, Order, Abandoned Cart, Welcome"
                  width={1500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </GlassCard>
          </motion.div>
        </section>

        {/* Hypothesis Testing */}
        <section className="mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
            className="text-3xl font-bold mb-8"
          >
            Тестирование гипотез
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
          >
            <GlassCard className="p-8 md:p-10 space-y-6">
              <p className="text-white/80 leading-relaxed">
                Постоянное тестирование рекламных гипотез позволило нам систематически улучшать показатели. Каждая гипотеза фиксировалась, тестировалась и оценивалась.
              </p>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_36B82A5624CC-1-htRmdIZDdvfQq2ZuRJvxZks6RAD6IY.jpeg"
                  alt="Таблица тестирования гипотез - время, гипотеза, оценка, комментарий"
                  width={1500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </GlassCard>
          </motion.div>
        </section>

        {/* CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="text-center"
        >
          <GlassCard className="p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Хотите такие же результаты?</h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Обсудим ваш проект и найдём точки роста
            </p>
            <a
              href="https://tally.so/r/9qdRJK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-white/90 transition-all hover:scale-105"
            >
              Обсудить проект
            </a>
          </GlassCard>
        </motion.section>
      </div>
    </main>
  )
}
