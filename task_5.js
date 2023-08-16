async function fetchSWAPI(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed with status code: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`fetchSWAPI error: ${error.message}`);
    }
  }
  
  async function getPersonFilms(name) {
    const personData = await fetchSWAPI(`https://swapi.py4e.com/api/people/?search=${name}`);
    if (personData.count === 0) {
      return { name, films: [] };
    }
  
    const person = personData.results[0];
    const filmPromises = person.films.map(filmUrl => fetchSWAPI(filmUrl));
    const films = await Promise.all(filmPromises);
    return { name: person.name, films };
  }
  
  async function testGetPersonFilms() {
    try {
      const lukeFilms = await getPersonFilms("Luke Skywalker");
      console.log("lukeFilms ", lukeFilms);
  
      const kenobiFilms = await getPersonFilms("Obi-Wan Kenobi");
      console.log("kenobiFilms ", kenobiFilms);
    } catch (error) {
      console.log("testGetPersonFilms error ", error);
    }
  }
  
  testGetPersonFilms();
  