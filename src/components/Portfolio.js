import React, { Component } from "react";
import Fade from "react-awesome-reveal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    const projects = this.props.data.projects.map(function (projects) {
      //let projectImage = "images/portfolio/" + projects.image;
      console.log(projects.length, "projects");
      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Card props={projects} />
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              <Carousel
                className="portfolio-carousel"
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                renderDotsOutside={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {projects}
              </Carousel>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
