// 가맹점 클래스
class Restaurant {
  constructor(id, name, category, address, lat, lng, phone, menu, image) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.address = address;
    this.lat = lat;
    this.lng = lng;
    this.phone = phone;
    this.menu = menu;
    this.image = image;
  }
}

// 가맹점 데이터
const restaurants = [
  new Restaurant(
    1,
    "버거베어 청량리점",
    "햄버거",
    "서울 동대문구 고산자로32길 78 1층 102호",
    37.5777705,
    127.0426411,
    "02-959-1982",
    ["한우 시그니처 버거 8900원", "클래식 치킨 버거 8800원"],
    "images/restaurant1.jpg"
  ),
  new Restaurant(
    2,
    "고래한입피자 비츠샐러드 청량리점",
    "피자",
    "서울 동대문구 고산자로32길 78 한양수자인그라시엘 지하1층 164호",
    37.5770103,
    127.0434946,
    "02-968-8980",
    ["아보카드 샐러드 12000원", "로제 파스타 샐러드 10900원"],
    "images/restaurant2.jpg"
  ),
  new Restaurant(
    3,
    "아소정 청량리점",
    "냉면",
    "서울 동대문구 고산자로32길 78 한양수자인 아트포레스트 2층",
    37.5776676,
    127.0427045,
    "02-963-5600",
    ["물냉면 12000원", "비빔냉면 12000원"],
    "images/restaurant3.jpg"
  ),
  new Restaurant(
    4,
    "올드페리도넛 청량리점",
    "도넛",
    "서울 동대문구 고산자로32길 78 판매시설동 1층 103호",
    37.5777868,
    127.042778,
    "02-960-0828",
    ["티라미수 5800원", "메이플피칸 5000원"],
    "images/restaurant3.jpg"
  ),
  new Restaurant(
    5,
    "아비꼬 서울청량리점",
    "카레",
    "서울 동대문구 답십리로1길 10 힐스에비뉴동 103동 127호",
    37.5782368,
    127.0436633,
    "02-960-0828",
    ["야채&포크카레 10300원", "통등심카츠정식 13200원"],
    "images/restaurant3.jpg"
  ),
  new Restaurant(
    6,
    "매머드 익스프레스 청량리삼성화재점",
    "카페",
    "서울 동대문구 고산자로34길 70 해링턴플레이스 A동 105호",
    37.5784796,
    127.0423759,
    "0507-1434-8281",
    ["버터비어 크림 커피 4500원", "아메리카노 1600원"],
    "images/restaurant3.jpg"
  ),
  new Restaurant(
    7,
    "시카고커리",
    "카레",
    "서울 동대문구 천호대로31길 23",
    37.5747331,
    127.04073,
    "0507-1378-3751",
    ["치킨커리 12000원", "가정식 왕 돈까스 12000원"],
    "images/restaurant3.jpg"
  ),
  ,
  new Restaurant(
    8,
    "청마루한우숯불갈비",
    "소고기구이",
    "서울 동대문구 왕산로28길 15 청마루한우",
    37.577334,
    127.0390979,
    "02-957-8282",
    ["냉면 정식 7000원", "뚝배기불고기 13000원"],
    "images/restaurant3.jpg"
  ),
  new Restaurant(
    9,
    "순대실록 청량리점",
    "순대,순댓국",
    "서울 동대문구 답십리로 27 롯데캐슬SKY-L65 상가동 107호 순대실록 청량리점",
    37.5792332,
    127.0453225,
    "0507-1383-8912",
    ["전통 순댓국 10000원", "순댓국 정식 14000원"],
    "images/restaurant3.jpg"
  ),
  new Restaurant(
    10,
    "스타벅스 청량리역롯데캐슬스카이점",
    "카페",
    "서울 동대문구 답십리로 27 (전농동, 청량리역 롯데캐슬 SKY-L65)",
    37.5792492,
    127.045331,
    "1522-3232",
    ["피치 망고 선셋 블렌디드 6700원", "카페 아메리카노 4700원"],
    "images/restaurant3.jpg"
  ),
  new Restaurant(
    11,
    "페이지2726",
    "카페,디저트",
    "서울 동대문구 고산자로30길 13 1층 페이지2726",
    37.5759955,
    127.0390224,
    "0507-1372-3259",
    ["페이지 라떼 4500원", "카페라떼 4200원"],
    "images/restaurant3.jpg"
  ),
  new Restaurant(
    12,
    "경동관 나주곰탕나주전 경동시",
    "곰탕,설렁탕",
    "서울 동대문구 고산자로 428 1층 경동관 나주곰탕나주전 경동시장점",
    37.5777501,
    127.0385371,
    "0507-1488-7898",
    ["나주 곰탕 11000원", "왕갈비탕 16000원"],
    "images/restaurant3.jpg"
  ),
  new Restaurant(
    13,
    "경동밥상",
    "한식",
    "서울 동대문구 고산자로36길 3 . 지하1층 40101호",
    37.5790378,
    127.0391429,
    "0507-1428-7411",
    ["한식뷔페 10000원"],
    "images/restaurant3.jpg"
  ),
  new Restaurant(
    14,
    "스타벅스 경동1960점",
    "카페",
    "서울 동대문구 고산자로36길 3 (제기동)",
    37.5796141,
    127.0386849,
    "1522-3232",
    ["피치 망고 선셋 블렌디드 6700원", "스타벅스 멜론 라떼 6500원"],
    "images/restaurant3.jpg"
  ),
  new Restaurant(
    15,
    "버거킹 동대문구청점",
    "햄버거",
    "서울 동대문구 고산자로 406",
    37.5759026,
    127.0384329,
    "070-7459-7090",
    ["콰트로치즈와퍼세트 10000원", "통새우와퍼세트 10000원"],
    "images/restaurant3.jpg"
  ),
  new Restaurant(
    16,
    "육쌈냉면 청량리점",
    "냉면",
    "서울 동대문구 홍릉로 8-1",
    37.581075,
    127.045112,
    "02-960-6392",
    ["물냉면+숯불고기(보통) 9500원", "비빔냉면+술붗고기(보통) 9500원"],
    "images/restaurant3.jpg"
  ),
  new Restaurant(
    17,
    "롯데리아 청량리점",
    "햄버거",
    "서울 동대문구 왕산로 209 1층",
    37.5809196,
    127.0458634,
    "02-965-5953",
    ["모짜렐라 인 더 버거 베이컨 세트 11300", "리아 불고기 더블 세트 10900"],
    "images/restaurant3.jpg"
  ),
  new Restaurant(
    18,
    "롯데리아 청량리역사점",
    "햄버거",
    "서울 동대문구 왕산로 214 청량리역사 3층",
    37.5804911,
    127.0485841,
    "02-969-5433",
    ["한우불고기버거세트 10900", "핫크리스피버거 8300원"],
    "images/restaurant3.jpg"
  ),
  new Restaurant(
    19,
    "크리스피크림 도넛 롯데청량리점",
    "도넛",
    "서울 동대문구 왕산로 214 백화점 지하2층",
    37.5808472,
    127.0475384,
    "02-3707-1930",
    ["오리지널 글레이즈드 1800", "초코홀릭 2500원"],
    "images/restaurant3.jpg"
  ),
];

