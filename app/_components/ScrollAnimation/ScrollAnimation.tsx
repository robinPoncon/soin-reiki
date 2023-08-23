import { ReactNode, useEffect } from "react";

type TransitionObject = {
	[key: string]: string;
};

type ScrollAnimationProps = {
	id: string;
	children: ReactNode;
	classContent?: string;
	styleBeforeTransition: TransitionObject;
	styleAfterTransition: TransitionObject;
};

const ScrollAnimation = ({
	children,
	classContent,
	id,
	styleBeforeTransition,
	styleAfterTransition
}: ScrollAnimationProps): JSX.Element => {
	useEffect(() => {
		const animateElement = document.getElementById(id);
		const animateOnScroll = () => {
			if (animateElement) {
				const elementTop = animateElement.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;

				if (elementTop < windowHeight * 0.8 && animateElement instanceof HTMLElement) {
					for (const property in styleAfterTransition) {
						if (styleAfterTransition.hasOwnProperty(property)) {
							animateElement.style[property] = styleAfterTransition[property];
						}
						// animateElement.style.opacity = "0";
					}
				}
			}
		};
		window.addEventListener("scroll", animateOnScroll);
		return () => {
			window.removeEventListener("scroll", animateOnScroll);
		};
	}, []);

	return (
		<div
			style={styleBeforeTransition}
			id={id}
			className={classContent}
		>
			{children}
		</div>
	);
};

export default ScrollAnimation;
