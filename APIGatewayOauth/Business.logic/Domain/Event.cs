using System;
using System.Collections.Generic;
using System.Text;

namespace Business.logic.Domain
{
	public class Event
	{
		public Guid Id { get; }
		public DateTime OccuredAt { get;  set; }
		public string Description { get; set; }
		public string Category { get; set; }
		public Response Content { get; set; }
		public string UserId { get; set; }

		protected Event()
		{

		}

		public Event(Guid _id, DateTime _occuredAt, string _description, string _category, string _userId, Response _content)
		{
			this.Id = _id;
			this.OccuredAt = _occuredAt;
			this.Description = _description;
			this.Content = _content;
			this.UserId = _userId;
			this.Category = _category;
		}
	}
}
