import React from "react";

const CarouselOne = ({name}) => {
if(!name){
	name = "Querido User"
}
	return (
		<>
		<h1> Bienvenido {name}! </h1>
		<div
			id="carouselExampleInterval"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner">
				<div className="carousel-item active" data-bs-interval="1000">
					<img
						src="https://imagenes.elpais.com/resizer/elGQL0GmeUTR_xUL3rrpOkMVwx8=/1960x1470/filters:focal(1745x609:1755x619)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/7G364PMCSFGIHFZNHHJLNQL4SU.jpg"
						className="d-block w-100"
						alt="https://imagenes.elpais.com/resizer/elGQL0GmeUTR_xUL3rrpOkMVwx8=/1960x1470/filters:focal(1745x609:1755x619)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/7G364PMCSFGIHFZNHHJLNQL4SU.jpg"
					/>
				</div>
				<div className="carousel-item" data-bs-interval="2000">
					<img
						src="https://imagenes.elpais.com/resizer/elGQL0GmeUTR_xUL3rrpOkMVwx8=/1960x1470/filters:focal(1745x609:1755x619)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/7G364PMCSFGIHFZNHHJLNQL4SU.jpg"
						className="d-block w-100"
						alt="https://imagenes.elpais.com/resizer/elGQL0GmeUTR_xUL3rrpOkMVwx8=/1960x1470/filters:focal(1745x609:1755x619)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/7G364PMCSFGIHFZNHHJLNQL4SU.jpg"
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://imagenes.elpais.com/resizer/elGQL0GmeUTR_xUL3rrpOkMVwx8=/1960x1470/filters:focal(1745x609:1755x619)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/7G364PMCSFGIHFZNHHJLNQL4SU.jpg"
						className="d-block w-100"
						alt="https://imagenes.elpais.com/resizer/elGQL0GmeUTR_xUL3rrpOkMVwx8=/1960x1470/filters:focal(1745x609:1755x619)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/7G364PMCSFGIHFZNHHJLNQL4SU.jpg"
					/>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleInterval"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleInterval"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
		</>
	);
};

export default CarouselOne;
