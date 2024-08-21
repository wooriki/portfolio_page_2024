# Portfolio Page

### Deployment

- <a href="https://portfolio-page-2024-kappa.vercel.app/">Portfolio Page</a>

해당 프로젝트는 Next.js를 바탕으로 구성하였으며 Mongo DB에 데이터를 저장하고 관리하는 페이지입니다.<br/>
권한을 가진 사용자만 admin 페이지에서 데이터를 저장 및 업데이트 할 수 있으며 이는 Client Page에 반영됩니다.

### Main Features

- **데이터 관리 :**
  - 권한을 가진 사용자만 데이터를 생성 및 관리할 수 있습니다.
  - 해당 카테고리에 저장됩니다.
- **API 엔드포인트:**
  - NextResponse를 사용하여 JSON 형식의 답을 반환하며
  - 각 탭에 대한 데이터 추가, 조회, 업데이트를 위한 API 엔드포인트를 설정하고 있습니다.
    <br/>데이터베이스 모델은 스키마에 기반하여 정의되며 클라이언트 요청을 통해 서버에서 데이터를 처리합니다.
- **반응형:**
  - 다양한 화면 크기에 맞춰 브레이크포인트를 설정하여 디자인을 조정하였습니다.
  - 모든 주요 웹브라우저 및 디바이스에서 최적의 사용자 경험을 제공합니다.

### Tech Stack

- **프레임워크 및 라이브러리:**

  - **Next.js:** React 기반의 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG)을 위한 프레임워크입니다.
  - **React:** 효율적인 UI구성과 빠른 렌더링을 지원하는 컴포넌트 기반 JavaScript 라이브러리입니다.
  - **Framer-motion:** 자연스러운 애니메이션과 트랜지션을 간편하게 구현할 수 있는 라이브러리며, 직관적으로 적용하고 조정할 수 있습니다.

- **이미지:**

  - **Next.js Image 컴포넌트:** 최적화된 이미지 로딩과 크기 조정을 지원하는 컴포넌트입니다.

- **데이터베이스:**
  - **Mongo DB:** JSON과 유사한 문서 기반의 데이터베이스로, 유연한 스키마를 지원하며 수평 확장성으로 대규모 데이터를 효율적으로 처리할 수 있습니다.
    <br/>NoSQL 데이터베이스로, 데이터 구조의 변동성이 큰 애플리케이션에 적합하며, 빠른 쿼리 성능과 높은 가용성을 제공합니다.

## Captures

<details>
  <summary>펼칠 시 캡쳐 이미지</summary>
<img width="2156" alt="스크린샷 2024-08-21 오후 9 29 20" src="https://github.com/user-attachments/assets/89ba7e4b-c2a0-4854-9c2f-19b0bbb7b86e">
<img width="2165" alt="스크린샷 2024-08-21 오후 9 29 36" src="https://github.com/user-attachments/assets/e9186259-2b64-455d-9789-847630358e28">
<img width="2171" alt="스크린샷 2024-08-21 오후 9 29 56" src="https://github.com/user-attachments/assets/da05828b-ab9b-414e-ac55-44e559fabfb2">
<img width="2168" alt="스크린샷 2024-08-21 오후 9 30 12" src="https://github.com/user-attachments/assets/67d54ba1-6991-4f4b-b71e-81096d915194">
<img width="2162" alt="스크린샷 2024-08-21 오후 9 30 37" src="https://github.com/user-attachments/assets/ba6e1a29-accc-44bf-b95f-6430f4dcb363">

### 반응형

<img width="607" alt="스크린샷 2024-08-21 오후 9 31 03" src="https://github.com/user-attachments/assets/69b8b2e3-18ee-495b-b382-ae543521d1ed">
<img width="615" alt="스크린샷 2024-08-21 오후 9 31 21" src="https://github.com/user-attachments/assets/e102c694-bf1c-4033-9fd5-c8e31ae5bd0b">
<img width="621" alt="스크린샷 2024-08-21 오후 9 31 40" src="https://github.com/user-attachments/assets/2ddeb003-ee79-4888-a432-25b3eada38b5">
</details>
