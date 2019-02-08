using Business.logic.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.logic.Services
{
	public interface IEventServices
	{
		Task AddAsync(Guid id, DateTime occurredAt, string description,
			string category, string userId, Response contect);
		Task<IEnumerable<Event>> BrowseAsync();
		Task<Event> GetAsync(Guid Id);
	}
}
