using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIGatewayOauth.OAUTH
{
	public interface IJwtHandler
	{
		JsonWebToken Create(int id);
	}
}
