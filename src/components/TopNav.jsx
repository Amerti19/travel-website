export default function TopNav() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Left: Logo + Menu */}
      <div className="flex items-center gap-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
          alt="Figma Logo"
          className="w-8 h-8"
        />
        <nav className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-500">Design Resources</a>
          <a href="#" className="hover:text-blue-500">Website</a>
          <a href="#" className="hover:text-blue-500">Plugins</a>
          <a href="#" className="hover:text-blue-500">Whiteboarding</a>
          <a href="#" className="hover:text-blue-500">Presentation</a>
        </nav>
      </div>
    </header>
  );
}
