import React from 'react'

export default function AddContact() {
  return (
    <div>
        <h2>Add Contact</h2>
        <form>
            <label htmlFor="">Name:</label><br/>
            <input type="text" placeholder='Enter Name' name='name'/><br/>
            <label htmlFor="">Email:</label>  <br/>
            <input type="text" placeholder='Enter email' name='email'/>
        </form>
        <button>Add Contact</button>
    </div>
  )
}
