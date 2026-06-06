interface MiniRkxMenuProps {
  isOpen: boolean
  onClose: () => void
  onMenuCommand: (command: string) => void
}

const menuItems = [
  { icon: '🏠', label: 'Trang chủ', command: 'Trang chủ' },
  { icon: '📚', label: 'Thư viện', command: 'Thư viện' },
  { icon: '📂', label: 'Dự án', command: 'Dự án' },
  { icon: '⚙️', label: 'Ứng dụng', command: 'Ứng dụng' },
  { icon: '💻', label: 'Codex', command: 'Codex' },
  { icon: '🔧', label: 'Cài đặt', command: 'Cài đặt' },
]

export default function MiniRkxMenu({ isOpen, onClose, onMenuCommand }: MiniRkxMenuProps) {
  const handleItemClick = (command: string) => {
    onMenuCommand(command)
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
            onClick={() => handleItemClick(item.command)}
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
