import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MainContent from './components/MainContent'
import MiniRkxButton from './components/MiniRkxButton'
import MiniRkxMenu from './components/MiniRkxMenu'
import ApiSettingsModal from './components/ApiSettingsModal'
import './styles/minirkx.css'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showApiModal, setShowApiModal] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const handleMenuCommand = (command: string) => {
    console.log(`[v0] Menu command: ${command}`)
    // Handle menu commands here
  }

  const handleNavigate = (page: string) => {
    console.log(`[v0] Navigating to: ${page}`)
    setCurrentPage(page)
  }

  const handleSubmitPrompt = () => {
    if (!prompt.trim()) return
    console.log(`Submitting prompt: ${prompt}`)
    setPrompt('')
  }

  return (
    <div className="flex flex-1 w-full min-h-screen relative z-10 transition-all duration-300">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        onMenuCommand={handleMenuCommand}
      />

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen md:pl-[270px] pb-16 md:pb-0 relative z-10">
        <Header 
          onMenuOpen={() => setSidebarOpen(true)}
          onApiSettings={() => setShowApiModal(true)}
        />
        
        <MainContent 
          prompt={prompt}
          setPrompt={setPrompt}
          isRecording={isRecording}
          setIsRecording={setIsRecording}
          onSubmit={handleSubmitPrompt}
          onMenuCommand={handleMenuCommand}
        />
      </main>

      {/* MiniRkx Button & Menu */}
      <MiniRkxButton 
        isOpen={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      
      <MiniRkxMenu 
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onMenuCommand={handleMenuCommand}
        onNavigate={handleNavigate}
      />

      {/* API Settings Modal */}
      {showApiModal && (
        <ApiSettingsModal onClose={() => setShowApiModal(false)} />
      )}
    </div>
  )
}
