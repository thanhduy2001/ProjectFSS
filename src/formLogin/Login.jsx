import '../formLogin/Login.css'

import React, { useRef, useState } from "react";

import { Icon } from '@iconify/react';
import Main from '../homePage/Main';
import { Navigate } from 'react-router-dom'; // mới thêm
import handleUser from './handleUser';
import localStorage from 'redux-persist/es/storage';
import { login } from '../Component/Actions/loginAction';
import { useDispatch } from 'react-redux';

// import { useNavigate } from 'react-router-dom';

// import LoginReducer from '../service/authService';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    // const isLogined = LoginReducer();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const localUserName = localStorage.getItem('userName')
        const localPassword = localStorage.getItem('password')

        const user = handleUser.find((user) =>
            user.username === username && user.password === password);

        if (!user) {
            setError("Tên đăng nhập không tồn tại");
        } else if (user.password !== password) {
            setError("Mật khẩu không đúng");
        } else {
            setError("");
            localStorage.setItem("isLogined", true)
            dispatch(login());
            // window.location.href = '/Main';
            Navigate('/Main'); // mới thêm

        }

        localStorage.setItem("userName", username)
        localStorage.setItem("password", password)


    };


    return (
        <div className='bodyHome' >
            <div className='bg'>
                <div className="formLogin">
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div >
                            <img className="logoForm" src="./images/BVSC/logo-company.png" alt='/' />
                        </div>
                        <div className='wrapper'>
                            {/* <div className='icon'>
                                <Icon icon="ic:sharp-person" height="35" />
                            </div> */}
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                id='userName'
                                placeholder='Tên đăng nhập'
                                className='inputForm'
                            />
                        </div>
                        <div className='wrapper'>
                            {/* <div className='icon'>
                                <Icon icon="ic:sharp-person" height="35" />
                            </div> */}
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Mật khẩu'
                                className='inputForm'
                            />
                        </div>
                        <div className='buttton'>
                            {error && <p className="error">{error}</p>}
                                <button type='submit' className='btn' >Đăng nhập</button>
                        </div>
                        <div className="formGroup loginFlex">
                            <div>
                                <a href="/" className='formLink'>Mở tài khoản</a>
                            </div>
                            <div>
                                <a href="/" className='formLink'>Quên mật khẩu</a>
                            </div>
                        </div>
                        <div className="loginFlex">
                            <div className='switchLang'>
                                <img className='iconflag' src="./images/vietnamflag.png" alt='/' />
                                <span href="/" className='textIcon'>Tiếng Việt</span>
                            </div>
                            <div className='switchLang'>
                                <img className='iconflag' src="./images/ukflag.png" alt='/' />
                                <span href="/" className='textIcon'>English</span>
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="smallInfo">
                            Liên hệ: (84-24) 3928 8080 - ext.699/(84-28) 3914 6888
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Login