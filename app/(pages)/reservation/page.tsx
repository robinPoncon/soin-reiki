"use client";

import { useEffect, useState } from "react";
import "./page.scss";

const ReservationPage = () => {
	return (
		<div className="reservationPageComponent">
			<h1 className="text-4xl mx-auto w-fit customBorderBlue p-4">Réserver ma séance</h1>
			<div className="mt-10">
				<iframe
					src={process.env.NEXT_PUBLIC_GOOGLE_AGENDA_LINK}
					width="100%"
					height="650"
					scrolling="no"
					style={{ border: "none" }}
				></iframe>
			</div>
		</div>
	);
};

export default ReservationPage;
