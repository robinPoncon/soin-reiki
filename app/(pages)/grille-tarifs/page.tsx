"use client";

import "./page.scss";

const PriceList = () => {
	return (
		<section className="flex flex-col gap-10 py-20">
			<h1 className="titleFont font-semibold text-2xl text-center mx-auto w-fit customBorderBlue p-4 md:text-4xl">
				Tarifs du Voyage Sonore de groupe
			</h1>
			<article>
				<div className="flex gap-10 justify-center">
					<div>
						<h2 className="font-semibold">Nombre de participants</h2>
						<p>2</p>
						<p>3</p>
						<p>4</p>
						<p>5</p>
						<p>6</p>
						<p>7</p>
						<p>8</p>
						<p>9</p>
						<p>10</p>
					</div>
					<p className="separateLine" />
					<div>
						<h2 className="font-semibold">Prix</h2>
						<p>150€</p>
						<p>180€</p>
						<p>210€</p>
						<p>240€</p>
						<p>260€</p>
						<p>280€</p>
						<p>300€</p>
						<p>320€</p>
						<p>340€</p>
					</div>
				</div>
                <p>À partir de 11 personnes, le prix augmente de 10€ par personne. Exemple pour 16 personnes = 400€ (360€ + 6x10€)</p>
				{/* <table className="mx-auto">
					<thead>
						<tr>
							<th>Nombre de participants</th>
							<th>Prix</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>2</td>
							<td>150€</td>
						</tr>
						<tr>
							<td>3</td>
							<td>180€</td>
						</tr>
					</tbody>
				</table> */}
			</article>
		</section>
	);
};

export default PriceList;
