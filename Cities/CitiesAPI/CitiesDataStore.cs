using CitiesAPI.Models;

namespace CitiesAPI
{
    public class CitiesDataStore
    {
        public List<City> Cities { get; set; }
        public static CitiesDataStore Current { get; } = new CitiesDataStore();

        public CitiesDataStore()
        {
            Cities = new List<City>()
            {
                new City()
                {
                    Id = 1,
                    Name = "Skopje",
                    Description = "Capital of Macedonia"
                },
                new City()
                {
                    Id = 2,
                    Name = "Bitola",
                    Description = "No airport but has shirok sokak"
                },
                new City()
                {
                    Id = 3,
                    Name = "Ohrid",
                    Description = "Smeshtaj dan trebit"
                }
            };
        }
    }
}
