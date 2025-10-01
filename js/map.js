// 지도 초기화
let map;

let markers = [];
let currentInfowindow = null;

// 검색 기능
function searchRestaurants() {
  const searchInput = document.getElementById("searchInput");
  const keyword = searchInput.value.trim().toLowerCase();

  if (keyword === "") {
    // 검색어 없으면 전체 표시
    displayFilteredRestaurants(restaurants);
    return;
  }

  // 검색어로 필터링
  const filtered = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(keyword) ||
      restaurant.category.toLowerCase().includes(keyword) ||
      restaurant.address.toLowerCase().includes(keyword)
  );

  displayFilteredRestaurants(filtered);
}

// 필터링된 가맹점 표시
function displayFilteredRestaurants(filteredRestaurants) {
  // 기존 마커 모두 제거
  markers.forEach((markerData) => {
    markerData.marker.setMap(null);
  });
  markers = [];

  // 인포윈도우 닫기
  if (currentInfowindow) {
    currentInfowindow.close();
    currentInfowindow = null;
  }

  // 필터링된 가맹점으로 마커 다시 생성
  filteredRestaurants.forEach((restaurant, index) => {
    const markerPosition = new kakao.maps.LatLng(
      restaurant.lat,
      restaurant.lng
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      map: map,
    });

    const infoContent = `
    <div style="
        padding: 20px 20px 25px 20px; 
        min-width: 250px;
        max-width: 300px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    ">
        <h3 style="
            margin: 0 0 12px 0;
            font-size: 18px;
            color: #2c3e50;
            font-weight: 700;
            border-bottom: 2px solid #3498db;
            padding-bottom: 8px;
        ">${restaurant.name}</h3>
        
        <p style="
            margin: 8px 0;
            font-size: 14px;
            color: #555;
        ">
            <strong style="color: #3498db;">카테고리:</strong> ${restaurant.category}
        </p>
        
        <p style="
            margin: 8px 0;
            font-size: 13px;
            color: #666;
            line-height: 1.4;
        ">
            <strong style="color: #3498db;">주소:</strong><br>${restaurant.address}
        </p>
        
        <p style="
            margin: 8px 0;
            font-size: 14px;
            color: #555;
        ">
            <strong style="color: #3498db;">전화:</strong> ${restaurant.phone}
        </p>
    </div>
`;

    const infowindow = new kakao.maps.InfoWindow({
      content: infoContent,
    });

    kakao.maps.event.addListener(marker, "click", function () {
      if (currentInfowindow) {
        currentInfowindow.close();
      }
      infowindow.open(map, marker);
      currentInfowindow = infowindow;
    });

    markers.push({ marker: marker, infowindow: infowindow });
  });

  // 리스트도 업데이트
  updateRestaurantList(filteredRestaurants);
}

// 리스트 업데이트
function updateRestaurantList(filteredRestaurants) {
  const listContainer = document.getElementById("listContainer");

  let listHTML = "<h2>가맹점 목록 (" + filteredRestaurants.length + "개)</h2>";

  if (filteredRestaurants.length === 0) {
    listHTML +=
      '<p style="text-align:center; padding:20px; color:#999;">검색 결과가 없습니다.</p>';
  } else {
    filteredRestaurants.forEach((restaurant) => {
      listHTML += `
                <div class="restaurant-item" data-id="${
                  restaurant.id
                }" onclick="moveToRestaurant(${restaurant.lat}, ${
        restaurant.lng
      }, ${restaurant.id})">
                    <h3>${restaurant.name}</h3>
                    <p><strong>카테고리:</strong> ${restaurant.category}</p>
                    <p><strong>주소:</strong> ${restaurant.address}</p>
                    <p><strong>전화:</strong> ${restaurant.phone}</p>
                    <p><strong>메뉴:</strong> ${restaurant.menu.join(", ")}</p>
                </div>
            `;
    });
  }

  listContainer.innerHTML = listHTML;
}
// 랜덤 음식점 추천 함수
function recommendRandomRestaurant() {
  // 랜덤 인덱스 선택
  const randomIndex = Math.floor(Math.random() * restaurants.length);
  const randomRestaurant = restaurants[randomIndex];

  // 해당 음식점으로 지도 이동
  moveToRestaurant(
    randomRestaurant.lat,
    randomRestaurant.lng,
    randomRestaurant.id
  );

  // 알림 메시지
  alert(
    `🎉 오늘의 추천 음식점!\n\n${randomRestaurant.name}\n카테고리: ${randomRestaurant.category}`
  );
}

