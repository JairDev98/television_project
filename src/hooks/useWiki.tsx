import {useState, useEffect} from 'react';

export function useWiki(urlTitle: string){
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const url =
    `https://pt.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=${urlTitle}`;

  const extractAPIContents = json => {
    const { pages } = json.query;
    const title = Object.keys(pages).map(id => pages[id].title);
    const extract = Object.keys(pages).map(id => pages[id].extract);
    
    return [title, extract];
  };

  const getContents = async () => {
    let resp;
    let contents = [];
    setLoading(true);
    try {
      resp = await fetch(url);
      const json = await resp.json();
      contents = extractAPIContents(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    setContents(contents);
  };

  useEffect(() => {
    getContents();
  }, [url]);

  if (loading) return "Carregando ...";
  if (error) return "Ocorreu um erro, por favor tente novamente mais tarde";

  return contents;
}