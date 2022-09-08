using FrodigyAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FrodigyAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public UsersController(ApplicationDbContext context) {
            this.context = context;
        }

        [HttpGet]
        public async Task<List<User>> Get()
        {
            return await context.Users.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult> Post(User user)
        {
            context.Add(user);
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
