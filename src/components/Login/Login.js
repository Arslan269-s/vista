import React from 'react';

export const Login = () => {
  return (
    <div className='login pt-4 pb-5'>
        <div className='container'>
            <div className='login-details'>
                <h1>Login </h1>
                <div className='login-filed'>
                    <h2>Login</h2>
                    <h6>Login using An exciting account or create anew account here.</h6>
                    <from>
                        <label htmlFor="input-filed" className='username'>Username<i className="fa-solid fa-asterisk"></i></label>
                        <input type="text" className="input-fileds" id="input-filed" />
                        <label htmlFor="input-filed" className='username'>Password<i className="fa-solid fa-asterisk"></i></label>
                        <input type="password" className="input-fileds" id="input-filed" placeholder='Password' />

                        <button className='submit-button get-started get-hover-effect get-bottom-to-top'>Submit</button>
                        <div className='login-with d-flex justify-content-left align-items-baseline flex-wrap'>
                            <p>Login with:</p>
                            <a href='#'>Facebook</a>
                            <a href='#'>Google</a>
                        </div>
                    </from>
                    
                </div>

            </div>
        </div>
        
    </div>
  )
}
