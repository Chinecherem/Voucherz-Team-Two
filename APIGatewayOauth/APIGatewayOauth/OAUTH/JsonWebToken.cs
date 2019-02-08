using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIGatewayOauth.OAUTH
{
	public class JsonWebToken
	{
		public string Token { get; set; }
		//this defines the time the token will take before it expires
		public long Expires { get; set; }
	}
}