// initMap 함수 수정 - 검색 버튼 이벤트 추가
function initMap() {
  const mapContainer = document.getElementById("map");

  const mapOption = {
    center: new kakao.maps.LatLng(37.5777, 127.0427),
    level: 3,
  };

  map = new kakao.maps.Map(mapContainer, mapOption);

  kakao.maps.event.addListener(map, "click", function () {
    if (currentInfowindow) {
      currentInfowindow.close();
      currentInfowindow = null;
    }
  });

  displayMarkers();
  displayRestaurantList();

  // 검색 버튼 이벤트
  document
    .getElementById("searchBtn")
    .addEventListener("click", searchRestaurants);

  // 엔터키로 검색
  document
    .getElementById("searchInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchRestaurants();
      }
    });

  // 랜덤 추천 버튼 이벤트 (여기 추가)
  document
    .getElementById("randomBtn")
    .addEventListener("click", recommendRandomRestaurant);
}

// 가맹점 마커 표시 함수
function displayMarkers() {
  restaurants.forEach((restaurant, index) => {
    const markerPosition = new kakao.maps.LatLng(
      restaurant.lat,
      restaurant.lng
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      map: map,
    });

    const infoContent = `
    <div style="
        padding: 20px 20px 25px 20px; 
        min-width: 250px;
        max-width: 300px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    ">
        <h3 style="
            margin: 0 0 12px 0;
            font-size: 18px;
            color: #2c3e50;
            font-weight: 700;
            border-bottom: 2px solid #3498db;
            padding-bottom: 8px;
        ">${restaurant.name}</h3>
        
        <p style="
            margin: 8px 0;
            font-size: 14px;
            color: #555;
        ">
            <strong style="color: #3498db;">카테고리:</strong> ${restaurant.category}
        </p>
        
        <p style="
            margin: 8px 0;
            font-size: 13px;
            color: #666;
            line-height: 1.4;
        ">
            <strong style="color: #3498db;">주소:</strong><br>${restaurant.address}
        </p>
        
        <p style="
            margin: 8px 0 15px 0;
            font-size: 14px;
            color: #555;
        ">
            <strong style="color: #3498db;">전화:</strong> ${restaurant.phone}
        </p>
    </div>
`;

    const infowindow = new kakao.maps.InfoWindow({
      content: infoContent,
    });

    kakao.maps.event.addListener(marker, "click", function () {
      if (currentInfowindow) {
        currentInfowindow.close();
      }
      infowindow.open(map, marker);
      currentInfowindow = infowindow;
    });

    // 마커와 인포윈도우를 배열에 저장
    markers.push({ marker: marker, infowindow: infowindow });
  });
}

// 가맹점 리스트 표시 함수
function displayRestaurantList() {
  const listContainer = document.getElementById("listContainer");

  let listHTML = "<h2>가맹점 목록 (" + restaurants.length + "개)</h2>";

  restaurants.forEach((restaurant) => {
    listHTML += `
            <div class="restaurant-item" data-id="${
              restaurant.id
            }" onclick="moveToRestaurant(${restaurant.lat}, ${
      restaurant.lng
    }, ${restaurant.id})">
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
// 지도 이동 함수
function moveToRestaurant(lat, lng, restaurantId) {
  const moveLatLng = new kakao.maps.LatLng(lat, lng);
  map.setCenter(moveLatLng);
  map.setLevel(3);

  // 지도 영역으로 스크롤 이동
  const mapElement = document.getElementById("map");
  mapElement.scrollIntoView({ behavior: "smooth", block: "center" });

  // 이전 인포윈도우 닫기
  if (currentInfowindow) {
    currentInfowindow.close();
  }

  // 해당 마커의 인포윈도우 열기
  const markerData = markers[restaurantId - 1]; // id는 1부터 시작
  if (markerData) {
    markerData.infowindow.open(map, markerData.marker);
    currentInfowindow = markerData.infowindow;
  }
}
// 페이지 로드 시 지도 초기화
window.onload = initMap;
