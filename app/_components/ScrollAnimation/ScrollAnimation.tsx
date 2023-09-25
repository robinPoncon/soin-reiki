import { ReactNode, useEffect } from "react";

type TransitionObjectType = {
	[key: string]: string;
};

type ScrollAnimationProps = {
	id: string;
	children: ReactNode;
	classContent?: string;
	styleBeforeTransition: TransitionObjectType;
	styleAfterTransition: TransitionObjectType;
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
							animateElement.style[property as any] = styleAfterTransition[property];
						}
					}
				}
			}
		};
		window.addEventListener("scroll", animateOnScroll);
		return () => {
			window.removeEventListener("scroll", animateOnScroll);
		};
	}, [styleBeforeTransition, styleAfterTransition]);

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
