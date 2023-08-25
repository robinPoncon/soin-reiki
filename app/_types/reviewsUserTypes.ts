export type ReviewsUser = {
	id: number;
	name: string;
	comment: string;
	note: number;
};

export type ReviewsUsers = {
	reviewsUsers: ReviewsUser[];
};
