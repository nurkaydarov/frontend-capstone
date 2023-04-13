import restaurantFood from "./../../assets/img/restauranfood-min.jpg"
import Button from "./../Button";
const HeroSection = () => {
    return(
        <section className="hereSection">
            <div className="hereSection_wrap">
                <article className="content">
                    <h1>Little Lemon</h1>
                    <h2>Pavlodar</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button name="Reserve Table"/>
                </article>
                <div className="hero_image">
                    <img src={restaurantFood} alt="" />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;