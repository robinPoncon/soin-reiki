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
				comment: `J'ai consulté Robin pour des rééquilibrages énergétiques et des soins reiki pour des 
					problèmes de dos. Un autre point très positif est le fait que ces séances m'ont aidées à dormir 
					et à avoir un bien meilleur sommeil. Du coup je recommande Robin et ses soins les yeux fermés !!`,
				note: 5
			},
			{
				id: 5,
				name: "Harris R",
				comment: `Super expérience ! Robin est très prévenant. A l'issue de la séance de Reiki, je me suis senti 
					léger et revigoré. Je recommande.`,
				note: 5
			},
			{
				id: 6,
				name: "Lucie T",
				comment: `J'ai pu expérimenté un soin Reiki avec Robin qui a su me comprendre et m'écouter. 
					Il m'a donné des conseils sur les choses à améliorer pour mon bien être et j'en ai ressenti les effets.
					En plus d'être un très bon soigneur c'est une personne super. Merci Robin!`,
				note: 5
			},
			{
				id: 7,
				name: "Amélie F",
				comment: `J'ai fais quelques séances de Reiki avec Robin qui m'ont profondément apaisé. J'ai également 
					fais 2-3 séances de tirage de cartes, qui s'avèrent être très réaliste. Si vous souhaitez des soins reiki 
					et des tirages de cartes, Robin sera être à votre écoute, vous pouvez y aller les yeux fermés !
				`,
				note: 5
			},
			{
				id: 8,
				name: "Mélie C",
				comment: `J’ai effectué un soin énergétique avec Robin qui m’a super bien accueilli et mis parfaitement à l’aise. 
					Je recommande vivement ! Bienveillance et sérieux sont au rendez-vous, merci pour cette expérience !
				`,
				note: 5
			},
			{
				id: 9,
				name: "Guillaume M",
				comment: `Rencontre en toute simplicité grâce à l’écoute et l’accueil de Robin. Être à l’écoute de son corps est
				 	la clé afin que Robin puisse vous donner son meilleur. Il est engagé dans son travail et vous aidera, avec une
					véritable volonté, si vous vous engagez aussi. Je suis certain que nous nous reverrons ! Merci mille fois !`,
				note: 5
			},
			{
				id: 10,
				name: "Julien S",
				comment: `J'ai eu la chance de passer entre les mains de Robin, et même en étant habitué aux soins énergétiques etc.
					J'ai senti une puissance très intense chez Robin. Il a réussi à me libérer très rapidement de poids que je 
					supportais depuis très longtemps. Merci encore pour ta bienveillance et ton empathie !`,
				note: 5
			},
			{
				id: 11,
				name: "Adeline P",
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
