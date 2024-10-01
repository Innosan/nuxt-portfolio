export type Project = {
	id: number;
	title: string;
	description: string;
	images: string[];
	tags: Tag[];
	links: Link[];
};

export type Tag = {
	name: string;
	icon: string;
};

export type Link = {
	name: string;
	url: string;
	icon: string;
};
