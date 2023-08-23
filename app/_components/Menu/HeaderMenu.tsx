"use client";

import { useLoader } from "@/_context/LoaderContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./HeaderMenu.scss";

const HeaderMenu = () => {
	const { isLoading } = useLoader();

	const isActiveLink = (path: string) => {
		return usePathname() === path;
	};

	return (
		<header className={`headerComponent ${isLoading ? "blur" : ""}`}>
			<nav>
				<ul className="flex justify-center gap-5 h-full ml-10">
					<li>
						<Link
							className={`greenLight leading-[80px] ${
								isActiveLink("/soin-reiki") ? "activeLink" : ""
							}`}
							href="/soin-reiki"
						>
							Soin Reiki
						</Link>
					</li>
					<li>
						<Link
							className={`greenLight leading-[80px] ${
								isActiveLink("/tarifs") ? "activeLink" : ""
							}`}
							href="/tarifs"
						>
							Tarifs
						</Link>
					</li>
					<li>
						<Link
							href="/"
							className="block mt-5"
						>
							<Image
								className="logo"
								alt="website logo with a tree and energy"
								src="/logos/website-logo.png"
								height={100}
								width={100}
							/>
						</Link>
					</li>
					<li>
						<Link
							className={`greenLight leading-[80px] ${
								isActiveLink("/reservation") ? "activeLink" : ""
							}`}
							href="/reservation"
						>
							Réservation
						</Link>
					</li>
					<li>
						<Link
							className={`greenLight leading-[80px] ${
								isActiveLink("/contact") ? "activeLink" : ""
							}`}
							href="/contact"
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default HeaderMenu;
