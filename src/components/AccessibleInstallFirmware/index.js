import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const unsupportedMessage = (<Alert>Browser does not support Web Serial API</Alert>)
const httpOnlyMessage = (<Alert>Cannot use Web Serial API without HTTPS</Alert>)

export default () => (
  <Row>
    <Col xs={12} md={6}>
      <Card>
        <Card.Header>
          <Card.Title>Plane</Card.Title>
        </Card.Header>
        <Card.Footer className="p-0">
          <esp-web-install-button manifest="/aifwing/manifest/plane.json">
            <div className="d-grid gap-2" slot="activate">
              <Button block>Install Firmware</Button>
            </div>
            <span slot="unsupported">{unsupportedMessage}</span>
            <span slot="not-allowed">{httpOnlyMessage}</span>
          </esp-web-install-button>
        </Card.Footer>
      </Card>
    </Col>

    <Col xs={12} md={6}>
      <Card>
        <Card.Header>
          <Card.Title>Copter</Card.Title>
        </Card.Header>
        <Card.Footer className="p-0">
          <esp-web-install-button manifest="/aifwing/manifest/copter.json">
            <div className="d-grid gap-2" slot="activate">
              <Button block>Install Firmware</Button>
              </div>
            <span slot="unsupported">{unsupportedMessage}</span>
            <span slot="not-allowed">{httpOnlyMessage}</span>
          </esp-web-install-button>
        </Card.Footer>
      </Card>
    </Col>
  </Row>
)
