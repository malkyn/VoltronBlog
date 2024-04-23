using Microsoft.AspNetCore.SignalR;
using Voltron_BackEnd.Models;

namespace Voltron_BackEnd.Chat
{
    public class MyHub : Hub
    {
        public static List<Messages>? _messages;

        public MyHub()
        {
            if(_messages == null)
                _messages = new List<Messages>();
        }
        public void NewMessage(string userName,  string message)
        {
            Clients.All.SendAsync("newMessage", userName, message);
            _messages.Add(new Messages
            {
                Text = message,
                UserName = userName
            });
        }

        public void NewUser(string userName, string connectionid)
        {
            Clients.Client(connectionid).SendAsync("previousMessages", _messages);
            Clients.All.SendAsync("newUser", userName);
        }
    }
}
