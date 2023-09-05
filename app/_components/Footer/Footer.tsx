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
			<div className="flex justify-around">
				<div className="flex justify-center gap-20">
					<div className="mt-5">
						<h3 className="mb-3 italic borderBottomBlue">NAVIGATION</h3>
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
					<div className="mt-5">
						<h3 className="mb-3 italic borderBottomBlue">À PROPOS</h3>
						<p>Robin Ponçon</p>
						<p>59 rue Pierre Renaudel</p>
						<p>33130 Bègles</p>
						<p>
							E-mail:{" "}
							<a
								className="greenLight"
								href="mailto:poncon.robin@gmail.com"
							>
								poncon.robin@gmail.com
							</a>
						</p>
					</div>
					<div className="mt-5">
						<h3 className="mb-3 italic borderBottomBlue">INFORMATIONS</h3>
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
				</div>
				<ReviewsUsers
					fullWidth
					isOnlyToShow
					reviewsUsers={reviewsUsers}
				/>
			</div>
			<div className="text-center mt-5">
				© 2023 - {new Date().getFullYear()}. Les racines de la guérison. Tous droits
				réservés.
			</div>
		</footer>
	);
};

export default Footer;
