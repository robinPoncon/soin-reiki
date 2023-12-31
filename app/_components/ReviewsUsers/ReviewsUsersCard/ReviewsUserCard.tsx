import { ReviewsUserType } from "@/_types/reviewsUsersTypes";
import Image from "next/image";

type ReviewsUserCardProps = {
	reviewsUser: ReviewsUserType;
};

const ReviewsUserCard = ({ reviewsUser }: ReviewsUserCardProps): JSX.Element => {
	const numberOfStars = (value: number) => {
		if (value === 4) {
			return ["icon_star", "icon_star", "icon_star", "icon_star", "icon_star-empty"];
		}
		if (value === 5) {
			return ["icon_star", "icon_star", "icon_star", "icon_star", "icon_star"];
		}
	};
	return (
		<div className="max-w-xs h-72 mx-auto">
			<div className="flex gap-4">
				<p className="font-semibold ml-4">{reviewsUser.name}</p>
				<div className="flex gap-2 mb-auto">
					{numberOfStars(reviewsUser.note)?.map((starPath, index) => (
						<Image
							key={reviewsUser.id + index}
							alt="icône d'une étoile"
							src={`./icons/${starPath}.svg`}
							width={20}
							height={20}
						></Image>
					))}
				</div>
			</div>
			<div className="bubbleReview w-full">
				<p className="bubbleCorner" />
				<p className="bubbleText">{reviewsUser.comment}</p>
			</div>
		</div>
	);
};

export default ReviewsUserCard;
