import '../homePage/Main.css';
import '../homePage/Table.css';

import React, { useEffect, useState } from 'react'

import Footer from '../Layouts/Footer';
import Header from '../Layouts/Header';
import { Icon } from '@iconify/react';
import axios from 'axios';
import dataHNX from '../api/HNX';
import dataHNX30 from '../api/HNX30';
import dataHOSE from '../api/HOSE';

function Main() {

    const [selectedCategory, setSelectedCategory] = useState('')
    const [data, setData] = useState([])

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
        switch (e.target.value) {
            case 'dataHOSE':
                setData(dataHOSE);
                break;
            case 'dataHNX30':
                setData(dataHNX30);
                break;
            default:
                setData([]);
                break;
        }
    }

    return (
        <div>
            <Header />
            <div className="titleBody" style={{ display: 'flex', paddingTop: '2px' }}>
                <div className='buttons-menus'>
                    <div className="search-box">
                        <div>
                            <input type="text" autoComplete='off' placeholder='Tìm kiếm mã CK' />
                            <button className="btnSearch"><Icon icon="ic:sharp-plus" style={{ width: '20', height: '20', paddingTop: '4px' }} /></button>
                        </div>
                    </div>
                    <div className='dropdownMenu' >
                        <div class="dropdown">
                            <button
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                class="dropbtn" >HOSE<i class="arrow-down"></i></button>
                            <div class="dropdown-content">
                                <a value='dataHOSE' >HOSE</a>
                                <a href="#">VN30</a>
                                <a href="#">Giao dịch thoả thuận</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">HNX<i class="arrow-down"></i></button>
                            <div class="dropdown-content">
                                <a value='dataHNX' >HNX</a>
                                <a value='dataHNX30' >HNX30</a>
                                <a href="#">Giao dịch thoả thuận</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button class="dropbtn">UPCOM<i class="arrow-down"></i></button>
                            <div className="dropdown-content">
                                <a href="#">UPCOM</a>
                                <a href="#">Giao dịch thoả thuận</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button class="dropbtn">Sàng lọc cổ phiếu &nbsp;
                                <Icon icon="material-symbols:star" color="orange" height='15px' />
                                <i class="arrow-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <a href="#">SP ngành</a>
                                <a href="#">Sự kiện quyền</a>
                                <a href="#">Top mã tăng giá nhất</a>
                                <a href="#">Top mã giảm giá nhất</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button class="dropbtn">Phái sinh<i class="arrow-down"></i></button>
                            <div className="dropdown-content">
                                <a href="#">Phái sinh</a>
                                <a href="#">HĐTL chỉ số VN30</a>
                                <a href="#">HĐTL chỉ số TPCP</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button class="dropbtn">Chứng quyền</button>
                        </div>
                        <div className="dropdown">
                            <button class="dropbtn">Trái phiếu doanh nghiệp</button>
                        </div>
                        <div className="dropdown">
                            <button class="dropbtn">Lô lẻ<i class="arrow-down"></i></button>
                            <div className="dropdown-content">
                                <a href="#">HOSE</a>
                                <a href="#">HNX</a>
                                <a href="#">UPCOME</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-fixed-head">
                <div className="topTable">
                    <table className='tieuDe' style={{ width: '100%' }} >
                        <thead>
                            <tr>
                                <th colSpan={'1'} rowSpan={'2'}>Mã CK</th>
                                <th colSpan={'1'} rowSpan={'2'} className="cell-highlight">TC</th>
                                <th colSpan={'1'} rowSpan={'2'} className="cell-highlight">Trần</th>
                                <th colSpan={'1'} rowSpan={'2'} className="cell-highlight">Sàn</th>
                                <th colSpan={'6'} rowSpan={'1'}>Bên mua</th>
                                <th colSpan={'3'} rowSpan={'1'} className="cell-highlight">Khớp lệnh</th>
                                <th colSpan={'6'} rowSpan={'1'}>Bên bán</th>
                                <th rowSpan={'2'} colSpan={'2'}>
                                    <span>Tổng KL</span>
                                </th>
                                <th colSpan={'3'} rowSpan={'1'} className="cell-highlight">Giá</th>
                                <th colSpan={'2'} rowSpan={'1'}>Dư</th>
                                <th colSpan={'2'}>ĐTNN</th>
                            </tr>
                            <tr>
                                <th colSpan={'1'} rowSpan={'1'}>Giá 3</th>
                                <th colSpan={'1'} rowSpan={'1'}>KL 3</th>
                                <th colSpan={'1'} rowSpan={'1'}>Giá 2</th>
                                <th colSpan={'1'} rowSpan={'1'}>KL 2</th>
                                <th colSpan={'1'} rowSpan={'1'}>Giá 1</th>
                                <th colSpan={'1'} rowSpan={'1'}>KL 1</th>
                                <th colSpan={'1'} rowSpan={'1'} className="cell-highlight">Giá</th>
                                <th colSpan={'1'} rowSpan={'1'} className="cell-highlight">KL</th>
                                <th className="cell-highlight">+/-</th>
                                <th colSpan={'1'} rowSpan={'1'}>Giá 1</th>
                                <th colSpan={'1'} rowSpan={'1'}>KL 1</th>
                                <th colSpan={'1'} rowSpan={'1'}>Giá 2</th>
                                <th colSpan={'1'} rowSpan={'1'}>KL 2</th>
                                <th colSpan={'1'} rowSpan={'1'}>Giá 3</th>
                                <th colSpan={'1'} rowSpan={'1'}>KL 3</th>
                                <th colSpan={'1'} rowSpan={'1'} className="cell-highlight">Cao</th>
                                <th colSpan={'1'} rowSpan={'1'} className="cell-highlight">TB</th>
                                <th colSpan={'1'} rowSpan={'1'} className="cell-highlight">Thấp</th>
                                <th colSpan={'1'} rowSpan={'1'}>Mua</th>
                                <th colSpan={'1'} rowSpan={'1'}>Bán</th>
                                <th colSpan={'1'} rowSpan={'1'}>Mua</th>
                                <th colSpan={'1'} rowSpan={'1'}>Bán</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className='banggia-body' style={{ overflow: 'visible' }}>
                    <table className='banggia banggia-full' style={{ width: '100%' }}>
                        <tbody id='banggia-khop-lenh-body'>
                            {dataHOSE.map((item) => (

                                <tr>
                                    <td>
                                        <div>
                                            <span className='span-symbol'>{item.symbol}</span>
                                        </div>
                                    </td>
                                    {/* tham chiếu / trần / sàn */}
                                    <td >
                                        {/* className="cell-highlight"  cho td ở trên */}
                                        <div>
                                            <span style={{ color: 'yellow' }}>{item.reference}</span>
                                        </div>
                                    </td>
                                    <td >
                                        {/* className="cell-highlight"  cho td ở trên */}
                                        <div>
                                            <span style={{ color: '#D7A1F9' }}>{item.ceiling}</span>
                                        </div>
                                    </td>
                                    <td >
                                        {/* className="cell-highlight"  cho td ở trên */}
                                        <div>
                                            <span style={{ color: 'cyan' }}>{item.floor}</span>
                                        </div>
                                    </td>
                                    {/* bên mua */}
                                    <td>{item.bidPrice3}</td>
                                    <td>{item.bidVol3}</td>
                                    <td>{item.bidPrice2}</td>
                                    <td>{item.bidVol2}</td>
                                    <td>{item.bidPrice1}</td>
                                    <td>{item.bidVol1}</td>
                                    {/* khớp lệnh */}
                                    <td>{item.closePrice}</td>
                                    <td>{item.closeVol}</td>
                                    <td>{item.change}</td>
                                    {/* bên bán */}
                                    <td>{item.offerPrice3}</td>
                                    <td>{item.offerVol3}</td>
                                    <td>{item.offerPrice2}</td>
                                    <td>{item.offerVol2}</td>
                                    <td>{item.offerPrice1}</td>
                                    <td>{item.offerVol1}</td>
                                    {/* tổng khối lượng */}
                                    <td colSpan={2}>{item.totalTrading}</td>
                                    {/* giá */}
                                    <td>{item.high}</td>
                                    <td>{item.open}</td>
                                    <td>{item.low}</td>
                                    {/* dư */}
                                    <td>{item.foreignBuy}</td>
                                    <td>{item.foreignSell}</td>
                                    {/* ĐTNN */}
                                    <td>{item.foreignBuy}</td>
                                    <td>{item.foreignSell}</td>

                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main