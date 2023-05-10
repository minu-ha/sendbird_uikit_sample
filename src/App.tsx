import '@sendbird/uikit-react/dist/index.css';
import ChannelPage from 'pages/channel';
import HomePage from 'pages/home';
import SamplePage from 'pages/sample';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/group-channel'} element={<ChannelPage />} />
      <Route path={'/sample'} element={<SamplePage />} />
    </Routes>
  );
};

export default App;
