using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIGatewayOauth.OAUTH
{
	public class JwtOptions
	{

		public string SecretKey { get; set; }
		//defines the mins the token wil remain unused before it expires
		public int ExpiryMin { get; set; }
		//states who created the token
		public string Issuer { get; set; }
	}
}
