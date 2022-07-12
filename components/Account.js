import { useUser } from './User';
import UserIcon from '../images/user-icon.png';
import { AccountStyles, ProfileImage } from './styles/AccountStyles';

export default function Account() {
  const user = useUser();

  return (
    <AccountStyles>
      <div className="account-image">
        <ProfileImage src={UserIcon} alt="" />
      </div>
      <div>
        <h2 className="account-text">Name: {user?.name}</h2>
        <h2 className="account-text">Email: {user?.email}</h2>
      </div>
    </AccountStyles>
  );
}
