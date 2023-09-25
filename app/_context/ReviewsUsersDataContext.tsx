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
				name: "Maelly C",
				comment: `Que dire de Robin ? Sagesse, bienveillance, douceur, patience et bonne humeur !
					Robin m'a donné "le coup de pouce" dont on a besoin pour vivre sa vie plus sereinement. 
					Merci pour tout, je ne peux que conseiller Robin !`,
				note: 5
			},
			{
				id: 2,
				name: "Elsa D",
				comment: `J'ai fait deux séances de Reiki avec Robin, qui m'ont beaucoup aidée à apaiser des peines
					et me sentir plus légère. Après la séance, Robin a su poser des mots sur des émotions que 
					je n'arrivais pas à cerner moi-même. Je ne peux que recommander !`,
				note: 5
			},
			{
				id: 3,
				name: "Frédéric P",
				comment: `J'avais des douleurs au ventre depuis deux mois et en quelques séances, les douleurs 
					ont disparu. Bluffant !`,
				note: 5
			},
			{
				id: 4,
				name: "Antoine D",
				comment:
					"A chaque fois soin que j'effectue avec Robin c'est un moment de bonheur et de détente profonde. Je recommande à 100% !",
				note: 5
			},
			{
				id: 5,
				name: "Adeline P",
				comment: `Pour ma première séance de reiki je me suis senti vraiment bien, les douleurs se sont 
					rapidement atténuées, je recommande !`,
				note: 5
			},
			{
				id: 6,
				name: "Maëlys G",
				comment: `Pour ma première séance de reiki je me suis senti vraiment bien, les douleurs se sont 
					rapidement atténuées, je recommande !`,
				note: 5
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
