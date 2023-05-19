import ChannelListUI from '@sendbird/uikit-react/ChannelList/components/ChannelListUI';
import { useChannelListContext } from '@sendbird/uikit-react/ChannelList/context';
import Badge from '@sendbird/uikit-react/ui/Badge';
import { Dispatch, FC, SetStateAction } from 'react';
import { ClientUserMessage } from 'SendbirdUIKitGlobal';

export interface CustomChannelListProps {
  setCurrentChannelUrl: Dispatch<SetStateAction<string>>;
}

const CustomChannelList: FC<CustomChannelListProps> = ({ setCurrentChannelUrl }) => {
  const state = useChannelListContext();
  console.log('state => ', state);

  return (
    <>
      <ChannelListUI
        renderChannelPreview={({ channel, onLeaveChannel }) => {
          // console.log('channel => ', channel);
          console.log('channel => ', channel);
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div onClick={() => setCurrentChannelUrl(channel.url)}>
              <Badge count={channel.unreadMessageCount} />
              <div>{channel.members[0].nickname}</div>
              <div>{(channel.lastMessage as ClientUserMessage).message}</div>
              <div>{new Date(channel.lastMessage.createdAt).toLocaleString('ko-KR')}</div>
            </div>
          );
        }}
      />
    </>
  );
};

export default CustomChannelList;
