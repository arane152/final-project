import { useEffect } from "react";
import { useStore } from "../../context/StoreContext";

function Percent(props){
  const {post} = props;
  const {storeData} = useStore();
  const matchedStore = storeData.find((store) => store.id == post.storeId);
  const minPrice = parseInt(matchedStore?.minPrice)

  if (!post?.menuList || !matchedStore?.minPrice) {
    return <>모집중!</>;
  }

  const totalSum = Object.values(post.menuList).reduce((acc, item) => {
    const price = parseInt(item.menuPrice);
    const qty = parseInt(item.menuQaunitiy);
    return acc + price * qty;
  }, 0);

  const percentPrice = Math.floor(totalSum/minPrice*100)
  return (
    <>{percentPrice}%</>
  )

}

export default Percent