using Business.logic.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.logic.Repositories
{
	public interface IEventRepositories
	{
		Task<Event> GetAsync(Guid Id);
		Task<IEnumerable<Event>> BrowseAsync();
		Task AddAsync(Event events);
	}
}
