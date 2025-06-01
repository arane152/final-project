import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {db} from '/src/firebase.js'
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
    background-image: url(/HomeIcon.svg);
`

const GnbProfileIcon = styled.div`
    display: flex;
    width: 36px;
    height: 36px;
    background-image: url(/ProfileIcon.svg);
`

const GnbAddIcon = styled.div`
    display: flex;
    width: 46px;
    height: 46px;
    background-image: url(/AddPostIcon.svg);
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
    const [userData, setUserData] = useState([]);
    const { nowuser, setUser } = useUser();

    useEffect(() => {
        let tempData = [];
        db.collection('user').get().then(function (qs) {
            qs.forEach(function (doc) {
            tempData.push(doc.data());
        });
            setUserData(tempData);
            
        });
    }, []);

    const UserList = userData.map(
        (item)=>{
        return ( 
            <div key={item.userId} 
                onClick={()=>{
                    setUser({
                        ...nowuser,
                        userName: item.name,
                        userId: item.userId,
                        accountNumber: item.accountNumber || "00000000000",
                        profile: item.profile || "none",
                    });
            }}>
                {item.name}
            </div>
        )
        }
    )



    // props.type : gnb 타입 (gnb : "gnb" / 버튼 : "btn")
    // props.children : gnb 타입중 btn 타입일때, 안에 들어가는 버튼
    if (props.type == "gnb") {
        return (
            <GnbWrapper>
                <GnbLayout>
                    <GnbHomeIcon></GnbHomeIcon>
                    <GnbAddIcon onClick={()=>navigate(`/write`)}></GnbAddIcon>
                    <GnbProfileIcon onClick={()=>{!onUserList ? setOnUserList(true) : setOnUserList(false)}}>
                    </GnbProfileIcon>
                    {onUserList && <StyledUserList> <p>now : {nowuser.userName}</p>{UserList} </StyledUserList>}
                </GnbLayout>
            </GnbWrapper>
        )
    }
    else if (props.type == "btn") {
        return (
            <GnbWrapper>
                <GnbBtn>
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