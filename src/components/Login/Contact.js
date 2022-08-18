import React from 'react'

export const Contact = () => {
  return (
    <div className='login pt-2'>
    <div className='container'>
        <div className='login-detail'>
            <p>Contact</p>
            <h1>Get In Touch </h1>
            <div className='login-filed'>
                <from>
                    <label htmlFor="input-filed" className='username'>Username<i className="fa-solid fa-asterisk"></i></label>
                    <input type="text" className="input-fileds" id="input-filed" />
                    <label htmlFor="input-filed" className='username'>Email<i className="fa-solid fa-asterisk"></i></label>
                    <input type="password" className="input-fileds" id="input-filed" placeholder='Password' />
                    <label htmlFor="input-filed" className='username'>Subject<i className="fa-solid fa-asterisk"></i></label>
                    <input type="text" className="input-fileds" id="input-filed" />
                    <label htmlFor="input-filed" className='username'>Message<i className="fa-solid fa-asterisk"></i></label>
                    <textarea type="textbox" className="input-fileds-textarea" id="input-filed" />

                    <button className='submit-button'>Submit</button>
                </from>
                
            </div>

        </div>
    </div>
    
</div>
  )
}
