const tips = [
	'Escolha plantas fáceis: manjericão, cebolinha e alface crescem bem em vasos.',
	'Use terra leve e adubos orgânicos — restos de cozinha viram composta excelente.',
	'Regue pela manhã ou ao entardecer para evitar evaporação excessiva.',
	'Reaproveite vasos e recipientes: latas, garrafas e caixotes funcionam bem.',
	'Rotacione ervas e folhas para colher sempre o mais fresco possível.',
	'Comece pequeno: um vaso por vez evita sobrecarga e frustrações.'
]

let current = 0
const tipEl = document.getElementById('tip')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
let timer = null

function showTip(i){
	current = (i + tips.length) % tips.length
	if(tipEl) tipEl.textContent = tips[current]
}

function next(){ showTip(current + 1) }
function prev(){ showTip(current - 1) }

function startAuto(){
	stopAuto()
	timer = setInterval(()=> next(), 4000)
}

function stopAuto(){ if(timer) { clearInterval(timer); timer = null } }

if(prevBtn) prevBtn.addEventListener('click', ()=>{ prev(); startAuto() })
if(nextBtn) nextBtn.addEventListener('click', ()=>{ next(); startAuto() })

document.addEventListener('visibilitychange', ()=>{
	if(document.hidden) stopAuto(); else startAuto()
})

showTip(0)
startAuto()

