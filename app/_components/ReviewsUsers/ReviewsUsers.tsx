import { ReviewsUsers } from "@/_types/reviewsUserTypes";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./ReviewsUsers.scss";
import ReviewsUserCard from "./ReviewsUsersCard/ReviewsUserCard";

const ReviewsUsers = ({ reviewsUsers }: ReviewsUsers): JSX.Element => {
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

	const reviewsUsersShowing = [
		reviewsUsers[currentIndex],
		reviewsUsers[(currentIndex + 1) % reviewsUsers.length],
		reviewsUsers[(currentIndex + 2) % reviewsUsers.length]
	];

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
			<div className={`reviewsUserBloc ${isTransitionActive ? "transitionActive" : ""}`}>
				{reviewsUsersShowing?.map((reviewsUser) => (
					<ReviewsUserCard
						key={reviewsUser.id}
						reviewsUser={reviewsUser}
					/>
				))}
			</div>
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
