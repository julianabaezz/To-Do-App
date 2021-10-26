import { useState } from "react"
import { getUsers } from "../../api"
import { Layout } from "../../components/layout/Layout"
import { User } from "../../types"

const Users = () => {

    const [users, setUsers] = useState<User[] | undefined>()

    const obtainUsers = async () => {

        const response = await getUsers();
        console.log(response)

        setUsers(response)


    }
    if (!users) {

        obtainUsers()
    }
    console.log(users)


    return (
        <Layout>
            <div>
                {
                    users?.map(user => {
                        console.log(user)
                        return (

                            <ul>
                                <li>{user.name}</li>
                                <li>{user.email}</li>
                            </ul>

                        )
                    })
                }
            </div>
        </Layout>
    )
}

export { Users }