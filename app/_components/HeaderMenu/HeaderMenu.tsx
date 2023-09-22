"use client";

import { useLoader } from "@/_context/LoaderContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./HeaderMenu.scss";
import { useState } from "react";

const HeaderMenu = () => {
	const { isLoading } = useLoader();
	const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

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
					Les racines <br /> de la guérison
				</Link>
				<nav>
					<ul className="flex justify-center gap-5 h-full ml-9">
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
											isActiveLink("/guidance") ? "activeLink" : ""
										}`}
										href="/guidance"
									>
										Guidance
									</Link>
								</p>
							</div>
						</li>
						<li className="mr-24">
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
				{openMobileMenu && (
					<nav className="mobileNav">
						<ul>
							<li>
								<p>
									Services
									<span className="servicesIcon" />
								</p>
								<div className="flex flex-col">
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
												isActiveLink("/guidance") ? "activeLink" : ""
											}`}
											href="/guidance"
										>
											Guidance
										</Link>
									</p>
								</div>
							</li>
						</ul>
					</nav>
				)}
				<Link
					href="/"
					className="mainTitleSmallMobile sm:hidden"
				>
					Les racines <br /> de la guérison
				</Link>
				<Link
					href="/"
					className="mainTitleMobile hidden sm:block"
				>
					Les racines de la guérison
				</Link>
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
				<Link
					href="/connexion"
					className={`loginLinkBlocMobile ${
						isActiveLink("/connexion") ? "activeLink" : ""
					}`}
				/>
			</div>
		</header>
	);
};

export default HeaderMenu;
