import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValuesForm = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  birthday: '',
}

const UsersForm = ({ createNewUser, updateInfo, getAllUsers, setUpdateInfo }) => {

  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo)
    }
  }, [updateInfo])

  const submit = data => {
    if (updateInfo) {
      const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
      axios.patch(URL, data)
        .then(res => {
          console.log(res.data)
          getAllUsers()
        })
        .catch(err => console.log(err))
      reset(defaultValuesForm)
      setUpdateInfo(null)
    } else {
      createNewUser(data)
      reset(defaultValuesForm)
    }
  }

  return (
    <form className='users-form' onSubmit={handleSubmit(submit)}>
      <h2>{updateInfo ? 'Update User' : 'Create User'}</h2>

      <div>
        <label htmlFor='first_name'>Name</label>
        <input type='text' id='first_name' {...register('first_name')} />
      </div>
      <div>
        <label htmlFor='last_name'>Last Name</label>
        <input type='text' id='last_name' {...register('last_name')} />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' {...register('email')} />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='text' id='password' {...register('password')} />
      </div>
      <div>
        <label htmlFor='birthday'>Birthday</label>
        <input placeholder='YYYY-MM-DD' type='text' id='birthday' {...register('birthday')} />
      </div>

      <button>{updateInfo ? 'Update' : 'Create'}</button>

    </form>
  )
}

export default UsersForm