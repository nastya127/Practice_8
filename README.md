# Practice: Get and Output Data from API Endpoint Using async/await with Fetch
## Завдання 1 

Переписати функцію з Promise на async/await з використанням fetch.
```
function fetchAlbums() {
 fetch('https://jsonplaceholder.typicode.com/users/1/albums')
 .then((response) => {
   if (!response.ok) {
     throw new Error(`Failed with status code: ${response.status}`);
   }
 
   return response.json();
 })
 .then((data) => {
   console.log("Result: ", data);
 })
 .catch((error) => {
   console.log("Request Error: ", error);
 });
}
 
fetchAlbums();
```

## Завдання 2 
У всіх подальних завданнях потрібно буде використовувати fetch та async/await та обробляти можливі помилки запиту. 

Будемо використовувати публічне API для доступу до бази данних по всесвіту Зоряних Війн - SWAPI - https://swapi.py4e.com 

Потрібно ознайомити з документацією даного API за посиланням - https://swapi.py4e.com/documentation 

Кореневе URL для доступу до API - https://swapi.py4e.com/api/ (розділ документації https://swapi.py4e.com/documentation#base ) 

Список ресурсів які надає API - https://swapi.py4e.com/documentation#root 

Потрібно ознайомитись з ресурсами API так як в наступних завданнях потрібно буде їх використовувати

Завдання. Зробити запит до https://swapi.py4e.com/api/ і отримати список планет, вивести у консоль. 

Результат: вивести у консоль список планет у форматі: 

[{ name: 'Tatooine', rotation_period: '23', ... }, { name: 'Alderaan', rotation_period: '24', ... }, ... ]

```
async function getPlanets() {
 // write your code here
}
getPlanets();
```
## Завдання 3 
Зробити запит до SWAPI щоб отримати список людей з прізвищем Skywalker, вивести у консоль. 

Документація по пошуку - https://swapi.py4e.com/documentation#search 

Результат: вивести у консоль список людей з прізвищем Skywalker у форматі:

[{ name: 'Luke Skywalker', height: 172, ... }, { name: 'Anakin Skywalker', height: 188, ... }, ...]
```
async function getSkywalkers() {
 // write your code here
}
getSkywalkers();
```

## Завдання 4 
Написати функцію fetchSWAPI яка буде приймати кінцевий ресурс, робити запит до SWAPI і повертати відповідь у вигляді об'єкту. 

Функція fetchSWAPI буде приймати 2 параметри:

resource - стрічка - кінцевий ресурс (наприклад 'planets/') або повна url на SWAPI (наприклад https://swapi.py4e.com/api/planets/1/), в функції перевіряти і будувати кінцевий url

throwError - булеве значення - чи потрібно викидати помилку у разі невдалого ревесту. По замовчуванню - false.

Функція fetchSWAPI повинна перевіряти чи запит відбувся успішно. 

У разі помилки її потрібно обробляти - вивести у консоль resource та помилку. Також якщо throwError - true то викидати помилку далі. 

Функція повинна повертати розпаршений об'єкт відповіді від API. 

Функція містить в собі root url на SWAPI, додає кінцевий ресурс resource і робить запит. 

Після реалізації функції потрібно її протестувати викликавши декілька раз з параметрами як вказано нижче і вивести результат виконання запитів - testFetchSWAPI.

Приклад результату:

person  {name: "Luke Skywalker", height: "172", ...}

film  {title: "A New Hope", episode_id: 4, ...}

films/1001/  fetchSWAPI error  Error: Failed with status code: 404

film1001Id  undefined

films/1101/  fetchSWAPI error  Error: Failed with status code: 404

testFetchSWAPI error  Error: Failed with status code: 404

Підготовлений код
```
async function fetchSWAPI(resource, throwError) {
 const rootUrl = 'https://swapi.py4e.com/api/';
 
 // write your code here
}

async function testFetchSWAPI() {
 try {
   const person = await fetchSWAPI("people/1/");
   console.log("person ", person);
 
   const film = await fetchSWAPI("https://swapi.py4e.com/api/films/1/");
   console.log("film ", film);
 
   const film1001Id = await fetchSWAPI("films/1001/");
   console.log("film1001Id ", film1001Id);
 
   // should throw error
   await fetchSWAPI("films/1101/", true);
 } catch (error) {
   console.log("testFetchSWAPI error ", error);
 }
}
 
testFetchSWAPI();
```

## Завдання 5 
Написати функцію яка буде використовувати попередньо написану функцію fetchSWAPI, ця функція повинна робити запити щоб отримати дані людини з вказаним ім'ям, після цього на основі отриманої відповіді паралельно отримати деталі фільмів у яких людина з'явилась. 

Функція повинна повертати об'єкт з ім'ям людини та списком з деталями фільмів у форматі:

{name: ‘’, films: [{title: ‘’, episode_id: ‘’, ...}, ...]}


Приклад результату:

lukeFilms  { name: "Luke Skywalker", films: [{ title: "A New Hope", episode_id: 4, ... }] }

kenobiFilms  { name: "Obi-Wan Kenobi", films: [{ title: "A New Hope", episode_id: 4, ... }] }

Підготовлений код:
```
async function getPersonFilms(name) {
 // write your code here, use fetchSWAPI()
}
 
async function testGetPersonFilms() {
 const lukeFilms = await getPersonFilms("Luke");
 console.log("lukeFilms ", lukeFilms);
 
 const kenobiFilms = await getPersonFilms("Kenobi");
 console.log("kenobiFilms ", kenobiFilms);
}
 
testGetPersonFilms();
```
