using Business.logic.Domain;
using Business.logic.Repositories;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.logic.Mongo
{
	public class MongoSeeder : DatabaseSeeder
	{
		protected readonly IEventRepositories respositories;
		public MongoSeeder(IMongoDatabase database,
			IEventRepositories repositories) : base(database)
		{

		}

		protected override async Task CustomSeedAsync()
		{
			var eve = new List<Event>
			{
				new Event(new Guid(), DateTime.Now,"Dabiri", "", "", new Response { code="400", description="microservice", errors="sql error"}),
				new Event(new Guid(), DateTime.Now,"Dabiri", "", "", new Response { code="200", description="microservice", errors=null}),
				new Event(new Guid(), DateTime.Now,"Dabiri", "", "", new Response { code="202", description="microservice", errors=null})
			};

			//Add the events to the database one after the other
			await Task.WhenAll(eve.Select(x => respositories.AddAsync(x)));
		}
	}
}
