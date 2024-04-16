using Microsoft.EntityFrameworkCore;
using System.Reflection;
using Voltron_BackEnd.Data;
using Voltron_BackEnd.Interfaces;
using Voltron_BackEnd.Models;

namespace Voltron_BackEnd.Services
{
    public class PersonagemService : IPersonagemInterface
    {
        private readonly DatabaseContext _context;
        public PersonagemService(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<ServiceReponses<List<Personagem>>> CreatePersonagens(Personagem personagem)
        {
            ServiceReponses<List<Personagem>> response = new ServiceReponses<List<Personagem>>();

            try
            {
                if(personagem == null) 
                {
                    response.Dados = null;
                    response.Sucesso = false;
                    response.Mensagem = "Informar dados!";

                    return response;
                }

                _context.Add(personagem);
                await _context.SaveChangesAsync();

                response.Dados = _context.Personagens.ToList();
            }
            catch (Exception ex)
            {
                response.Mensagem = ex.Message;
                response.Sucesso = false;
            }

            return response;
        }

        public async Task<ServiceReponses<List<Personagem>>> DeletePersonagem(int id)
        {
            ServiceReponses<List<Personagem>> response = new ServiceReponses<List<Personagem>>();
            try
            {
                Personagem personagem = _context.Personagens.FirstOrDefault(x => x.ID == id);
                _context.Personagens.Remove(personagem);
                await _context.SaveChangesAsync();

                response.Dados = _context.Personagens.ToList();
            }
            catch (Exception ex)
            {
                response.Mensagem = ex.Message;
                response.Sucesso = false;
                response.Dados = null;
            }

            return response;
        }

        public async Task<ServiceReponses<Personagem>> GetPersonagemById(int id)
        {
            ServiceReponses<Personagem> response = new ServiceReponses<Personagem>();
            try
            {
                Personagem personagem = _context.Personagens.FirstOrDefault(x => x.ID == id);
                if (personagem == null)
                {
                    response.Dados = null;
                    response.Mensagem = "Personagem não encontrado!";
                    response.Sucesso = false;
                }
                response.Dados = personagem;

            }   
            catch (Exception ex)
            {
                response.Mensagem = ex.Message;
                response.Sucesso = false;
            }

            return response;
        }

        public async Task<ServiceReponses<List<Personagem>>> GetPersonagens()
        {
            ServiceReponses<List<Personagem>> response = new ServiceReponses<List<Personagem>>();
            try
            {
                response.Dados =  _context.Personagens.ToList();
                if(response.Dados.Count == 0)
                {
                    response.Mensagem = "Nenhum dado encontrado!";
                }
            }
            catch (Exception ex)
            {
                response.Mensagem = ex.Message;
                response.Sucesso = false;
            }
            return response;
        }

        public async Task<ServiceReponses<List<Personagem>>> UpdatePersonagem(Personagem novoPersonagem)
        {
            ServiceReponses<List<Personagem>> response = new ServiceReponses<List<Personagem>>();

            try
            {
                Personagem personagem = await _context.Personagens.FirstOrDefaultAsync(x => x.ID == novoPersonagem.ID);
                if (personagem == null)
                {
                    response.Dados = null;
                    response.Mensagem = "Personagem não encontrado!";
                    response.Sucesso = false;
                    return response;
                }

                PropertyInfo[] properties = typeof(Personagem).GetProperties();

                foreach (PropertyInfo x in properties)
                {
                    object valor = x.GetValue(novoPersonagem);
                    if (valor != null)
                    {
                        x.SetValue(personagem, valor);
                    }
                }

                personagem.DataDeAlteracao = DateTime.Now.ToLocalTime(); 

                await _context.SaveChangesAsync();
                response.Dados = _context.Personagens.ToList();
            }
            catch (Exception ex)
            {
                response.Dados = null;
                response.Sucesso = false;
            }

            return response;
        }
    }
}
