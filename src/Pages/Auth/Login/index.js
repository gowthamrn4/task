import React, { Component } from 'react';
import './login.css';
import { validationService } from '../../../Components/Validation/service';
import * as Auth from '../../../Action/Auth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import { Input,Button } from '../../../Components';
import history from '../../../Routing/history';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonDisabled:false,
            inputs: {
                username: {
                    type: "email",
                    value: null
                },
                password: {
                    type: "password",
                    value: null
                },
            }
        }
        this.onInputChange = validationService.onInputChange.bind(this);
        this.getFormValidation = validationService.getFormValidation.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit() {
        this.getFormValidation();
        let { username,password } = this.state.inputs
        if(validationService.check(username.type,username.value) && validationService.check(password.type,password.value)){
            let payload = {
                "username":username.value,
                "password":password.value
            }
            this.props.login(payload)
        }
    }

    componentDidUpdate(){
        if(this.props.isAuth){
            history.push('/dashboard')
        }
    }

    renderError(id) {
        const { inputs } = this.state;
        if (inputs[id].errorLabel) {
            return <span className="error-message">{inputs[id].errorLabel}</span>;
        }
        return null;
    }

    render() {
        const { classes,loading } = this.props;
        return (
                <div>
                { loading && <LinearProgress className="MuiLinearProgress-dashed" {...this.props} classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}}/>}
                <img className="wave" src={require("../../../Image/wave.png")}/>
                    <div className="container">
                        <div className="img">
                             <img className="zoom-bg" src={require("../../../Image/bg.svg")}/>
                        </div>
                        <div className="login-content">
                            <div className="form">
                                <img src={require("../../../Image/avatar.svg")} />
                                <h2 className="title">Welcome</h2>

                                <Input title={"Username"} value={this.state.inputs.username.value} type={"text"} className="pass" onChange={(e)=>{
                                let value = e.target.value
                                this.onInputChange({ id: "username", value });
                                }} icon="fa-user"/>
                                {this.renderError("username")}

                                <Input title={"Password"} value={this.state.inputs.password.value} type={"password"} className="pass" onChange={(e)=>{
                                let value = e.target.value
                                this.onInputChange({ id: "password", value });
                                }} icon="fa-lock"/>

                                {this.renderError("password")}
                                <Button title="Login" onClick={()=>this.submit()} disable={loading}/>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.AuthReducers.data,
        loading: state.AuthReducers.loading,
        isAuth:state.AuthReducers.isAuth
    }
}
function mapDispatchToProps(dispatch) {
    return {
        login: (val) => dispatch(Auth.LOGIN(val)),
    }
}

const styles = props => ({
    colorPrimary: {
      backgroundColor: '#6dcb92',
    },
    barColorPrimary: {
      backgroundColor: '#B2DFDB',
    }
  });

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Login)));
