import logo from "D:/Datos/Escritorio/DH/Front3/EXTRA/F3-classes-vite/src/assets/sburb.svg"
function Header() {

  return (
    <header>
      <h1>WebSite</h1>
      <img src={logo} width="50px" height="50px" alt='Sburb'/>
    </header>
  )
}

export default Header