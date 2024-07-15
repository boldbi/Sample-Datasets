# BoldBI Embedding React Native with NodeJS Sample

This project was created using NodeJS 14.16. This application aims to demonstrate how to render the dashboard available on your Bold BI server.

## Dashboard view

   ![Dashboard view](https://github.com/user-attachments/assets/dd394d75-06ec-4b67-955e-85e4ba619c3b)
   
## Prerequisites

The samples require the following to run.

 * [Node.js](https://nodejs.org/en/)
 * [Visual Studio Code](https://code.visualstudio.com/download)
 * [Android Studio](https://developer.android.com/studio)

> **NOTE:** Node.js v14.16 to v20.15 are supported.

#### Help link

 * https://help.boldbi.com/embedded-bi/faq/where-can-i-find-the-product-version/

 #### Supported browsers
  
  * Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari.

 ## Configuration

 * Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](https://github.com/boldbi/aspnet-core-sample/assets/91586758/b3a81978-9eb4-42b2-92bb-d1e2735ab007)

 * To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.

    ![Embed Settings Download](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d27d4cfc-6a3e-4c34-975e-f5f22dea6172)
    ![EmbedConfig Properties](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d6ce925a-0d4c-45d2-817e-24d6d59e0d63)

 * Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/samples/tree/master/Scenario%20Based%20Samples/Dashboard%20Embedding%20React%20Native%20sample/NodeJS) within the application. Please ensure that you have placed it in the application as shown in the following image.

   ![EmbedConfig_image](https://github.com/user-attachments/assets/6ff3c73c-9378-433d-b07d-14766c750d49)

 ### Run a Sample Using Visual Studio Code
   
  * Open the `NodeJS` folder in **Visual Studio Code**.  

  * Open the terminal and install all dependent packages by executing the following command `npm install`.

  * To run the application, use the command `node embed.js` in the terminal. After the backend application has started, it will display a URL in the command line interface, typically something like (e.g., http://localhost:8080/).

  * Open the `React Native` folder in **Android Studio**.  

  * Open the terminal and install all dependent packages by executing the following command `npm install`.
  
  * To run the application, use the command `npm run web` in the terminal. After the application has started, it will display a URL in the command line interface, typically something like (e.g., http://localhost:19006/). Copy this URL and paste it into your default web browser.

    ![Dashboard view](https://github.com/user-attachments/assets/bc7a3339-265b-4cbf-84a4-e778105d047c)
      
> **NOTE:** If the API host is already in use, modify the port number as per your preference in embed.js and update that in App.js file.

## Important notes

In a real-world application, it is recommended not to store passwords and sensitive information in configuration files for security reasons. Instead, you should consider using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).

## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).
