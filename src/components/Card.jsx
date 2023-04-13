import Button from "./Button";

const Card = ({image, dishName, price, desc}) => {
    return (
        <div className="card">
            <img src={image} alt=""  className="card_img"/>
            <div className="card_content">
                <div className="card_title">
                    <h4>{dishName}</h4> 
                    <h5>{price}</h5>
                </div>
                <p className="card_desc">{desc} </p>
                
                <Button name="Order a delivery"/>
            </div>
        </div>
    );
}
export default Card;