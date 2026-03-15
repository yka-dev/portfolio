<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.png";
	import { base } from "$app/paths";

	let { children } = $props();

	const site = {
		title: "Yassine Akhouayri",
		description:
			"Backend developer building developer tools, AI systems, and modern web applications.",
		url: base,
		image: `${base}/work/portfolio/thumbnail1.png`,
	};
</script>

<svelte:head>
	<!-- Basic SEO -->
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<link rel="icon" href={favicon} />
	<link rel="canonical" href={site.url} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:url" content={site.url} />
	<meta property="og:image" content={site.image} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site.title} />
	<meta name="twitter:description" content={site.description} />
	<meta name="twitter:image" content={site.image} />
</svelte:head>

{@render children()}
