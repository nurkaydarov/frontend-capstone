import Card from "../Card";
import brucheta from "./../../assets/img/bruchetta.jpg";
import greekSalad from "./../../assets/img/greek salad.jpg";
import lemonDessert from "./../../assets/img/lemon dessert.jpg";
import Button from "./../Button";
const HighlightSection = () => {
    return (
            <section className="highlight wrap">
                <div className="highlight_title">
                    <h2>Specials</h2>
                    <Button name="Order Online"/>
                </div>
                <article className="card_wrap">
                    <Card image={brucheta} dishName="Greek salad" price="$7,9" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
                    <Card image={brucheta} dishName="Greek salad" price="$7,9" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
                    <Card image={brucheta} dishName="Greek salad" price="$7,9" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
                    <Card image={brucheta} dishName="Greek salad" price="$7,9" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>                    
                </article>
            </section>
    );
}

export default HighlightSection;