import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // movieState , LoadingState
  const [movieData, setData] = useState<object>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getMovies = async () => {
    const data: object = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating',
    );
    setData(data);
    setLoading(true);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      {isLoading ? <div> loadingDone </div> : <div> Loading... </div>}
    </div>
  );
}

export default App;
