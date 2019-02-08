using MongoDB.Bson;
using MongoDB.Bson.Serialization.Conventions;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.logic.Mongo
{
	public class MongoConvention : IConventionPack
	{
		public IEnumerable<IConvention> Conventions =>
			new List<IConvention> {
			new IgnoreExtraElementsConvention(true),
			new EnumRepresentationConvention(BsonType.String),
			new CamelCaseElementNameConvention()
		};
	}
}
