using Microsoft.AspNetCore.SignalR;

namespace Voltron_BackEnd.Chat
{
    public class MyHub : Hub
    {
        public void NewMessage(string userName,  string message)
        {
            Clients.All.SendAsync("newMessage", userName, message);
        }
    }
}
