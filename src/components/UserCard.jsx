import React from 'react'
import axios from 'axios'


const UserCard = ({user,getAllUsers,setUpdateInfo}) => {

   const deleteUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    .finally(() => getAllUsers())
   }

   const updateUser = () => {
    setUpdateInfo(user)
   }

  return (
    <article className='card'>
        <h2><br/> {user.first_name + ' ' + user.last_name}</h2>
        <hr/>
        <h3><b>Email</b><br/>{user.email}</h3>
        <h3><b>Password</b><br/>{user.password}</h3>
        <h3><b>Birthday</b><br/>{user.birthday}</h3>
        <button 
            onClick={() => deleteUser(user.id)}
            className='delete-btn'><i class="fa-solid fa-trash"></i>
        </button>
        <button 
            onClick={updateUser}
            className='update-btn'><i class="fa-solid fa-pen"></i>
        </button>        
    </article>
  )
}

export default UserCard