// 가맹점 검색 함수
function searchRestaurant(keyword) {
  return restaurants.filter(
    (r) =>
      r.name.includes(keyword) ||
      r.category.includes(keyword) ||
      r.address.includes(keyword)
  );
}

// 가맹점 리스트 표시 함수
function displayRestaurantList() {
  const listContainer = document.getElementById("listContainer");

  // 기존 h2 제목은 유지하고 그 아래에 추가
  let listHTML = "<h2>가맹점 목록 (" + restaurants.length + "개)</h2>";

  restaurants.forEach((restaurant) => {
    listHTML += `
            <div class="restaurant-item" data-id="${restaurant.id}">
                <h3>${restaurant.name}</h3>
                <p><strong>카테고리:</strong> ${restaurant.category}</p>
                <p><strong>주소:</strong> ${restaurant.address}</p>
                <p><strong>전화:</strong> ${restaurant.phone}</p>
                <p><strong>메뉴:</strong> ${restaurant.menu.join(", ")}</p>
            </div>
        `;
  });

  listContainer.innerHTML = listHTML;
}

// initMap 함수 안에 추가
function initMap() {
  const mapContainer = document.getElementById("map");
  const mapOption = {
    center: new kakao.maps.LatLng(37.5777, 127.0427),
    level: 3,
  };

  map = new kakao.maps.Map(mapContainer, mapOption);
  displayMarkers();
  displayRestaurantList(); // 이 줄 추가
}
