using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.logic.Mongo
{
	public interface IDatabaseSeeder
	{
		Task SeedAsync();
	}
}
