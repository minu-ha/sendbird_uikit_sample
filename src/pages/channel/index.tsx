import { Channel, ChannelList } from '@sendbird/uikit-react';
import AddChannel from '@sendbird/uikit-react/ChannelList/components/AddChannel';
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';
import { ACCESS_TOKEN, APP_ID, NICKNAME, USER_ID } from 'const';
import { FC, useState } from 'react';

const ChannelPage: FC = () => {
  const [currentChannelUrl, setCurrentChannelUrl] = useState('');
  return (
    <div className="App">
      <SendbirdProvider
        appId={APP_ID}
        userId={USER_ID}
        nickname={NICKNAME}
        accessToken={ACCESS_TOKEN}
      >
        <>
          <div className="sendbird-app__channellist-wrap">
            <AddChannel />
            <ChannelList
              renderHeader={renderHeader}
              renderPlaceHolderEmptyList={renderPlaceHolderEmptyList}
              onChannelSelect={channel => {
                if (channel?.url) {
                  setCurrentChannelUrl(channel.url);
                }
              }}
            />
          </div>
          <div className="sendbird-app__conversation-wrap">
            <Channel channelUrl={currentChannelUrl} />
          </div>
        </>
      </SendbirdProvider>
    </div>
  );
};

export default ChannelPage;

const renderHeader = () => {
  return (
    <div>
      <p>chat list</p>
    </div>
  );
};

const renderPlaceHolderEmptyList = () => {
  return (
    <div>
      <p>empty chat</p>
    </div>
  );
};
