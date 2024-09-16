using Newtonsoft.Json;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors(corsPolicyBuilder => corsPolicyBuilder
.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

string basePath = AppDomain.CurrentDomain.BaseDirectory;
string jsonString = System.IO.File.ReadAllText(Path.Combine(basePath, "embedConfig.json"));
GlobalAppSettings.EmbedDetails = JsonConvert.DeserializeObject<EmbedDetails>(jsonString);
    
app.MapControllerRoute(
    name: "default",
    pattern: "{BoldBIEmbed}/{action=GetData}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
