import { projects } from "~/lib/static";
export default defineEventHandler((event) => {
	return {
		projects,
	};
});
