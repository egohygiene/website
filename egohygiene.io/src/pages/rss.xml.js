import rss from '@astrojs/rss';
import { getSynapses } from '../../../src/models/Synapse';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
        const posts = getSynapses();
        return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
                items: posts.map((post) => ({
                        title: post.title,
                        pubDate: new Date(post.created),
                        description: post.content.slice(0, 120),
                        link: `/synapses/${post.slug}/`,
                })),
	});
}
