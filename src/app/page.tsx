import Image from "next/image";

const MainPage = () => {
	return (
		<main>
			<figure className="-mt-20">
				<Image
					alt="main image of the site with a tree and energy"
					src="/main-site-image.png"
					height={758}
					width={1556}
					layout="responsive"
				/>
			</figure>
		</main>
	);
};

export default MainPage;
