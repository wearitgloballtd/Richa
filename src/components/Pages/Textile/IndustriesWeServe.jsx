import React from 'react';
import IndustriesSection from '../../common/IndustriesSection';

// Replace these with actual image imports or URLs as needed
const industries = [
    {
        id: 1,
        title: "Apparel & Fashion",
        desc: "T-shirts, sportswear, innerwear",
        image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        title: "Home Textiles",
        desc: "Bedding, towels, upholstery",
        image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        title: "Workwear & Uniforms",
        desc: "Durable professional attire",
        image: "https://images.pexels.com/photos/3826678/pexels-photo-3826678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 4,
        title: "Technical & Industrial",
        desc: "Filtration, automotive, medical",
        image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

const IndustriesWeServe = () => {
    return (
        <IndustriesSection
            title="Our fabrics power success"
            subtitle="Industries We Serve"
            description="Our fabrics power success across multiple sectors, demonstrating the real-world versatility and reliability of our products."
            footerText="We cater to a broad clientele, ensuring our solutions meet the unique demands of each industry without compromising on quality."
            accentColor="#BB2929"
            items={industries}
            gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        />
    );
};

export default IndustriesWeServe;
