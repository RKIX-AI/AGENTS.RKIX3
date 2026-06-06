import { Plus, Mic, ArrowUp } from 'lucide-react'

interface MainContentProps {
  prompt: string
  setPrompt: (value: string) => void
  isRecording: boolean
  setIsRecording: (value: boolean) => void
  onSubmit: () => void
  onMenuCommand: (command: string) => void
}

export default function MainContent({
  prompt,
  setPrompt,
  isRecording,
  setIsRecording,
  onSubmit,
  onMenuCommand,
}: MainContentProps) {
  return (
    <div className="flex-1 flex flex-col justify-center max-w-4xl w-full mx-auto px-4 md:px-8 py-8 md:pb-8 pb-24">
      {/* Logo Section */}
      <div className="text-center mb-10 flex flex-col items-center">
        <div className="w-full max-w-[520px] cursor-pointer drop-shadow-[0_0_24px_rgba(0,210,255,0.22)] mb-2">
          <div className="text-4xl font-bold text-rkixLightBlue drop-shadow-[0_0_12px_rgba(0,210,255,0.35)]">
            RKIX3
          </div>
        </div>

        <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mt-10 mb-6">
          Chúng ta nên bắt đầu từ đâu?
        </h3>
      </div>

      {/* Prompt Input Box */}
      <div className="w-full max-w-2xl mx-auto mb-10">
        <div className="bg-rkixSidebar border border-rkixBorder p-3 square-flat shadow-2xl relative transition-all duration-300 focus-within:border-blue-500/80">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={2}
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none resize-none leading-relaxed px-2"
            placeholder="Hỏi bất kỳ điều gì"
          />

          <div className="flex items-center justify-between mt-3 px-1">
            <button
              onClick={() => onMenuCommand('Đính kèm tệp')}
              className="w-8 h-8 flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white square-flat transition-all active:scale-95"
            >
              <Plus className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`w-8 h-8 flex items-center justify-center square-flat transition-all ${
                  isRecording
                    ? 'bg-red-900 border border-red-700 text-red-300'
                    : 'bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                <Mic className="w-4 h-4" />
              </button>
              <button
                onClick={onSubmit}
                disabled={!prompt.trim()}
                className={`w-8 h-8 flex items-center justify-center square-flat transition-all ${
                  prompt.trim()
                    ? 'bg-blue-600 border border-blue-500 text-white hover:bg-blue-500'
                    : 'bg-zinc-800 text-zinc-600 border border-zinc-800 cursor-not-allowed'
                }`}
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="w-full max-w-2xl mx-auto grid grid-cols-2 gap-3">
        {[
          { icon: '🔧', label: 'Lập trình', desc: 'Viết code, debug và tối ưu' },
          { icon: '🏗️', label: 'Build', desc: 'Xây dựng sản phẩm nhanh chóng' },
          { icon: '⚙️', label: 'Tự động hoá', desc: 'Tự động hoá quy trình và công việc' },
          { icon: '🤖', label: 'AI thông minh', desc: 'Hỗ trợ bởi AI thế hệ mới' },
        ].map((item) => (
          <div
            key={item.label}
            className="p-4 bg-zinc-900/50 border border-zinc-800 hover:border-blue-600/50 hover:bg-zinc-900/80 square-flat cursor-pointer transition-all"
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            <div className="text-xs font-bold text-white mb-1">{item.label}</div>
            <div className="text-[11px] text-zinc-400">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
