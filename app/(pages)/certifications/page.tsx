"use client";

import Image from "next/image";
import "./page.scss";

const CertificationsPage = () => {
	const openImgInNewWindow = (path: string) => {
		window.open(path, "_blank");
	};

	return (
		<section className="pt-20 bg-darkBackground text-customWhite">
			<h1 className="text-4xl mb-20 mx-auto w-fit customBorderYellow p-4">
				Mes certifications
			</h1>
			<div className="flex justify-around">
				<Image
					className="rounded-lg cursor-pointer hoverShadow"
					alt="diplome reiki niveau 1"
					src="/diplome_reiki-niveau-1.jpg"
					onClick={() => openImgInNewWindow("/diplome_reiki-niveau-1.jpg")}
					width={400}
					height={600}
				></Image>
				<Image
					className="rounded-lg cursor-pointer hoverShadow"
					alt="diplome reiki niveau 2"
					src="/diplome_reiki-niveau-2.jpg"
					onClick={() => openImgInNewWindow("/diplome_reiki-niveau-2.jpg")}
					width={400}
					height={600}
				></Image>
			</div>
			<div className="flex justify-around py-20">
				<Image
					className="rounded-lg cursor-pointer hoverShadow"
					alt="diplome reiki niveau 3"
					src="/diplome_reiki-niveau-3.jpg"
					onClick={() => openImgInNewWindow("/diplome_reiki-niveau-3.jpg")}
					width={400}
					height={600}
				></Image>
				<Image
					className="rounded-lg cursor-pointer hoverShadow"
					alt="diplome cartomancie"
					src="/diplome_cartomancie.jpg"
					onClick={() => openImgInNewWindow("/diplome_cartomancie.jpg")}
					width={400}
					height={600}
				></Image>
			</div>
		</section>
	);
};

export default CertificationsPage;
