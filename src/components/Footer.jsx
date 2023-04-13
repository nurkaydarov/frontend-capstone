import lemon from "./../assets/img/lemon.svg"
const Footer = () => {
    return(
        <footer>
            <div className="footer_wrap">
            <div className="footer_logo">
                <img src={lemon} alt="Logo"/>
            </div>
            <section className="footer_links">
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </section>
            <section className="footer_links">
                <h3>Contact</h3>
                <ul>
                    <li><a href="#">Address</a></li>
                    <li><a href="#">Phone number</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </section>
            <section className="footer_links">
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Telegram</a></li>
                </ul>
            </section>
            </div>

        </footer>
    );
}

export default Footer;