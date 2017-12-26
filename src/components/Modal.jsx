import React, { Component } from 'react';
import { observer } from 'mobx-react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import MainStore from '../stores/MainStore';
import '../styles/App.styl';

@observer
class Modal extends Component {

    // styles = () => {
    //     return {
    //         warning: {
    //             fontSize: 48,
    //             textAlign: 'center',
    //             color: '#F44336'
    //         }
    //     }
    // };
    //
    // componentDidUpdate() {
    //     if (MainStore.sessionTimeoutWarning) MainStore.getAuthProviders();
    // };
    //
    // createLoginUrl = () => {
    //     const {appConfig} = MainStore;
    //     return `${appConfig.authServiceUri}&state=${appConfig.serviceId}&redirect_uri=${window.location.href}`
    // };
    //
    // handleLoginBtn = () => {
    //     MainStore.handleLogout(401);
    // };

    render() {
        let modal = null;
        // if (MainStore.sessionTimeoutWarning) {
        //         const actions = [
        //             <FlatButton
        //                 label="Logout"
        //                 secondary={true}
        //                 // onTouchTap={() => MainStore.handleLogout()}
        //             />,
        //             <a href={this.createLoginUrl()} className="external">
        //                 <FlatButton
        //                     label="Refresh Session"
        //                     secondary={true}
        //                     // style={styles.refreshBtn}
        //                     onClick={() => this.handleLoginBtn()}
        //                 />
        //             </a>
        //         ];
        //         modal = <Dialog title="Your session will expire in 3 minutes"
        //                           // contentStyle={dialogWidth}
        //                           actions={actions}
        //                           modal={false}
        //                           open={true}
        //
        //                 >
        //             <i className="material-icons" style={this.styles.warning}>warning</i>
        //             <h6>If you want to stay logged in, please refresh your session.</h6>
        //         </Dialog>
        // }
        return (
            <div>
                {modal}
            </div>
        );
    }
}

export default Modal;