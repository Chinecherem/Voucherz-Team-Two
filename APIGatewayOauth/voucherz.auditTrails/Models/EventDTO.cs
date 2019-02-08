using Business.logic.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace voucherz.auditTrails.Models
{
	public class EventDTO
	{
		//public Guid Id { get; set; }
		public DateTime OccuredAt { get; set; }
		public string Description { get; set; }
		public string Category { get; set; }
		public Response Content { get; set; }
		public string UserId { get; set; }

	}
}
