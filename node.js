function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1046892122445463682/tiiMYGJa5KeBjvFIuVQj87S7t8UNN9_n7PMjajbQy1Co7eyho43qK1Quar-PiU7wUqRy");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
      username: " ", //what username you want the webhook to have
      avatar_url: " ", //what avatar you want the webhook to have
      content: textSend.value
    }

    request.send(JSON.stringify(params));
    document.getElementById("button").disabled = true;
}