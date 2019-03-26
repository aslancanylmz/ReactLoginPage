import React, {Component} from 'react'

const SignUp =({onClickLogin}) => (
            <div>
        <form className="form-inline">
            <div className="form-group mb-2">
                <input style={{ width: "450px"}} type="text" readonly className="form-control" placeholder="E-Posta" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Giriş Yap</button>
            
        </form>
        <p>
            Zaten üye misiniz ?
            Giriş yapmak için <b><u><a href="#" onClick={e => {
                e.preventDefault();
                onClickLogin(1);
            }}> tıklayınız</a></u></b>
        </p>
    </div>
        )

export default SignUp;