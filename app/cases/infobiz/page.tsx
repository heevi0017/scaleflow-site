import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Кейс: Инфобиз с нуля | ScaleFlow",
  description: "Как мы запустили инфобизнес с нуля и заработали $20 000 в первый запуск.",
}

export default function InfobizCasePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-20">
        <Link
          href="/#cases"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад к кейсам
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">Инфобиз с нуля</h1>
        <p className="text-xl text-white/60 mb-8">
          $20 000 в первый запуск
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {["Упаковка", "Разработка инфопродукта", "TikTok", "Reels", "Meta Ads", "Контент-маркетинг"].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 max-w-3xl">
          <p className="text-white/50 text-lg">
            Подробное описание кейса скоро будет добавлено.
          </p>
        </div>
      </div>
    </main>
  )
}
