export function getLocation() {
  if (navigator.geolocation) {
    // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // alert(position.coords.latitude + ' ' + position.coords.longitude);
        return position.coords;
      },
      function (error) {
        console.error(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      },
    );
  } else {
    alert('GPS를 지원하지 않습니다');
  }
}
