import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative pt-16 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between pt-4 text-sm text-white/40">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-lg font-bold tracking-tighter text-white/60">
              Scale<span className="text-blue-400">Flow</span>
            </Link>
            <span>by heevikscales</span>
          </div>
          <p className="mt-4 md:mt-0">&copy; 2026 ScaleFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
