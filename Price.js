import ItemCard from "./ItemCard"

function Price(props) {

    return (
        <>
            {/* Price 01 */}
            <div className="label-price" onClick={() => { props.setPriceGroup(!props.priceGroup) }}>
                <div className="price">
                    <div>{props.priceLabel}</div>
                </div>
                <div className="price-chart" style={{ width: props.nhPrice[1] }}>
                    <div className="price-n">{props.nhPrice[0]}</div>
                </div>
            </div>
            {
                props.priceGroup === true ?
                    (
                        // eslint-disable-next-line array-callback-return
                        props.itemsPrice.map(function (x, i) {
                            return (
                                <ItemCard x={x} key={i} />
                            );
                        })
                    ) : null
            }

        </>
    )
}
export default Price;