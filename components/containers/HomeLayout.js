import AuthModalManager from "../authentication/AuthModalManager";
import Banner from "../Banner";
import Test from "../Test";
function HomeLayout() {

  return <div>
    {/* <Test /> */}
    <AuthModalManager />
    <Banner />
  </div>;
}

export default HomeLayout;
