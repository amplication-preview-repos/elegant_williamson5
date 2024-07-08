import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WebScanList } from "./webScan/WebScanList";
import { WebScanCreate } from "./webScan/WebScanCreate";
import { WebScanEdit } from "./webScan/WebScanEdit";
import { WebScanShow } from "./webScan/WebScanShow";
import { CloudScanList } from "./cloudScan/CloudScanList";
import { CloudScanCreate } from "./cloudScan/CloudScanCreate";
import { CloudScanEdit } from "./cloudScan/CloudScanEdit";
import { CloudScanShow } from "./cloudScan/CloudScanShow";
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
        title={"SecurityScannerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="WebScan"
          list={WebScanList}
          edit={WebScanEdit}
          create={WebScanCreate}
          show={WebScanShow}
        />
        <Resource
          name="CloudScan"
          list={CloudScanList}
          edit={CloudScanEdit}
          create={CloudScanCreate}
          show={CloudScanShow}
        />
      </Admin>
    </div>
  );
};

export default App;
