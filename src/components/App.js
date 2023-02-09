import React from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

import Select from 'react-select'
import Webcam from "react-webcam"

export default () => {
  const [selectedDevice, setSelectedDevice] = React.useState()
  const [deviceOptions, setDeviceOptions] = React.useState([])

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      setDeviceOptions(devices.map(device => ({
        value: device.deviceId,
        label: device.label
      })))
    })
  }, [setDeviceOptions])

  const onSelectDevice = React.useCallback(selectedDevice => {
    setSelectedDevice(selectedDevice)
  }, [setSelectedDevice])

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Mission Control</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="my-3">
        <Row>
          <Col>
            <Card>
              { selectedDevice ? (
                <Card.Body>
                  <Webcam className="w-100" audio={false} videoConstraints={{ deviceId: selectedDevice.value }} /> 
                </Card.Body>
              ) : null }
              <Card.Footer>
                <Select
                  value={selectedDevice}
                  options={deviceOptions}
                  onChange={onSelectDevice}
                />
              </Card.Footer>
            </Card>
          </Col>
          
          <Col>
            <Card>
              <Card.Header>Detections</Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}