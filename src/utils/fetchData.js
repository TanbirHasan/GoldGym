
export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "bac6069ademsh26e256b7d8a0e7bp178a09jsnae9046d9f492",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};



export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};