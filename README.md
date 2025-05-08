이 프로젝트는 `nextjs`를 사용하여 개발된 MDX파일(markdown) 기반의 깔끔하고 심플한 개발자용 이력서 배포 프로젝트입니다.

프로젝트를 수정하여 나만의 이력서를 **vercel** 을 통해 간단히 배포할 수 있습니다.

## 시작하기

먼저, 개발 서버를 실행합니다.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인합니다.

## 어떻게 사용하나요?

**기본 디렉토리 구조**

```bash
.
├── app
├── components # 화면 컴포넌트 디렉토리
│   ├── education-and-certifications.tsx
│   ├── etc.tsx
│   ├── experience.tsx
│   ├── introduce.tsx
│   ├── opensource.tsx
│   ├── profile.tsx
│   ├── project.tsx
│   ├── skill.tsx
├── content # 마크다운 문법의 실제 이력서 내용 디렉토리
│   ├── education-and-certifications.mdx    # 학력 또는 자격증
│   ├── etc.mdx                             # 기타 내용
│   ├── experience                          # 재직회사 등 경험 작성
│   ├── introduce.mdx                       # 자기소개서
│   ├── opensource                          # 오픈소스 활동
│   ├── profile.mdx                         # 개인 프로필
│   ├── project                             # 년도별 프로젝트
│   └── skill.mdx                           # 스킬
├── public
│   └── profile.png                         # 개인 프로필 이미지 또는 기타 이미지
```

`/content/*` 하위 디렉토리의 해당 내용에 맞도록 **내용을 수정 또는 추가하여 나만의 이력서를 작성**합니다.

기본 mdx 파일의 구조는 아래와 같습니다.

```mdx
export const metadata = {
  hidden: false, // 컨텐츠 숨김여부
  startDate: "2017.05",
  endDate: "2018.01",
  ... // 옵션들,
};

마크다운 문법으로 내용을 입력합니다.

- 하이루
- heelo
```

metadata의 옵션은 [/types/index.d.ts](./types/index.d.ts) 파일을 확인합니다.

mdx의 사용법에 대한 더 자세한 내용은 [MDX](https://nextjs.org/docs/app/guides/mdx)를 참고 합니다.

## Vercel에 배포하기

Next.js 앱을 배포하는 가장 쉬운 방법은 Next.js 개발사가 제공하는 [Vercel 플랫폼](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.
