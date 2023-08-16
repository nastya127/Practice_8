async function getSkywalkers() {
    try {
      const response = await fetch('https://swapi.py4e.com/api/people/?search=Skywalker');
      const data = await response.json();
      console.log("Result: ", data.results);
    } catch (error) {
      console.log("Request Error: ", error);
    }
  }
  
  getSkywalkers();
  