import React from 'react'
import './Form.css';
const Form = () => {
  return (
    <div className='form'>
        <div className='form-heading'>
        <h1>Reserve Table</h1>
       <p>Please fill the form below accurately to enable us serve you better!.. welcome!</p>
        </div>
        <div className= 'form-container'>
        <div className='form-name'>
         <form>
       <ul>
        <li>
        <label htmlFor="fname">Firstname</label>
       <input type="text" />
        </li>
      <li>
      <label htmlFor="lname">Lastname</label>
       <input type="text" />
      </li>
       <li>
       <label htmlFor="email">E-mail</label>
       <input type="e-mail" id='email'/>
       </li>
       <li>
       <label htmlFor="phone" >Phone</label>
       <input type="number" id='numinput' />
       </li>
      
       </ul>
       


         </form>
        </div>
        <div className='form-reserve'>
         <form>
       <ul>
        
       <h4>Reservation</h4>
       <li>
       <label htmlFor="restype">Reservation Type</label>
       <select name="Reservationtype" id='_select'>
            <option value=""> Please Select </option>
            <option value="Dinner"> Dinner </option>
            <option value="VIP/Mezzanine"> VIP/Mezzanine </option>
            <option value="Birthday/ Anniversary"> Birthday/ Anniversary </option>
            <option value="Nightlife"> Nightlife </option>
            <option value="Private"> Private </option>
            <option value="Wedding"> Wedding </option>
            <option value="Corporate"> Corporate </option>
            <option value="Holiday"> Holiday </option>
            <option value="Other"> Other </option>

       </select>
       </li>
      <li>
      <label htmlFor="">If Other above, please specify</label>
       <input type="text" /><br></br>
      </li>
      
      <li>
      <label htmlFor="requests">Any special requests</label>
       <input type="text" id='req_in' /><br></br>
      </li>
       
      
       </ul>
       


         </form>
        </div>
        </div>
        
        <div className='form-submit'>
        <button type='submit'>Reserve</button>
        </div>

    </div>
  )
}

export default Form