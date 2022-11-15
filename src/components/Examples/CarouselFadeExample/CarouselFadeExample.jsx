import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselFadeExample = () => {
	return (
		<div>
			<Carousel fade>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/NNC7TA7K2NG5HM2REZSAE244XE.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe84-CalHoOiAOneb5Kea1_ee-ia0ro2bg1Im0GPE7jWyJTzM6dNYi05mZRh4e6vQRm6U&usqp=CAU"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://i0.wp.com/live.staticflickr.com/65535/48523642426_c3d9f4ab92_o.jpg?fit=1600%2C903&ssl=1"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default CarouselFadeExample;
