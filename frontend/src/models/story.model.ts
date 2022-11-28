export interface StoriesState {
	list: Story[];
	isLoading: boolean;
	error: string | Story[];
}

export interface Story {
	id: number;
	author: string;
	title: string;
	body: string;
}