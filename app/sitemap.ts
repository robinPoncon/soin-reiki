export default function sitemap() {
	const routes = [
		"",
		"/certifications",
		"/connexion",
		"/contact",
		"/guidance",
		"/mentions-legales",
		"/protection-donnee",
		"/reservation",
		"/deroulement-seance",
		"/soin-reiki",
		"/pleine-conscience",
		"/voyage-sonore",
		"/tarifs"
	].map((route) => ({
		url: `https://racines-guerison.com${route}`,
		lastModified: new Date().toISOString().split("T")[0]
	}));

	return routes;
}
