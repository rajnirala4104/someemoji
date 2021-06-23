console.log('Hello World!');
  //confirm('Do you want to delete this image?');
  let Tp = alert("Welcome to Raj's page.");

  let intro = prompt('What is your name?', '');
  console.log(intro);
  alert(`Welcome ${intro} nice to meet you. Have a good day.`);
  let timeout = setTimeout(intro, 3000);
  clearTimeout(timeout);

  document.getElementById('content').innerHTML = '🎁'
  let content = document.getElementById('content');
  btn.addEventListener('click', function run() {
    document.getElementById('content').innerHTML = '😛'
  });
  document.getElementById('content2').innerHTML = '🎁'
  let content2 = document.getElementById('content2');
  btn2.addEventListener('click', function run() {
    document.getElementById('content2').innerHTML = '😜'
  });
 document.getElementById('content3').innerHTML = '🎁'
  let content3 = document.getElementById('content3');
  btn3.addEventListener('click', function run() {
    document.getElementById('content3').innerHTML = '😏'
  });
  document.getElementById('content4').innerHTML = '🎁'
  let content4 = document.getElementById('content4');
  btn4.addEventListener('click', function run() {
    document.getElementById('content4').innerHTML = '🎂'
  });
  let reload = document.getElementById('reload');
  reload.addEventListener('click', function run() {
    let a = window;
    a = window.location.reload();
    console.log(a);
  });