import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { ReactNode } from "react";

type BlocTextContentProps = {
	breakpointResponsiveValue: number;
	mainTitle: string;
	textDatasArray: TextStructure[];
	darkMode?: boolean;
	children?: ReactNode;
};

type TextStructure = {
	id: string;
	imgAlt: string;
	imgSrc: string;
	title: string;
	content: string;
	transitionType: "left" | "center" | "right";
};

const BlocTextContent = ({
	breakpointResponsiveValue,
	mainTitle,
	textDatasArray,
	darkMode,
	children
}: BlocTextContentProps): JSX.Element => {
	return (
		<article
			className={`flex flex-col gap-10 ${
				darkMode ? "bg-darkBackground text-customWhite py-12 shadow-darkTurquoise" : ""
			}`}
		>
			<h2
				className={`font-semibold text-2xl text-center mx-auto w-fit p-4 md:text-4xl ${
					darkMode ? "customBorderYellow" : "customBorderBlue"
				}`}
			>
				{mainTitle}
			</h2>
			<div className="flex flex-col justify-center px-4 gap-10 lg:flex-row">
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
									: {
											opacity: "0",
											transition: "opacity 2.5s, margin-right 2.5s",
											marginRight: "100px"
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
									: {
											opacity: "1",
											marginRight: "0px"
									  }
							}
						>
							<p
								className={`bg-darkBackground rounded-full w-fit p-2.5 mx-auto ${
									darkMode ? "shadow-customYellow" : ""
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
									darkMode ? "text-customYellow" : ""
								}`}
							>
								{data.title}
							</h3>
							<p className="text-justify max-w-xs mx-auto">{data.content}</p>
						</ScrollAnimation>
					))}
			</div>
			{children}
		</article>
	);
};

export default BlocTextContent;
