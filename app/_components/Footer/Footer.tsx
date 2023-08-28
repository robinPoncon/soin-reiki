"use client";

import Link from "next/link";
import "./Footer.scss";
import ReviewsUsers from "../ReviewsUsers/ReviewsUsers";
import { useDatas } from "@/_context/ReviewsUsersDataContext";

const Footer = () => {
	const { reviewsUsers } = useDatas();
	console.log(reviewsUsers);

	return (
		<footer className="bg-darkTurquoise text-customWhite p-5">
			<div className="flex justify-center gap-10">
				<div>
					<h3 className="mb-3 italic">NAVIGATION</h3>
					<ul>
						<li>
							<Link
								className="greenLight"
								href="/"
							>
								Accueil
							</Link>
						</li>
						<li>
							<Link
								className="greenLight"
								href="/soin-reiki"
							>
								Soin reiki
							</Link>
						</li>
						<li>
							<Link
								className="greenLight"
								href="/tarifs"
							>
								Tarifs
							</Link>
						</li>
						<li>
							<Link
								className="greenLight"
								href="/reservation"
							>
								Réservation
							</Link>
						</li>
						<li>
							<Link
								className="greenLight"
								href="/contact"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="mb-3 italic">À PROPOS</h3>
					<p>Robin Ponçon</p>
					<p>59 rue Pierre Renaudel</p>
					<p>33130 Bègles</p>
					<p>E-mail: poncon.robin@gmail.com</p>
				</div>
				<div>
					<h3 className="mb-3 italic">INFORMATIONS</h3>
					<ul>
						<li>
							<Link
								className="greenLight"
								href="/mentions-legales"
							>
								Mentions légales
							</Link>
						</li>
						<li>
							<Link
								className="greenLight"
								href="/protection-donnee"
							>
								Protection des données
							</Link>
						</li>
						<li>
							<Link
								className="greenLight"
								href="/certifications"
							>
								Mes certifications
							</Link>
						</li>
					</ul>
				</div>
				<ReviewsUsers
					isOnlyToShow
					reviewsUsers={reviewsUsers}
				/>
			</div>
			<div className="text-center mt-5">
				© 2023 - {new Date().getFullYear()} Reiki - Les racines de guérison. Tous droits
				réservés.
			</div>
		</footer>
	);
};

export default Footer;
