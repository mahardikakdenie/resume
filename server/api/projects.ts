import { projects } from '~/lib/static';
import { IProjects } from '~/lib/staticInterface';

export default defineEventHandler((event) => {
	const query = getQuery<{ slug?: string }>(event);
	const { slug } = query;

	// Define the response type with the correct data type
	const response: {
		data: IProjects | IProjects[] | null;
		message: string;
		code: number;
	} = {
		data: [], // Set default type to an empty array which matches IProjects[]
		message: 'success',
		code: 200,
	};

	try {
		// If slug is provided, find the matching project; otherwise, return all projects
		response.data = slug
			? projects.find((project) => project.link === slug) || null // Fallback to null if undefined
			: projects;

		// If a slug was provided but no project was found, adjust the response
		if (slug && response.data === null) {
			response.message = 'Project not found';
			response.code = 404;
		}
	} catch (error) {
		// Catch any errors and adjust the response accordingly
		response.message = 'An error occurred';
		response.code = 500;
		response.data = null; // Set data to null on error
	}

	return response;
});
