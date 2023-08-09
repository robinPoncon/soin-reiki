import Image from "next/image";
import HeaderMenu from "@/components/Menu/HeaderMenu";

const MainPage = () => {
	return (
		<main>
			<HeaderMenu />
			<figure>
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
