import './App.css'
import useJsonFetch from './hooks/useJsonFetch';


const endpoints = {
  data: "http://localhost:7070/data",
  dataNotJson: "http://localhost:7070/dataNotJson",
  error: "http://localhost:7070/error",
  loading: "http://localhost:7070/loading",
};

function FetchHook({ url, opts }) {
  const [data, isLoading, hasError] = useJsonFetch(url, opts);
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h1>{isLoading && 'Is Loading'}</h1>
      <h1>{hasError && hasError}</h1>
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <FetchHook url={endpoints.data} />
      <FetchHook url={endpoints.dataNotJson} />
      <FetchHook url={endpoints.error} />
      <FetchHook url={endpoints.loading} />
    </div>
  )
}

export default App





