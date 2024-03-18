import {Navigate} from 'react-router-dom'

const RedireccionarALanding = () => {
  return (
    <>
        <Navigate to={{pathname: '/'}}/>
    </>
  )
}

export default RedireccionarALanding