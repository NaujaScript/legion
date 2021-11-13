import Nav from '../components/Nav'
import Showcase from '../components/Showcase'
export default function Home() {
  return (
    <div className="bg-dark-background">
      <div className="mx-auto">
        <Nav></Nav>
        <Showcase></Showcase>
      </div>
    </div>
  )
}
