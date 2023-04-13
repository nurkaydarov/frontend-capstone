import lemon from "./../assets/img/lemon.svg"
const Nav = ({children}) => {
    return(
        <nav className="nav wrap">
            <img src={lemon} alt="Little Lemon" className="logo" />
                
            <>{children}</>
        </nav>
    );
}

export default Nav;