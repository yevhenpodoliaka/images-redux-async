const KEY = '23370156-8e4bef2823258510dc0c03035';
const BASE_URL = 'https://pixabay.com/api/';

export default async function fetchImg(query, page) {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
