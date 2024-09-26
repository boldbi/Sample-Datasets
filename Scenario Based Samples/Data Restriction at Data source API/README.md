# Bold BI Embedded Sample in .NET Core

This project was created using ASP.NET Core 6.0. This application aims to demonstrate how to use custom API to filter data and render dashboard through iFrame embedding.

## Dashboard view

![dashboard](https://github.com/boldbi/samples/assets/149655444/b27a9a51-5fd7-426f-bc0d-9d6edfe3425b)

 ## Requirements/Prerequisites

 * [.NET Core 6.0](https://dotnet.microsoft.com/download/dotnet-core)
 
 #### Supported browsers
  
  * Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari.
  
 ###  Steps to include the custom API connection inside datasource connection

  * In your Bold BI application, start a new dashboard creation.

  * Inside dashboard designer choose `Data Sources` icon and create a new data source.

  * Choose `Web` option. Give a name to the Data source.

  * In `URL` field provide the URL where the application for API is hosting. Ensure your application which handles API endpoint is in running state. 
      For Example : If you handle your API's request and response in a ASP.NET core sample then after running it may hosted in your local in the site "localhost:5000" which your site URL.

  * Add header with key as `x-api-key` and the value must be your dashboard parameter.
    
    ![api-config](https://github.com/boldbi/samples/assets/149655444/11de26e8-001d-4fbf-a205-ac650a203871)

  * Give the type of data your API will return. For example : JSON in this sample.
    
    ![api-data](https://github.com/boldbi/samples/assets/149655444/92172dbd-0d1e-4dd4-88df-bcc84b58a589)

  * The Mode should be selected as `Live`. Click `Preview & Connect` and ensure the data is returned from API.
 > **NOTE:** If you use an invalid dashboard parameter in the header,no data will be returned from API.

  * After connecting you can design your dashboard using the data and publish it.

 ## Configuration
   
  * Get a dashboard's embed code for iFrame embedding from your Bold BI application.Refer this [link](https://help.boldbi.com/embedding-options/iframe-embedding/embedding-a-dashboard/) to know about embedding a dashboard in iFrame.
   
  * Inside the project go to BoldBI.Embed.Sample -> Views -> Home -> Index.cshtml. Paste the copied iFrame URL inside the body tag.

  * Append the dashboard parameter value in iFrame URL. Kindly refer [here](https://help.boldbi.com/embedding-options/iframe-embedding/embedding-a-dashboard/#how-to-pass-the-dashboard-parameter-and-url-parameter-filters-in-iframe-url) on how to pass the dashboard parameter inside URL.

 ## Run a Sample Using Command Line Interface 
    
  1. Open the command line interface and navigate to the specified file [location](https://github.com/boldbi/aspnet-core-sample/tree/master/BoldBI.Embed.Sample) where the project is located.

  2. Execute the command `dotnet restore` to restore the necessary packages. Once the packages have been successfully restored, use the `dotnet build` command to build the project.
  
  3. Finally, run the application using the command `dotnet run`. After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., http://localhost:5000). Copy this URL and paste it into your default web browser.

 ## Run a Sample Using Visual Studio

  * Inside the Datafilter-sample open the `BoldBI.Embed.Sample.sln` solution file.
   
  * Click `Build Solution` option and after building click `Start` icon to run the project.

 ## Run a Sample Using Visual Studio Code
 
  * Open the BoldBI.Embed.Sample project in Visual Studio Code.
   
  * Open the terminal in Visual Studio Code and execute the command `dotnet restore` to restore the required dependencies.
 
  * Build your .NET project by executing the `dotnet build` command in the terminal.
 
  * To run the application, use the command `dotnet run` in the terminal. After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., http://localhost:5000). Copy this URL and paste it into your default web browser.

## Important notes

It is recommended not to store passwords and sensitive information in configuration files for security reasons in a real-world application. Instead, it would be best if you considered using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).
