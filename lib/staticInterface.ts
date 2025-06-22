export interface IProjects {
	name: string;
	type?: string;
	link: string;
	image: string;
	description: string;
    images: Array<string>,
    tools?: any[],
    badge?: string;
}


export interface ISkillDatas {
    title: string;
    key: string;
    thumb?: string;
	current_thumb?: string;
    thumb_active?: string;
    image: string;
    description: string;
    experienceSkill?: string;
    yearExperience?: string;
    projectRelated?: Array<{
        image: string;
        title: string;
        description: string;
        cta?: {
            githubLink?: string;
            previewLink?: string;
        };
    }>;
    sertification?: Array<{
        image: string;
        title: string;
        description: string;
        cta?: {
            githubLink?: string;
            previewLink?: string;
        };
    }>;	
}
