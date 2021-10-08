import './App.css'
import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
// import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [showMessage, setShowMessage] = useState(false)

  return (
    <div>
      <div className='d-flex justify-content-center x-0 mt-5'>
        <Button
          onClick={() => {
            setShowMessage(!showMessage)
            console.log(showMessage)
          }}
        >
          Send
        </Button>
      </div>
      <div className='d-flex justify-content-center mt-5'>
        <Alert variant='success'>
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className='mb-0'>
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
      </div>
    </div>
  )
}

export default App
