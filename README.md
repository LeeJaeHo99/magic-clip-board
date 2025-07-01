<p align="center">
  <img src="https://github.com/user-attachments/assets/d8998180-24af-40ec-a9d7-8bba7371a680" width="120"/>
</p>
<h2 align="center">Magic Clip Board</h1>

### 목차
- [프로젝트 소개](#프로젝트-소개)
- [제작 이유](#프로젝트-소개)
- [사용기술 및 이유](#프로젝트-소개)
- [성과 및 배운점](#프로젝트-소개)

## 📍 프로젝트 소개
<a href="https://chromewebstore.google.com/detail/magic-clipboard/ealhfboahjjldbkodbfafeeocpckbjpf?hl=ko&utm_source=ext_sidebar" target="blank">확장 프로그램 링크</a>
<p>기여도: 100%</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/887cceef-c0dc-4fab-8aed-5d93a9f58687" width="800"/>
</p>
<p align="center">(사용 화면)</p>
<p>크롬 브라우저 사용시 이전 복사된 텍스트를 클립보드에 저장하여 쉽게 붙여넣기 할 수 있는 프로그램입니다.</p>
<p>단축키를 사용하여 마우스 없이 프로그램 실행 및 종료가 가능하며 이전에 복사된 텍스트도 쉽게 복사가 가능합니다.</p>

## 📍 제작 이유

### ✨ 실용적인 문제 해결
<ul>
  <li>웹 서핑 중 복사한 텍스트를 다시 찾기 어려운 불편함을 해결하고자 했습니다.</li>
</ul>

### ✨ 실제 사용 가능한 도구 개발
<ul>
  <li>단순한 학습용 프로젝트가 아닌, 일상에서 유용하게 사용할 수 있는 프로그램을 만들고 싶었습니다.</li>
  <li>Chrome 확장 프로그램으로 제작하여, 실제 사용자에게 도움이 되는 도구를 목표로 개발했습니다.</li>
</ul>

## 📍 사용 기술 및 이유
<p>
  <img src="https://github.com/user-attachments/assets/1f97619b-2712-40d4-9eba-d8fc6742970f" width="48">
  <strong>JavaScript</strong>
</p>
<p>간단한 클립보드 관리 기능을 구현하는 데 <strong>복잡한 프레임워크는 불필요하다고 판단했습니다.</strong></p>
<p>프레임워크에 의존하지 않고 <strong>순수 JavaScript로 직접 DOM을 다루며 구현</strong>함으로써, <strong>웹의 동작 원리를 더 깊이 이해</strong>할 수 있는 좋은 기회라고 생각했습니다.</p>
<p>또한, 별도의 빌드 과정 없이 빠르게 배포 및 테스트할 수 있다는 점에서도 순수 JavaScript는 효과적인 선택이었습니다.</p>


## 📍 트러블 슈팅

### 🔥 Chrome Storage API 비동기 처리 문제 🔥

<p><strong>문제 상황</strong></p>
<ul>
  <li>복사된 텍스트를 Chrome Storage에 저장할 때 데이터가 <strong>제대로 저장되지 않는 문제</strong>가 발생했습니다.</li>
  <li><strong>저장과 조회 시점이 맞지 않아</strong> 최신 데이터를 가져오지 못하는 상황으로 판단하였습니다.</li>
</ul>
<p><strong>원인 분석</strong></p>
<ul>
  <li>Chrome Storage API는 비동기적으로 동작한다는 특성을 확인했습니다.</li>
  <li>chrome.storage.local.set() 메서드는 호출 즉시 반환되지만, 실제 데이터 저장은 백그라운드에서 이루어지기 때문에 </li>
  <li>저장 직후에 데이터를 바로 읽거나 후속 작업을 수행하면, 저장이 완료되지 않은 상태에서 작업이 진행되어 데이터 불일치 문제가 발생했습니다.</li>
  <li>또한, 에러 핸들링이 없어서 저장 과정에서 오류가 발생해도 인지할 수 없었습니다.</li>
</ul>
<p><strong>해결 과정</strong></p>
<ul>
  <li>chrome.storage.local.set()의 콜백 함수를 통해 저장 완료 시점을 명확히 확인하도록 변경했습니다.</li>
  <li>그리고 저장이 완료된 후에만 다음 작업이 수행되도록 순서를 제어하였습니다.</li>
</ul>
<p><strong>결과</strong></p>
<ul>
  <li>데이터 저장 과정의 안정성과 신뢰성을 확보하였습니다.</li>
  <li>또한 저장 완료 시점을 명확하게 파악 가능하도록 변경하여 오류가 나지 않도록 되었습니다.</li>
</ul>


## 📍 성과 및 배운점

### ✨ Chrome Extension 개발 경험
<ul>
  <li><strong>실제로 나에게 필요한 프로그램을 직접 개발</strong>해보며, 크롬 확장 프로그램 개발에 대한 전반적인 흐름과 구조를 경험할 수 있었습니다.</li>
  <li>매니페스트 설정, 권한 관리, background 및 content script 구조 이해 등 <strong>확장 프로그램 개발의 과정을 직접 겪으며 다양한 기술을 익혔습니다.</strong></li>
</ul>

### ✨ 브라우저 API 활용
<ul>
  <li>Storage API, Chrome Extension API 등 다양한 브라우저 API를 실제로 적용하며 브라우저의 동작 원리와 API 간의 상호작용 방식에 대해 깊이 있게 이해할 수 있었습니다.</li>
  <li>특히 비동기 처리, 권한 기반 접근, 로컬 저장소 활용 등 <strong>웹 개발에서 자주 사용되는 개념을 실습</strong>할 수 있었던 점이 큰 도움이 되었습니다.</li>
  <li><strong>새로운 기술과 도구를 학습</strong>하고 직접 프로젝트에 적용해보는 과정을 통해, <strong>스스로 문제를 해결하고 탐색하는 능력</strong>을 키울 수 있었습니다.</li>
</ul>
