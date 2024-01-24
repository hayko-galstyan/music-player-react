import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return(
        <>
            <nav className="navbar">
                <Link to = '/'>Home</Link>
                <Link to = '/addSong'>Add Song</Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default Layout;