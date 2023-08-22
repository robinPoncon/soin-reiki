import { ReactNode, useEffect } from "react";

interface ScrollAnimationProps {
	children: ReactNode;
}

const ScrollAnimation = ({ children }: ScrollAnimationProps): JSX.Element => {
	useEffect(() => {
		const animateElements = document.querySelectorAll(".animate-content");
		const animateOnScroll = () => {
			animateElements.forEach((element: Element) => {
				const elementTop = element.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;

				if (elementTop < windowHeight * 0.8 && element instanceof HTMLElement) {
					element.style.opacity = "1";
					element.style.transform = "translateY(0)";
				}
			});
		};
		window.addEventListener("scroll", animateOnScroll);
		return () => {
			window.removeEventListener("scroll", animateOnScroll);
		};
	}, []);

	return (
		<div className="scrollAnimationComponent">
			<div className="animate-content">{children}</div>
		</div>
	);
};

export default ScrollAnimation;
