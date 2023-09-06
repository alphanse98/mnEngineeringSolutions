import LoginComponent from "../components/LoginComponent"
const LoginPage = ({setAuthenticate}) => {
  return (
    <div>
        <LoginComponent setAuthenticate={setAuthenticate} />
    </div>
  )
}

export default LoginPage