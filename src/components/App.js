import React from 'react'
import Email from './Email'
import Password from './Password'
import Submit from './Submit'


function App() {
  
    return (
        <div className='singin-signup-modal'> 
            <h1>Log in</h1>
            <Email/>
            <Password/>
            <label className='sign-up'>Need a account? 
            <a href='#'> Sign up</a></label><br/>
            <Submit/>
            <div className='forget-password'>
                <a href='#'>Forget Password?</a>
            </div>

        </div>
    )
}

export default App 