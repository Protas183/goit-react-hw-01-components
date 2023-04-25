import PropTypes from 'prop-types';
import defaultImg from '../defaultImg.jpg'
import {ProfileCard, Description, Avatar, Name, Tag, Location, StatsList, StatsItem, Label, Quantity} from './Person.styled'


const Person = ({
  avatar = defaultImg,
  username = 'Unknown',
  location,
  tag,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileCard>
      <Description>
      <Avatar src={avatar} alt={username} width="180" />
      <Name>{username}</Name>
      <Location>Location: {location}</Location>
      <Tag>Tags: {tag}</Tag>
      </Description>
      <StatsList>
        <StatsItem>
          <Label>Fololowers:</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views:</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes:</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsList>
     </ProfileCard>
  );
}

Person.propTypes = {
    avatar: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}

export default Person;
