import AddChannel from '@sendbird/uikit-react/ChannelList/components/AddChannel';
import ChannelListUI from '@sendbird/uikit-react/ChannelList/components/ChannelListUI';
import {
  ChannelListProvider,
  useChannelListContext,
} from '@sendbird/uikit-react/ChannelList/context';
import { FC } from 'react';

export interface ChannelListProps {}

const ChannelList: FC<ChannelListProps> = ({}) => {
  const channelListState = useChannelListContext();

  const renderHeader = () => {
    return (
      <div style={{ backgroundColor: '#ddd', padding: '10px' }}>
        <h1>채팅방 리스트</h1>
      </div>
    );
  };

  const renderPlaceHolderEmptyList = () => {
    return (
      <div style={{ padding: '10px' }}>
        <h3>채팅방이 없습니다.</h3>
      </div>
    );
  };

  return (
    <div>
      <ChannelListProvider
        className={'ah'}
        // allowProfileEdit={true}
        // disableAutoSelect={true}
        // disableUserProfile={false}
        // onThemeChange={(theme: string) => void}
        // onChannelSelect={(channel: GroupChannel) => void}
        // onProfileEditSuccess={(user: User) => void}
        // onBeforeCreateChannel={(users: Array<User>) => GroupChannelParams}
        // sortChannelList={(channels: Array<GroupChannel>) => Array<GroupChannel>}
        queries={{ applicationUserListQuery: {}, channelListQuery: {} }}
      >
        <ChannelListUI
          renderHeader={renderHeader}
          // renderUserProfile={({ user, currentUserId, close }) => React.ReactNode}
          // renderChannelPreview={({ channel, onLeaveChannel }) => React.ReactNode}
          // renderPlaceHolderError={() => React.ReactNode}
          // renderPlaceHolderLoading={() => React.ReactNode}
          renderPlaceHolderEmptyList={renderPlaceHolderEmptyList}
        />
        <AddChannel />
      </ChannelListProvider>
    </div>
  );
};

export default ChannelList;
