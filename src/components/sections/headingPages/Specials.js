import Carousel from './SpecialsCarousel';
import SpecialCard from './CardInfo/SpecialCard';
import Shawarma from "../../../assets/food/shawarma.jpg";
import Octopus from  "../../../assets/food/grilled_octopus.jpeg";
import LambKebab from "../../../assets/food/lamb_kebab.webp";

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/food/hotel_menu.jpg')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={Shawarma} name="Shawarma" price="$15.99" description="Chicken marinated in a blend of spices such as Garlic, Cinnamon, Paprika.
                 Seasond with Alapeno, Olives, and Lemon."/>
                <SpecialCard image={Octopus}name="Octopus" price="$20.99" description="Octopus  marinated in a blend of olive oil, red chili, Oregano grilled with Coconut oil searved with flatbread and Stickyrice."/>
                <SpecialCard image={LambKebab} name="LambKebab" price="$10.50" description="Fresh lamb marinated in Garlic, onion, Yogurd and lemon served with Basmathi rice and Pita Bread with glass of chilled white wine."/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}