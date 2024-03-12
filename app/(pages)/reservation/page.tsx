"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ReservationPage = () => {
	const [breakpointResponsiveValue, setBreakpointResponsiveValue] = useState<number>(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setBreakpointResponsiveValue(window.innerWidth);
			window.scrollTo(0, 0);
		}
	}, []);

	return (
		<section>
			<div className="flex flex-col gap-20 py-20 lg:px-24">
				<h1 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderPink p-4 md:text-4xl">
					Réserver ma séance
				</h1>
				<div>
					<h2 className="text-xl text-center font-semibold italic md:text-2xl">
						Important à savoir avant de réserver !
					</h2>
					<p className="text-justify mt-5 max-w-lg mx-auto px-4">
						Les réservations se font uniquement pour les séances d'accompagnement
						énergétique ! Pour une prestation musicale merci de bien vouloir me
						contacter par email ou via la{" "}
						<Link
							className="redirectLinkPink"
							href="/contact"
						>
							page de contact
						</Link>
						.
					</p>
				</div>
			</div>
			<iframe
				title="Récupération du système de réservation de google calendar"
				className="outline-offset-0 mx-auto relative bg-white rounded-lg h-[1520px] sm:h-[1300px] md:h-[720px]"
				src={process.env.NEXT_PUBLIC_GOOGLE_AGENDA_LINK}
				width={breakpointResponsiveValue < 1280 ? "100%" : "1280px"}
				scrolling="no"
				style={{ border: "none" }}
			></iframe>
			<div className="reservationBottomBg" />
		</section>
	);
};

export default ReservationPage;
