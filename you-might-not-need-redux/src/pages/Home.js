import React from 'react';
import useProfile from '../hooks/useProfile';


function Homepage() {
  const { data, error, isValidating } = useProfile();

  return (
    <div>
      { isValidating
        ? <p>Fetching...</p>
        : null
      }

      { error
        ? <pre>{JSON.stringify(error, null, 4)}</pre>
        : null
      }

      { data 
        ? <pre><code lang="json">{JSON.stringify(data, null, 4)}</code></pre>
        : null
      }
    </div>
  );
}

export default Homepage;
