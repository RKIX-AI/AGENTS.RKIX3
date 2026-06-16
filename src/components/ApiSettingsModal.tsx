import { useState } from 'react'
import { X } from 'lucide-react'

interface ApiSettingsModalProps {
  onClose: () => void
}

export default function ApiSettingsModal({ onClose }: ApiSettingsModalProps) {
  const [apiKey, setApiKey] = useState('')

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-rkixSidebar border border-zinc-800 square-flat max-w-md w-full p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-white">Cài đặt Mã API</h2>
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-900 square-flat transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-2">
              Mã API Gemini
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Nhập mã API của bạn"
              className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-500 square-flat transition-all"
            />
            <p className="text-[11px] text-zinc-500 mt-1">
              Bạn có thể lấy mã API từ Google AI Studio
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-6">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 text-xs font-bold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 square-flat transition-all"
            >
              Hủy
            </button>
            <button
              onClick={() => {
                if (apiKey.trim()) {
                  localStorage.setItem('geminiApiKey', apiKey)
                  onClose()
                }
              }}
              className="flex-1 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 square-flat transition-all"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
