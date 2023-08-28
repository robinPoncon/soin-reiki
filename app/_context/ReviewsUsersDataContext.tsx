"use client";

import { ReviewsUserType, ReviewsUsersType } from "@/_types/reviewsUsersTypes";
import { createContext, useState, useContext, ReactNode, useEffect } from "react";

const ReviewsUsersDataContext = createContext<ReviewsUsersType>({
	reviewsUsers: []
});

export const ReviewsUsersDataProvider = ({ children }: { children: ReactNode }) => {
	const [reviewsUsers, setReviewsUsers] = useState<ReviewsUserType[]>([]);

	useEffect(() => {
		setReviewsUsers([
			{
				id: 1,
				name: "Jean-Michèle",
				comment:
					"Je ne connaissais pas cette méthode de soin énergétique et je dois avouer que j'ai été bluffer par son efficacité !",
				note: 5
			},
			{
				id: 2,
				name: "Maelly",
				comment:
					"Grâce à Robin j'ai pu récupérer un sommeil convenable après 2 ans de bataille d'insomnies",
				note: 5
			},
			{
				id: 3,
				name: "Antoine",
				comment:
					"C'était un ancien collègue et je dois dire que ses capacités de guérisons sont très efficace sur des brûlures.",
				note: 4
			},
			{
				id: 4,
				name: "Peggy",
				comment:
					"A chaque fois soin que j'effectue avec Robin c'est un moment de bonheur et de détente profonde. Je recommande à 100% !",
				note: 5
			},
			{
				id: 5,
				name: "Robin",
				comment: "C'était une belle découverte ! Ses tirages de carte m'ont parlé.",
				note: 4
			}
		]);
	}, []);

	return (
		<ReviewsUsersDataContext.Provider value={{ reviewsUsers }}>
			{children}
		</ReviewsUsersDataContext.Provider>
	);
};

export const useDatas = () => {
	return useContext(ReviewsUsersDataContext);
};

export default ReviewsUsersDataContext;
