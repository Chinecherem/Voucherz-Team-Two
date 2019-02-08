using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace APIGatewayOauth.OAUTH
{
	public class JwtHandler : IJwtHandler
	{
		private readonly JwtSecurityTokenHandler _jwtSecurityHandler = new JwtSecurityTokenHandler();

		private readonly JwtOptions _options;
		private readonly SecurityKey _issuerSigninKey;
		private readonly SigningCredentials _signingCredentials;
		private readonly JwtHeader jwtHeader;
		private readonly TokenValidationParameters _tokenValidationParameters;
		public JwtHandler(IOptions<JwtOptions> options)
		{
			_options = options.Value;
			_issuerSigninKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.SecretKey));
			_signingCredentials = new SigningCredentials(_issuerSigninKey, SecurityAlgorithms.HmacSha256);
			jwtHeader = new JwtHeader(_signingCredentials);
			_tokenValidationParameters = new TokenValidationParameters
			{
				ValidateAudience = false,
				ValidIssuer = _options.Issuer,
				IssuerSigningKey = _issuerSigninKey
			};
		}
		public JsonWebToken Create(int id)
		{
			var UtcNow = DateTime.UtcNow;
			var expires = UtcNow.AddMinutes(_options.ExpiryMin);
			var centuryBegin = new DateTime(1970, 1, 1).ToUniversalTime();
			var exp = (long)(new TimeSpan(expires.Ticks - centuryBegin.Ticks).TotalSeconds);
			var now = (long)(new TimeSpan(UtcNow.Ticks - centuryBegin.Ticks).TotalSeconds);
			var payload = new JwtPayload
			{
				{"sub", id },
				{"iss", _options.Issuer },
				{"iat", now },
				{"exp", exp },
				{"unique_name", id }
			};

			var jwt = new JwtSecurityToken(jwtHeader, payload);
			var token = _jwtSecurityHandler.WriteToken(jwt);

			return new JsonWebToken{
				Token = token,
				Expires = exp
			};
		}
	}
}
