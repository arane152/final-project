import {useState} from "react";
import BottomModal from "../src/layouts/BottomModal";
import BottomModalBg from "../src/layouts/BottomModalBg";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dummyStoreList = [
    { category: "한식", storeName: "청년다방", minPrice: 12000 },
    { category: "중식", storeName: "홍콩반점", minPrice: 10000 },
    { category: "일식", storeName: "스시로", minPrice: 15000 },
  ];

  return (
    <>
      <Device
        content="search"
        headerType="search"
        gnbType="btn"
        btnType="default"
        btnMainText="음식점 추가하기"
        backPage="/write"
        modalOnClick={() => setIsModalOpen(true)}
      >
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

      {isModalOpen && (
        <BottomModalBg onClick={() => setIsModalOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <BottomModal
              modalText="음식점 추가"
              btnType="default"
              mainText="확인"
              openModal={() => setIsModalOpen(false)}
            >
              <p>이 안에 음식점 입력 폼 들어감</p>
            </BottomModal>
          </div>
        </BottomModalBg>
      )}
    </>
  );
}

export default StoreSearchPage;