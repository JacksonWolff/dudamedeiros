import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-bone">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
