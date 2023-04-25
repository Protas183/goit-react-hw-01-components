import { Friend, Online, Offline, Name } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <span>{isOnline ? <Online /> : <Offline />}</span>
      <img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Friend>
  );
};

export default FriendListItem;
