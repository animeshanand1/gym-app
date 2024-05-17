import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MembershipPlanList } from "./membershipPlan/MembershipPlanList";
import { MembershipPlanCreate } from "./membershipPlan/MembershipPlanCreate";
import { MembershipPlanEdit } from "./membershipPlan/MembershipPlanEdit";
import { MembershipPlanShow } from "./membershipPlan/MembershipPlanShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Membership Plan Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MembershipPlan"
          list={MembershipPlanList}
          edit={MembershipPlanEdit}
          create={MembershipPlanCreate}
          show={MembershipPlanShow}
        />
      </Admin>
    </div>
  );
};

export default App;
