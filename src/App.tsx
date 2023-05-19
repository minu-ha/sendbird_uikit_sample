import '@sendbird/uikit-react/dist/index.css';
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';
import { ACCESS_TOKEN, APP_ID, NICKNAME, USER_ID } from 'const';
import ChannelPage from 'pages/channel';
import HomePage from 'pages/home';
import SamplePage from 'pages/sample';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './scss/main.scss';

const App = () => {
  return (
    <SendbirdProvider
      appId={APP_ID}
      userId={USER_ID}
      nickname={NICKNAME}
      accessToken={ACCESS_TOKEN}
    >
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/group-channel'} element={<ChannelPage />} />
        <Route path={'/sample'} element={<SamplePage />} />
      </Routes>
    </SendbirdProvider>
  );
};

export default App;
