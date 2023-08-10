"use client";

import Image from "next/image";

const HeaderMenu = () => {
	return (
		<header className="fixed top-0 w-full h-20 bg-darker">
			<ul className="flex justify-center gap-5 h-full ml-10">
				<li className="greenLight leading-[80px]">
					<a href="/">Soin Reiki</a>
				</li>
				<li className="greenLight leading-[80px]">
					<a href="/tarifs">Tarifs</a>
				</li>
				<li>
					<a
						href="/"
						className="block mt-5"
					>
						<Image
							className="rounded-full"
							alt="website logo with a tree and energy"
							src="/website-logo.png"
							height={100}
							width={100}
						/>
					</a>
				</li>
				<li className="greenLight leading-[80px]">
					<a href="/reservation">Réservation</a>
				</li>
				<li className="greenLight leading-[80px]">
					<a href="/contact">Contact</a>
				</li>
			</ul>
		</header>
	);
};

export default HeaderMenu;
