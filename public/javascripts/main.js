let sock = new WebSocket('wss://websocketforkatachi.onrender.com:8000');

sock.addEventListener('open',function(e){
  console.log('Socket 接続成功');
});
sock.addEventListener('message',function(e){
  console.log(e.data);
});
document.getElementById('sample').addEventListener('click',function(e){
  console.log("send Hello!!");
  sock.send('hello');
});
