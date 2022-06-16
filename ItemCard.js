function ItemCard(props) {

    // 데이터베이스 데이터 전처리기
    let courtColor;
    switch (props.x.court) {
        default:
            break;
        case '서울중앙지법':
            courtColor = { background: "#06D6A0", color: "white" };
            break;
        case '서울동부지법':
            courtColor = { background: "#6A4C93", color: "white" };
            break;
        case '서울서부지법':
            courtColor = { background: "#FFD166", color: "white" };
            break;
        case '서울남부지법':
            courtColor = { background: "#F79824", color: "white" };
            break;
        case '서울북부지법':
            courtColor = { background: "#118AB2", color: "white" };
            break;
    }

    // https://coolors.co/palette/4059ad-6b9ac4-97d8c4-eff2f1-f4b942
    let kindIcon, kindColor;
    switch (props.x.kind[0]) {
        default:
            kindIcon = 'bx bx-home-smile';
            break;
        case '다세대':
            kindIcon = 'bx bx-building-house';
            kindColor = { background: '#97d8c4' };
            break;
        case '단독':
            kindIcon = 'bx bx-home';
            kindColor = { background: '#06a77d' };
            break;
        case '아파트':
            kindIcon = 'bx bxs-business';
            kindColor = { background: '#4059ad' };
            break;
        case '토지':
            kindIcon = 'bx bx-landscape';
            kindColor = { background: '#f4b942' };
            break;
        case '상가':
            kindIcon = 'bx bx-store';
            kindColor = { background: '#cfdee7' };
            break;
        case '빌딩':
            kindIcon = 'bx bx-builings';
            kindColor = { background: '#545e75' };
            break;
    }

    let kind = props.x.kind[0];
    let kindFontSize = {}
    if (kind.length > 3) {
        kindFontSize = { fontSize: "0.5em" }
    }

    let locationColor;
    switch (props.x.address[0]) {
        default:
            break;
        case '서울시':
            locationColor = { background: 'rgb(89, 179, 255)' };
            break;
    }

    const last = props.x.upDate.length - 1;

    function yymmdd() {
        const initial = props.x.upDate[0][0];
        const final = props.x.upDate[last][0];

        let initialYY = initial.slice(2, 4);
        let initialMM = initial.slice(5, 7);
        if (initialMM[0] === '0') { initialMM = initialMM[1] };
        let initialDD = initial.slice(8, 10);
        if (initialDD[0] === '0') { initialDD = initialDD[1] };

        let finalYY = final.slice(2, 4);
        let finalMM = final.slice(5, 7);
        if (finalMM[0] === '0') { finalMM = finalMM[1] };
        let finalDD = final.slice(8, 10);
        if (finalDD[0] === '0') { finalDD = finalDD[1] };

        return [[initialYY, initialMM, initialDD], [finalYY, finalMM, finalDD]]
    }
    function priceUnit() {
        let initial = props.x.upDate[0][1] / 1e8;
        let final = props.x.upDate[last][1] / 1e8;
        let initialUnit;
        let finalUnit;

        if (initial >= 1 && initial < 10000) {
            initialUnit = '억';
        }
        else if (initial >= 0.1 && initial < 1) {
            initial = initial * 10;
            initialUnit = '천만';
        }
        else if (initial >= 0.01 && initial < 0.1) {
            initial = initial * 10;
            initialUnit = '백만';
        }

        if (final >= 1 && final < 10000) {
            finalUnit = '억';
        }
        else if (final >= 0.1 && final < 1) {
            final = final * 10;
            finalUnit = '천만';
        }
        else if (final / 1e8 >= 0.01 && final / 1e8 < 0.1) {
            final = (final * 10);
            finalUnit = '백만';
        }

        return [[initial, initialUnit], [final, finalUnit]]
    }

    return (
        <div className="item-card">
            <div className="item-card-frame">
                {/* map part */}
                <div className="item-map">
                    <iframe title='map' src={props.x.gmap} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="item-card-icons-container">
                    <div className="item-card-name">
                        <p className="item-card-court" style={courtColor}>{props.x.court}</p>
                        <p className="item-card-number">{props.x.title}</p>
                    </div>
                    {/* title and top icons */}
                    <div className="item-card-icons-top">
                        <div className="icon">
                            <div className="icon-square" style={kindColor}>
                                <i className={kindIcon}></i>
                                <p className='unit' style={kindFontSize}>{props.x.kind[0]}</p>
                            </div>
                            <div className="icon-title">분류</div>
                        </div>
                        <div className="icon">
                            <div className="icon-square" style={locationColor}>
                                <ul>
                                    <li>{props.x.address[0]}</li>
                                    <li>{props.x.address[1].slice(0, 3)}</li>
                                </ul>
                            </div>
                            <div className="icon-title">지역</div>
                        </div>
                        <div className="icon">
                            <div className="icon-square">
                                <i className='bx bx-fullscreen'></i>
                                <p>{props.x.area[0] === '?' ? props.x.area[0] : props.x.area[0].toFixed(1)}</p>
                            </div>
                            <div className="icon-title">대지(㎡)</div>
                        </div>
                        <div className="icon">
                            <div className="icon-square">
                                <i className='bx bxs-layer'></i>
                                <p>{props.x.area[1].toFixed(1)}</p>
                            </div>
                            <div className="icon-title">건물(㎡)</div>
                        </div>
                        <div className="icon">
                            <div className="icon-square">
                                <p>{props.x.percent}</p>
                                <p className='unit'>/100</p>
                            </div>
                            <div className="icon-title">지분비율</div>
                        </div>
                    </div>
                </div>

                {/* bottom icons */}
                <div className="item-card-icons-bottom">
                    <div className="icon">
                        <div className="icon-square gray">
                            <ul>
                                <li>{yymmdd()[0][1]}/{yymmdd()[0][2]}</li>
                                <li className="year unit">'{yymmdd()[0][0]}</li>
                                {/* <li>'21</li> */}
                            </ul>
                        </div>
                        <div className="icon-title">게시일</div>
                    </div>
                    <div className="icon">
                        <div className="icon-square gray">
                            <p>{priceUnit()[0][0].toFixed(2)}</p><p className='unit'>{priceUnit()[0][1]}</p>
                        </div>
                        <div className="icon-title">감정가</div>
                    </div>
                    <div className="icon">
                        <div className="icon-square red">
                            <p>{props.x.miss} 회</p><p>-{Math.ceil(100 * (1 - 0.8 ** props.x.miss))}%</p>
                        </div>
                        <div className="icon-title">유찰</div>
                    </div>
                    <div className="icon">
                        <div className="icon-square">
                            <ul>
                                <li>{yymmdd()[1][1]}/{yymmdd()[1][2]}</li>
                                <li className="year unit">'{yymmdd()[1][0]}</li>
                                {/* <li>'21</li> */}
                            </ul>
                        </div>
                        <div className="icon-title">경매일</div>
                    </div>
                    <div className="icon">
                        <div className="icon-square">
                            <p>{priceUnit()[1][0].toFixed(2)}</p><p className='unit'>{priceUnit()[1][1]}</p>
                        </div>
                        <div className="icon-title">입찰가능가</div>
                    </div>
                </div>
                {/* right icons */}
                <div className="item-card-icons-right">
                    <div className="icon">
                        <div className="icon-square black">
                            <i className='bx bx-share bx-flip-horizontal' ></i>
                        </div>
                        <div className="icon-title">공유</div>
                    </div>
                    <div className="icon">
                        <div className="icon-square black">
                            <i className='bx bx-star' ></i>
                        </div>
                        <div className="icon-title">관심저장</div>
                    </div>
                    <div className="icon">
                        <div className="icon-square black">
                            <i className='bx bx-zoom-in'></i>
                        </div>
                        <div className="icon-title">상세보기</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemCard;