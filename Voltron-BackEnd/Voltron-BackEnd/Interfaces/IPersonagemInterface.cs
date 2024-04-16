using Voltron_BackEnd.Models;

namespace Voltron_BackEnd.Interfaces
{
    public interface IPersonagemInterface
    {
        Task<ServiceReponses<List<Personagem>>> GetPersonagens();
        Task<ServiceReponses<List<Personagem>>> CreatePersonagens(Personagem personagem);
        Task<ServiceReponses<Personagem>> GetPersonagemById(int id);
        Task<ServiceReponses<List<Personagem>>> UpdatePersonagem(Personagem personagem);
        Task<ServiceReponses<List<Personagem>>> DeletePersonagem(int id);
    }
}
