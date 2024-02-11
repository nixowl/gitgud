import { API, authToken } from "@/lib/utils"
import { UserRecord } from "@/types/user"
import { useQuery } from "@tanstack/react-query"

async function fetchUser() {
  const res = await API.get<UserRecord>("/v1/users", {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
  return res.data
}

export function useSession() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["session"],
    queryFn: fetchUser,
  })

  return {
    user: data?.user,
    isLoading,
    error,
    isError,
  }
}
