import Device from "../layout/Device";
import PostPartyContainer from "../modules/PostPartyContainer";
import PostRequestContainer from "../modules/PostRequestContainer";

function ParticipationPage() {
  return (
    <Device content="참여현황" headerType="" gnbType="btn" btnType="">
      <PostPartyContainer />
      <PostRequestContainer />
    </Device>
  );
}

export default ParticipationPage;