interface MiniRkxMenuProps {
  isOpen: boolean
  onClose: () => void
  onMenuCommand: (command: string) => void
  onNavigate?: (page: string) => void
}

const menuItems = [
  { icon: '🏠', label: 'Trang chủ', command: 'home', page: 'home' },
  { icon: '📚', label: 'Thư viện', command: 'library', page: 'library' },
  { icon: '📂', label: 'Dự án', command: 'projects', page: 'projects' },
  { icon: '⚙️', label: 'Ứng dụng', command: 'apps', page: 'apps' },
  { icon: '💻', label: 'Codex', command: 'codex', page: 'codex' },
  { icon: '🔧', label: 'Cài đặt', command: 'settings', page: 'settings' },
]

export default function MiniRkxMenu({ isOpen, onClose, onMenuCommand, onNavigate }: MiniRkxMenuProps) {
  const handleItemClick = (command: string, page: string) => {
    onMenuCommand(command)
    if (onNavigate) {
      onNavigate(page)
    }
    onClose()
  }

  return (
    <div className={`minirkx-menu ${isOpen ? 'open' : ''}`}>
      <div className="minirkx-menu-backdrop" onClick={onClose} />

      <div className="minirkx-honeycomb">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="minirkx-hex-item"
            onClick={() => handleItemClick(item.command, item.page)}
          >
            <div className="minirkx-hex-content">
              <div className="minirkx-hex-icon">{item.icon}</div>
              <div className="minirkx-hex-label">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
