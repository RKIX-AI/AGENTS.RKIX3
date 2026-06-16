import { Menu, Scan } from 'lucide-react'

interface HeaderProps {
  onMenuOpen: () => void
  onApiSettings: () => void
}

export default function Header({ onMenuOpen, onApiSettings }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-900/80 bg-rkixDark/30 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuOpen}
          className="md:hidden p-2 text-zinc-300 hover:text-white hover:bg-zinc-900 square-flat transition-all"
        >
          <Menu className="w-5 h-5" />
        </button>
        <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 square-flat transition-all">
          <Scan className="w-[18px] h-[18px]" />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onApiSettings}
          className="px-4 py-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-900/80 border border-zinc-800 square-flat transition-all"
        >
          Mã API
        </button>
        <button className="px-5 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-600 square-flat transition-all duration-300 active:scale-95 shadow-lg shadow-blue-950/20">
          Đăng nhập
        </button>
      </div>
    </header>
  )
}
