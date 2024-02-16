import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { ReactNode } from "react";

type BlocTextContentProps = {
	breakpointResponsiveValue: number;
	mainTitle: string;
	textDatasArray: TextStructure[];
	darkMode?: boolean;
	pinkColor?: boolean;
	children?: ReactNode;
};

type TextStructure = {
	id: string;
	imgAlt: string;
	imgSrc: string;
	title: string;
	content: string[];
	transitionType: "left" | "center" | "right" | "none";
};

const BlocTextContent = ({
	breakpointResponsiveValue,
	mainTitle,
	textDatasArray,
	darkMode,
	pinkColor,
	children
}: BlocTextContentProps): JSX.Element => {
	return (
		<article
			className={`flex flex-col gap-16 px-2 ${
				darkMode ? "bg-darkBackground text-customWhite py-20 shadow-darkTurquoise" : "py-10"
			}`}
		>
			<h2
				className={`titleFont font-semibold text-2xl text-center mx-auto w-fit p-4 md:text-4xl ${
					pinkColor
						? "customBorderPink"
						: darkMode
						? "customBorderYellow"
						: "customBorderBlue"
				}`}
			>
				{mainTitle}
			</h2>
			<div className="flex flex-col justify-center px-2 gap-10 lg:flex-row">
				{textDatasArray?.length > 0 &&
					textDatasArray.map((data) => (
						<ScrollAnimation
							key={data.id}
							id={data.id}
							classContent="flex flex-col lg:w-1/3"
							styleBeforeTransition={
								breakpointResponsiveValue < 1024 || data.transitionType === "center"
									? {
											opacity: "0",
											transition: "opacity 2.5s, margin-top 2.5s",
											marginTop: "100px"
									  }
									: data.transitionType === "left"
									? {
											opacity: "0",
											transition: "opacity 2.5s, margin-left 2.5s",
											marginLeft: "100px"
									  }
									: data.transitionType === "right"
									? {
											opacity: "0",
											transition: "opacity 2.5s, margin-right 2.5s",
											marginRight: "100px"
									  }
									: {
											opacity: "1",
											transition: ""
									  }
							}
							styleAfterTransition={
								breakpointResponsiveValue < 1024 || data.transitionType === "center"
									? {
											opacity: "1",
											marginTop: "0px"
									  }
									: data.transitionType === "left"
									? {
											opacity: "1",
											marginLeft: "0px"
									  }
									: data.transitionType === "right"
									? {
											opacity: "1",
											marginRight: "0px"
									  }
									: {
											opacity: "1"
									  }
							}
						>
							<p
								className={`bg-darkBackground rounded-full w-fit p-2.5 mx-auto ${
									pinkColor
										? "shadow-customPink"
										: darkMode
										? "shadow-customYellow"
										: ""
								}`}
							>
								<Image
									className="mx-auto"
									alt={data.imgAlt}
									src={data.imgSrc}
									width={48}
									height={48}
								/>
							</p>
							<h3
								className={`text-xl text-center font-semibold italic mt-6 mb-2 ${
									pinkColor ? "text-pink" : darkMode ? "text-customYellow" : ""
								}`}
							>
								{data.title}
							</h3>
							<div className="text-justify max-w-xs mx-auto 2xl:max-w-sm">
								{data.content && Array.isArray(data.content)
									? data.content.map((text, index) => (
											<p key={data.id + index}>{text}</p>
									  ))
									: null}
							</div>
						</ScrollAnimation>
					))}
			</div>
			{children}
		</article>
	);
};

export default BlocTextContent;
