using System;
using System.Collections.Generic;
using System.Text;

namespace Business.logic.Domain
{
	public class MongoOption
	{
		public string ConnectionString { get; set; }
		public string Database { get; set; }
		public bool Seed { get; set; }
	}
}
