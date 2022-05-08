import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from './gqloperation/queries';

function App() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;
  return (
    <div className='App'>
      {data.blogs.data.map((post) => (
        <div>
          <h2>{post.attributes.title}</h2>
          <p>{post.attributes.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
