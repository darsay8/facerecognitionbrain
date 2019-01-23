import React from 'react';
import './SignIn.css';

const SignIn = ({onRouteChange}) => {
    return (
        <div className='signInForm mt3'>
            <article className="br3 dark-gray shadow-5 mv4 w-100 w-50-m w-25-l mw6 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 white">
                            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset w-100"
                                       type="email"
                                       name="email-address" id="email-address"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset w-100"
                                       type="password" name="password" id="password"/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={() => onRouteChange('home')}
                                   className="b ph3 pv2 input-reset bg-blue white grow pointer f4 dib"
                                   type="submit"
                                   value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')}
                               className="f5 link white db grow pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        </div>
    )
};

export default SignIn;