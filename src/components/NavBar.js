import Icono from "./CartWidget";
const NavBar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    
                    <Icono />
                 
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cuadros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Souvenirs</a>
                            </li>
                         
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar