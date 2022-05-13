"use strict";

const e = React.createElement;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { liked: false };
	}

	render() {
		return (
			<div>
				<Calculator />
			</div>
		);
	}
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			display: "0",
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.handleKeypress = this.handleKeypress.bind(this);
	}

	handleKeypress(e) {
		var keyVal = e.key;
		console.log(e);
		this.setState((prevState, PrevProps) => {
			if (prevState.display == "0") {
				return {
					display: keyVal,
				};
			}
			return {
				display: prevState.display + keyVal,
			};
		});
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleKeypress);
	}

	handleClick(event) {
		// var prevState = this.state.display;
		var clickedVal = event.target.value;
		if (clickedVal == "clear") {
			this.setState(() => {
				return {
					display: "0",
				};
			});
			return;
		}
		if (clickedVal == "=") {
			var result = eval(this.state.display);
			this.setState(() => {
				return {
					display: result,
				};
			});
			return;
		}

		this.setState((prevState, PrevProps) => {
			if (prevState.display == "0") {
				return {
					display: clickedVal,
				};
			}
			return {
				display: prevState.display + clickedVal,
			};
		});
	}
	handleKey(e) {
		this.setState(() => {
			return {
				display: e.target.value,
			};
		});
	}

	render() {
		return (
			<div className="text-center">
				<h1 className="text-danger text-center">Calculator</h1>
				<input id="display" value={this.state.display} onChange={this.handleKey} className="border border-1 my-2 w-75 mx-auto" />
				<div>
					<input id="zero" value="0" className="btn btn-secondary mx-1 my-1" onClick={this.handleClick} />
					<input id="one" value="1" className="btn btn-secondary mx-1 my-1" onClick={this.handleClick} />
					<input id="two" value="2" className="btn btn-secondary mx-1 my-1" onClick={this.handleClick} />
					<input id="three" value="3" className="btn btn-secondary mx-1 my-1" onClick={this.handleClick} />
					<input id="four" value="4" className="btn btn-secondary mx-1 my-1" onClick={this.handleClick} />
					<input id="five" value="5" className="btn btn-secondary mx-1 my-1" onClick={this.handleClick} />
					<input id="six" value="6" className="btn btn-secondary mx-1 my-1" onClick={this.handleClick} />
					<input id="seven" value="7" className="btn btn-secondary mx-1 my-1" onClick={this.handleClick} />
					<input id="eight" value="8" className="btn btn-secondary mx-1 my-1" onClick={this.handleClick} />
					<input id="nine" value="9" className="btn btn-secondary mx-1 my-1" onClick={this.handleClick} />
					<input id="decimal" value="." className="btn btn-secondary mx-1 my-1" onClick={this.handleClick} />.
				</div>
				<div className="mt-2">
					<input value="+" id="add" className="btn btn-primary mx-1 my-1" onClick={this.handleClick} />
					<input value="-" id="subtract" className="btn btn-primary mx-1 my-1" onClick={this.handleClick} />
					<input value="*" id="multiply" className="btn btn-primary mx-1 my-1" onClick={this.handleClick} />
					<input value="/" id="divide" className="btn btn-primary mx-1 my-1" onClick={this.handleClick} />
					<input value="=" id="equals" className="btn btn-primary mx-1 my-1" onClick={this.handleClick} />
					<input value="clear" id="clear" className="btn btn-primary mx-1 my-1" onClick={this.handleClick} />
				</div>
			</div>
		);
	}
}
const domContainer = document.getElementById("app");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
