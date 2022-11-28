import { FC, ReactNode } from 'react';
import './info.template.css';

export interface InfoTemplateProps {
	title: string;
	MainText: ReactNode;
	children?: ReactNode;
}
export const InfoTemplate: FC<InfoTemplateProps> = ({
	children,
	title,
	MainText
}) => (
	<main className="main">
		<h1 className="main__title">{title}</h1>
		<div className="main__text">
			{MainText}
		</div>
		{children && children}
	</main>
)