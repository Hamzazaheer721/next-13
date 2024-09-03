import Link from "next/link"
import { getAllUsers } from "../../lib/getUsers"

export default function UserPage({ users }) {
  return (
    <>
      {users?.map((user) => {
        return (
          <div>
            <Link href={`/user/${user.id}`}>{user.name}</Link>
          </div>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const users = await getAllUsers()

  return {
    props: {
      users
    }
  }
}
