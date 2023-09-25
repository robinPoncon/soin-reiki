import Image from "next/image";

export default function Loading() {
	return (
		<div className="w-full h-80">
			<div className="loaderComponentRouting">
				<Image
					alt="Animation d'un loader avec des cercles turquoise"
					width={200}
					height={200}
					src="/loader.svg"
				></Image>
			</div>
		</div>
	);
}
