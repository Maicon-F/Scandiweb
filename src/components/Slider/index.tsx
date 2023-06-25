import style from './slider.module.scss';
import React from 'react';
import arrowUp from "../../assets/icons/up.svg";
import arrowDown from "../../assets/icons/down.svg";
import left from "../../assets/icons/left.svg";
import right from "../../assets/icons/right.svg";


class Carousel extends React.Component<any, any> {
  constructor(props: any) {
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

  sendDataToParent = (image: any) => {
    this.props.onValueChange(image);
  }

  render() {
    const { images, slidesPerView, isMiniCart } = this.props;
    const n = slidesPerView ? slidesPerView : 1;
    const { currentSlide } = this.state;
    let gallery = images ? images : [];



    return (
      <div className={style.carousel}>
        <div className={style.controls} style={{ display: n == 1 ? 'none' : '' }} >
          <button className={style.prevButton} onClick={this.goToPrevSlide} disabled={currentSlide === 0}>
            <img src={arrowUp} />
          </button>
        </div>

        <div className={style.slideWrapper} style={{ position: 'relative' }}>
          {gallery.slice(currentSlide, currentSlide + n).map((image: string | undefined, index: React.Key | null | undefined) => (
            <div className={style.slide} key={index}>
              <img className={style.image} src={image} alt={`Slide ${currentSlide + index + 1}`} onClick={() => this.sendDataToParent(image)} />
            </div>
          ))}
          <div className={style.cartControl} style={{ display: (n == 1 && !isMiniCart) ? '' : 'none' }}>
            <img src={left} onClick={this.goToPrevSlide} />
            <img src={right} onClick={this.goToNextSlide} />
          </div>
        </div>

        <div className={style.controls} style={{ display: n == 1 ? 'none' : '' }}>
          <button className={style.nextButton} onClick={this.goToNextSlide} disabled={currentSlide >= gallery.length - 3}>
            <img src={arrowDown} alt="Next" />
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;


