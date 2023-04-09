import "../Layouts/Footer.css";

import { Icon } from '@iconify/react';

function Footer() {
    return (
        <div className="Footer">
            <div className="footerInfo">
                <span>
                    Đơn vị TT cơ sở: Giá: <span className="light"> x1000 </span>
                    Khối lượng: <span className="light"> x10 </span>
                    {' - '}Đơn vị TT phát sinh: Giá: <span className="light"> x1 </span>
                    Khối lượng: <span className="light"> x1 </span>
                    {' - '}Đơn vị TT lô lẻ: Khối lượng: <span className="light"> x1 </span>
                </span>
            </div>
            <button className="btn-set">
                <div className='iconFooter'>
                    <Icon icon="material-symbols:shopping-cart" color="white" height="16px"/>
                </div>
                Đặt lệnh
            </button>
            <div className="btn-market">
                <div className='iconFooter'>
                    <Icon icon="ph:chart-line-up-bold" color="white" height="16px"/>
                </div>
                Bảng giá
            </div>
        </div>
    )
}
export default Footer