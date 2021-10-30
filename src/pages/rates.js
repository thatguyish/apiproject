import { Component } from "react";

class Rates extends Component {
    constructor(props) {
        super(props);
        props.getRates();

    }
    render() {
        return (
            <div>
                <button onClick={this.props.getRates}> Update Rates </button>
                <h1>CrytotoCurrency Rates</h1>
                <ul>
                    {this.props.currates.map(rate => (
                        <li key={rate.name}> {rate.name}: &#x24;{rate.price_usd} </li>
                    ))}
                </ul>
            </div>
        );
    }

}

export default Rates;