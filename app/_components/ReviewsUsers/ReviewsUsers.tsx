"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./ReviewsUsers.scss";
import ReviewsUserCard from "./ReviewsUsersCard/ReviewsUserCard";
import { ReviewsUserType } from "@/_types/reviewsUsersTypes";

type ReviewsUsersProps = {
	reviewsUsers: ReviewsUserType[];
	isOnlyToShow?: boolean;
};

const ReviewsUsers = ({ reviewsUsers, isOnlyToShow }: ReviewsUsersProps): JSX.Element => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isTransitionActive, setIsTransitionActive] = useState<boolean>(false);
	const [saveNextOrPreviousIndex, setSaveNextOrPreviousIndex] = useState(0);

	useEffect(() => {
		if (isTransitionActive) {
			const timer = setInterval(() => {
				setIsTransitionActive(false);
				setCurrentIndex(saveNextOrPreviousIndex);
			}, 500);

			return () => {
				clearInterval(timer);
			};
		}
	}, [isTransitionActive]);

	useEffect(() => {
		if (isOnlyToShow) {
			const nextIndex = (currentIndex + 1) % reviewsUsers.length;
			const messageLength = reviewsUsers[nextIndex]?.comment.length || 0;
			const timer = setInterval(() => {
				setSaveNextOrPreviousIndex(nextIndex);
				setIsTransitionActive(true);
			}, 3000 + messageLength * 50);

			return () => {
				clearInterval(timer);
			};
		}
	}, [currentIndex, isOnlyToShow, reviewsUsers.length]);

	const handleClickNext = () => {
		const nextIndex = (currentIndex + 3) % reviewsUsers.length;
		setSaveNextOrPreviousIndex(nextIndex);
		setIsTransitionActive(true);
	};

	const handleClickPrevious = () => {
		const previousIndex = (currentIndex - 3 + reviewsUsers.length) % reviewsUsers.length;
		setSaveNextOrPreviousIndex(previousIndex);
		setIsTransitionActive(true);
	};

	const reviewsUsersShowing = isOnlyToShow
		? [reviewsUsers[currentIndex]]
		: [
				reviewsUsers[currentIndex],
				reviewsUsers[(currentIndex + 1) % reviewsUsers.length],
				reviewsUsers[(currentIndex + 2) % reviewsUsers.length]
		  ];

	return (
		<div className="flex gap-12 justify-center">
			{!isOnlyToShow && (
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
			)}
			<div className={`reviewsUserBloc ${isTransitionActive ? "transitionActive" : ""}`}>
				{reviewsUsersShowing?.map(
					(reviewsUser) =>
						reviewsUser && (
							<ReviewsUserCard
								key={reviewsUser.id}
								reviewsUser={reviewsUser}
							/>
						)
				)}
			</div>
			{!isOnlyToShow && (
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
			)}
		</div>
	);
};

export default ReviewsUsers;
