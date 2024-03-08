export default function sitemap() {
	const routes = [
		"",
		"/mon-histoire",
		"/deroulement-seance",
		"/soin-reiki",
		"/guidance",
		"/pleine-conscience",
		"/voyage-sonore",
		"/tarifs",
		"/reservation",
		"/contact",
		"/mentions-legales",
		"/protection-donnee",
		"/certifications",
		"/tarifs-groupe"
	].map((route) => ({
		url: `https://racines-guerison.com${route}`,
		lastModified: new Date().toISOString().split("T")[0]
	}));

	return routes;
}
