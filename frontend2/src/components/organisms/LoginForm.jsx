import React from "react";
import Container from "../atoms/Container";
import SocialLoginButton from "../molecules/SocialLoginButton";
import githubLogo from "../../assets/githubLogo.png";

export default function LoginForm() {
  return (
    <Container className="flex flex-col justify-center items-center mt-10 px-20 py-12 border rounded-sm">
      <h2 className="text-3xl font-semibold">로그인</h2>
      <p className="mb-8 py-4 text-lg">
        간단한 로그인 후 다양한 기능을 체험해 보세요.
      </p>
      <SocialLoginButton src={githubLogo} alt="github logo" width="w-9">
        GitHub 계정으로 로그인
      </SocialLoginButton>
    </Container>
  );
}
