"use client";

import Link from "next/link";

const ReservationPage = () => {
	return (
		<section className="flex flex-col gap-20 py-20 lg:px-24">
			<h1 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderPink p-4 md:text-4xl">
				Réserver ma séance
			</h1>
			<div>
				<h2 className="text-xl text-center font-semibold italic md:text-2xl">
					Important à savoir avant de réserver !
				</h2>
				<p className="text-justify mt-5 max-w-lg mx-auto px-4">
					Les réservations se font uniquement pour les prises de rendez-vous en présentiel
					! Pour un rendez-vous à distance merci de bien vouloir me contacter par email ou
					via la{" "}
					<Link
						className="redirectLinkPink"
						href="/contact"
					>
						page de contact
					</Link>
					.
				</p>
			</div>
			<iframe
				title="Récupération du système de réservation de google calendar"
				className="h-[1520px] sm:h-[1300px] md:h-[720px] outline-offset-0"
				src={process.env.NEXT_PUBLIC_GOOGLE_AGENDA_LINK}
				width="100%"
				scrolling="no"
				style={{ border: "none" }}
			></iframe>
		</section>
	);
};

export default ReservationPage;
