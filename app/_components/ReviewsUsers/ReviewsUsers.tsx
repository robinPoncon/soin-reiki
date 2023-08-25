import { ReviewsUser } from "@/_types/reviewsUserTypes";
import Image from "next/image";
import { useState } from "react";
import "./ReviewsUsers.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

type ReviewsUsersProps = {
	reviewsUsers: ReviewsUser[];
};

const ReviewsUsers = ({ reviewsUsers }: ReviewsUsersProps): JSX.Element => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClickNext = () => {
		const nextIndex = (currentIndex + 1) % reviewsUsers.length;
		setCurrentIndex(nextIndex);
	};

	const handleClickPrevious = () => {
		const previousIndex = (currentIndex - 1 + reviewsUsers.length) % reviewsUsers.length;
		setCurrentIndex(previousIndex);
	};

	const reviewsUsersShowing = [
		reviewsUsers[currentIndex],
		reviewsUsers[(currentIndex + 1) % reviewsUsers.length],
		reviewsUsers[(currentIndex + 2) % reviewsUsers.length]
	];

	const numberOfStars = (value: number) => {
		if (value === 4) {
			return ["icon_star", "icon_star", "icon_star", "icon_star", "icon_star-empty"];
		}
		if (value === 5) {
			return ["icon_star", "icon_star", "icon_star", "icon_star", "icon_star"];
		}
	};

	return (
		<div className="flex gap-12 justify-center">
			<button
				onClick={handleClickPrevious}
				className="bg-darkTurquoise rounded-full h-fit hover:shadow-blueGreen ml-4 mt-5 w-fit"
			>
				<Image
					alt="icône de chevron gauche"
					src="/icons/icon_chevron-left.svg"
					width={40}
					height={40}
				></Image>
			</button>
			<TransitionGroup className={"flex w-4/5 justify-between"}>
				{reviewsUsersShowing?.map((reviewsUser, index) => (
					<CSSTransition
						key={reviewsUser.id}
						timeout={500}
						classNames="reviewsUserTransition"
						onExit={() => {
							// Add an extra class to set the intermediate state during exit
							const container = document.querySelector(
								".review-slide:nth-child(" + (index + 1) + ")"
							);
							container?.classList.add("reviewsUserTransition-exit-done");
						}}
						onExiting={() => {
							// Remove the intermediate class after the transition
							const container = document.querySelector(
								".review-slide:nth-child(" + (index + 1) + ")"
							);
							container?.classList.remove("reviewsUserTransition-exit-done");
						}}
					>
						<div className="max-w-xs">
							<div className="flex gap-4">
								<p className="font-semibold ml-4">{reviewsUser.name}</p>
								<div className="flex gap-2 mb-auto">
									{numberOfStars(reviewsUser.note)?.map((starPath, key) => (
										<Image
											key={reviewsUser.id + key}
											alt="icône d'une étoile"
											src={`./icons/${starPath}.svg`}
											width={20}
											height={20}
										></Image>
									))}
								</div>
							</div>
							<div className="bubbleReview">
								<p className="bubbleCorner" />
								<p className="bubbleText">{reviewsUser.comment}</p>
							</div>
						</div>
					</CSSTransition>
				))}
			</TransitionGroup>

			<button
				onClick={handleClickNext}
				className="bg-darkTurquoise rounded-full h-fit w-fit hover:shadow-blueGreen mt-5 mr-4"
			>
				<Image
					alt="icône de chevron droit"
					src="/icons/icon_chevron-right.svg"
					width={40}
					height={40}
				></Image>
			</button>
		</div>
	);
};

export default ReviewsUsers;
