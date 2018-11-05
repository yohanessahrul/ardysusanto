import React, { Component } from 'react';
import { Container,
  // Row, Col, 
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  // CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: './images/slide1.png',
    altText: 'Slide 1',
    caption: 'Pertemuan partisipan Ardy Susanto'
  },
  {
    src: './images/slide2.png',
    altText: 'Slide 2',
    caption: 'Pertemuan partisipan Ardy Susanto'
  },
  {
    src: './images/slide3.png',
    altText: 'Slide 3',
    caption: 'Pertemuan partisipan Ardy Susanto'
  },
]

class Slider extends Component {
  constructor (props) {
    super (props)
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img style={{
            width: '100%',
            paddingBottom: '-30px!important'
          }} src={item.src} alt={item.altText} />
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });

    return (
      <div>
        <div className="sliderWrap">
          <div className="vignete"></div>
          <Container
            style={{ 
              paddingTop: '20px',
              // marginBottom: '-24px'
            }}
          >
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          </Container>>
        </div>
      </div>
    );
  }
}

export default Slider;