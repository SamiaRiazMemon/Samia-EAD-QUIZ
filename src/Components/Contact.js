import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    phoneNumber: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert(
      `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nAddress: ${formData.address}\nPhone Number: ${formData.phoneNumber}\nDescription: ${formData.description}`
    )
  }

  return (
    <div className='container'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='fullName'>Full Name:</label>
        <input
          type='text'
          id='fullName'
          name='fullName'
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor='address'>Address:</label>
        <input
          type='text'
          id='address'
          name='address'
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor='phoneNumber'>Phone Number:</label>
        <input
          type='tel'
          id='phoneNumber'
          name='phoneNumber'
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor='description'>Description:</label>
        <textarea
          id='description'
          name='description'
          value={formData.description}
          onChange={handleChange}
          rows='4'
          required
        ></textarea>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
