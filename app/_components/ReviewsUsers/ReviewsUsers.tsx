import { ReviewsUser } from "@/_types/reviewsUserTypes";

type ReviewsUsersProps = {
	reviewsUsers: ReviewsUser[];
};

const ReviewsUsers = ({ reviewsUsers }: ReviewsUsersProps): JSX.Element => {
	return (
		<div>
			{reviewsUsers?.map((reviewUser) => (
				<div key={reviewUser.id}>
					<div>
						<p>{reviewUser.name}</p>
						<p>{reviewUser.note}</p>
					</div>
					<p>{reviewUser.comment}</p>
				</div>
			))}
		</div>
	);
};

export default ReviewsUsers;
