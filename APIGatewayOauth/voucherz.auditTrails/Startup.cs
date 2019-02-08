using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Business.logic.Extension;
using Business.logic.Mongo;
using Business.logic.Repositories;
using Business.logic.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Steeltoe.Discovery.Client;

namespace voucherz.auditTrails
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddCors(options => options.AddPolicy("CorsPolicy", builder =>
			{
				builder.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();
			}));
			services.Configure<CookiePolicyOptions>(options =>
			{
				// This lambda determines whether user consent for non-essential cookies is needed for a given request.
				options.CheckConsentNeeded = context => true;
				options.MinimumSameSitePolicy = SameSiteMode.None;
			});
			services.AddDiscoveryClient(Configuration);
			services.AddLogging();
			
			services.AddMongoDb(Configuration);
			services.AddScoped<IDatabaseSeeder, MongoSeeder>();
			//services.AddScoped<IDatabaseSeeder, DatabaseSeeder>();
			services.AddScoped<IEventRepositories, EventRepositories>();
			services.AddScoped<IEventServices, EventServices>();
			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
				//app.UseHsts();
			}
			app.UseCors("CorsPolicy");
			app.UseDiscoveryClient();  
			//app.UseHttpsRedirection();
			app.UseStaticFiles();
			app.UseCookiePolicy();

			using (var scoped = app.ApplicationServices.CreateScope())
			{
				IDatabaseInitialiser init = scoped.ServiceProvider.GetService<IDatabaseInitialiser>();
				init.InitialiseAsync();
			}
			using (var scoped = app.ApplicationServices.CreateScope())
			{
				IDatabaseInitialiser init = scoped.ServiceProvider.GetService<IDatabaseInitialiser>();
				init.InitialiseAsync();
			}
			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller=Home}/{action=Index}/{id?}");
			});
		}
	}
}
