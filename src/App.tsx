//import animationData from ''
import { Player } from '@lottiefiles/react-lottie-player';

import './App.scss'
import { welcomeLogs } from './utilities/logs'

function App() {
  welcomeLogs();

  return (
    <>

      <Player src="https://lottie.host/ee5c50fe-f204-41d7-9e3d-2ac275f8c99f/2RrqhXd9KE.json"
        className="player"
        loop
        autoplay
        style={{
          height: '450px', width: '500px'
        }}></Player>
      <div className='typing'>
        <h2>Loading <span></span ></h2 >
      </div >

    </>
  )
}

export default App
