"use client";

import Link from "next/link";
import "./Footer.scss";
import ReviewsUsers from "../ReviewsUsers/ReviewsUsers";
import { useDatas } from "@/_context/ReviewsUsersDataContext";
import { useLoader } from "@/_context/LoaderContext";

const Footer = () => {
	const { reviewsUsers } = useDatas();

	const { isLoading } = useLoader();

	return (
		<footer
			className={`bg-darkTurquoise text-darkTurquoiseLighter p-5 ${isLoading ? "blur" : ""}`}
		>
			<div className="flex flex-col justify-around md:mt-8 lg:flex-row">
				<div className="flex flex-col justify-center gap-10 md:flex-row md:gap-20 md:mb-10 lg:gap-10 lg:mb-0 xl:gap-20">
					<div className="mt-5 text-center md:text-start">
						<h2 className="mb-5 italic font-semibold tracking-widest">NAVIGATION</h2>
						<ul className="flex flex-col gap-2">
							<li>
								<Link
									className="lightHover"
									href="/"
								>
									Accueil
								</Link>
							</li>
							<li>
								<Link
									className="lightHover"
									href="/mon-histoire"
								>
									Mon Histoire
								</Link>
							</li>
							<li>
								<Link
									className="lightHover"
									href="/soin-reiki"
								>
									Soin reiki
								</Link>
							</li>
							<li>
								<Link
									className="lightHover"
									href="/guidance"
								>
									Guidance des Cartes
								</Link>
							</li>
							<li>
								<Link
									className="lightHover"
									href="/pleine-conscience"
								>
									Pleine Conscience
								</Link>
							</li>
							<li>
								<Link
									className="lightHover"
									href="/voyage-sonore"
								>
									Voyage Sonore
								</Link>
							</li>
							<li>
								<Link
									className="lightHover"
									href="/tarifs"
								>
									Tarifs
								</Link>
							</li>
							<li>
								<Link
									className="lightHover"
									href="/reservation"
								>
									Réservation
								</Link>
							</li>
							<li>
								<Link
									className="lightHover"
									href="/contact"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className="mt-5 text-center md:text-start">
						<h2 className="mb-5 italic font-semibold tracking-widest">À PROPOS</h2>
						<div className="flex flex-col gap-2">
							<p className="text-sm">Robin Ponçon</p>
							<p className="text-sm">59 rue Pierre Renaudel</p>
							<p className="text-sm">33130 Bègles</p>
							<p className="text-sm">
								Email:{" "}
								<a
									className="lightHover"
									href="mailto:poncon.robin@gmail.com"
								>
									poncon.robin@gmail.com
								</a>
							</p>
						</div>
					</div>
					<div className="mt-5 text-center mb-10 md:text-start md:mb-0">
						<h2 className="mb-5 italic font-semibold tracking-widest">INFORMATIONS</h2>
						<ul className="flex flex-col gap-2">
							<li>
								<Link
									className="lightHover"
									href="/mentions-legales"
								>
									Mentions légales
								</Link>
							</li>
							<li>
								<Link
									className="lightHover"
									href="/protection-donnee"
								>
									Protection des données
								</Link>
							</li>
							<li>
								<Link
									className="lightHover"
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
			<div className="text-center">
				© 2023 - {new Date().getFullYear()}. Les Racines de la Guérison. Tous droits
				réservés.
			</div>
		</footer>
	);
};

export default Footer;
