import React, {Component} from 'react'
import LoginView from './LoginView'
import SignUp from './SignUp'
import PassReset from './PassReset'


class AuthView extends Component {

    constructor(){
        super();

        this.state = {
            currentVeiew : 1
        }
    }

    changeView(newView){
        this.setState({
            currentVeiew : newView
        })
    }

    render(){

        return this.state.currentVeiew === 1
            ?<LoginView onClickLogin={this.changeView.bind(this)}/>
            :this.state.currentVeiew === 2
            ?<SignUp onClickLogin={this.changeView.bind(this)}/>
            :<PassReset onClickLogin={this.changeView.bind(this)}/>

        
    }

}

export default AuthView;
