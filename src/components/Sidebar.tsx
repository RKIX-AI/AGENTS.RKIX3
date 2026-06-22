import { X, MessageSquare, Search, Folder, Layout, Terminal, MoreHorizontal } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  onMenuCommand: (command: string) => void
}

export default function Sidebar({ isOpen, onClose, onMenuCommand }: SidebarProps) {
  const menuItems = [
    { icon: Search, label: 'Tìm kiếm đoạn chat', command: 'Tìm kiếm' },
    { icon: null, label: 'Thư viện', command: 'Thư viện', customIcon: '///\\' },
    { icon: Folder, label: 'Dự án', command: 'Tạo dự án', showPlus: true },
    { icon: Layout, label: 'Ứng dụng', command: 'Ứng dụng' },
    { icon: Terminal, label: 'Codex', command: 'Codex', showArrow: true },
    { icon: MoreHorizontal, label: 'Thêm', command: 'Thêm' },
  ]

  return (
    <>
      <aside className={`
        fixed inset-y-0 left-0 w-[270px] bg-rkixSidebar border-r border-zinc-900/60 
        p-4 flex flex-col justify-between transform transition-transform duration-300 
        ease-out z-50 backdrop-blur-xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <div className="w-[170px] h-[45px] cursor-pointer flex items-center justify-start overflow-hidden">
              <div className="text-lg font-bold text-rkixLightBlue drop-shadow-[0_0_12px_rgba(0,210,255,0.35)]">
                RKIX3
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-500 hover:text-white md:hidden hover:bg-zinc-900 square-flat transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* New Chat Button */}
          <button
            onClick={() => onMenuCommand('Đoạn chat mới')}
            className="w-full flex items-center gap-3 px-4 py-3 bg-[#081326] hover:bg-[#0d1f3d] border border-blue-900/80 text-white square-flat text-xs font-semibold transition-all"
          >
            <MessageSquare className="w-4.5 h-4.5 text-blue-500" />
            <span>Đoạn chat mới</span>
          </button>

          {/* Menu Items */}
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.command}
                onClick={() => onMenuCommand(item.command)}
                className="w-full flex items-center justify-between px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 square-flat text-xs font-medium text-left transition-all"
              >
                <div className="flex items-center gap-3.5">
                  {item.customIcon ? (
                    <div className="flex gap-0.5 text-zinc-500 font-bold text-xs select-none">
                      {item.customIcon.split('').map((char, i) => (
                        <span key={i}>{char}</span>
                      ))}
                    </div>
                  ) : item.icon ? (
                    <item.icon className="w-4.5 h-4.5 text-zinc-500" />
                  ) : null}
                  <span>{item.label}</span>
                </div>
                {item.showPlus && <span className="text-zinc-600">+</span>}
                {item.showArrow && <span className="text-zinc-600">↗</span>}
              </button>
            ))}
          </nav>
        </div>

        {/* Gán dây */}
        <div className="text-[11px] text-zinc-600 font-medium">
          Gán dây
        </div>
      </aside>
    </>
  )
}
