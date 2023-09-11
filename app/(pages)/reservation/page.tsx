"use client";

import "./page.scss";

const ReservationPage = () => {
	return (
		<div className="reservationPageComponent">
			Salut c'est la partie Réservation
			<iframe
				src={process.env.GOOGLE_AGENDA_LINK}
				width="100%"
				height="600"
				scrolling="no"
			></iframe>
		</div>
	);
};

export default ReservationPage;
