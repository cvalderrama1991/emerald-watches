const Footer = () => {
  const footerYear = new Date().getFullYear()

  return (
    <div className="w-full bg-black h-12">
      <footer className="container mx-auto text-white h-full flex items-center justify-center">
        <p>Copyright &copy; {footerYear} EMERALD</p>
      </footer>
    </div>
  )
}

export default Footer
