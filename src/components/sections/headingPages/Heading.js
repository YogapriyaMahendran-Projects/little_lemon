import {Link} from 'react-router-dom';
import Dishes from "./../../../assets/food/dishes.jpg"
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>New York</h2>
                    <p className="subsection">We are tradional and authentic Mediterranean restaurant, located on Kings Street in New York. We offer heart friendly
                        meal with Lean protein, Healthy vegetables and Aromatic spices </p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={Dishes} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}