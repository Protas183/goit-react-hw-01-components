import FriendListItem from './FriendListItem/FriendListItem';
import Container  from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />;
      })}
    </Container>
  );
};

export default FriendList;
