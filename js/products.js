// ========================================
// 1단계: 데이터 준비 (상품 정보 저장)
// ========================================

const products = {
  
  // 마이크 카테고리
  "microphone": {
    title: "MICROPHONES",
    content: "모든 상황과 공간에서 자랑하는 독보적인 신뢰성",
    bannerImage: "source/microphone-banner.png",

    // 시리즈 목록
    series: [
      {
        name: "MKH",
        image: "source/mkh.png",
        content: "오디오의 사실성을 담기 위한 마이크"
      },
      {
        name: "MK",
        image: "source/mk.png",
        content: "놀라운 성능을 자랑하는 녹음용 마이크"
      },
      {
        name: "Evolution",
        image: "source/evolution.png",
        content: "안정적인 사운드, 명확한 작업 집중력"
      },
      {
        name: "Profile",
        image: "source/profile.png",
        content: "콘텐츠 크리에이터들의 간편하지만 고품질 오디오"
      },
      {
        name: "TeamConnect",
        image: "source/teamconnect.png",
        content: "최고도, 고품질의 오디오를 위한 마이크"
      }
    ],

    // 제품 목록
    items: [
      { name: "MKH 8018 Model", image: "source/mkh-8018.png" },
      { name: "Profile Wireless Transmitter", image: "source/profile-transmitter.png" },
      { name: "Profile Wireless Receiver", image: "source/profile-receiver.png" },
      { name: "MD 421 KOMPAKT", image: "source/md-421.png" },
      { name: "MKH 8030", image: "source/mkh-8030.png" },
      { name: "Profile USB Microphone", image: "source/profile-usb.png" },
      { name: "e 835", image: "source/e-835.png" },
      { name: "e 945", image: "source/e-945.png" },
      { name: "MKE 400", image: "source/mke-400.png" },
      { name: "MKH 416-P48U3", image: "source/mkh416-p48u3.png" },
      { name: "MD 421-II", image: "source/md421.png" },
      { name: "e 604", image: "source/e604.png" },
    ]
  }
};

// ========================================
// 2단계: URL에서 카테고리 ID 가져오기
// ========================================

// URL이 products.html?id=microphone 이면
// productyId = "microphone" 이 됨

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

console.log("현재 ID:", productId);  // 확인용

// ========================================
// 3단계: 해당 카테고리 데이터 가져오기
// ========================================

const product = products[productId];

console.log("데이터:", product);  // 확인용

// product = products["microphone"] 
// = { title: "MICROPHONES", content: "...", ... }


// ========================================
// 4단계: 화면에 데이터 표시하기
// ========================================

function renderPage() {
  
  // 카테고리가 없으면 에러 표시
  if (!product) {
    document.getElementById('products-title').textContent = '카테고리를 찾을 수 없습니다';
    return;
  }

  // 4-1. 배너 영역 채우기
  document.getElementById('products-title').textContent = product.title;
  document.getElementById('products-content').textContent = product.content;
  document.getElementById('banner-image').src = product.bannerImage;

  // 4-2. 시리즈 목록 채우기
  const seriesList = document.getElementById('series-list');
  
  let seriesHTML = '';  // 빈 문자열 준비
  
  // 시리즈 배열을 돌면서 HTML 만들기
  for (let i = 0; i < product.series.length; i++) {
    const series = product.series[i];
    
seriesHTML += '<li>';
    seriesHTML += '<a href="">'
    seriesHTML += '<img src="' + series.image + '" alt="' + series.name + '">';
    seriesHTML += '<h4>' + series.name + '</h4>';
    seriesHTML += '<p>' + series.content + '</p>';
    seriesHTML += '</a>';
    seriesHTML += '</li>';
  }
  
  seriesList.innerHTML = seriesHTML;  // HTML에 넣기

  // 4-3. 제품 목록 채우기
const productsList = document.getElementById('products-list');
  let itemsHTML = '';
  
  for (let i = 0; i < product.items.length; i++) {
    const item = product.items[i];
    
    itemsHTML += '<li>';
    itemsHTML += '<a href="">';
    itemsHTML += '<img src="' + item.image + '" alt="' + item.name + '">';
    itemsHTML += '<p>' + item.name + '</p>';
    itemsHTML += '</a>';
    itemsHTML += '</li>';
  }
  
  productsList.innerHTML = itemsHTML;
}

renderPage();