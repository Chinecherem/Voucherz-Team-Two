using Business.logic.Domain;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.logic.Repositories
{
	public class EventRepositories : IEventRepositories
	{
		private readonly IMongoDatabase database;
		public EventRepositories(IMongoDatabase database)
		{
			this.database = database;
		}
		public Task AddAsync(Event events)
			=> Collection.InsertOneAsync(events);

		public async Task<Event> GetAsync(Guid Id)
			=>  await Collection.AsQueryable().FirstOrDefaultAsync();

		public async Task<IEnumerable<Event>> BrowseAsync()
		{
			//var collection = await Collection.AsQueryable<Event>().ToListAsync();
			var collection = await Collection.Find(_ => true).ToListAsync();
			
			return collection;
		}


		//helper property to collect all the details of Event
		private IMongoCollection<Event> Collection
			=> database.GetCollection<Event>("Events");
	}
}

