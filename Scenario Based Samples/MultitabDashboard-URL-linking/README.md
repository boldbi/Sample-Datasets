# Bold BI Embedded Sample in Angular with ASP.NET Core

This project was created using Angular and ASP.NET Core 6.0. This application aims to demonstrate how to render the dashboard available on your Bold BI server.

## Dashboard view

![Dashboard View](https://github.com/boldbi/samples/assets/149655444/192b6b0a-445d-424c-969c-7585af0f684b)


 ## Requirements/Prerequisites
 
 * [.NET Core 6.0](https://dotnet.microsoft.com/en-us/download/dotnet-core)
 * [Node.js](https://nodejs.org/en/)

 > **NOTE:** Node.js v14.20 to v18.18 are supported

 #### Help link

 * https://help.boldbi.com/embedded-bi/faq/where-can-i-find-the-product-version/

 #### Supported browsers
  
  * Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari.

 ## Configuration

  * Please [get](https://github.com/boldbi/angular-with-aspnet-core-sample/tree/master/Angular-with-ASP.NETCore) the Angular with ASP.NET Core sample from GitHub.

  * Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.
  ![Embed Settings](https://github.com/boldbi/aspnet-core-sample/assets/91586758/b3a81978-9eb4-42b2-92bb-d1e2735ab007)

  * To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.
    ![Embed Settings Download](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d27d4cfc-6a3e-4c34-975e-f5f22dea6172)
    ![EmbedConfig Properties](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d6ce925a-0d4c-45d2-817e-24d6d59e0d63)

  * Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/angular-with-aspnet-core-sample/tree/master/Angular-with-ASP.NETCore) within the application. Please ensure you have placed it in the application, as shown in the following image.
    
    ![EmbedConfig image](https://github.com/boldbi/aspnet-core-sample/assets/91586758/95e8e272-53e8-449a-8a46-592cf8646d7c)

## Run a Sample Using Command Line Interface

  1. Open the command line interface and navigate to the specified file [location](https://github.com/boldbi/angular-with-aspnet-core-sample/tree/master/Angular-with-ASP.NETCore) where the project is located.

  2. To install all dependent packages using the following command `npm install`.

  3. Execute the command `dotnet restore` to restore the necessary packages. Once the packages have been successfully restored, use the `dotnet build` command to build the project.
  
  4. Finally, run the application using the command `dotnet run`. After executing the command, the application will automatically launch in the default browser. You can access it at the specified port number (e.g., https://localhost:44459).

 ## Developer IDE

  * Visual studio code(https://code.visualstudio.com/download)

  ### Run a Sample Using Visual Studio Code

  1. Open the Angular with ASP.NET Core sample in Visual Studio Code.

  2. Open the terminal in Visual Studio Code and install all dependent packages using the following command `npm install`.

  3. Execute the command `dotnet restore` to restore the required dependencies.
 
  4. Build your .NET project by executing the `dotnet build` command in the terminal.
  
  5. To run the application, use the command `dotnet run` in the terminal. After executing the command, the application will automatically launch in the default browser. You can access it at the specified port number (e.g., https://localhost:44459).

     ![dashboard view](https://github.com/boldbi/aspnet-core-sample/assets/91586758/af9a9d3f-3ebc-49dd-9bba-a061932cb9f6)

Please refer to the [help documentation](https://help.boldbi.com/embedding-options/embedding-sdk/samples/angular-with-javascript/#how-to-run-the-sample) to know how to run the sample.

## How the sample works

  * In javascript based embedding the member api `hideMultiDashboardHeader` can be used to enable or disable the tab area in the header of a Multitab dashboard.Please refer to this [help documentation](https://help.boldbi.com/embedding-options/embedding-sdk/embedding-api-reference/members/#hideMultiDashboardHeader) to know more about the member.

![multitab-linking-renderDashboard](https://github.com/boldbi/samples/assets/149655444/2bd83601-2822-4cd9-a501-5e48fb37472a)

  * In this sample,when you embed a Multitab dashboard the tab area for dashboard switching will be hidden.You can navigate from first dashboard to other dashboards only by linking their URL inside widgets.

  > **NOTE:**  No need to hook any event in application for url linking like `beforeNavigateUrlLinking` for dashboard navigation.
  
  > **NOTE:**  This member will not hide header of a Multitab dashboard loaded using loadMultitabDashboard() method.


### How to link URL in a Dashboard

  1. In your Bold BI application,open the dashboard in edit mode.

  2. Inside it choose a widget where you want to link another dashboard.

  3. Click settings icon of the widget and enable `Enable link` option. Provide value in the `URL` field by referring to this [link](https://help.boldbi.com/visualizing-data/working-with-widgets/linking-urls-and-dashboards/#dashboard-parameter-support-in-url-linking)

  > **NOTE:** Link only a child dashboard of a multi tab dashboard to render dashboard within the application.

  ![multitab-linking-url](https://github.com/boldbi/samples/assets/149655444/ce7b1b5a-8c97-43be-8496-d2063c083ad5)

  4. In this way you can link many dashboards inside other widgets.

  5. To know more details about linking dashboards [here](https://help.boldbi.com/visualizing-data/working-with-widgets/linking-urls-and-dashboards/)

## Important notes

It is recommended not to store passwords and sensitive information in configuration files for security reasons in a real-world application. Instead, it would be best if you considered using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).


## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).
