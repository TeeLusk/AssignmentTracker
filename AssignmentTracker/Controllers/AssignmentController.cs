using System.Collections;
using System.Collections.Generic;
using AssignmentTracker.Models;
using DnsClient.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AssignmentTracker.Controllers
{
    public class AssignmentController : Controller
    {
        [ApiController]
        [Route("[controller]")]
        public class AssignmentsController : ControllerBase
        {
            private readonly AssignmentsController _assignmentService;

            public AssignmentsController(AssignmentsController assignmentService)
            {
                _assignmentService = assignmentService;
            }

            [HttpGet]
            public ActionResult<List<Assignment>> Get() =>
                _assignmentService.Get();
            
        }
    }
}