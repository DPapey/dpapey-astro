import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const blog = (await getCollection("blog")).sort(
		(a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
		);

	return rss({
    		title: "DPapey's Blog",
		description: "DPapeys developer blog on working with data, networks and back-end engineering — built blazingly-fast with Astro.",
    		site: context.site,
    		stylesheet: "/pretty-feed-v3.xsl",
    		trailingSlash: false,
    		customData: `<language>en</language>`,
    		items: blog.map((post) => ({
      			title: post.data.title,
      			pubDate: post.data.pubDate,
      			description: post.data.description,
      			link: `/blog/${post.slug}/`,
    		})),
	});
}
