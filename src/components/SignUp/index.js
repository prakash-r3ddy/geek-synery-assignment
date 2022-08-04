import {Component} from 'react'
import './index.css'
import {Redirect} from 'react-router-dom'

class SignUp extends Component {
  state = {
    username: '',
    password: '',
  }

  onSubmitDetails = event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username !== '' && password !== '') {
      const loginDetails = {
        userId: username,
        userPassword: password,
        showErrMsg: false,
      }
      const details = JSON.stringify(loginDetails)
      localStorage.setItem('loginDetails', details)
      const {history} = this.props
      history.replace('/login')
    } else {
      this.setState({showErrMsg: true})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showErrMsg} = this.state
    const loginDetails = localStorage.getItem('loginDetails')

    const parsedDetails = JSON.parse(loginDetails)

    if (parsedDetails !== null) {
      return <Redirect to="/login" />
    }

    return (
      <div className="bg-container">
        <form className="form-container" onSubmit={this.onSubmitDetails}>
          <div className="input-container">
            <label className="label-element" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              onChange={this.onChangeUsername}
              value={username}
              className="input-element"
            />
          </div>
          <div className="input-container">
            <label className="label-element" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              onChange={this.onChangePassword}
              value={password}
              className="input-element"
            />
          </div>
          <div className="input-container">
            <label className="label-element" htmlFor="phoneNumber">
              PHONE NUMBER
            </label>
            <input type="text" id="phoneNumber" className="input-element" />
          </div>
          <div className="input-container">
            <label className="label-element" htmlFor="email">
              EMAIL
            </label>
            <input type="text" id="email" className="input-element" />
          </div>
          <select className="input-select-element">
            <option value="student">STUDENT</option>
            <option value="jobHolder">JOB HOLDER</option>
            <option value="actor">ACTOR</option>
          </select>
          <button type="submit" className="button">
            SIGN UP
          </button>
          {showErrMsg && (
            <p className="error-msg">please fill the all feilds!</p>
          )}
        </form>
      </div>
    )
  }
}

export default SignUp
