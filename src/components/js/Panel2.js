import React from 'react';
import axios from 'axios';
import '../css/Panel2.css';
import { platform } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/browser_back';

const osname = platform();


class Panel2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        if (osname === "android") {
            var heightMainContent = document.getElementsByClassName('maincontent');
            heightMainContent[0].style.height = "calc(100vh - 58px)";
        }
        if (osname === "ios") { console.log("de ios") }
        let btLeft = <Icon24Back className="header-menu" onClick={this.props.backApp} />;
        this.props.chHeader(< div className="header-h" > Panel 2 </div>, btLeft, false)
    }

    render() {
        return (
            <div className="maincontent">
                panel2
            </div>
        );
    }
}

export default Panel2;