import { ChangeEvent, FC, ReactNode } from 'react';
import { Story } from 'models/story.model';
import { AppBar } from '../app-bar';
import { Loader } from '../loader';
import { AddStory, Stories, useBindingStory } from '../stories';
import './main.template.css';

export interface MainTemplateProps {
	title: string;
	isLoading: boolean;
	stories: Story[];
	onUpdateStory: (e: ChangeEvent<HTMLDivElement>) => void;
	children?: ReactNode;
}

export const MainTemplate: FC<MainTemplateProps> = ({
	title,
	children,
	onUpdateStory,
	stories,
	isLoading
}) => {
	return (
		<div className="stories--wrapper">
			<AppBar onClickRegister={() => {}}/>
			{isLoading
				? <Loader/>
				: (
					<>
						<h1 className="stories__title">{title}</h1>
						<Stories stories={stories}/>s
						<AddStory onUpdateStory={onUpdateStory}/>
					</>
				)
			}
			{children && children}
		</div>
	)

}