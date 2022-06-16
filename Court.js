import ItemCard from "./ItemCard"

function Court(props) {

    let on;
    if (props.court === true) {
        on = ['open', 'block'];
    }
    else {
        on = ['', 'none'];
    }

    let custom;
    switch (props.seoul.court) {
        default:
            break;
        case '서울중앙지법':
            custom = ['center', "court-center", "#06D6A044"]
            break;
        case '서울동부지법':
            custom = ['east', "court-east", "#6a4c9344"]
            break;
        case '서울서부지법':
            custom = ['west', "court-west", "#FFD16633"]
            break;
        case '서울남부지법':
            custom = ['south', "court-south", "#F7982444"]
            break;
        case '서울북부지법':
            custom = ['north', "court-north", "#ff595e44"]
            break;
    }

    return (
        <>
            {/* courtCenter */}
            <div className={custom[0] + ' label-court ' + on[0]} >
                <div className="state">
                    <ul>
                        {
                            props.seoul.state.map((x, i) => {
                                return (<li key={i}>{x}</li>)
                            })
                        }
                    </ul>
                </div>
                <div className="court">
                    <span>{props.seoul.court}</span>
                    {/* <span>{props.nCourt}</span> */}
                </div>
                <div className="label-court-dummy" id={custom[1]}></div>
                <i className='close-btn bx bx-x' style={{ display: on[1] }} onClick={() => { props.setCourt(false) }}></i>
            </div>
            {
                props.court === true ?
                    (
                        // eslint-disable-next-line array-callback-return
                        props.itemsCourt.map(function (x, i) {
                            return (
                                <div style={{ background: custom[2] }}>
                                    <ItemCard x={x} key={i} />
                                </div>
                            );
                        })
                    ) : null
            }
        </>
    )
}
export default Court