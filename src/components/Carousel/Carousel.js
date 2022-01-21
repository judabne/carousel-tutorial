import React, {Children, useState} from 'react';
import classes from './Carousel.module.css'

const widthSpan = 100.1

function Carousel(props) {
    const [sliderPosition, setSliderPosition] = useState(0);
    const { children } = props;

    const prevSlideHandler = () => {
        let newPosition = sliderPosition;
        if (newPosition > 0) {
            newPosition = newPosition - 1;
        }
        translateFullSlides(newPosition);
        setSliderPosition(newPosition);
    }

    const nextSlideHandler = () => {
        let newPosition = sliderPosition;
        if (newPosition < children.length - 1) {
            newPosition = newPosition + 1;
        }
        translateFullSlides(newPosition);
        setSliderPosition(newPosition);
    }

    const prevClickHandler = () => {
        prevSlideHandler();
    }

    const nextClickHandler = () => {
        nextSlideHandler();
    }

    const translateFullSlides = (newPosition) => {
        let toTranslate = -widthSpan * newPosition;
        for (var i = 0; i < children.length; i++) {
            let elem = document.getElementById(`carouselitem` + i);
            elem.style.transform = `translateX(` + toTranslate +`%)`; 
        }
    }

    const displayItems = Children.map(children, (child, index) =>(
        <div className={classes.CarouselItem} id={`carouselitem` + index}>{child}</div>
    ))

    return (
        <div>
            <div className={classes.Container}>
                <div className={classes.LeftArrow} onClick={prevClickHandler}>❰</div>
                <div className={classes.DisplayFrame}>
                    {displayItems}
                </div>
                <div className={classes.RightArrow} onClick={nextClickHandler}>❱</div>
            </div>
        </div>
    )
}

export default Carousel;