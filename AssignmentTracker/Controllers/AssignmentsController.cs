using AssignmentTracker.Models;
using AssignmentTracker.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace AssignmentTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssignmentsController : ControllerBase
    {
        private readonly AssignmentService _assignmentService;

        public AssignmentsController(AssignmentService assignmentService)
        {
            _assignmentService = assignmentService;
        }

        [HttpGet]
        public ActionResult<List<Assignment>> Get() =>
            _assignmentService.Get();

        [HttpGet("{id:length(24)}", Name = "GetAssignment")]
        public ActionResult<Assignment> Get(string id)
        {
            var assignment = _assignmentService.Get(id);

            if (assignment == null)
            {
                return NotFound();
            }

            return assignment;
        }

        [HttpPost]
        public ActionResult<Assignment> Create(Assignment assignment)
        {
            _assignmentService.Create(assignment);

            return CreatedAtRoute("GetAssignment", new { id = assignment.AssignmentId.ToString() }, assignment);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Assignment assignmentIn)
        {
            var assignment = _assignmentService.Get(id);

            if (assignment == null)
            {
                return NotFound();
            }

            _assignmentService.Update(id, assignmentIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var assignment = _assignmentService.Get(id);

            if (assignment == null)
            {
                return NotFound();
            }

            _assignmentService.Remove(assignment.AssignmentId);

            return NoContent();
        }
    }
}