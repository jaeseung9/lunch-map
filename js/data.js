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
    )
    ,
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
    )

];

// 가맹점 추가 함수
function addRestaurant(name, category, address, lat, lng, phone, menu, image) {
    const newId = restaurants.length + 1;
    const newRestaurant = new Restaurant(newId, name, category, address, lat, lng, phone, menu, image);
    restaurants.push(newRestaurant);
    return newRestaurant;
}

// 가맹점 삭제 함수
function removeRestaurant(id) {
    const index = restaurants.findIndex(r => r.id === id);
    if (index !== -1) {
        restaurants.splice(index, 1);
        return true;
    }
    return false;
}

// 가맹점 검색 함수
function searchRestaurant(keyword) {
    return restaurants.filter(r =>
        r.name.includes(keyword) ||
        r.category.includes(keyword) ||
        r.address.includes(keyword)
    );
}

// 가맹점 리스트 표시 함수
function displayRestaurantList() {
    const listContainer = document.getElementById('listContainer');

    // 기존 h2 제목은 유지하고 그 아래에 추가
    let listHTML = '<h2>가맹점 목록 (' + restaurants.length + '개)</h2>';

    restaurants.forEach(restaurant => {
        listHTML += `
            <div class="restaurant-item" data-id="${restaurant.id}">
                <h3>${restaurant.name}</h3>
                <p><strong>카테고리:</strong> ${restaurant.category}</p>
                <p><strong>주소:</strong> ${restaurant.address}</p>
                <p><strong>전화:</strong> ${restaurant.phone}</p>
                <p><strong>메뉴:</strong> ${restaurant.menu.join(', ')}</p>
            </div>
        `;
    });

    listContainer.innerHTML = listHTML;
}

// initMap 함수 안에 추가
function initMap() {
    const mapContainer = document.getElementById('map');
    const mapOption = {
        center: new kakao.maps.LatLng(37.5777, 127.0427),
        level: 3
    };

    map = new kakao.maps.Map(mapContainer, mapOption);
    displayMarkers();
    displayRestaurantList(); // 이 줄 추가
}