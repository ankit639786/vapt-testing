import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item'
import img from "../../assests/images/service22.jpg";

const Carrousel = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ]

    return (
        <>
            <h1 style={{ textAlign: 'center', fontSize: "45px", marginTop: "5rem" }}>Testing Services</h1>

            <Carousel breakPoints={breakPoints} swipeable={true} className="hi">
                <Item><img src={img} style={{ borderRadius: "5px" }} /></Item>
                <Item><img src={img} style={{ borderRadius: "5px" }} /></Item>

                <Item><img src={img} style={{ borderRadius: "5px" }} /></Item>
                <Item><img src={img} style={{ borderRadius: "5px" }} /></Item>

                <Item><img src={img} style={{ borderRadius: "5px" }} /></Item>
                <Item><img src={img} style={{ borderRadius: "5px" }} /></Item>

                <Item><img src={img} style={{ borderRadius: "5px" }} /></Item>
                <Item><img src={img} style={{ borderRadius: "5px" }} /></Item>
            </Carousel>
        </>
    )
}

export default Carrousel;