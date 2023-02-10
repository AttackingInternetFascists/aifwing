import axios from 'axios'
import React from 'react'
import Card from 'react-bootstrap/Card'

// const artifactsEndpoint = 'https://api.github.com/repos/AttackingInternetFascists/aifwing/actions/artifacts'

export default () => {
  // const manifests = React.useMemo(async () => {
  //   const { data: { artifacts: [ planeArtifact ] } } = await axios.get(artifactsEndpoint, { params: { name: 'esp32aif-plane-binaries', per_page: 1 } })
  //   const planeArtifactZip = await axios.get(planeArtifact.archive_download_url)
  // }, [])

  return (
    <Card>
      <Card.Body>
        <esp-web-install-button manifest="/static/firmware_build/manifest.json" />
      </Card.Body>
    </Card>
  )
}
