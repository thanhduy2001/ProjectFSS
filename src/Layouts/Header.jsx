import '../Layouts/Header.css';

import { useEffect, useState } from 'react';

import { Icon } from '@iconify/react';

function Header() {
    let time = new Date().toLocaleTimeString()
    const [currentTime, setCurrentTime] = useState(time )
    const updateTime = () => {
        let time = new Date().toLocaleTimeString()
        setCurrentTime(time )
    }
    setInterval(updateTime, 1000)

    let today = new Date()
    let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`
    let month = `${(today.getMonth() + 1) < 10 ? "0" : ""}${today.getMonth() + 1}`
    let year = today.getFullYear()

    const isLogin = localStorage.getItem('isLogined')
    const nameLogin = localStorage.getItem('userName')

    const logout = () => {
        localStorage.setItem("isLogined", false)
        const a = window.location.href = "/";
        return a
    }
    return (
        <div className='header'>
            <div style={{ display: 'flex', alignItems: 'center', paddingRight: '10px' }}>
                <img src="./images/logo_BVSC.png" style={{ width: '251px' }} />
            </div>
            <div className="date">
                <div>{`${day}/${month}/${year}`}</div>
                &nbsp;&nbsp;
                <div>{currentTime}</div>
            </div>
            <div className="movingText">
                <movingText />
            </div>

            <div className="menuRight">
                {isLogin === 'false' ?
                    <div className="btn-sign-in">
                        <div className='icon'>
                            <Icon icon="mdi:login-variant" height="15px" />
                        </div>
                        <a> Đăng nhập </a>
                    </div>
                    :
                    <div className='loginName'>
                        <div>{nameLogin}</div>
                    </div>}

                <a className="lineBetween"></a>
                <div className="account-dropdown">
                    <div className="account-dropdown-btn">
                        <div className="custom-toggle-dropdown"></div>
                        <span style={{ paddingRight: '13px' }}>
                            <Icon icon="ion:person-circle-outline" width="25" height="25" color='white' />
                            <i class="arrow-down-btn"></i>
                        </span>
                    </div>
                    <ul className="account-drop-list">
                        <div className="separate-line"></div>
                        <div className="aditional-info-container">
                            <div className="setting-pane">
                                <div className="setting-item">
                                    <h4 className="setting-item-title">Giao diện</h4>
                                    <div className="settings-options settings-options-theme align-center">
                                        <div className="settings-options-item">
                                            <div className="offset-3" style={{ marginTop: '0px' }}>
                                                <input id='setting-theme-white' type="radio" name='white' value={'white'} />
                                            </div>
                                            <div className="offset-1" style={{ marginTop: '0px' }}>
                                                <label htmlFor='setting-theme-white'>Sáng</label>
                                            </div>
                                        </div>
                                        <div className="settings-options-item">
                                            <div className="offset-3" style={{ marginTop: '0px' }}>
                                                <input id='setting-theme-white' type="radio" name='white' value={'white'} />
                                            </div>
                                            <div className="offset-1" style={{ marginTop: '0px' }}>
                                                <label htmlFor='setting-theme-white'>Tối</label>
                                            </div>
                                        </div>
                                        <div className="settings-options-item">
                                            <div className="offset-3" style={{ marginTop: '0px' }}>
                                                <input id='setting-theme-white' type="radio" name='white' value={'white'} checked />
                                            </div>
                                            <div className="offset-1" style={{ marginTop: '0px' }}>
                                                <label htmlFor='setting-theme-white'>Cơ bản</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="separate-line"></div>
                        <div className="aditional-info-container">
                            <div className="language-dropdown">
                                <div className="setting-item">
                                    <h4 className="setting-item-title">Ngôn Ngữ</h4>
                                    <div className="settings-options settings-options-theme align-center">
                                        <div className="setting-option-item">
                                            <div className="offset-2">
                                                <input id='vi' name='vi' value={'vi'} type="radio" checked />
                                                &nbsp;
                                            </div>
                                            <div className="offset-1">
                                                <label htmlFor="setting-theme-white">
                                                    <img className="lang-icon" src="./images/vietnamflag.png" />
                                                </label>
                                            </div>
                                            <div className="offset-2">
                                                <input id='en' name='en' value={'en'} type="radio" />
                                                &nbsp;
                                            </div>
                                            <div className="offset-1">
                                                <label htmlFor="setting-theme-white">
                                                    <img className="lang-icon" height={'20px'} src="./images/ukflag.png" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="separate-line"></div>
                        <div className="separate-line"></div>
                        <li className='align-center'>
                            <div onClick={logout}>Đăng xuất</div>
                            &nbsp;&nbsp;
                            <Icon className='logOut' icon="mdi:logout" />
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default Header