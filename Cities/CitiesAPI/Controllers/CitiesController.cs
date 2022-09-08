using CitiesAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CitiesAPI.Controllers
{
    [ApiController]
    [Route("api/cities")]
    public class CitiesController : ControllerBase
    {
        [HttpGet]
        public JsonResult GetCities()
        {
            return new JsonResult(CitiesDataStore.Current.Cities);
        }

        [HttpGet("{id}")]
        public ActionResult<City> GetCity(int id)
        {
            var cityToReturn = CitiesDataStore.Current.Cities.FirstOrDefault(c => c.Id == id);

            return Ok(cityToReturn);
        }

        [HttpGet("mock-data")]
        public async Task<object> GetMockData()
        {
            var client = new HttpClient();
            var req = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri("https://wft-geo-db.p.rapidapi.com/v1/geo/countries/MK"),
                Headers =
                {
                    { "X-RapidAPI-Key", "922f353e9amsh4c520d32d091d58p18e8adjsn974624a7650e" },
                    { "X-RapidAPI-Host", "wft-geo-db.p.rapidapi.com" },
                }
            };
            using (var response = await client.SendAsync(req))
            {
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();
                body.GetType();
                Console.WriteLine(body.GetType());
                return body;
            }
        }
    }
}
