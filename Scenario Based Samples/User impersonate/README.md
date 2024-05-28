# Bold BI Embedded Sample in .NET Core

This project was created using ASP.NET Core 6.0. This sample aims to demonstrate how to impersonate a user in embedding application

## Dashboard view

![Dashboard View](https://github.com/boldbi/aspnet-core-sample/assets/91586758/6c03cba1-beeb-4be2-8a9e-f77f6a3ebf91)

 ## Requirements/Prerequisites

 * [.NET Core 6.0](https://dotnet.microsoft.com/download/dotnet-core)
 
 #### Supported browsers
  
  * Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari.

 ## Configuration

  * Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](https://github.com/boldbi/aspnet-core-sample/assets/91586758/b3a81978-9eb4-42b2-92bb-d1e2735ab007)

  * To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.

     ![Embed Settings Download](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d27d4cfc-6a3e-4c34-975e-f5f22dea6172)
     ![EmbedConfig Properties](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d6ce925a-0d4c-45d2-817e-24d6d59e0d63)

  * Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/aspnet-core-sample/tree/master/BoldBI.Embed.Sample) within the application. Please ensure you have placed it in the application, as shown in the following image.
    
    ![EmbedConfig image](https://github.com/boldbi/aspnet-core-sample/assets/91586758/bdb83a3e-02e4-4e99-ad57-717438e5ec5c)

 ## Run a Sample Using Command Line Interface 
    
  1. Open the command line interface and navigate to the specified file [location](https://github.com/boldbi/aspnet-core-sample/tree/master/BoldBI.Embed.Sample) where the project is located.

  2. Execute the command `dotnet restore` to restore the necessary packages. Once the packages have been successfully restored, use the `dotnet build` command to build the project.
  
  3. Finally, run the application using the command `dotnet run`. After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., http://localhost:5000). Copy this URL and paste it into your default web browser.

> **NOTE:** We represent the dashboard embedding by default without the dashboards listing sidebar. You must navigate to the `dashboardlisting` URL (such as http://localhost:5000/dashboardlisting) to enable the dashboards list.

 ## Developer IDE

  * Visual studio code(https://code.visualstudio.com/download)

  ### Run a Sample Using Visual Studio Code
 
  * Open the ASP.NET Core sample in Visual Studio Code.
   
  * Open the terminal in Visual Studio Code and execute the command `dotnet restore` to restore the required dependencies.
 
  * Build your .NET project by executing the `dotnet build` command in the terminal.
 
  * To run the application, use the command `dotnet run` in the terminal. After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., http://localhost:5000). Copy this URL and paste it into your default web browser.

    ![dashboard image](https://github.com/boldbi/aspnet-core-sample/assets/91586758/6c03cba1-beeb-4be2-8a9e-f77f6a3ebf91)

> **NOTE:** We represent the dashboard embedding by default without the dashboards listing sidebar. You must navigate to the `dashboardlisting` URL (such as http://localhost:5000/dashboardlisting) to enable the dashboards list.

Please refer to the [help documentation](https://help.boldbi.com/embedding-options/embedding-sdk/samples/asp-net-core/#how-to-run-the-sample) to know how to run the sample.

 ## How the sample works

  ### Impersonate a user using mail ID

  1. You can impersonate a active Bold BI user in your embedded application using their mail ID.

  2. In this sample set the mail ID of another user in embed Query as embed_impersonate_email inside the `AuthorizationServer` method present in `HomeController.cs` file.
     
     ![impersonate_email](https://github.com/boldbi/samples/assets/149655444/c4b491d5-f030-443d-9cfb-a6731d33c75c)

  3. This credential will impersonate the actual user to another user based on the provided mail ID.

  ### User based filtering

  * This sample can be used to view the user based filtering in the embedded Dashboard.
   
  * Configure user based filters in your Bold BI application by referring to this [help documentation](https://help.boldbi.com/working-with-data-sources/user-filter/).Kindly use datasource mode.

  * In the sample you can provide the user detail used in filter configuration inside the `AuthorizationServer` method present in `HomeController.cs` file. Append the details in embed Query with user's full name  as embed_impersonate_name and user name as embed_impersonate_username.
    
    ![impersonate_name](https://github.com/boldbi/samples/assets/149655444/c231db79-466a-44eb-8c49-01f7530308d6)

  * Run the sample to view the filtered data.
    
  * In this way you can embed a Dashboard with the user based filter data.

## Important notes

It is recommended not to store passwords and sensitive information in configuration files for security reasons in a real-world application. Instead, it would be best if you considered using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).

## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).
