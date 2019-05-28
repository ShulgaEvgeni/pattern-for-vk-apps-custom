import React from 'react';
import connect from '@vkontakte/vkui-connect-mock';
// import connect from '@vkontakte/vkui-connect';
import axios from 'axios';
import '@vkontakte/vkui/dist/vkui.css';
import { Route } from "react-router-dom";
import Main from './components/js/Main';
import Panel1 from './components/js/Panel1';
import Panel2 from './components/js/Panel2';
import Header from './components/js/header';
import './App.css';
import './components/css/Main.css';

import { platform } from '@vkontakte/vkui';

import Platform from 'react-platform-js';
const osname = platform();

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadApp: false,
        };
    }

    chHeader = (headerH, headerBtLeft, headerShowMenu) => {
        this.setState({
            headerH: headerH,
            headerBtLeft: headerBtLeft,
            headerShowMenu: headerShowMenu
        })
        setTimeout(() => {
            if (headerShowMenu && osname === "android") {
                var topMenu = document.getElementsByClassName('menu');
                topMenu[0].style.top = "58px";
                var topOverlow = document.getElementsByClassName('overlow');
                topOverlow[0].style.top = "58px";
                topOverlow[0].style.height = "calc(100vh - 58px)";
            }
        }, 500);
    }
    chHis = (val) => { this.setState({ his: val }); }


    goApp = (ways) => {
        this.state.his.push('/' + ways);
    }

    backApp = () => {
        this.state.his.go(-1);
    }

    componentDidMount() {
        var self = this;
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetUserInfoResult':
                    this.setState({ loadApp: true })
                    break;
                default:
                    console.log(e.detail.type);
            }
        });
        connect.send('VKWebAppGetUserInfo', {});
    }
    
    render() {
        let menu =
            <div>
                <div className="menu-item" onClick={() => { this.goApp("Panel1"); }}> panel1 </div>
                <div className="menu-item" onClick={() => { this.goApp("Panel2"); }}> panel2 </div>
            </div>
        let header = <Header
            headerBg={this.state.headerBg}
            leftBt={this.state.headerBtLeft}
            menuShow={this.state.headerShowMenu}
            menuContent={menu}
            header_h={this.state.headerH}
        />
        if (this.state.loadApp) {
            return (
                <div className="panel" >
                    {header}
                    <Route exact path="/"
                        render={props => <Main {...props}
                            chHis={this.chHis}
                            goApp={this.goApp}
                            chHeader={this.chHeader}
                        />}
                    />
                    <Route exact path="/Panel1"
                        render={props => <Panel1 {...props}
                            backApp={this.backApp}
                            goApp={this.goApp}
                            chHeader={this.chHeader}
                        />}
                    />
                    <Route exact path="/Panel2"
                        render={props => <Panel2 {...props}
                            backApp={this.backApp}
                            goApp={this.goApp}
                            chHeader={this.chHeader}
                        />}
                    />
                </div >
            );
        } else {
            return (
                <div>
                    loading ...
                </div>
            );
        }
    }
}
export default App;