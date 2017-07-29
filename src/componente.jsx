import React from 'react';

class Componente extends React.Component {
	componentWillMount() {
		console.log('componentWillMount');
	}
	componentDidMount() {
		console.log('componentDidMount');
	}
	onClick() {
		console.log('Evento Click');
	}

	render() {
		return (
			<button
				onClick={this.onClick}
			>Click</button>
		);
	}
}

export default Componente;
