import { useState } from "react";

const Membership = () => {
  const [focus,setFocus] = useState(false);
  return (
    <div className="membership">
      <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
      <div>
        <label className="email">
{/* 사용자가 input을 클릭해서 onFocus 이벤트가 발생되면 setFocus(true)가 되고 focus상태가 true로 바뀜 */}
          <input 
          type="email"
          onFocus={()=>{setFocus(true)}}
          onBlur={(e)=>{
            if(e.target.value === '') setFocus(false);   //만약에 input에 들어간 value값(=텍스트)이 없다면 false값으로 돌리기
            }}/>
{/* focus가 true이면 classname이 focused, false이면 클래스 없음('') */}
          <span 
          className={focus ? 'focused':''}>이메일 주소</span>
        </label>
        <button>시작하기 ＞</button>
      </div>
    </div>
  );
};

export default Membership;