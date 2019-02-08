using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Business.logic.Domain;
using Business.logic.Services;
using Microsoft.AspNetCore.Mvc;
using voucherz.auditTrails.Models;

namespace voucherz.auditTrails.Controllers
{
	[ApiController]
	[Produces("application/json")]
	[Route("voucherz/audittrails")]
	public class AuditTrailController : ControllerBase
	{
		private readonly IEventServices _services;
		public AuditTrailController(IEventServices services)
		{
			_services = services;
		}
		[HttpPost]
		public async Task<IActionResult> Post(EventDTO events) 
		{
			//events.Id = Guid.NewGuid();
			events.OccuredAt = DateTime.UtcNow;

			await _services.AddAsync(Guid.NewGuid(), events.OccuredAt, events.Description, events.Category
				, events.UserId, events.Content);

			return Accepted($"Event Created");
		}
		[HttpPost("{description}/{category}/{userid}/{code}/{descriptor}/{error}")]
		public async Task<IActionResult> PostUrl(string description,
			string category, string userid, string code, string descriptor,
			string error)
		{
			Guid Id = Guid.NewGuid();
			var content = new Response
			{
				code = code,
				description = description,
				errors = error
			};

			await _services.AddAsync(Id, DateTime.UtcNow, description, category
				, userid, content);

			return Accepted($"Event Created");
		}
		[HttpGet]
		public async Task<IActionResult> Get()
		{
			var events = await _services.BrowseAsync();

			return new JsonResult(events);
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> Get(Guid id)
		{
			var events = await _services.GetAsync(id);

			if (events == null)
				return NotFound();

			return new JsonResult(events);
		}


	}
}
