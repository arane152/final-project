import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useUser } from '../../context/UserContext'

const GnbWrapper = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    bottom: 0;
    width: 393px;
    height: 100px;
    background-color: #FFF;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0px -4px 4px rgba(128, 128, 128, 0.1);
    margin: 0;
    z-index: 5;
`

const GnbLayout = styled.div`
    display: flex;
    width: 300px;
    height: 46px;
    justify-content: space-between;
    align-items: center;
    margin-top: 9px;
`

const GnbBtn = styled(GnbLayout)`
    width: 353px;
    justify-content: center;
    margin-top: 16px;
`

const GnbHomeIcon = styled.div`
    display: flex;
    width: 36px;
    height: 36px;
    background-image: url(${import.meta.env.BASE_URL}HomeIcon.svg);
`

const GnbProfileIcon = styled.div`
    display: flex;
    width: 36px;
    height: 36px;
    background-image: url(${import.meta.env.BASE_URL}ProfileIcon.svg);
`

const GnbAddIcon = styled.div`
    display: flex;
    width: 46px;
    height: 46px;
    background-image: url(${import.meta.env.BASE_URL}AddPostIcon.svg);
    cursor: pointer;
`

const StyledUserList=styled.ul`
    position: absolute;
    background-color: #222222;
    color: #aaaaaa;
    bottom: 90px;
    right: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    margin: 0;
    & > div {
    color: #eeeeee;
    padding: 8px 24px;
    border-top: 1px solid #666666;
    }
`

function Gnb(props) {
    const navigate = useNavigate();

    //context
    const [onUserList, setOnUserList] = useState(false);
    const { userListData, nowuser, setUser } = useUser(); // userListData : 유저 리스트 데이터, nowuser : 현재 유저 정보, setUser : 유저 설정 함수
    const [nowUserName, setNowUserName] = useState("기본값");  // 현재 유저 이름

    useEffect(()=>{
        // 현재 유저 정보가 있을 경우, 현재 유저 이름을 설정
        if(nowuser){
            setNowUserName(nowuser.name)
        }
    }, [nowuser]);

    // 유저 리스트를 클릭했을 때, 해당 유저 정보를 설정
    const UserList = userListData.map(
        (item)=>{
        return ( 
            // key : 유저 아이디, onClick : 해당 유저 정보 설정
            // item.name : 유저 이름
            // item.userId : 유저 아이디
            <div key={item.userId} 
                onClick={()=>{
                    setUser(item);
            }}>
                {item.name}
            </div>
        )
        }
    )

    // 선택된 유저 정보를 localStorage에 저장
    useEffect(()=>{
        if(nowuser){
            localStorage.setItem("userId", nowuser.userId);
            localStorage.setItem("userName", nowuser.name);
            localStorage.setItem("accountNumber", nowuser.accountNumber);
            localStorage.setItem("location", nowuser.location);
        }
    }, [nowuser]);


    // props.type : gnb 타입 (gnb : "gnb" / 버튼 : "btn")
    // props.children : gnb 타입중 btn 타입일때, 안에 들어가는 버튼
    if (props.type == "gnb") {
        return (
            <GnbWrapper>
                <GnbLayout>
                    <GnbHomeIcon aria-label="홈 아이콘"></GnbHomeIcon>
                    <GnbAddIcon onClick={()=>navigate(`/write`)} aria-label="글쓰기 아이콘"></GnbAddIcon>
                    <GnbProfileIcon onClick={()=>{!onUserList ? setOnUserList(true) : setOnUserList(false)}} aria-label="프로필 아이콘">
                    </GnbProfileIcon>
                    {onUserList && <StyledUserList> <p>now : {nowUserName}</p>{UserList} </StyledUserList>}
                </GnbLayout>
            </GnbWrapper>
        )
    }
    else if (props.type == "btn") {
        return (
            <GnbWrapper>
                <GnbBtn onClick={props.onClick}>
                    {props.children}
                </GnbBtn>
            </GnbWrapper>
        )
    }    
    else if (props.type == "none") {
        return (
            <></>
        )
}}

export default Gnb