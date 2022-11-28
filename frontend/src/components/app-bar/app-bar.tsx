import { Component } from 'react';
import { SideCard } from '../side-card';

import { Nav } from './nav';

export interface AppBarState {
	register: boolean;
	sandwichClick: boolean;
	sideCard: boolean;
}

export interface AppBarProps {
	onClickRegister: () => void;
}

export class AppBar extends Component<AppBarProps, AppBarState> {
	constructor(props) {
		super(props);

		this.state = {
			register: false,
			sandwichClick: false,
			sideCard: false
		}
	};


	onClickMenu = () => {
		const {
			sideCard,
			sandwichClick
		} = this.state;
		this.setState({
			sandwichClick: !sandwichClick,
			sideCard: !sideCard
		});
	};


	render() {
		const {
			sideCard,
			sandwichClick
		} = this.state;

		return (
			<>
				<Nav
					onClickSandwich={this.onClickMenu}
					isClickedSandwich={sandwichClick}
				/>
				<SideCard
					sideCard={sideCard}
					onClickMenu={this.onClickMenu}
				/>
			</>
		)
	}
}