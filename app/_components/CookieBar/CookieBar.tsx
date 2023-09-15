"use client";

import { useEffect, useState } from "react";
import "./CookieBar.scss";

const CookieBar = () => {
	const [consent, setConsent] = useState<boolean | null>(false);

	useEffect(() => {
		setConsent(localStorage?.getItem("cookieConsent") === "true" ? true : null);
	}, []);

	const handleAccept = () => {
		localStorage.setItem("cookieConsent", "true");
		setConsent(true);
	};

	const handleDecline = () => {
		localStorage.setItem("cookieConsent", "false");
		setConsent(false);
	};

	return consent === null ? (
		<div className="cookieBarComponent">
			<div className="text-sm">
				<p>
					J'utilise des cookies pour vous offrir la meilleure expérience possible sur mon
					site.
				</p>
				<p>
					En cliquant sur "Accepter", vous consentez à l'utilisation de tous les cookies.
					Si vous préférez ne pas les accepter, vous pouvez choisir de les refuser.
				</p>
			</div>
			<div className="flex gap-10 mr-10">
				<button onClick={handleAccept}>Accepter</button>
				<button onClick={handleDecline}>Refuser</button>
			</div>
		</div>
	) : null;
};

export default CookieBar;
