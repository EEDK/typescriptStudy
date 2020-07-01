import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // movieState , LoadingState
  const [movieData, setData] = useState<object>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  // Arrow Function
  const getMovies = async () => {
    const data: object = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating',
      {
        validateStatus: function (status) {
          // 상태 코드가 500 이상일 경우 거부. 나머지(500보다 작은)는 허용.
          return status < 500;
        },
      },
    );
    setData(data);
    setLoading(true);
  };

  // Like ComponentDidMount
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
