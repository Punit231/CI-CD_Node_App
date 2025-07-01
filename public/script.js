document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('result').innerText = "✅ You clicked the button!";
});

let alertShow = false;
setInterval(() => {
  document.title =
  alertShow ? "DevOps"
            : "CI/CD Pipeline";
  
  alertShow = !alertShow;
}, 500);