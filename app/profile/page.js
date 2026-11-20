import AccountInfo from "./AccountInfo";
import PersonalInfo from "./PersonalInfo";
import BankInfo from "./BankInfo";

function Profile() {
  return (
    <div className="my-[20px] lg:w-full lg:flex-4">
      <AccountInfo />
      <PersonalInfo />
      <BankInfo />
    </div>
  );
}

export default Profile;
