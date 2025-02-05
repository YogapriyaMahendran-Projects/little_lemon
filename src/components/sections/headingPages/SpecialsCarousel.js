import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import SpecialCard from './CardInfo/SpecialCard';
import Shawarma from "../../../assets/food/shawarma.jpg";
import Octopus from  "../../../assets/food/grilled_octopus.jpeg";
import LambKebab from "../../../assets/food/lamb_kebab.webp";
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <SpecialCard image={Shawarma} name="Shawarma" price="$15.99" description="Chicken, Onion, Cucumber"/>
            <SpecialCard image={Octopus}name="Octopus" price="$20.99" description="Octopus, Tomato, green onions"/>
            <SpecialCard image={LambKebab} name="Lamb Kebab" price="$10.50" description="Lamb, Capsicum, Pineapple"/>
        </Carousel>
    )
}