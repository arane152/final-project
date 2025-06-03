import { useEffect } from "react";
import { useStore } from "../../context/StoreContext";


//최소주문금액 대비 모인 금액 퍼센트 계산함수
function Percent(props){
  //데이터
  const {post} = props;
  const {storeData} = useStore();

  //post의 storeId를 이용해 그 id에 해당하는 store의 minPrice 추출
  const matchedStore = storeData.find((store) => store.id == post.storeId);
  const minPrice = parseInt(matchedStore?.minPrice)

  //필요한 데이터가 없을 시 기본값 출력
  if (!post?.menuList && !matchedStore?.minPrice) {
    return <>0%</>;
  }

  //post의 menuList의 각 메뉴가격을 추출 후 합산
  const totalSum = Object.values(post.menuList).reduce((acc, item) => {
    const price = parseInt(item.menuPrice);
    const qty = parseInt(item.menuQaunitiy);
    return acc + price * qty;
  }, 0);

  //최소주문금액 대비 모인 금액 퍼센트 계산
  const percentPrice = Math.floor(totalSum/minPrice*100)

  //출력
  return (
    <>{percentPrice}%</>
  )

}

export default Percent