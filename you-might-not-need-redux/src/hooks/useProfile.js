import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const useProfile = () => {
    const response = useSWR('https://jsonplaceholder.typicode.com/users/1', fetcher);
    return response;
}

export default useProfile;
