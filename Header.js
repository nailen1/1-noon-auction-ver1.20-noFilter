import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <>
            {/* <div id="to-to-top"></div> */}
            <div className="header">
                <h1 className="header-title" onClick={() => navigate('/')}>1noon auction</h1>
            </div>
            {/* HEADER MENU ICONS */}
            <div className="top-icon-menu">
                <ul>
                    <li onClick={() => navigate('/')}>
                        <i className="bx bxs-layer-plus"></i>
                    </li>
                    <li>
                        <i className="bx bxs-map-pin" onClick={() => navigate('/location')}></i>
                    </li>
                    <li onClick={() => navigate('/price')}>
                        <i className='bx bx-won'></i>
                    </li>
                    <li onClick={() => navigate('/date')}>
                        <i className="bx bxs-calendar"></i>
                    </li>
                    <li onClick={() => navigate('/news')}>
                        <i className='bx bxs-category' ></i>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;