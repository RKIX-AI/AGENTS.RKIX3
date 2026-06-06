interface MiniRkxButtonProps {
  isOpen: boolean
  onClick: () => void
}

export default function MiniRkxButton({ isOpen, onClick }: MiniRkxButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`minirkx-button pulse ${isOpen ? 'open' : ''}`}
      title="Mở menu điều hướng"
    >
      <div className="minirkx-logo">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Khung vuông chính */}
          <rect
            x="15"
            y="15"
            width="70"
            height="70"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Các đường công nghệ cắt góc */}
          <path d="M 15 30 L 25 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M 85 15 L 75 30" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M 85 70 L 75 85" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M 25 85 L 15 70" stroke="white" strokeWidth="2" strokeLinecap="round" />
          {/* Chấm công nghệ ở góc */}
          <circle cx="18" cy="18" r="3" fill="white" opacity="0.8" />
          <circle cx="82" cy="18" r="3" fill="white" opacity="0.8" />
          <circle cx="82" cy="82" r="3" fill="white" opacity="0.8" />
          <circle cx="18" cy="82" r="3" fill="white" opacity="0.8" />
          {/* Đường gạch ngang giữa (biểu tượng RK) */}
          <line
            x1="30"
            y1="50"
            x2="70"
            y2="50"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      </div>
    </button>
  )
}
