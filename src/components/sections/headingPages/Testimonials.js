import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>

            <section className="testimonials-cards">
            <TestimonialCard name="James Roi" description="Absolutely Incredible Food!The lamb kebabs were perfectly seasoned."/>
            <TestimonialCard name="Emily Sam" description="This place transported me straight to Greece! The grilled
            octopus was a must try-so tender and delicious!"/>
            <TestimonialCard name="Olivia Mary" description="One of the best Mediterranean meal I've ever had!"/>
            <TestimonialCard name="David Rosenblum" description="Great food, The shawarma was packed with flavours and the garlic sauce"/>
            <TestimonialCard name="Isavella Daniel" description="From first bite to the last,every dish was spectacular."/>
            <TestimonialCard name="Ahmed Lucas" description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."/>
            <TestimonialCard name="Tyler Timmy" description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."/>
            <TestimonialCard name="Mario Edward" description="This restaurant served as a perfect dinner for me after a
                long night of studying. I would definitely order from here again!"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}