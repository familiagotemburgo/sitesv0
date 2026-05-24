export function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-[#050505]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-neutral-400 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Crânio Tattoo. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="#privacidade" className="hover:text-[#ff6600]">
            Privacidade
          </a>
          <a href="#termos" className="hover:text-[#ff6600]">
            Termos
          </a>
        </div>
      </div>
    </footer>
  )
}
