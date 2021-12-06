import { Link } from "remix";
export default function Navbar(){
  return (
    <header>
      <nav>
        <Link to="/">home</Link>
        <Link to="/posts">posts</Link>
      </nav>
    </header>
  )
}