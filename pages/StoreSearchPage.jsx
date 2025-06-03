import { useState } from "react";
import styled from "styled-components";

import Device from "../src/layouts/Device";
import BottomModal from "../src/layouts/BottomModal";
import BottomModalBg from "../src/layouts/BottomModalBg";
import SearchItem from "../src/components/SearchItem";
import InfoBox from "../src/components/InfoBox";
import TextInput from "../src/components/TextInput";
import CategoryBtn from "../src/components/CategoryBtn";

const SearchUI = styled.ul`
  margin: 0;
  padding: 12px 20px;
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 313px;
  margin: 0 auto;
`;

const CategoryBtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

function StoreSearchPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const dummyStoreList = [
    { category: "한식", storeName: "청년다방", minPrice: 12000 },
    { category: "중식", storeName: "홍콩반점", minPrice: 10000 },
    { category: "일식", storeName: "스시로", minPrice: 15000 },
  ];

  const categories = ["한식", "중식", "일식", "피자", "파스타", "해산물", "기타"];

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
              <ModalContentWrapper>
                <InfoBox title="이름">
                  <TextInput
                    placeholder="음식점 이름을 입력하세요"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                  />
                </InfoBox>

                <InfoBox title="최소금액">
                  <TextInput
                    placeholder="최소 주문 금액을 입력하세요"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </InfoBox>

                <CategoryBtnWrapper>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      style={{ all: "unset", cursor: "pointer" }}
                    >
                      <CategoryBtn
                        text={cat}
                        type={selectedCategory === cat ? "toggle" : ""}
                      />
                    </button>
                  ))}
                </CategoryBtnWrapper>
              </ModalContentWrapper>
            </BottomModal>
          </div>
        </BottomModalBg>
      )}
    </>
  );
}

export default StoreSearchPage;