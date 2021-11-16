import { Link } from "react-router-dom"
const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">To-Do App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tasks">New Task</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signUp">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/users">Users</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/">Pending Tasks</Link>
                                    <Link className="dropdown-item" to="/">Current Tasks</Link>
                                    <Link className="dropdown-item" to="/">Done Tasks</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/">Separated link</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
        </header>
    )
}

export { Header }