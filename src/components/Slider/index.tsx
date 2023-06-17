import style from './slider.module.scss';
import React from 'react';
import arrowUp from "../../assets/icons/up.svg";
import arrowDown from "../../assets/icons/down.svg";

interface CarouselProps {
  images: string[];
}

interface CarouselState {
  currentSlide: number;
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  goToNextSlide = () => {
    const { images } = this.props;
    const { currentSlide } = this.state;
    if (currentSlide < images.length - 1) {
      this.setState({ currentSlide: currentSlide + 1 });
    }
  };

  goToPrevSlide = () => {
    const { currentSlide } = this.state;
    if (currentSlide > 0) {
      this.setState({ currentSlide: currentSlide - 1 });
    }
  };

  render() {
    const { images } = this.props;
    const { currentSlide } = this.state;

    return (
      <div className={style.carousel}>
            
            <button className={style.prevButton} onClick={this.goToPrevSlide} disabled={currentSlide === 0}>
            <img  src={arrowUp}/>
        
          </button>
        <div className={style.slideWrapper}>
          {images.slice(currentSlide, currentSlide + 3).map((image, index) => (
            <div className={style.slide} key={index}>
              <img className={style.image} src={image} alt={`Slide ${currentSlide + index + 1}`} />
            </div>
          ))}
        </div>
        <div className={style.controls}>
          <button className={style.nextButton} onClick={this.goToNextSlide} disabled={currentSlide >= images.length - 3}>
          <img src={arrowDown} alt="Next" />
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
