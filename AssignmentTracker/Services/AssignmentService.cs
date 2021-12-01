using System;
using AssignmentTracker.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace AssignmentTracker.Services
{
    public class AssignmentService
    {
        private readonly IMongoCollection<Assignment> _assignments;

        public AssignmentService(IAssignmentDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _assignments = database.GetCollection<Assignment>(settings.AssignmentsCollectionName);
        }

        public List<Assignment> Get() =>
            _assignments.Find(assignment => true).ToList();

        public Assignment Get(string id) =>
            _assignments.Find<Assignment>(assignment => assignment.AssignmentId == id).FirstOrDefault();

        public Assignment Create(Assignment assignment)
        {
            _assignments.InsertOne(assignment);
            return assignment;
        }

        public void Update(string id, Assignment assignmentIn) =>
            _assignments.ReplaceOne(assignment => assignment.AssignmentId == id, assignmentIn);

        public void Remove(Assignment assignmentIn) =>
            _assignments.DeleteOne(assignment => assignment.AssignmentId == assignmentIn.AssignmentId);

        public void Remove(string id) =>
            _assignments.DeleteOne(assignment => assignment.AssignmentId == id);
    }
}