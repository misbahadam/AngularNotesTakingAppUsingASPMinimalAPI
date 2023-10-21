public class Program
{
    public static void Main(string[] args)
    {
        var host = CreateHostBuilder(args).Build();
        // Other configurations
        AppConfiguration.ConfigureDatabase(host.Services, host.Configuration);
        host.Run();
    }
    
    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseStartup<Startup>(); // This might be different in your application
            });

    services.AddCors(options =>
        {
            options.AddDefaultPolicy(builder =>
            {
                builder.WithOrigins("http://localhost:4200") // Replace with the actual domain of your Angular app
                    .AllowAnyHeader()
                    .AllowAnyMethod();
            });
        });

}
