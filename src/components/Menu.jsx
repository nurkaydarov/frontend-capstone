import greekSalad from "./../assets/img/greek salad.jpg";
import lemonDessert from "./../assets/img/lemon dessert.jpg";
import brucheta from "./../assets/img/bruchetta.jpg";
import Card from "./Card";
const Menu = () => {
    return(
        <section className="boooking">
        <div className="booking_wrap">
            <h1>Our menu</h1>
            <div className="card_grid">
            <Card image={brucheta} dishName="Brucheta" price="$8,9" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>   
            <Card image={greekSalad} dishName="Greek salad" price="$7,9" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>   
            <Card image={lemonDessert} dishName="Lemon Dessert" price="$7,9" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>   
            <Card image={brucheta} dishName="Greek salad" price="$7,9" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>   
            <Card image={brucheta} dishName="Greek salad" price="$7,9" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>   
            <Card image={brucheta} dishName="Greek salad" price="$7,9" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>   
            </div>

        </div>
    </section>
    )
}
export default Menu;