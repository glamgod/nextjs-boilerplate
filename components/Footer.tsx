export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Manolo Estavillo. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Photography • Sociology • Visual Storytelling
          </p>
        </div>
      </div>
    </footer>
  )
}