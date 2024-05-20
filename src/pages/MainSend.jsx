import React, { useState, useEffect } from "react";
import styled from "styled-components";
import QuestionSend from "../components/SendQustion/QuestionSend1";
import QuestionSend2 from "../components/SendQustion/QuestionSend2";
import QuestionSend3 from "../components/SendQustion/QuestionSend3";
import QuestionSend4 from "../components/SendQustion/QuestionSend4";
import QuestionSend5 from "../components/SendQustion/QuestionSend5";
import QuestionSend6 from "../components/SendQustion/QuestionSend6";
import QuestionSend7 from "../components/SendQustion/QuestionSend7";
import LastPage from "../components/LastPage";
function MainSend() {
  useEffect(() => {
    // 페이지가 로드될 때 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, []);
  const [inquirerName, setInquirerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState({
    part1: "",
    part2: "",
    part3: "",
  });
  const [email, setEmail] = useState({ local: "", domain: "" });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [agreed, setAgreed] = useState(false);

  const handleInquirerNameChange = (e) => {
    setInquirerName(e.target.value);
  };

  const handlePhoneNumberChange = (part, value) => {
    setPhoneNumber((prev) => ({ ...prev, [part]: value }));
  };
  const handleEmailChange = (part, value) => {
    setEmail((prev) => ({ ...prev, [part]: value }));
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e) => {
    //setFile(e.target.files[0]);
    setFile(e);
  };

  const handleAgreementChange = (isChecked) => {
    setAgreed(isChecked);
  };

  const submitQuestion = async () => {
    if (!agreed) {
      alert("개인정보 처리방침에 동의해 주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("inquirer_name", inquirerName);
    formData.append(
      "phone",
      `${phoneNumber.part1}-${phoneNumber.part2}-${phoneNumber.part3}`
    );
    formData.append("email", `${email.local}@${email.domain}`);
    formData.append("title", title);
    formData.append("content", content);
    if (file) formData.append("file", file);

    console.log(Array.from(formData));

    try {
      const response = await fetch(
        "https://tiktokbackendtest.fly.dev/api/questions",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (result.resultCode === "S-1") {
        alert("문의가 성공적으로 제출되었습니다.");
      } else {
        alert(result.msg);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div>
      <PageContainer>
        <QuestionSend
          inquirerName={inquirerName}
          onInquirerNameChange={handleInquirerNameChange}
        />
        <QuestionSend2
          phoneNumber={phoneNumber}
          onPhoneChange={handlePhoneNumberChange}
        />
        <QuestionSend3 email={email} onEmailChange={handleEmailChange} />
        <QuestionSend4 title={title} onTitleChange={handleTitleChange} />
        <QuestionSend5
          content={content}
          onContentChange={handleContentChange}
        />
        <QuestionSend6 onFileChange={handleFileChange} />
        <QuestionSend7
          agreed={agreed}
          onAgreementChange={handleAgreementChange}
          onSubmit={submitQuestion}
        />
        <LastPage />
      </PageContainer>
    </div>
  );
}

export default MainSend;

const PageContainer = styled.div`
  flex-direction: column;
`;
