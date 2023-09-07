import { Link } from "react-router-dom";

function Explorar(){
    return(
        <div>
            <Link to="./tendencias">Explorar Tendencias</Link>
            <Link to="./musica">Explorar Musica</Link>
            <Link to="./peliculas">Explorar Peliculas</Link>
        </div>
    )
}

export default Explorar;
