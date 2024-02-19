"use client";

import { useLoader } from "@/_context/LoaderContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./HeaderMenu.scss";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

const HeaderMenu = () => {
	const { isLoading } = useLoader();
	const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
	const nodeRef = useRef(null);

	const isActiveLink = (path: string) => {
		return usePathname() === path;
	};

	return (
		<header className={`headerComponent ${isLoading ? "blur" : ""}`}>
			<div className="hidden lg:block">
				<Link
					href="/"
					className="websiteName"
				>
					Les Racines <br /> de la Guérison
				</Link>
				<nav>
					<ul className="flex justify-center gap-5 h-full ml-9 xl:gap-8">
						<li className="showServices">
							<p
								className={`servicesText greenLight text-xl leading-[80px] ${
									isActiveLink("/soin-reiki") || isActiveLink("/guidance")
										? "activeLink"
										: ""
								}`}
							>
								Services
								<span className="servicesIcon" />
							</p>
							<div className="flex flex-col">
								<p>
									<Link
										className={`greenLight text-lg ${
											isActiveLink("/guidance") ? "activeLink" : ""
										}`}
										href="/guidance"
									>
										Guidance des Cartes
									</Link>
								</p>
								<p>
									<Link
										className={`greenLight text-lg ${
											isActiveLink("/soin-reiki") ? "activeLink" : ""
										}`}
										href="/soin-reiki"
									>
										Soin Reiki
									</Link>
								</p>
								<p>
									<Link
										className={`greenLight text-lg ${
											isActiveLink("/voyage-sonore") ? "activeLink" : ""
										}`}
										href="/voyage-sonore"
									>
										Voyage Sonore
									</Link>
								</p>
								<p>
									<Link
										className={`greenLight text-lg ${
											isActiveLink("/pleine-conscience") ? "activeLink" : ""
										}`}
										href="/pleine-conscience"
									>
										Pleine Conscience
									</Link>
								</p>
							</div>
						</li>
						<li className="mr-24 xl:mr-40">
							<Link
								className={`greenLight text-xl leading-[80px] ${
									isActiveLink("/tarifs") ? "activeLink" : ""
								}`}
								href="/tarifs"
							>
								Tarifs
							</Link>
						</li>
						<li>
							<Link
								className={`greenLight text-xl leading-[80px] ${
									isActiveLink("/reservation") ? "activeLink" : ""
								}`}
								href="/reservation"
							>
								Réservation
							</Link>
						</li>
						<li>
							<Link
								className={`greenLight text-xl leading-[80px] ${
									isActiveLink("/contact") ? "activeLink" : ""
								}`}
								href="/contact"
							>
								Contact
							</Link>
						</li>
					</ul>
					<Link
						href="/"
						className="block mt-5 logoLink"
					>
						<Image
							className="logo"
							alt="Logo du site internet avec un arbre et de l'énergie"
							src="/logos/logo_website.png"
							height={100}
							width={100}
							priority
						/>
					</Link>
				</nav>
				<Link
					href="/connexion"
					className="loginLinkBloc"
				>
					<p className={`greenLight ${isActiveLink("/connexion") ? "activeLink" : ""}`}>
						Connexion
					</p>
					<p
						className={`iconContent ${isActiveLink("/connexion") ? "activeLink" : ""}`}
					></p>
				</Link>
			</div>
			<div className="headerContentMobile lg:hidden">
				<button onClick={() => setOpenMobileMenu(!openMobileMenu)}>
					<Image
						alt={openMobileMenu ? "icône fermeture menu" : "icône menu hamburger"}
						src={
							openMobileMenu
								? "/icons/icon_close-white.svg"
								: "/icons/icon_menu-mobile.svg"
						}
						width={48}
						height={48}
					></Image>
				</button>
				<CSSTransition
					timeout={{ enter: 750, exit: 350 }}
					in={openMobileMenu}
					unmountOnExit
					nodeRef={nodeRef}
					classNames="mobileNavTransition"
				>
					<nav className="mobileNav">
						<ul
							ref={nodeRef}
							className="flex flex-col gap-5 w-fit mx-auto mt-10"
						>
							<li onClick={() => setOpenMobileMenu(false)}>
								<Link
									className={`greenLight text-xl ${
										isActiveLink("/mon-histoire") ? "activeLink" : ""
									}`}
									href="/mon-histoire"
								>
									Mon Histoire
								</Link>
							</li>
							<li onClick={() => setOpenMobileMenu(false)}>
								<Link
									className={`greenLight text-xl ${
										isActiveLink("/soin-reiki") ? "activeLink" : ""
									}`}
									href="/soin-reiki"
								>
									Soin Reiki
								</Link>
							</li>
							<li onClick={() => setOpenMobileMenu(false)}>
								<Link
									className={`greenLight text-xl ${
										isActiveLink("/guidance") ? "activeLink" : ""
									}`}
									href="/guidance"
								>
									Guidance
								</Link>
							</li>
							<li onClick={() => setOpenMobileMenu(false)}>
								<Link
									className={`greenLight text-xl ${
										isActiveLink("/tarifs") ? "activeLink" : ""
									}`}
									href="/tarifs"
								>
									Tarifs
								</Link>
							</li>
							<li onClick={() => setOpenMobileMenu(false)}>
								<Link
									className={`greenLight text-xl ${
										isActiveLink("/reservation") ? "activeLink" : ""
									}`}
									href="/reservation"
								>
									Réservation
								</Link>
							</li>
							<li onClick={() => setOpenMobileMenu(false)}>
								<Link
									className={`greenLight text-xl ${
										isActiveLink("/contact") ? "activeLink" : ""
									}`}
									href="/contact"
								>
									Contact
								</Link>
							</li>
						</ul>
					</nav>
				</CSSTransition>
				<Link
					onClick={() => setOpenMobileMenu(false)}
					href="/"
					className="mainTitleSmallMobile sm:hidden"
				>
					Les Racines <br /> de la Guérison
				</Link>
				<Link
					onClick={() => setOpenMobileMenu(false)}
					href="/"
					className="mainTitleMobile hidden sm:block"
				>
					Les Racines de la Guérison
				</Link>
				{!openMobileMenu && (
					<Link
						href="/"
						className="logoOnMobile hidden sm:block"
					>
						<Image
							alt="Logo du site internet avec un arbre et de l'énergie"
							src="/logos/logo_website.png"
							height={80}
							width={80}
							priority
						/>
					</Link>
				)}
				<Link
					onClick={() => setOpenMobileMenu(false)}
					href="/connexion"
					className={`loginLinkBlocMobile ${
						isActiveLink("/connexion") ? "activeLink" : ""
					}`}
					aria-label="connexion"
				/>
			</div>
		</header>
	);
};

export default HeaderMenu;
