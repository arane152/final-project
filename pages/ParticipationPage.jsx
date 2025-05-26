import Device from "../src/layouts/Device";
import PostPartyContainer from "../src/modules/PostPartyContainer";
import PostRequestContainer from "../src/modules/PostRequestContainer";

function ParticipationPage() {
  const dummyApplicants = [
    {
      name: "홍길동",
      date: "2025-05-26",
      menus: [
        { name: "라면", price: 5000, count: 1 },
        { name: "김밥", price: 3000, count: 2 }
      ]
    },
    {
      name: "홍길둉",
      date: "2025-05-26",
      menus: [
        { name: "떡볶이", price: 4000, count: 1 }
      ]
    }
  ];

  return (
    <Device content="참여현황" headerType="" gnbType="btn" btnType="">
      <PostPartyContainer />
      <PostRequestContainer applicants={dummyApplicants} />
    </Device>
  );
}

export default ParticipationPage;