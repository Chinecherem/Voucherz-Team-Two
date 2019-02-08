using Business.logic.Domain;
using Business.logic.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.logic.Services
{
	public class EventServices : IEventServices
	{
		private readonly IEventRepositories _respositories;
		public EventServices(IEventRepositories respositories)
		{
			_respositories = respositories;
		}
		public async Task AddAsync(Guid id, DateTime occurredAt,
			string description, string category, string userId, Response content)
		{
			try
			{
				var events = new Event(id, occurredAt, description, category, userId, content);

				await _respositories.AddAsync(events);
			}
			catch(Exception ex)
			{
				Console.WriteLine(ex.Message);
			}
			
		}

		public async Task<IEnumerable<Event>> BrowseAsync()
		{
			return await _respositories.BrowseAsync();
		}

		public async Task<Event> GetAsync(Guid Id)
		{
			return await _respositories.GetAsync(Id);
		}
	}
}
