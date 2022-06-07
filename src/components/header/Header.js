
import './Header.css';
import Logo from './logo.jpg';
function Header(){
return (
    /*caracteristicas del componente*/
    <header>
        <div class="logo">
          <img src={Logo} alt="logo"></img>
        </div>
        <div>
        <button class="btn-azul"><i class="fas fa-power-off"></i>Ingresar</button>
        <button class="btn-morado"><i class="fas fa-user-plus"></i>Registrar</button>
        </div>
    </header>
    );
}
export default Header;