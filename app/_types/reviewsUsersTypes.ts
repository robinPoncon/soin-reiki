export type ReviewsUserType = {
	id: number;
	name: string;
	comment: string;
	note: number;
};

export type ReviewsUsersType = {
	reviewsUsers: ReviewsUserType[];
};
