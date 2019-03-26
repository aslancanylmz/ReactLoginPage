import React, {Component} from 'react'

const PassReset =({onClickLogin}) => (
            <div>
        <form className="form-inline">
            <div className="form-group mb-2">
                <input style={{ width: "440px"}} type="text" readonly className="form-control" placeholder="E-Posta" />
            </div>
            <button style={{ marginLeft: "15px"}} type="submit" className="btn btn-primary mb-2">Giriş Yap</button>
            
        </form>
        <p>
            Üye girişi için <b><u><a href="#" onClick={e => {
                e.preventDefault();
                onClickLogin(1);
            }}> tıklayınız</a></u></b>
        </p>
    </div>
        )

export default PassReset;