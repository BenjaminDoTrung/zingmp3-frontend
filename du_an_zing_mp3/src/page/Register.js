import React from "react";
import ""
export default function Register() {
    return(
        <div className={'register-page'}>
            <div className={'register-form-container'}>
                <h1 className={'tittle'}>Register</h1>

                <form>
                    <div className='mb-2'>
                        <label htmlFor='first-name' className="form-label">
                            User Name
                        </label>
                        <input
                            id="user-name"
                            className="form-control"
                            type="text"
                            name="firstName"
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email' className="form-label">
                            Email
                        </label>
                        <input
                            id="email"
                            className="form-control"
                            type="text"
                            name="email"
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='first-name' className="form-label">
                            Password
                        </label>
                        <input
                            id="password"
                            className="form-control"
                            type="text"
                            name="password"
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='first-name' className="form-label">
                            Comfirm Password
                        </label>
                        <input
                            id="comfirm-password"
                            className="form-control"
                            type="text"
                            name="comfirm-password"
                        />
                    </div>
                    <button type={"submit"} className="submit-btn">
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}