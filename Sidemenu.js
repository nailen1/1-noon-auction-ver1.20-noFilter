import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Sidemenu() {
    let navigate = useNavigate();
    let [togBtn, setTogBtn] = useState(false);
    let active;
    if (togBtn === true) {
        active = 'active'
    }
    else { active = '' }

    return (
        <>

            {/* SIDEMENU. 접힐때 하얗게 되는거 수정 */}
            <div className={"side-bg " + active}>
                <div
                    className="bg-tog-t"
                    onClick={() => setTogBtn(!togBtn)}
                ></div>
                <div
                    className="bg-tog-r"
                    onClick={() => setTogBtn(!togBtn)}
                >
                    <i className='bx bxs-bookmark bx-rotate-270' ></i>
                </div>
                <div
                    className="bg-tog-b"
                    onClick={() => setTogBtn(!togBtn)}
                ></div>
                <div className={"sidemenu " + active} id="sidemenu">
                    <div className="container-sideHeader">
                        <div className="divider"></div>
                        <div className="divider"></div>

                        <i
                            className="bx bx-arrow-back"
                            onClick={() => setTogBtn(!togBtn)}
                        ></i>
                    </div>

                    <div className="side-custom">
                        <h1 className="side-title">Customize</h1>
                        <div className="divider"></div>

                        <details>
                            <summary>지역</summary>
                            <ul>
                                <li>수도권</li>
                                <li>강원</li>
                                <li>충청</li>
                                <li>경상</li>
                                <li>전라</li>
                                <li>제주</li>
                            </ul>
                        </details>
                        <div className="divider"></div>
                        <details>
                            <summary>분류</summary>
                            <ul>
                                <li>토지</li>
                                <li>아파트</li>
                                <li>주택</li>
                                <li>공장</li>
                                <li>기타</li>
                            </ul>
                        </details>
                    </div>
                    <div className="divider"></div>
                    <div className="divider"></div>

                    <h1 className="side-title">ICONS</h1>
                    <div className="divider"></div>

                    <div className="container-icons">
                        <div className="side-icons">
                            <div className="icon-frame">
                                <i className="bx bx-home-alt-2" onClick={() => { navigate("/"); setTogBtn(!togBtn); }}></i>
                                <p>Home</p>
                            </div>

                            <div className="icon-frame">
                                <i className="bx bxs-layer-plus"></i>
                                <p>New</p>
                            </div>

                            <div className="icon-frame">
                                <i className="bx bxs-map-pin" onClick={() => { navigate("/location"); setTogBtn(!togBtn); }}></i>
                                <p>Location</p>
                            </div>

                            <div className="icon-frame">
                                <i className="bx bxs-calendar" onClick={() => { navigate("/date"); setTogBtn(!togBtn); }}></i>
                                <p>Date</p>
                            </div>

                            <div className="icon-frame">
                                <i className='bx bx-dollar' onClick={() => { navigate("/price"); setTogBtn(!togBtn); }}></i>
                                <p>Price</p>
                            </div>

                            <div className="icon-frame">
                                <i className='bx bxs-category' onClick={() => { navigate("/news"); setTogBtn(!togBtn); }}></i>
                                <p>News</p>
                            </div>
                        </div>
                        <div className="divider"></div>

                        <div className="side-tags">
                            <h1 className="side-title">tags</h1>
                            <div className="divider"></div>
                            <ul>
                                <li>#1억 미만</li>
                                <li>#아파트</li>
                                <li>#토지</li>
                                <li>#유찰</li>
                            </ul>
                        </div>
                        <div className="divider"></div>
                    </div>
                </div>
            </div>

            {/* 빌딩은 회검 토는 녹갈 아파트는 회하늘 주택은 주노? ... 컬러링 맞추기. */}
            {/* 서울 지도를 완만한 구면으로 만들어서 슬라이드 터치로 화면 가운데로 이동, 물건 수 보이기. */}

        </>
    )
}
export default Sidemenu