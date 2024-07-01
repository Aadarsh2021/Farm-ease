import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { CropList } from "./crop/CropList";
import { CropCreate } from "./crop/CropCreate";
import { CropEdit } from "./crop/CropEdit";
import { CropShow } from "./crop/CropShow";
import { FarmerList } from "./farmer/FarmerList";
import { FarmerCreate } from "./farmer/FarmerCreate";
import { FarmerEdit } from "./farmer/FarmerEdit";
import { FarmerShow } from "./farmer/FarmerShow";
import { SalesList } from "./sales/SalesList";
import { SalesCreate } from "./sales/SalesCreate";
import { SalesEdit } from "./sales/SalesEdit";
import { SalesShow } from "./sales/SalesShow";
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
        title={"FarmEaseBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Crop"
          list={CropList}
          edit={CropEdit}
          create={CropCreate}
          show={CropShow}
        />
        <Resource
          name="Farmer"
          list={FarmerList}
          edit={FarmerEdit}
          create={FarmerCreate}
          show={FarmerShow}
        />
        <Resource
          name="Sales"
          list={SalesList}
          edit={SalesEdit}
          create={SalesCreate}
          show={SalesShow}
        />
      </Admin>
    </div>
  );
};

export default App;
