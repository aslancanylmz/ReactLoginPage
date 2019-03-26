import React, { Component } from 'react'

const LoginView = ({onClickLogin}) => (
    <div>
        <form className="form-inline">
            <div className="form-group mb-2">
                <input type="text" readonly className="form-control" placeholder="E-Posta" />
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <input type="password" className="form-control" placeholder="Şifre" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Giriş Yap</button>
            <a href="#" onClick={e => {
                e.preventDefault();
                onClickLogin(3);
            }}> Şifremi unuttum</a>
        </form>
        <p>
            Kayıt olmak için <b><u><a href="#" onClick={e => {
                e.preventDefault();
                onClickLogin(3);
            }}> tıklayınız</a></u></b>
        </p>
    </div>
)



export default LoginView;