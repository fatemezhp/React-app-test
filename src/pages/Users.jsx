import { React, useState, useEffect } from 'react'
import axios from 'axios'
import styles from './users.module.css'
import { useNavigate } from 'react-router-dom'

function Users() {
    const [users, setUsers] = useState([])
    const [isloading, setIsloading] = useState(true)
    const navigate = useNavigate()
    const getUsers = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(response.data);
            setIsloading(false)

        } catch (error) {
            console.log('error while fetching data', error);
        }

    }

    useEffect(() => {
        getUsers();

    }, [])

    return (
        <>
            <div className="wrapper">
                <button onClick={() => (navigate(-1))}>close users</button>
                {isloading
                    ? <div className={styles.loading}>
                        <span>
                            LOADING
                        </span>
                    </div>
                    : <div className={styles.gridArea}>
                        {users.map((user) => (
                            <div className={styles.item} key={user.id}>
                               <div className={styles.userimg}> <img src="/images.png" alt={user.name} /></div>
                               <div className={styles.userbio}> <h3>{user.name}</h3></div>
                            </div>

                        ))}
                    </div>
                }
            </div>

        </>
    )
}

export default Users