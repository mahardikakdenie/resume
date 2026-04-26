import { projects } from '../../lib/static';

export default defineEventHandler((event) => {
    const query = getQuery(event);
    const slug = query.slug;

    if (slug) {
        // Cari project dengan perbandingan yang lebih aman (case-insensitive)
        const foundProject = projects.find(p => p.link.toLowerCase() === String(slug).toLowerCase());

        if (foundProject) {
            return {
                data: foundProject,
                message: 'success'
            };
        }

        return {
            data: null,
            message: `Project not found for slug: ${slug}`,
            code: 404
        };
    }

    return {
        data: projects,
        message: 'success'
    };
});
