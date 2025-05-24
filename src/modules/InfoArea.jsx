import styled from "styled-components";
import { useState } from "react";

import InfoBox from "../components/InfoBox";
import TextInput from "../components/TextInput";
import ToggleBtn from "../components/ToggleBtn";

function InfoArea(props) {
    return(
    <div>
        <InfoBox title="제목"><TextInput></TextInput></InfoBox>
        <InfoBox title="수령장소"><TextInput></TextInput></InfoBox>
        <InfoBox title="마감시간"><TextInput></TextInput></InfoBox>
        <InfoBox title="내용"><TextInput height={"108px"}></TextInput></InfoBox>
        <InfoBox title="계좌번호"><TextInput></TextInput></InfoBox>
        <InfoBox title="선입금필수여부">
            <ToggleBtn text="자유"></ToggleBtn>
            <ToggleBtn type="none-toggle" text="필수"></ToggleBtn>
      </InfoBox>
    </div>
    )
}

export default InfoArea