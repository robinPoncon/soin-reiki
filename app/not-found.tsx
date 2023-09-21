"use client";

import { useEffect, useState } from "react";

const Custom404 = () => {
	const [seconds, setSeconds] = useState<number>(20);

	useEffect(() => {
		if (seconds > 0) {
			const interval = setInterval(() => {
				setSeconds(seconds - 1);
			}, 1000);

			return () => {
				clearInterval(interval);
			};
		} else {
			window.location.href = "/";
		}
	}, [seconds]);

	return (
		<section className="flex flex-col gap-10 py-20 px-1">
			<h1 className="titleFont font-semibold text-center text-2xl mx-auto w-fit customBorderBlue p-4 md:text-4xl">
				Oups, il semble que cette page n'existe pas !
			</h1>
			<p className="text-justify italic mx-auto px-3 sm:max-w-lg md:max-w-2xl">
				Vous allez être automatiquement redirigé sur la page d'accueil dans{" "}
				<strong>{seconds} secondes</strong>, mais vous pouvez choisir d'aller visiter une autre
				page grâce au menu de navigation !
			</p>
		</section>
	);
};

export default Custom404;
