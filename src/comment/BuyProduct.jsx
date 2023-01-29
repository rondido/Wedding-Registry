import BuyItem from "./BuyItem";

export default function BuyProduct() {
    return (
        <div className="productBox">
            <p>OOOO님의 리스트 입니다.</p>
            <div className="itemList">
                <BuyItem/>
            </div>
        </div>
    )
}