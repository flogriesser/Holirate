function getMoviesFromApiAsync(origin, destination) {
    var url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination="+ destination+ + "&key=" + process.env.REACT_APP_GOOGLE_API_KEY;
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }