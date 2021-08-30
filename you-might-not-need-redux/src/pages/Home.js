import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProfile,
  selectProfile
} from '../redux/profileSlice';

function Homepage() {
  const { data, error, isFetching } = useSelector(selectProfile) || {};
  const [hasFetched, setHasFetched] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!hasFetched) {
      dispatch(fetchProfile());
      setHasFetched(true);
    }
  }, [hasFetched, dispatch]);

  return (
    <div>
      { isFetching
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
