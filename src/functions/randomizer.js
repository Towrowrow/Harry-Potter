const getRandomHouse = () => {
  const number = Math.floor(Math.random() * 6);
  const houses = ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff', 'java', 'javaScript'];
  return houses[number];
}

export default getRandomHouse;
