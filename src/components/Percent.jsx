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
  if (!matchedStore?.minPrice) {
    return <>00%</>;
  }
  let totalSum = 0;
  if(post?.menuList){
    totalSum = Object.values(post.menuList).reduce((acc, item) => {
      const price = parseInt(item.menuPrice);
      const qty = parseInt(item.menuQaunitiy);
      if(isNaN(price) || isNaN(qty)){
        if (!item.accept) return acc;
        
        const totalSumParty = Object.values(item.menus).reduce((acc2, item2) => {
          const price2 = parseInt(item2.menuPrice);
          const qty2 = parseInt(item2.menuQuantity);
          return acc2 + price2 * qty2;
        }, 0);
        return acc + totalSumParty;
      }
    return acc + price * qty;
  }, 0);
  }
  //post의 menuList의 각 메뉴가격을 추출 후 합산

  
  let totalSumRecruiter = 0;
  if (post.recruiterMenus) {
    totalSumRecruiter = Object.values(post.recruiterMenus).reduce((acc3, item3) => {
        const price3 = parseInt(item3.menuPrice);
        const qty3 = parseInt(item3.menuQuantity);
        return acc3 + price3 * qty3;
    }, 0);
}

  //최소주문금액 대비 모인 금액 퍼센트 계산
  const percentPrice = Math.floor((totalSum + totalSumRecruiter)/minPrice*100)

  //출력
  return (
    <>{percentPrice}%</>
  )

}

export default Percent