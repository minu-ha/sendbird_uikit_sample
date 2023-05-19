import ChannelUI from '@sendbird/uikit-react/Channel/components/ChannelUI';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import { FC } from 'react';
import { ClientUserMessage } from 'SendbirdUIKitGlobal';

export interface CustomChannelProps {}

const CustomGroupChannel: FC<CustomChannelProps> = ({}) => {
  const state = useChannelContext();

  // console.log('state => ', state);
  return (
    <div style={{ display: 'block', width: 500 }}>
      <ChannelUI
        renderMessage={({ message }) => {
          return (
            <div style={{ display: 'flex' }}>
              <div>{message.createdAt}</div>
              <div>{(message as ClientUserMessage).message}</div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default CustomGroupChannel;
