import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import AccessibleInstallFirmware from './AccessibleInstallFirmware'
import AutomaticallyIdentifyFascists from './AutomaticallyIdentifyFascists'

export default () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<AutomaticallyIdentifyFascists />} />
      <Route path="flasher" element={<AccessibleInstallFirmware />} />
      <Route path="*" element={<h3>Every day is STFU Friday.</h3>}></Route>
    </Route>    
  </Routes>
)
