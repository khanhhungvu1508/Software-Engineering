import React from 'react';
import "./LoginRegister.css";
import {Container} from 'react-bootstrap';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import axios from "axios";
import ForgottenPagewordPage from './ForgottenPasswordPage';


class LoginRegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "login",
            accountList: [],
        }
        this.changePage = this.changePage.bind(this);
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
        this.onSubmitRegister = this.onSubmitRegister.bind(this);
    }

    changePage(page) {
        console.log(page);
        this.setState({
            page: page,
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    setAccountList(accountList) {
        console.log("AccountList request success");
        console.log(accountList);
        this.setState({
            accountList: accountList
        })
    }

    refreshList = () => {
    /*Get all User account*/
    axios
        .get("https://pure-retreat-31306.herokuapp.com/api/accounts/")
        .then((res) => this.setAccountList(res.data))
        .catch((err) => console.log(err));
    };
    

    onSubmitRegister(email, name, password) {
        /*
            TODO: Check email exist, post account to backend:
        */
       
        /*Post item*/
        let item = {
            id: this.state.accountList.length + 1,
            email: email,
            name: name,
            password: password,
        }
        axios
            .post("https://pure-retreat-31306.herokuapp.com/api/accounts/", item)
            .then((res) => {
                this.refreshList();
                alert("Đăng ký thành công");
            });
        this.changePage();
    }

    onSubmitLogin(email, password) {
        /*To do find email*/
        if (this.state.accountList === null || this.state.accountList.length === 0) 
            return;

        let account = this.state.accountList.filter(
            account => (account.email === email && account.password === password)
        )
        console.log("accountList: ");
        console.log(this.state.accountList)
        console.log("account: ");
        console.log(email);
        console.log(password);
        if (account === null || account.length === 0) {
            alert("Tài khoản không tồn tại");
            return;
        }
        /*Return account to controller*/
        this.props.setAccount(account);
    }


    render() { 
        let loginRegisterBody;
        if (this.state.page === "login") {
            loginRegisterBody = 
                <LoginPage 
                    changePage={this.changePage}
                    onSubmitLogin={this.onSubmitLogin}
                />;
        }
        else if (this.state.page === "register"){
            loginRegisterBody = 
                <RegisterPage 
                    changePage={this.changePage}
                    onSubmitRegister={this.onSubmitRegister}
                />;
        }
        else {
            loginRegisterBody = 
                <ForgottenPagewordPage 
                    changePage={this.changePage}
                />;
        }
        return (
        <Container>
                <div className="login-register-background">
                    {loginRegisterBody}
                </div>
        </Container>);
    }
}
 
export default LoginRegisterPage;