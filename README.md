# React-Spring_DBTable

spring boot 2.7.6

java 8

### 실행방법
백엔드
- main/java/com/DB/DBTable/Password.java 에서 password 수정  
  ex) root
- main/java/com/DB/DBTable/company/Company.java 에서 자신의 mysql database에 맞게 url, user을 변경    
  ex) mydb, root
- mysql Table 구축할 때 COMPANY_schema, COMPANY_tuples 기준으로 Create

프론트엔드
- cd frontend
- npm i

React, Spring 실행

### 메인화면
<img src="https://velog.velcdn.com/images/opop8834/post/7b587e85-cea0-41d7-9f5c-854aa6638985/image.png">


### 1. 새로운 직원 추가하기
<img src="https://velog.velcdn.com/images/opop8834/post/a725f2a7-a968-4dae-84fa-e4b476b1fce7/image.png">
<img src ="https://velog.velcdn.com/images/opop8834/post/fd63df0c-97dc-46b0-be28-4dc29b67d985/image.png">

Test직원 추가하기

### 결과
<img src ="https://velog.velcdn.com/images/opop8834/post/e2e85630-6255-4521-b580-cddb659efb4c/image.png">


### 2. 검색하기
<img src ="https://velog.velcdn.com/images/opop8834/post/5534b8b9-9b41-445d-b3f2-6fc050526414/image.png">

<img src ="blob:https://velog.io/76c15271-cb9e-429d-94a3-be96272ad2e9">

출력 화면
Ssn은 기본적으로 포함되게 하였다.
찾아가기 열의 클릭 버튼을 누르면 Ssn을 기준으로 
전체 테이블에서 해당 행으로 화면 이동한다.

### 3. 삭제하기
<img src ="https://velog.velcdn.com/images/opop8834/post/7e196aaf-d293-47ae-abc4-07bf9be76230/image.png">
<img src ="https://velog.velcdn.com/images/opop8834/post/485d244f-dc34-41b0-9936-e2d6c8ffce4e/image.png">

위에서 추가했던 Test 직원이 삭제된 모습
맨 오른쪽 열의 삭제버튼을 누르면 해당 행의 데이터가 삭제가 된다.
PK인 Ssn을 기준으로 delete 쿼리문을 실행한다.

### 4. 수정하기
<img src ="https://velog.velcdn.com/images/opop8834/post/aac5748d-b00a-456b-adfd-943711a6e76b/image.png">

수정하기 버튼을 누르면

<img src ="https://velog.velcdn.com/images/opop8834/post/da3092b0-b3ff-4790-8148-f551839bc690/image.png">

직접 원하는 데이터를 임의로 수정할 수 있게 된다.

<img src ="https://velog.velcdn.com/images/opop8834/post/01adaffa-398d-47f4-a111-ffc5487baade/image.png">

John을 Test로 바꾼 모습

이제 저장버튼을 누르고 수정 내역 반영 버튼을 누르면 Update 쿼리가 실행되고 Database에 반영이 된다.

단 여러 데이터를 수정할 때 한번에 실행되지 않고 각각의 Update쿼리문이 실행되서 많은 비용 발생 우려

<img src ="https://velog.velcdn.com/images/opop8834/post/49aba13e-a671-4c6c-b05e-5c56eb0010dd/image.png">

<img src ="https://velog.velcdn.com/images/opop8834/post/8b3a99bd-631b-4b90-9ce2-402e85c6c4a5/image.png">

성공적으로 Update 된 모습

> ###  프로젝트 성과 일지
**`22년 12월 19일` spring 공부 시작<br>
`22년 12월 23일` getmapping으로 백엔드 -> 프론트엔드 통신 공부<br>
`22년 12월 26일` postmapping으로 프론트 엔드 -> 백엔드 통신 공부<br>
`22년 12월 29일` Fname에 값을 입력하면 select * from where Fname="입력 값"으로 출력<br>
`23년 1월 4일`  checkbox로 columns 필터링하고 그에 따른 select “columns” from where Fname=”입력 값” 으로 출력<br>
`23년 1월 11일` 새로운 직원을 Insert 하는 기능 추가<br>
`23년 1월 12일` 출력할 때 테이블 형태로 출력 <br>
// 발생한 문제 해결 : "" 대신 null로 수정, <br>
// tr안에는 td을 선언한 다음에 button을 추가<br>
`23년 1월 12일` 삭제 버튼 누르면 해당 직원 행 Delete<br>
`23년 1월 13일` 수정하기 기능에서 테이블의 인덱스와 그 데이터 값을 key, value로 가진 map으로 생성 백엔드로 통신할 때는 object타입으로 변경하고 보내주었다.<br>
`23년 1월 17일` 수정하기 버튼을 누른 후 테이블 데이터를 직접 수정가능, 수정 내역을 반영하면 즉각적으로 Update됨<br>
`23년 1월 18일` 검색된 직원은 checkbox columns에 맞게 출력이 되고 버튼을 누르면 직접 그 행으로 찾아간다.<br>
`23년 1월 19일` checkbox 모두선택 / 모두해제 기능 추가, 검색하고 난 뒤 checkbox 수정하면 출력 안되게 구현**

프론트엔드는 React라이브러리를 이용하였고 
백엔드는 Spring프레임워크를 이용한 JDBC로 구현하였다.
순수하게 JDBC로만 코딩을 한 것이라 가독성이 떨어지는 문제가 있는데,
다음 프로젝트는`Mybatis와 DBCP 적용하여 비용 문제와 가독성 문제를 해결 해야겠다.


> ###  어려웠던 점
- 수정테이블을 구현할 때 index와 value를 각각 추출하여 `map`타입으로 만들었다.
그 이유는 index가 key값이기 때문에 동일한 key값을 수정 한다면 리스트에 계속 쌓이기 때문에 미연에 방지하고자 프론트엔드에서 new Map()을 선언하여 사용하였다.
하지만 map형태로 백엔드로 통신을 하게 되면 백엔드에서 hashmap으로 받지 못하는 오류가 발생하였다. 그래서 그냥 보낼때는 map타입에서 `Object`타입으로 변환하고 통신을 하였고 성공적으로 전송이 되었다.
- 그리고 수정할때는 Primary key를 기준으로 수정을 하기 때문에 임의로 `Ssn column`값도 추가하여 보냈다.
- 조건에 따라서 아무것도 랜더링을 하고 싶지 않을때는 ""대신 `null`로 써야된다.

> ### 보완할 점
- API를 주고받을 때 restful하게 API를 주고받지 않았다.
- 수정버튼을 하나로 통합하고 싶었는데 능력 한계로 그냥 2개 사용..
- 출력을 할때 Html의 table 속성을 이용하여 출력을 하고 싶었는데, 가정자체가 DB 테이블의 열의 순서를 이미 알고있다고 생각하고 웹 프론트엔드를 개발하였다. 
그래서 index를 활용한 코드들이 많이 보인다. 
비효율적이고 가독성도 별로 좋아보이지 않는다.
