import Link from "next/link"
import { getAllUsers } from "../../lib/getUsers"
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"

export default function UserPage() {
  const {
    data: users,
    error,
    isLoading
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers()
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading users.</div>
  }

  return (
    <>
      {users?.map((user) => {
        return (
          <div key={`${user}-a`}>
            <Link href={`/user/${user.id}`}>{user.name}</Link>
          </div>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers()
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
