import Link from "next/link"
import MaxWithWrapper from "./MaxWithWrapper"

const Footer = () => {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWithWrapper>
        <div className="border-b border-gray-200"/>
        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">Terms</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">Politica de Privacidad</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">Politica de Cookies</Link>
            </div>
          </div>
        </div>
      </MaxWithWrapper>
    </footer>
  )
}

export default Footer
