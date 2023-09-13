"use client";
import Link from "next/link";
import "./page.scss";

const ReservationPage = () => {
	return (
		<section className="reservationPageComponent">
			<h1 className="text-4xl mx-auto w-fit customBorderPink p-4">Réserver ma séance</h1>
			<div className="mt-12 relative z-10 -mb-20">
				<h2 className="text-2xl text-center font-semibold italic">
					Important à savoir avant de réserver !
				</h2>
				<p className="text-justify mt-5 max-w-lg mx-auto">
					Les réservations se font uniquement pour les prises de rendez-vous en présentiel
					! Pour un rendez-vous à distance merci de bien vouloir me contacter par email ou
					via{" "}
					<Link
						className="redirectLinkPink"
						href="/contact"
					>
						page de contact
					</Link>
					.
				</p>
			</div>
			<div className="hidePartOfIframe"></div>
			<iframe
				src={process.env.NEXT_PUBLIC_GOOGLE_AGENDA_LINK}
				width="100%"
				height="530"
				scrolling="no"
				style={{ border: "none" }}
			></iframe>
		</section>
	);
};

export default ReservationPage;
