import axios from "axios";
import useSWR from "swr";

export default function useUser ( id ) {
	const baseUrl = "http://127.0.0.1:5000/api";
	const url = `${ baseUrl }/users/userlist?name=jim`;
	
	const fetcher = axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/users/userlist?name=jim", fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
