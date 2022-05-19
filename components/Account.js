import { useUser } from './User';
import UserIcon from '../images/user-icon.png';
import { AccountStyles, ProfileImage } from './styles/AccountStyles';

export default function Account() {
  const user = useUser();

  console.log(user);
  return (
    <AccountStyles>
      <div>
        <ProfileImage src={UserIcon} alt="" />
      </div>
      <div>
        <h2>Name: {user?.name}</h2>
        <h2>Email: {user?.email}</h2>
      </div>
    </AccountStyles>
  );
}
