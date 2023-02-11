import React from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

import Select from 'react-select'
import Webcam from 'react-webcam'

export default () => {
  const [selectedDevice, setSelectedDevice] = React.useState()
  const [deviceOptions, setDeviceOptions] = React.useState([])
  const [detections, setDetections] = React.useState([])
  const [camGranted, setCamGranted] = React.useState(false)
  
  const onEnumerateDevices = React.useCallback(() => {
    navigator.getUserMedia({ video: true }, () => {
      navigator.mediaDevices.enumerateDevices().then(devices => {
        setDeviceOptions(devices.reduce((memo, device) => {
          if (device.kind !== 'videoinput') return memo
          return [ ...memo, { value: device.deviceId, label: device.label }]
        }, []))
      })
    }, err => console.warn(err))
  }, [setDeviceOptions])
  
  const onSelectDevice = React.useCallback(selectedDevice => {
    setSelectedDevice(selectedDevice)
  }, [setSelectedDevice])
  
  return (
    <Row>
      <Col>
        {deviceOptions.length ? (
          <Card>
            <Card.Header>
              <Select
                value={selectedDevice}
                options={deviceOptions}
                onChange={onSelectDevice}
              />
            </Card.Header>

            <Card.Body>
              { selectedDevice ? (
                <Webcam className="w-100" audio={false} videoConstraints={{ deviceId: selectedDevice.value }} /> 
              ) : (
                <small><em>Select a video device</em></small>
              ) }
            </Card.Body>
            
            <Card.Footer>
              { detections.length ? (
                <ListGroup>
                </ListGroup>
              ) : (
                <small><em>No detections</em></small>
              ) }
            </Card.Footer>
          </Card>
        ) : (
          <Card>
            <Card.Body className="d-grid gap-2">
              <Button block onClick={onEnumerateDevices}>
                Start Classifier
              </Button>
            </Card.Body>
          </Card>
        ) }
      </Col>
    </Row>
  )
}