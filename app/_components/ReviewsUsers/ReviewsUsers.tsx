import { ReviewsUser } from "@/_types/reviewsUserTypes";
import Image from "next/image";
import { useEffect, useState } from "react";

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

	return (
		<div className="flex gap-12 justify-center">
			<button
				onClick={handleClickPrevious}
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
				{reviewsUsersShowing?.map((reviewsUser) => (
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
				onClick={handleClickNext}
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
