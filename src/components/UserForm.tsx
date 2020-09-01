import React, { useState, useMemo } from 'react'
import './UserForm.scss'
import { UserType } from './../types'
import InputMask from 'react-input-mask'

type Props = {
  onSubmit?: (user: UserType) => void
}

const UserForm: React.FC<Props> = ({ onSubmit }: Props) => {
  const initialUser: UserType = {
    name: '',
    distance: 3,
    email: '',
    phone: '',
    date: '',
    payment: 0,
  }

  const [user, setUser] = useState<UserType>(initialUser)

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  function submitHandler(
    event: React.FormEvent<HTMLFormElement>,
  ): void {
    event.preventDefault()

    onSubmit && onSubmit(user)

    setUser(initialUser)
  }

  const formFilled: boolean = useMemo(() => {
    for (const value of Object.values(user)) {
      if (!value) {
        return false
      }
    }
    return true
  }, [user])

  return (
    <form className="user-form" onSubmit={submitHandler}>
      <h2>Добавить участника</h2>
      <div className="input-field">
        <label htmlFor="name">ФИО</label>
        <input
          name="name"
          type="text"
          value={user.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="input-field">
        <label htmlFor="date">Дата рождения</label>
        <input
          name="date"
          type="date"
          required
          value={user.date}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-field">
        <label htmlFor="email">e-mail</label>
        <input
          name="email"
          type="email"
          required
          value={user.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-field">
        <label htmlFor="phone">Телефон</label>
        <InputMask
          mask="+7 (999) 999-99-99"
          name="phone"
          value={user.phone}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="input-field">
        <label htmlFor="distance">Дистанция</label>
        <select
          name="distance"
          required
          value={user.distance}
          onChange={handleInputChange}
        >
          <option value="3">3км</option>
          <option value="5">5км</option>
          <option value="10">10км</option>
        </select>
      </div>

      <div className="input-field">
        <label htmlFor="payment">Сумма взноса(руб)</label>
        <input
          name="payment"
          type="number"
          required
          value={user.payment}
          onChange={handleInputChange}
        />
      </div>

      <input
        type="submit"
        value="Отправить заявку"
        disabled={!formFilled}
      />
    </form>
  )
}

export default UserForm
