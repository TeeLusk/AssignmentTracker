using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace AssignmentTracker.Models
{
    public class Assignment
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string AssignmentId { get; set; }

        [BsonElement("Name")]
        public string Name { get; set; }
        public string Course { get; set; }
        public string Notes { get; set; }

        public DateTime DueDate { get; set; }

        public bool Completed { get; set; }
        
        //Navigation Property Course?
        
    }
}