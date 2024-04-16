using Microsoft.AspNetCore.Mvc;
using Voltron_BackEnd.Interfaces;
using Voltron_BackEnd.Models;

namespace Voltron_BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonagemController : ControllerBase
    {
        private IPersonagemInterface _personagem;
        public PersonagemController(IPersonagemInterface personagem)
        {
            _personagem = personagem;
        }
        [HttpGet]
        public async Task<ActionResult<ServiceReponses<List<Personagem>>>> GetPersonagens()
        {
            return Ok(await _personagem.GetPersonagens());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceReponses<List<Personagem>>>> GetPersonagemById(int id)
        {
            return Ok(await _personagem.GetPersonagemById(id));
        }

        [HttpPost]
        public async Task<ActionResult<ServiceReponses<List<Personagem>>>> CreatePersonagens(Personagem personagem)
        {
            return Ok(await _personagem.CreatePersonagens(personagem));
        }

        [HttpPut("updatePersonagem")]
        public async Task<ActionResult<ServiceReponses<List<Personagem>>>> UpdatePersonagem(Personagem personagem)
        {
            return Ok(await _personagem.UpdatePersonagem(personagem));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ServiceReponses<List<Personagem>>>> DeletePersonagens(int id)
        {
            return Ok(await _personagem.DeletePersonagem(id));
        }

    }
}
