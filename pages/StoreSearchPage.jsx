import styled from "styled-components";
import Device from "../src/layouts/Device";
import SearchItem from "../src/components/SearchItem";

const SearchUI = styled.ul`
  margin: 0;
  padding: 12px 20px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  `

function StoreSearchPage() {
      const dummyStoreList = [
    {
      category: "한식",
      storeName: "청년다방",
      minPrice: 12000,
    },
    {
      category: "중식",
      storeName: "홍콩반점",
      minPrice: 10000,
    },
    {
      category: "일식",
      storeName: "스시로",
      minPrice: 15000,
    },
  ];

    return (
    <Device content="search" headerType="search" gnbType="btn" btnType="default" btnMainText="음식점 추가하기" backPage="/write">
        <SearchUI>
            {dummyStoreList.map((store, idx) => (
                <SearchItem
                key={idx}
                category={store.category}
                storeName={store.storeName}
                minPrice={store.minPrice}
                />
                ))}
        </SearchUI>
    </Device>
  );

}

export default StoreSearchPage;