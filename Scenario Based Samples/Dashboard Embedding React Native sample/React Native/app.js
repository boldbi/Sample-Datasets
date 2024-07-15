import { View, StyleSheet } from "react-native";
import { BoldBI } from "@boldbi/boldbi-embedded-sdk";
import axios from "axios";
import React, { useEffect } from "react";

const App = () => {
  let apiHost = "http://localhost:8080"; //Nodejs Application URL
  let authorizationUrl = "/authorizationserver"; // Authorization server API end-point in the Node.js Application
  let getDetailsUrl = "/GetData"; // GetData API end-point in the Node.js Application to read the embedConfig.json details
  let result;
  useEffect(() => {
    axios
      .get(apiHost + getDetailsUrl)
      .then((response) => {
        result = response.data;
        renderDashboard();
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []); // Empty dependency array to execute the effect only once

  const renderDashboard = () => {
    const dashboard = BoldBI.create({
      serverUrl: result.ServerUrl + "/" + result.SiteIdentifier,
      dashboardId: result.DashboardId,
      embedContainerId: "dashboard",
      width: "100%",
      height: window.innerHeight + 'px',
      authorizationServer: {
        url: apiHost + authorizationUrl,
      },
    });
    dashboard.loadDashboard();
  };
  return (
    <View id="dashboard"></View>
  );
};

const styles = StyleSheet.create({
});

export default App;