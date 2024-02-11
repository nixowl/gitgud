import { API } from "@/lib/utils"
import { type UserRecord } from "@/types/user"
import { useQuery } from "@tanstack/react-query"

async function fetchUser(authToken: string) {
  const res = await API.get<UserRecord>("/v1/users", {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
  return res.data
}

export function useSession(authToken: string) {
  const { data, isLoading, error, isError, isFetched } = useQuery({
    queryKey: ["session"],
    queryFn: () => fetchUser(authToken),
  })

  return {
    user: data?.user,
    isUserLoading: isLoading,
    userError: error,
    isError,
    isFetched,
  }
}
