import SendbirdApp from '@sendbird/uikit-react/App';
import '@sendbird/uikit-react/dist/index.css';
import { FC } from 'react';

const SamplePage: FC = () => {
  return (
    <>
      <SendbirdApp appId={'619A292A-4D6D-42C7-A45A-F19E0B2B9B98'} userId={'mingming'} />
    </>
  );
};

export default SamplePage;
