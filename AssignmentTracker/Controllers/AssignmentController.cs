using System.Collections;
using System.Collections.Generic;
using AssignmentTracker.Models;
using DnsClient.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AssignmentTracker.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AssignmentController : ControllerBase
    {
        private readonly AssignmentController _assignmentService;

        public AssignmentController(AssignmentController assignmentService)
        {
            _assignmentService = assignmentService;
        }

        [HttpGet]
        public ActionResult<List<Assignment>> Get() =>
            _assignmentService.Get();
        
    }
}