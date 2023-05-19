import { useMessageSearchContext } from '@sendbird/uikit-react/MessageSearch/context';
import { FC } from 'react';

export interface CustomMessageSearchProps {}

const CustomMessageSearch: FC<CustomMessageSearchProps> = ({}) => {
  const state = useMessageSearchContext();
  // console.log('state => ', state);

  return <div style={{ width: 300, height: 100 }}></div>;
};

export default CustomMessageSearch;
