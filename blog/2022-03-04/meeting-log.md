# 03/04 회의록

**회의록 작성자**

- 20163079 강동호
- 20171714 최주원

**회의 참여자**

- 20163079 강동호
- 20171714 최주원

**아이디어 구체화**

1. **Kafka Data Stream 을 이용한 API 게이트웨이 및 테스트 클라이언트 개발**

**요구사항**

- 사내 오픈소스로 처리할 부분 정하기

**기능**

- API 호출 목록 집합 - kafka
- API 테스트기
- 누락된 API 목록
- 처리된 API 목록
- 하루 처리량

**업무분담**

- 동호 - Kafka + Back-End
- 주원 - Front-End(React-Docusaurous)

**기술스택**

- Spring Boot
    - Webflux
    - Kotlin
    - Reactive Kafka
- React
- Docusaurous
    - Document 제공 뿐만이 아니라, 실제 테스트 페이지까지 사용 예정.
        - 카프카 퍼블리셔 시각화
        - API 테스트 툴
    - 적용 - [https://kookmin-sw.github.io/capstone-2022-31/](https://kookmin-sw.github.io/capstone-2022-31/)
    - 후보테마
        - [https://remirror.io/](https://remirror.io/)
        - [Saving Photos to the Filesystem | Ionic Documentation (](https://ionicframework.com/docs/angular/your-first-app/saving-photos)[ionicframework.com](https://app.tryeraser.com/integration/gather/ionicframework.com)[)](https://ionicframework.com/docs/angular/your-first-app/saving-photos)

**회의 리뷰**

→ 사용자가 보기에 데이터 시각화를 하는 것이 중요하기 때문에 데이터 시각화 예정.

→ 어떤 API를 사용하는 것에 대해서 테스트 솔루션이 있었으면 좋겠음.

→ 각자의 업무분담 정확하게 정해졌으면 좋겠음.

→ 회사에서 쓸 수 있으면서 학생 및 교수님이 정확하게 이해하는 솔루션 필요.