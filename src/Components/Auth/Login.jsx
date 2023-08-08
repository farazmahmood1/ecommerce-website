import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="cart_area section_padding_100 clearfix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className='text-center'>Login</h1>

              <div className='row mt-4'>
                <div className='col-lg-5 mx-auto'>
                  <div className="mb-3">
                    <input type="email" className="form-control login-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control login-input" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-3 form-check">
                    <div id="emailHelp" className="form-text" style={{textDecoration:'underline', cursor:'pointer'}}>Forgot your password?</div>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login