"use client";

import Image from "next/image";

const HeaderMenu = () => {
	return (
		<header className="fixed top-0 w-full h-20 bg-darker">
			<ul className="flex justify-center gap-5">
				<li>A propos</li>
				<li></li>
				<li className="cursor-pointer">
					<a href="/reservation">RÉSERVATION</a>
				</li>
				<li className="cursor-pointer">
					<a href="/contact">CONTACT</a>
				</li>
			</ul>
			<a href="/" className="mx-auto block w-fit">
				<Image
					className="rounded-full"
					alt="website logo with a tree and energy"
					src="/website-logo.png"
					height={100}
					width={100}
				/>
			</a>
		</header>
	);
};

export default HeaderMenu;
