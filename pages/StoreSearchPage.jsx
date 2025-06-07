import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../src/firebase";
import { useNavigate } from "react-router-dom";

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

const SearchUI = styled.div`
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
  const [isModalOpen, setIsModalOpen] = useState(false); //모달 여닫기
  const [storeName, setStoreName] = useState(""); //가게 이름
  const [minPrice, setMinPrice] = useState(""); //최소주문금액
  const [selectedCategory, setSelectedCategory] = useState(""); //카테고리

  const [storeList, setStoreList] = useState([]); //가게 리스트
  const [categoryList, setCategoryList] = useState([]); //카테고리 리스트

  const [searchText, setSearchText] = useState(""); //검색어
  const [filteredList, setFilteredList] = useState([]); //검색값
  const [errorMsg, setErrorMsg] = useState(""); //에러 메세지

  const navigate = useNavigate();

  //가게, 카테고리 컬렉션 받아오기기
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

  //검색하기
  const handleSearch = () => {
    const trimmedKeyword = searchText.trim().toLowerCase(); //공백 제거, 소문자
    if (trimmedKeyword === "") { //검색어가 없으면 검색어를 입력해달라고 요청 메세지 띄우기기
      setFilteredList([]);
      setErrorMsg("검색어를 입력해주세요.");
      return;
    }

    //검색 결과 있는 경우
    const results = storeList.filter((store) => {
      //가게 이름은 문자열로 바꾸고 소문자화
      const storeName = String(store.name || "").toLowerCase();
      //카테고리는 id를 기준으로 검색
      const category = categoryList.find((cat) => cat.id === store.categoryId);
      //카테고리 이름이 존재하면 문자열로 변환 
      const categoryName = String(category?.name || "").toLowerCase();

      //검색어에 가게 이름이나 카테고리를 포함한 것것 
      return (
        storeName.includes(trimmedKeyword) ||
        categoryName.includes(trimmedKeyword)
      );
    });
    setFilteredList(results);
    setErrorMsg(results.length === 0 ? "아래의 음식점 추가하기 기능을 이용해주세요." : ""); //검색어가 없으면 음식점 추가하기 기능 사용 유도
  };

  const isSearchEmpty = searchText.trim() === "";

  return (
    <Device
      content="search"
      headerType="search"
      gnbType="btn"
      btnType="default"
      btnMainText="음식점 추가하기"
      backPage={() => {
        sessionStorage.setItem("fromSearch", "true");
        window.location.href = "/write";
      }}
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
                onClick={() => {
                  localStorage.setItem("selectedStoreName", store.name);
                  localStorage.setItem("selectedMinPrice", String(store.minPrice));
                  sessionStorage.setItem("fromSearch", "true");
                  navigate("/write");
                }}
              />
            );
          })
        )}
      </SearchUI>

      {isModalOpen && (
        <>
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

          <BottomModalBg onClick={() => setIsModalOpen(false)} />
        </>
      )}
    </Device>
  );
}

export default StoreSearchPage;