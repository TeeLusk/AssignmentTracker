namespace AssignmentTracker.Models
{
    public class AssignmentDatabaseSettings : IAssignmentDatabaseSettings
    {
        public string AssignmentsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IAssignmentDatabaseSettings
    {
        string AssignmentsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}