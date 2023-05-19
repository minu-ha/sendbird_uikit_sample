import { BaseMessage, PreviousMessageListQueryParams } from '@sendbird/chat/message';
import { ChannelProvider } from '@sendbird/uikit-react/Channel/context';
import { ChannelListProvider } from '@sendbird/uikit-react/ChannelList/context';
import sendbirdSelectors from '@sendbird/uikit-react/sendbirdSelectors';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';
import CustomChannelList from 'components/channel/CustomChannelList';
import CustomGroupChannel from 'components/channel/CustomGroupChannel';
import { FC, useState } from 'react';

const ChannelPage: FC = () => {
  const [currentChannelUrl, setCurrentChannelUrl] = useState('');
  const store = useSendbirdStateContext();
  const getGroupChannel = sendbirdSelectors.getGetGroupChannel(store);

  const getPreviousMessageList = async (channelUrl: string): Promise<BaseMessage[]> => {
    const channel = await getGroupChannel(channelUrl);
    const params: PreviousMessageListQueryParams = { limit: 100 };
    const query = channel.createPreviousMessageListQuery(params);

    return await query.load();
  };

  const handleGetPreviousMessageList = () => {
    return getPreviousMessageList(currentChannelUrl);
  };

  return (
    <>
      <button onClick={handleGetPreviousMessageList}>123</button>
      <div style={{ display: 'flex' }}>
        <ChannelListProvider>
          <CustomChannelList setCurrentChannelUrl={setCurrentChannelUrl} />
        </ChannelListProvider>
        <ChannelProvider
          channelUrl={currentChannelUrl}
          isReactionEnabled={false}
          showSearchIcon={true}
        >
          <CustomGroupChannel />
        </ChannelProvider>
      </div>
    </>
  );
};

export default ChannelPage;
