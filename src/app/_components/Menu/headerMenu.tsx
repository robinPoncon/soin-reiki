"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HeaderMenu = () => {
	const [pageURL, setPageURL] = useState<string>("");

	useEffect(() => {
		setPageURL(document.URL);
	}, []);

	const isURLContains = (path: string) => {
		return pageURL.includes(path);
	};

	return (
		<header className="fixed top-0 w-full h-20 bg-darkTurquoise z-10">
			<ul className="flex justify-center gap-5 h-full ml-10">
				<li>
					<a
						className={`greenLight leading-[80px] ${isURLContains("soin-reiki") ? "activeLink" : ""}`}
						href="/soin-reiki"
					>
						Soin Reiki
					</a>
				</li>
				<li>
					<a
						className={`greenLight leading-[80px] ${isURLContains("tarifs") ? "activeLink" : ""}`}
						href="/tarifs"
					>
						Tarifs
					</a>
				</li>
				<li>
					<a
						href="/"
						className="block mt-5"
					>
						<Image
							className="rounded-full"
							alt="website logo with a tree and energy"
							src="/logos/website-logo.png"
							height={100}
							width={100}
						/>
					</a>
				</li>
				<li>
					<a
						className={`greenLight leading-[80px] ${isURLContains("reservation") ? "activeLink" : ""}`}
						href="/reservation"
					>
						Réservation
					</a>
				</li>
				<li>
					<a
						className={`greenLight leading-[80px] ${isURLContains("contact") ? "activeLink" : ""}`}
						href="/contact"
					>
						Contact
					</a>
				</li>
			</ul>
		</header>
	);
};

export default HeaderMenu;
