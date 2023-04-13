
const AboutSection = () => {
    return(
        <section className="aboutSection">  
            <article className="aboutSection_content">
                <h3>Little Lemon</h3>
                <h4>Pavlodar</h4>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </article>
            <div className="photoOfAdrian">
                <img src={require("./../assets/img/MarioA.jpg")} alt=""  className="photoOfAdrianA"/>
                <img src={require("./../assets/img/MarioB.jpg")} alt="" className="photoOfAdrianB"/>
            </div>
        </section>
    );


}

export default AboutSection;