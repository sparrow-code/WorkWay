import Profile from '../applicant/Profile.component'
import Navbar from '../applicant/Navbar.component'
import { useContext} from 'react';
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom"

export default function ProfilePage() {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const redirect = async () => {
    if (userData.user?.utype!=="Recruiter")
      history.push("/")
  };
  redirect()
  return (
    <div className="RecruiterProfile">
        <Navbar />
        <Profile />
    </div>
    );
}