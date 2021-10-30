import { Component } from "react";

class Rates extends Component {
    constructor(props) {
        super(props);
        props.getRates();

    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.currates.map(rate => (
                        <li key={rate.name}> {rate.name}: ${rate.price_usd} </li>
                    ))}
                </ul>
            </div>
        );
    }

}

export default Rates;