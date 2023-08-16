async function getPlanets() {
    try {
      const response = await fetch('https://swapi.py4e.com/api/planets/');
      const data = await response.json();
      console.log("Result: ", data.results);
    } catch (error) {
      console.log("Request Error: ", error);
    }
  }
  
  getPlanets();
  