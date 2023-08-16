async function fetchSWAPI(resource, throwError = false) {
    const rootUrl = 'https://swapi.py4e.com/api/';
    const url = resource.startsWith('http') ? resource : rootUrl + resource;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Failed with status code: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.log(resource, 'fetchSWAPI error', error);
      if (throwError) throw error;
    }
  }
  
  async function testFetchSWAPI() {
    try {
      const person = await fetchSWAPI("people/1/");
      console.log("person ", person);
  
      const film = await fetchSWAPI("https://swapi.py4e.com/api/films/1/");
      console.log("film ", film);
  
      const film1001Id = await fetchSWAPI("films/1001/");
      console.log("film1001Id ", film1001Id);
  
      await fetchSWAPI("films/1101/", true);
    } catch (error) {
      console.log("testFetchSWAPI error ", error);
    }
  }
  
  testFetchSWAPI();
  