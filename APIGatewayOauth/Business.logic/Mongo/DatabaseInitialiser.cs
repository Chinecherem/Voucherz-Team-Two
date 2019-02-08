using Business.logic.Domain;
using Microsoft.Extensions.Options;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.logic.Mongo
{
	public class DatabaseInitialiser : IDatabaseInitialiser
	{
		private bool _initialized;
		private readonly bool seed;
		private readonly IMongoDatabase _database;
		private readonly IDatabaseSeeder _seeder;
		//Ioption helps us to know if we should seed the database or not
		public DatabaseInitialiser(IMongoDatabase database,
			IDatabaseSeeder seeder,
			IOptions<MongoOption> options)
		{
			this._database = database;
			this.seed = options.Value.Seed;
			this._seeder = seeder;
		}

		public async Task InitialiseAsync()
		{
			if (_initialized)
			{
				return;
			}
			RegisterConventions();
			_initialized = true;
			if (!seed)
			{
				return;
			}
			await _seeder.SeedAsync();
		}

		private void RegisterConventions()
		{
			ConventionRegistry.Register("EventConventions", new MongoConvention(), x => true);
		}

	}
}
