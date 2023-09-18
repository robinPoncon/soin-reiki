"use client";

import Image from "next/image";
import "./page.scss";

const CertificationsPage = () => {
	const openImgInNewWindow = (path: string) => {
		window.open(path, "_blank");
	};

	return (
		<section className="flex flex-col py-20 px-4 gap-20">
			<h1 className="font-semibold text-2xl mx-auto w-fit customBorderBlue p-4 md:text-4xl">
				Mes certifications
			</h1>
			<div className="flex flex-col justify-around gap-20 lg:flex-row">
				<Image
					className="customImgBlueGreen cursor-pointer mx-auto"
					alt="diplome reiki niveau 1"
					src="/diplome_reiki-niveau-1.jpg"
					onClick={() => openImgInNewWindow("/diplome_reiki-niveau-1.jpg")}
					width={400}
					height={600}
				></Image>
				<Image
					className="customImgBlueGreen cursor-pointer mx-auto"
					alt="diplome reiki niveau 2"
					src="/diplome_reiki-niveau-2.jpg"
					onClick={() => openImgInNewWindow("/diplome_reiki-niveau-2.jpg")}
					width={400}
					height={600}
				></Image>
			</div>
			<div className="flex flex-col justify-around gap-20 lg:flex-row">
				<Image
					className="customImgBlueGreen cursor-pointer mx-auto"
					alt="diplome reiki niveau 3"
					src="/diplome_reiki-niveau-3.jpg"
					onClick={() => openImgInNewWindow("/diplome_reiki-niveau-3.jpg")}
					width={400}
					height={600}
				></Image>
				<Image
					className="customImgBlueGreen cursor-pointer mx-auto"
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
