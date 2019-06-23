console.clear()

const ch = ['rock', 'paper', 'scissors']
const img = ['https://i.ibb.co/m8fVKJ0/rock.jpg', 'https://i.ibb.co/MVct816/paper.jpg', 'https://i.ibb.co/vsqm0wh/scissors.jpg']

const elComputerScore = document.querySelector('#scores-board .computer h4'), 
			elUserScore = document.querySelector('#scores-board .user h4'),
			elModel = document.getElementById('model'),
			elModelH1 = document.querySelector('#model .content h1'),
			elModelCompImg = document.querySelector('#model .content div #compImg'),
			elModelUserImg = document.querySelector('#model .content div #userImg')

let	coputerScore = 0, userScore = 0

function play(e){
	const userCh = e.target.id
	const n = Math.floor(Math.random() * 3)
	const compCH = ch[n]
	elModelCompImg.src = img[n]
	setTimeout(function(){
		whoWin(userCh, compCH)
	}, 100)
}

function text(el, str){ 
	elModel.classList.remove('none')
	el.innerText = str 
}

function whoWin(u, c){
	console.log(u,c)
	if(u === c){
		elModelCompImg.src = ''
		elModelUserImg.src = ''
		text(elModelH1, 'its a draw')
		return
	}
	if(u === ch[2]){
		elModelUserImg.src = img[2]
		if(c === ch[1]){
			userScore += 1
			elUserScore.innerText =  'Score( '+userScore+' )'
			text(elModelH1, ' User win ')}
		else{
			coputerScore += 1
			elComputerScore.innerText =  'Score('+coputerScore+')'
			text(elModelH1, 'Computer win')}
		return
	}
	if(u === ch[1]){
		elModelUserImg.src = img[1]
		if(c === ch[0]){
			userScore += 1
			elUserScore.innerText =  'Score( '+userScore+' )'
			text(elModelH1, 'User win')}
		else{
			coputerScore += 1
			elComputerScore.innerText =  'Score( '+coputerScore+' )'
			text(elModelH1, 'Computer win')}
		return
	}
	if(u === ch[0]){
		elModelUserImg.src = img[0]
		if(c === ch[2]){
			userScore += 1
			elUserScore.innerText =  'Score('+userScore+')' 
			text(elModelH1, 'User win')}
		else{
			coputerScore += 1
			elComputerScore.innerText =  'Score('+coputerScore+')'
			text(elModelH1, 'Computer win')}
		return
	}
}


document.querySelectorAll('.choice div > img').forEach(function(btn){
	btn.addEventListener('click', play)
})

elModel.addEventListener('click', function(){
		elModel.classList.add('none')
})