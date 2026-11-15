
import AccountInfo from "./AccountInfo";
import PersonalInfo from "./PersonalInfo";
import BankInfo from "./BankInfo";

function Profile() {
  
  return (
    <div className="mt-[20px]">
      <AccountInfo />
      <PersonalInfo />
      <BankInfo />
    </div>
  );
}

export default Profile;
