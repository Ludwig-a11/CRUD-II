import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import UsersForm from './components/UsersForm'



function App() {
  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  const URL = 'https://users-crud1.herokuapp.com/users/'

  const getAllUsers = () => {
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()

  }, [])

  const createNewUser = data => {
    axios.post(URL, data)
      .then(res => (res.data))
      .catch(err => console.log(err))
      .finally(() => getAllUsers())
  }

  console.log(users);

  return (
    <div className="App">
      <h1>Users</h1>
      
      <UsersForm
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        getAllUsers={getAllUsers}
        setUpdateInfo={setUpdateInfo}
      />

      <div className='card-container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              getAllUsers={getAllUsers}
              setUpdateInfo={setUpdateInfo}

            />
          ))
        }
      </div>
    
    </div>
  )
}

export default App
