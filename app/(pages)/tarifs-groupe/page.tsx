"use client";

import Link from "next/link";
import "./page.scss";

const PriceList = () => {
	return (
		<section className="flex flex-col px-4 gap-14 py-20">
			<h1 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderPink p-4 md:text-4xl">
				Tarifs du Voyage Sonore de groupe
			</h1>
			<p className="max-w-3xl mx-auto text-justify italic">
				Vous retrouverez ci-dessous les différents <strong>tarifs</strong> pour les groupes
				de <strong>2 à 10 personnes</strong>. Lorsque le groupe compte 11 personnes ou plus,
				le prix par personne augmente de 10€. Par exemple, pour un groupe de{" "}
				<strong>16 personnes</strong>, le prix total serait de <strong>400€</strong>,
				calculé comme suit : 340€ de base plus 6 fois 10€ pour chaque personne
				supplémentaire.
			</p>
			<article>
				<div className="max-w-md mx-auto bg-white rounded-xl">
					<div className="flex justify-between sm:text-lg rounded-t-xl font-semibold p-6 text-center bg-pinkLighter">
						<h2 className="whitespace-nowrap">Nombre de participants</h2>
						<h2 className="whitespace-nowrap hidden sm:block">Prix Total</h2>
						<h2 className="whitespace-nowrap sm:hidden">Prix</h2>
					</div>

					<div className="flex flex-col gap-4">
						<div className="px-6 pt-6 flex justify-between">
							<p className="sm:text-lg">2 personnes</p>
							<p className="font-semibold text-lg sm:text-xl">150€</p>
						</div>
						<p className="separateLine" />
						<div className="px-6 flex justify-between">
							<p className="sm:text-lg">3 personnes</p>
							<p className="font-semibold text-lg sm:text-xl">180€</p>
						</div>
						<p className="separateLine" />
						<div className="px-6 flex justify-between">
							<p className="sm:text-lg">4 personnes</p>
							<p className="font-semibold text-lg sm:text-xl">210€</p>
						</div>
						<p className="separateLine" />
						<div className="px-6 flex justify-between">
							<p className="sm:text-lg">5 personnes</p>
							<p className="font-semibold text-lg sm:text-xl">240€</p>
						</div>
						<p className="separateLine" />
						<div className="px-6 flex justify-between">
							<p className="sm:text-lg">6 personnes</p>
							<p className="font-semibold text-lg sm:text-xl">260€</p>
						</div>
						<p className="separateLine" />
						<div className="px-6 flex justify-between">
							<p className="sm:text-lg">7 personnes</p>
							<p className="font-semibold text-lg sm:text-xl">280€</p>
						</div>
						<p className="separateLine" />
						<div className="px-6 flex justify-between">
							<p className="sm:text-lg">8 personnes</p>
							<p className="font-semibold text-lg sm:text-xl">300€</p>
						</div>
						<p className="separateLine" />
						<div className="px-6 flex justify-between">
							<p className="sm:text-lg">9 personnes</p>
							<p className="font-semibold text-lg sm:text-xl">320€</p>
						</div>
						<p className="separateLine" />
						<div className="px-6 pb-6 flex justify-between">
							<p className="sm:text-lg">10 personnes</p>
							<p className="font-semibold text-lg sm:text-xl">340€</p>
						</div>
					</div>
				</div>
			</article>
			<div className="flex flex-col gap-2">
				<h3 className="text-lg sm:text-xl text-center font-semibold italic mb-2 px-4">
					Envie de tenter l'expérience ?
				</h3>
				<Link
					href="/contact"
					className="flex actionLinkPink xsmallBtn"
				>
					<span className="textActionLink">Je prends contact</span>
					<span className="iconActionLink" />
				</Link>
			</div>
		</section>
	);
};

export default PriceList;
