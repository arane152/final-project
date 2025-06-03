import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../src/firebase";

import Device from "../src/layouts/Device";
import BottomModal from "../src/layouts/BottomModal";
import BottomModalBg from "../src/layouts/BottomModalBg";
import SearchItem from "../src/components/SearchItem";
import InfoBox from "../src/components/InfoBox";
import TextInput from "../src/components/TextInput";
import CategoryBtn from "../src/components/CategoryBtn";

const Message = styled.li`
  color: #999999;
  padding: 20px 0;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const SearchUI = styled.ul`
  margin: 0;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 353px;
  margin: 0 auto;
`;

const StyledInfoBoxOverride = styled(InfoBox)`
  & > p {
    width: 80px;
    white-space: nowrap;
  }
  & > div {
    flex: 1;
  }
`;

const CategoryBtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  flex: 1;
`;

function StoreSearchPage() {
  // 모달/폼 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Firebase 상태
  const [storeList, setStoreList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  // 검색 상태
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  // Firebase에서 데이터 불러오기
  useEffect(() => {
    db.collection("store").get().then((storeSnap) => {
      const stores = storeSnap.docs.map((doc) => doc.data());
      setStoreList(stores);
    });

    db.collection("category").get().then((categorySnap) => {
      const categories = categorySnap.docs.map((doc) => doc.data());
      setCategoryList(categories);
    });
  }, []);

  //검색 핸들링
  //trim: 앞뒤 공백 제거거
  //toLowerCase: 대문자 소문자 관계 없게
  //includes: 전체를 안 쓰고 일부만 써도 검색 가능
  const handleSearch = () => {
    const keyword = searchText.trim().toLowerCase(); // 앞뒤 공백 제거 + 소문자 변환

    if (keyword === "") {
      setFilteredList([]);
      setErrorMsg("검색어를 입력해주세요.");
      return;
    }

    const results = storeList.filter((store) => {
      const category = categoryList.find((cat) => cat.id === store.categoryId);
      const categoryName = category?.name?.toLowerCase() || "";

      return (
        store.name.toLowerCase().includes(keyword) ||
        categoryName.includes(keyword)
      );
    });

    //검색 결과가 없는 경우우
    setFilteredList(results);
    if (results.length === 0) {
      setErrorMsg("아래의 음식점 추가하기 기능을 이용해주세요.");
    } else {
      setErrorMsg("");
    }
  };

  //공백을 제외하고도 검색어가 비어있는 경우
  const isSearchEmpty = searchText.trim() === "";

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
        searchValue={searchText}
        onSearchChange={(e) => setSearchText(e.target.value)}
        onSearchSubmit={handleSearch}
      >
        <SearchUI>
          {isSearchEmpty ? (
            <Message>검색어를 입력해주세요.</Message>
          ) : errorMsg ? (
            <Message>{errorMsg}</Message>
          ) : (
            filteredList.map((store, idx) => {
              const category = categoryList.find(
                (cat) => cat.id === store.categoryId
              );
              const categoryName = category?.name || "";
              return (
                <SearchItem
                  key={idx}
                  category={categoryName}
                  storeName={store.name}
                  minPrice={store.minPrice}
                />
              );
            })
          )}
        </SearchUI>
      </Device>

      {isModalOpen && (
        <BottomModalBg onClick={() => setIsModalOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <BottomModal
              modalText="음식점 추가"
              btnType="default"
              mainText="확인"
              modalOnClick={() => setIsModalOpen(false)}
              background="white"
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
                <StyledInfoBoxOverride title="카테고리">
                  <CategoryBtnWrapper>
                    {categoryList.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        style={{ all: "unset", cursor: "pointer" }}
                      >
                        <CategoryBtn
                          text={cat.name}
                          type={selectedCategory === cat.id ? "toggle" : ""}
                        />
                      </button>
                    ))}
                  </CategoryBtnWrapper>
                </StyledInfoBoxOverride>
              </ModalContentWrapper>
            </BottomModal>
          </div>
        </BottomModalBg>
      )}
    </>
  );
}

export default StoreSearchPage;