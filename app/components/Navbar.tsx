import { Link } from "remix";
import Logo from "./Logo";
export default function Navbar(){
  return (
    <header>
      <div>
        <Logo />
      </div>
      <nav>
        <Link to="/">home</Link>
        <Link to="/posts">posts</Link>
      </nav>
    </header>
  )
}