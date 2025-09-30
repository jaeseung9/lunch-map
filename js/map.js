// 지도 초기화
let map;

let markers = [];
let currentInfowindow = null;

function initMap() {
    const mapContainer = document.getElementById('map');
    
    const mapOption = {
        center: new kakao.maps.LatLng(37.5777, 127.0427),
        level: 3
    };
    
    map = new kakao.maps.Map(mapContainer, mapOption);
    
    // 지도 클릭 시 인포윈도우 닫기 (여기 추가)
    kakao.maps.event.addListener(map, 'click', function() {
        if (currentInfowindow) {
            currentInfowindow.close();
            currentInfowindow = null;
        }
    });
    
    displayMarkers();
    displayRestaurantList();
}

// 가맹점 마커 표시 함수
function displayMarkers() {
    restaurants.forEach((restaurant, index) => {
        const markerPosition = new kakao.maps.LatLng(restaurant.lat, restaurant.lng);
        
        const marker = new kakao.maps.Marker({
            position: markerPosition,
            map: map
        });
        
        const infoContent = `
            <div style="padding:10px; min-width:200px;">
                <h3 style="margin:0 0 5px 0;">${restaurant.name}</h3>
                <p style="margin:5px 0;">${restaurant.category}</p>
                <p style="margin:5px 0; font-size:12px;">${restaurant.address}</p>
                <p style="margin:5px 0;">${restaurant.phone}</p>
            </div>
        `;
        
        const infowindow = new kakao.maps.InfoWindow({
            content: infoContent
        });
        
        kakao.maps.event.addListener(marker, 'click', function() {
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
    const listContainer = document.getElementById('listContainer');
    
    let listHTML = '<h2>가맹점 목록 (' + restaurants.length + '개)</h2>';
    
    restaurants.forEach(restaurant => {
        listHTML += `
            <div class="restaurant-item" data-id="${restaurant.id}" onclick="moveToRestaurant(${restaurant.lat}, ${restaurant.lng}, ${restaurant.id})">
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
// 지도 이동 함수
function moveToRestaurant(lat, lng, restaurantId) {
    const moveLatLng = new kakao.maps.LatLng(lat, lng);
    map.setCenter(moveLatLng);
    map.setLevel(3);
    
    // 지도 영역으로 스크롤 이동
    const mapElement = document.getElementById('map');
    mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
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