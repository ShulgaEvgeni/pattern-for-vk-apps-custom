import React from 'react';
import { platform } from '@vkontakte/vkui';
import Icon28Menu from '@vkontakte/icons/dist/28/menu';

const osname = platform();
var showMenu = false;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    changeMenu = () => {
        showMenu = !showMenu;
        console.log("de");
        var Menu = document.getElementsByClassName('menu');
        var Overlow = document.getElementsByClassName('overlow');
        if (showMenu) {
            Menu[0].style.visibility = "visible";
            Menu[0].style.opacity = "1";
            Overlow[0].style.visibility = "visible";
            Overlow[0].style.opacity = "1";
        } else {
            Menu[0].style.visibility = "hidden";
            Menu[0].style.opacity = "0";
            Overlow[0].style.visibility = "hidden";
            Overlow[0].style.opacity = "0";
        }
    }

    componentDidMount() {
        if (osname === "android") {
            var heightHeader = document.getElementsByClassName('header');
            for (let i = 0; i < heightHeader.length; i++) {
                heightHeader[i].style.height = "58px";
            }

            var heightIosheader = document.getElementsByClassName('iosheader');
            for (let i = 0; i < heightIosheader.length; i++) {
                heightIosheader[i].style.height = "0px";
            }
            if (this.props.menuShow) {
                var topMenu = document.getElementsByClassName('menu');
                topMenu[0].style.top = "58px";
                var topOverlow = document.getElementsByClassName('overlow');
                topOverlow[0].style.top = "58px";
                topOverlow[0].style.height = "calc(100vh - 58px)";
            }
        }
        if (osname === "ios") { console.log("de ios") }
    }

    backApp = () => { this.props.history.go(-1) }

    render() {
        let menu; let menubt
        if (this.props.menuShow) {
            menubt = <div className="header-menu" onClick={this.changeMenu}> <Icon28Menu /></div>
            menu =
                <div>
                    <div className="menu" onClick={this.changeMenu}>
                        {this.props.menuContent}
                    </div>
                    <div className="overlow" onClick={this.changeMenu}></div>
                </div>
        }

        return (
            <div>
                <div className="iosheader"></div>
                <div className="header" style={{background: this.props.headerBg }}>
                    {menubt}
                    {this.props.leftBt}
                    {this.props.header_h}
                </div>
                {menu}
            </div>
        );
    }
}

export default Header;