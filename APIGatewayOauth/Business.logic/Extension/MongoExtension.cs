using Business.logic.Domain;
using Business.logic.Mongo;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.logic.Extension
{
	public static class MongoExtension
	{
		public static void AddMongoDb(this IServiceCollection services, IConfiguration configuration)
		{
			services.Configure< MongoOption > (options =>
			{
				options.ConnectionString = "mongodb://localhost:27017";
				options.Database = "Voucherz_AuditTrails_Activities";
				options.Seed = true;
			});
			//configure mongo client as singleton so that you can only have one client all through the session
			services.AddSingleton(c =>
			{
				var option = c.GetService<IOptions<MongoOption>>();

				return new MongoClient(option.Value.ConnectionString);
			});

			services.AddScoped(c =>
			{
				var option = c.GetService<IOptions<MongoOption>>();
				var client = c.GetService<MongoClient>();

				return client.GetDatabase(option.Value.Database);
			});

			services.AddScoped<IDatabaseInitialiser, DatabaseInitialiser>();

		}
	}
}
