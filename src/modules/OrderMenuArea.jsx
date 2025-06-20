import styled from "styled-components";

import TotalAmount from "../components/TotalAmount";
import MenuDefault from "../components/MenuDefault";
import MenuAdd from "../components/MenuAdd";
import MenuSetting from "../components/MenuSetting";
import MainBtn from "../components/MainBtn";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// #202020
const StyledWrapper = styled.div`
    width: 393px;

    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 20px;
`

const Subtitle = styled.h2`
    color: #202020;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    margin: 0; 
`

const Maintitle = styled.h2`
    color: #202020;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
`

const MaintitleWrapper = styled.div`
    width: 353px;
    height: 46px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 12px;
    margin-bottom: 12px;
`

const ComonentWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 12px;
`

const Container = styled.div`
    width: 313px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column; 
    gap: 12px;
`


function OderMenuArea(props) {
    const navigate = useNavigate();

    const {
        //메뉴목록 전달을 위한 props
        menuList, 
        setMenuList,
        //음식점 설정 페이지에서 선택한 후 정보 전달을 위한 props
        storeName, 
        minPrice,

        //메뉴목록 - 아이템 - 신청자Id 저장을 위한 props
        userId
    } = props

    //메뉴추가 input란 값 저장용 State
    const [ name, setName ] = useState("");
    const [ menuPrice, setPrice ] = useState("");
    
    //메뉴총액 계산을 위한 State
    const [ totalAmount, setTotalAmount] = useState(0);
    //menuList 변화에 따른 실시간 메뉴총액 계산 useEffect
    useEffect(() => {
        const total = menuList.reduce((acc, item) => {
        return acc + (item.menuQuantity * item.menuPrice);
        }, 0);
        setTotalAmount(total);
    }, [menuList])
    
    //MenuList-item별 수량조작 버튼 +
    const menuPlusClick = (name) => {
        setMenuList(
            prevList =>
            prevList.map(item =>
                (item.name === name)
                    ? { ...item, menuQuantity: item.menuQuantity + 1 }
                    : item
            )
        );
    };
    //MenuList-item별 수량조작 버튼 -
    const menuMinusClick = (name) => {
        setMenuList(
            prevList =>
            prevList.map(item =>
                (item.name === name)
                    ? { ...item, menuQuantity: item.menuQuantity - 1 }
                    : item
            ).filter(item => item.menuQuantity > 0)
            //수량값이 0이 될 시 해당 item 삭제하는 필터
        );
    };

    //메뉴추가버튼 onClick함수
    const addMenuGo = () => {
        //필요값 없을시 경고
        if (!name || !menuPrice) {
            alert('메뉴정보를 모두 입력해주세요.');
            return;
        }
        //메뉴가격이 숫자형식이 아닐시 경고
        if (!menuPrice.trim() || isNaN(parseInt(menuPrice)) || parseInt(menuPrice) <= 0) {
            alert('메뉴가격은 숫자로만 입력해야 합니다.');
            return;
        }
        //클릭시,
        setMenuList(
            prevList =>{ 
                //같은 이름의 메뉴를 추가할시 경고
                const isDuplicate = prevList.some(item => item.name === name);
                if (isDuplicate) {
                    alert('이미 같은 이름의 메뉴가 존재합니다.');
                    return prevList; 
                }
                //기입정보초기화
                setName("")
                setPrice("")
                //  기입된 정보를 menuList에 추가,
                return[...prevList, {
                    name: name,
                    menuPrice: parseInt(menuPrice),
                    menuQuantity: 1,
                    userId: userId,
                }]
                
            }
        )
    }

    //menuList 양식
    const MenuListArea = menuList.map(
        (item) =>{
            return(
                <MenuDefault
                    key={item.name}
                    name={item.name}
                    price={item.menuPrice}
                    count={item.menuQuantity}
                    onPlusClick={() => menuPlusClick(item.name)}
                    onMinusClick={() => menuMinusClick(item.name)}>
                </MenuDefault>
            )
        }
    ) 

    const isStoreSelected = !!storeName;

    return(
    <StyledWrapper>
        <MaintitleWrapper>
            <Maintitle>주문메뉴</Maintitle>
        </MaintitleWrapper>

        <ComonentWrapper>
            {/*음식점 선택 버튼 + 버튼 선택 이후 나오는 컴포넌트 구성*/}
            {!isStoreSelected && (
                <Container>
                    <Subtitle>음식점 설정</Subtitle>
                    <MainBtn type="ghost" mainText="음식점 선택" menuOnClick={()=>navigate(`/store`)}></MainBtn>
                </Container>
            )}

            {isStoreSelected && (
                <>  
                    {/* 음식점설정카드 */}
                    <MenuSetting storeName={storeName} minPrice={minPrice}></MenuSetting>

                    {/* menuList 존재할때만 출력 */}
                    {menuList && menuList.length > 0 && MenuListArea}

                    {/* 메뉴추가란 */}
                    <MenuAdd
                        addMenuGo = {addMenuGo}
                        name={name} onNameChange={(e) => { setName(e.target.value);}}
                        menuPrice={menuPrice} onPriceChange={(e) => { setPrice(e.target.value);}} >
                    </MenuAdd>

                    {/* 메뉴총액란 */}
                    <TotalAmount title="메뉴총액" totalAmount={totalAmount}></TotalAmount>
                </>
            )}
        </ComonentWrapper>
    </StyledWrapper>
    )
}

export default OderMenuArea