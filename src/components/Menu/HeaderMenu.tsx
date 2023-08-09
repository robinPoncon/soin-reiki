"use client";

import Image from "next/image";

const HeaderMenu = () => {
	return (
		<header className="fixed w-full h-20 bg-darker">
			<div>
				<Image
					className="rounded-full mx-auto mt-5"
					alt="website logo with a tree and energy"
					src="/website-logo.png"
					height={100}
					width={100}
				/>
			</div>
		</header>
	);
};

export default HeaderMenu;
