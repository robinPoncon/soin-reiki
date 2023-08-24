import { ReviewsUser } from "@/_types/reviewsUserTypes";
import Image from "next/image";
import { useEffect, useState } from "react";

type ReviewsUsersProps = {
	reviewsUsers: ReviewsUser[];
};

const ReviewsUsers = ({ reviewsUsers }: ReviewsUsersProps): JSX.Element => {
	const [startIndex, setStartIndex] = useState(0);
	const reviewsPerGroup = 3;

	const showPreviousReviewGroup = () => {
		setStartIndex((prevStartIndex) => Math.max(prevStartIndex - 1, 0));
	};

	const showNextReviewGroup = () => {
		if (startIndex + 1 + reviewsPerGroup > reviewsUsers.length) {
			// If not enough elements for the next group, reset to the beginning
			setStartIndex(0);
		} else {
			setStartIndex((prevStartIndex) =>
				Math.min(prevStartIndex + 1, reviewsUsers.length - reviewsPerGroup)
			);
		}
	};

	const reviewsGroup = reviewsUsers.slice(startIndex, startIndex + reviewsPerGroup);

	return (
		<div className="flex gap-12 justify-center">
			<button
				onClick={showPreviousReviewGroup}
				className="bg-darkTurquoise rounded-full h-fit hover:shadow-blueGreen my-auto ml-4 w-fit"
			>
				<Image
					alt="icône de chevron gauche"
					src="/icons/icon_chevron-left.svg"
					width={40}
					height={40}
				></Image>
			</button>
			<div className="flex w-4/5 justify-center gap-10">
				{reviewsGroup?.map((reviewsUser) => (
					<div
						className=""
						key={reviewsUser.id}
					>
						<div className="flex">
							<p className=" font-semibold">{reviewsUser.name}</p>
							{/* <p>{reviewUser.note}</p> */}
						</div>
						<p className="text-justify italic">{reviewsUser.comment}</p>
					</div>
				))}
			</div>
			<button
				onClick={showNextReviewGroup}
				className="bg-darkTurquoise rounded-full h-fit w-fit hover:shadow-blueGreen my-auto mr-4"
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
