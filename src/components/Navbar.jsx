import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Vidyalay Web</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#services" className="hover:text-blue-500">Services</a></li>
          <li><a href="#templates" className="hover:text-blue-500">Templates</a></li>
          <li><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          <a href="#services" className="block hover:text-blue-500">Services</a>
          <a href="#templates" className="block hover:text-blue-500">Templates</a>
          <a href="#pricing" className="block hover:text-blue-500">Pricing</a>
          <a href="#contact" className="block hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  )
}
