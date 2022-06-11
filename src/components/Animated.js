import React from "react";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";

export const Animated = ({
	children,
	className,
	animateIn,
	animateOut,
	...props
}) => {
	return (
		<ScrollAnimation
			{...props}
			className={`animate__animated ${className ?? ""}`}
			animateIn={animateIn && `animate__${animateIn}`}
                        animateOut={animateOut &&`animate__${animateOut}`}
		>
			{children}
		</ScrollAnimation>
	);
}
