import { getUser } from "../../../lib/getUser"
import { getAllUsers } from "../../../lib/getUsers"

export default function UserPage(props) {
  const user = props.user

  if (!user) {
    return <div>User not found</div>
  }

  return <div>user: {user.name}</div>
}

export async function getStaticPaths() {
  const users = await getAllUsers()

  const paths = users.map((user) => ({ params: { id: user.id.toString() } }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const id = params.id

  const user = await getUser(id)

  if (!user) {
    return {
      notFound: false
    }
  }
  return {
    props: {
      user
    },
    revalidate: 60
  }
}
