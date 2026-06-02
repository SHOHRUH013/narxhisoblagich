const fmt = n => Math.round(n).toLocaleString('ru-RU').replace(/,/g,' ');

const mat=document.getElementById('mat'),w=document.getElementById('w'),h=document.getElementById('h');

function fillW(){
  const ws=mat.selectedOptions[0].dataset.w.split(',');
  w.innerHTML=ws.map(v=>`<option value="${v}">${v} metr</option>`).join('');
}

function calc(){
  const a=(parseFloat(w.value)||0)*(parseFloat(h.value)||0);
  document.getElementById('bprice').textContent=fmt(a*parseFloat(mat.value));
  document.getElementById('barea').textContent='Maydon: '+a.toFixed(2)+' m²  •  so\'m';
}

mat.addEventListener('change',()=>{fillW();calc();});
[w,h].forEach(e=>e.addEventListener('input',calc));
fillW();calc();

const narx=[["Banner 1 metr",50000],["Banner 1.2 metr",60000],["Banner 1.5 metr",75000],
  ["Banner 1.7 metr",85000],["Banner 3 metr",150000],["Orakal 1 metr",60000],
  ["Orakal 1.5 metr",90000],["Prozrachniy orakal 1 metr",70000],
  ["Set orakal 1 metr",70000],["Set orakal 1.2 metr",84000]];
document.getElementById('ntab').innerHTML=narx.map(r=>
  `<div class="item"><div class="nm">${r[0]}</div><div class="pr">${fmt(r[1])} so'm</div></div>`).join('');

const foto=[["10×15",2000],["15×20",5000],["20×30",8000],["30×40",15000],
  ["40×60",60000],["50×70",80000],["60×90",100000]];
document.getElementById('ftab').innerHTML=foto.map(r=>
  `<div class="item"><div><span class="badge">${r[0]}</span></div><div class="pr">${fmt(r[1])} so'm</div></div>`).join('');

document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');
  document.getElementById(t.dataset.p).classList.add('active');
});

if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(()=>{});}
