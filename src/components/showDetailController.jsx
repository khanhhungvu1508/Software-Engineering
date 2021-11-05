import "./style.css";
import React, { Component } from 'react';
import Allfood from './food-list';
import Pholist from './pho-list';
import Ricelist from './rice-list';
import Noodlelist from './noodle-list';
import Stickyricelist from './stickyrice-list';
import Dessertlist from './dessert-list';
import Drinklist from './drink-list';

export default class ShowDetailController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setModal: false
        };
        this.modifiedState = this.modifiedState.bind(this);
    }

    modifiedState = (val) => {
        console.log(this.props.name);
        this.setState({
            setModal: val
        })
    }

    render() {
        return (
            <div>
                {this.props.name === "showAll" && <Allfood
                    setModal={this.state.setModal}
                    modifiedState={this.modifiedState}>
                </Allfood>}

                {this.props.name === "showRice" && <Ricelist
                    setModal={this.state.setModal}
                    modifiedState={this.modifiedState}>
                </Ricelist>}

                {this.props.name === "showPho" && <Pholist
                    setModal={this.state.setModal}
                    modifiedState={this.modifiedState}>
                </Pholist>}

                {this.props.name === "showNoodle" && <Noodlelist
                    setModal={this.state.setModal}
                    modifiedState={this.modifiedState}>
                </Noodlelist>}

                {this.props.name === "showStickyrice" && <Stickyricelist
                    setModal={this.state.setModal}
                    modifiedState={this.modifiedState}>
                </Stickyricelist>}

                {this.props.name === "showDessert" && <Dessertlist
                    setModal={this.state.setModal}
                    modifiedState={this.modifiedState}>
                </Dessertlist>}

                {this.props.name === "showDrink" && <Drinklist
                    setModal={this.state.setModal}
                    modifiedState={this.modifiedState}>
                </Drinklist>}
            </div>
        );
    }
}
