// CRIAÇAO DAQUELE BOTÃO AZUL
let botaoDosAudios = document.createElement('button')
botaoDosAudios.textContent = '+'
botaoDosAudios.classList.add('fazerAListaDeAudioAparecer')
botaoDosAudios.addEventListener('click', creatingTheListOfTheAudios)

let secondSection = document.getElementById('segunda-seçao')
secondSection.appendChild(botaoDosAudios)

let infinityRepticao = document.getElementById('repiçaoInfinita')
let repticao = false
infinityRepticao.addEventListener('click', () =>{
    repticao = true;
})

var playlist = []
const botarOsAudioNaPlaylist = (numeroDoAudio, qualEOTextoDoAudio) =>{
    if (qualEOTextoDoAudio === 'Jack Hannaford'){
        if (numeroDoAudio === 'Complete Audio'){
            playlist.push(`./assets/JackRanaford/Jack Hannaford Natalie ${numeroDoAudio}.mp3`)

        } else{
            playlist.push(`./assets/JackRanaford/AUDIO Jack Hannaford 0${numeroDoAudio} Natalie.mp3`)
        }
    } else if (qualEOTextoDoAudio === 'The Endless Tale'){
        if (numeroDoAudio === 'Complete Audio'){
            playlist.push(`./assets/TheEndLessTale/The Endless Tale Peter ${numeroDoAudio}.mp3`)

        } else{
            playlist.push(`./assets/TheEndLessTale/AUDIO The Endless Tale 0${numeroDoAudio} Peter.mp3`)
        }
    } else if (qualEOTextoDoAudio === 'Jack and the Beanstalk'){
        if (numeroDoAudio === 'Complete Audio'){
            playlist.push(`./assets/JackAndTheBeanstalk/Jack and the Beanstalk Natalie ${numeroDoAudio}.mp3`)

        } else{
            playlist.push(`./assets/JackAndTheBeanstalk/AUDIO Jack and the Beanstalk 0${numeroDoAudio} Natalie.mp3`)
        }
    } else if (qualEOTextoDoAudio === 'The Boy Who Flew too High'){
        if (numeroDoAudio === 'Complete Audio'){
            playlist.push(`./assets/TheBoyWhoFlewTooHigh/The Boy Who Flew too High Natalie ${numeroDoAudio}.mp3`)

        } else{
            playlist.push(`./assets/TheBoyWhoFlewTooHigh/AUDIO The Boy Who Flew too High 0${numeroDoAudio} Natalie.mp3`)
        }
    } else if (qualEOTextoDoAudio === 'The Bell of Atri'){
        if (numeroDoAudio === 'Complete Audio'){
            playlist.push(`./assets/TheBellOfAtri/The Bell of Atri Peter Complete Audio.mp3`)

        } else{
            playlist.push(`./assets/TheBellOfAtri/AUDIO The Bell of Atri ${numeroDoAudio} Peter.mp3`)
        }
    } else if (qualEOTextoDoAudio === 'Goldilocks and the Three Bears'){
        if (numeroDoAudio === 'Complete Audio'){
            playlist.push(`./assets/GoldilocksAndTheThreeBears/Goldilocks and the Three Bears Peter Audio Completo.mp3`)

        } else{
            playlist.push(`./assets/GoldilocksAndTheThreeBears/AUDIO Goldilocks and the Three Bears 0${numeroDoAudio} Peter.mp3`)
        }
    } else if (qualEOTextoDoAudio === 'Antonio Canova'){
        if (numeroDoAudio === 'Complete Audio'){
            playlist.push(`./assets/AntonioCanova/Antonio Canova Peter Complete Audio.mp3`)

        } else{
            playlist.push(`./assets/AntonioCanova/AUDIO Antonio Canova ${numeroDoAudio} Peter.mp3`)
        }
    } else if (qualEOTextoDoAudio === 'Why Cats and Dogs are Enemies'){
        if (numeroDoAudio === 'Complete Audio'){
            playlist.push(`./assets/WhyCatsAndDogsAreEnimies/Why Cats and Dogs are Enemies Peter Complete Audio.mp3`)

        } else{
            playlist.push(`./assets/WhyCatsAndDogsAreEnimies/AUDIO Why Cats and Dogs are Enemies 0${numeroDoAudio} Peter.mp3`)
        }
    }
    console.log(playlist)
}

const takingOffTheListOfTheAudios = (somethingWhichIsGoingToLeave, somethingWhichIsGoingToapper) => {
    document.body.removeChild(somethingWhichIsGoingToLeave)
    document.body.removeChild(somethingWhichIsGoingToapper)

    
    
    ordemDosAudios = 0
    let mainAudio = document.getElementById('audio-principal')
    mainAudio.setAttribute('src', playlist[ordemDosAudios])
    mainAudio.play()

    let recuar = document.getElementById('Recuar')
    recuar.addEventListener('click', () =>{
        ordemDosAudios -= 1
        mainAudio.setAttribute('src', playlist[ordemDosAudios])
        mainAudio.play()
        if (ordemDosAudios >= playlist.length){
            alert('sua playlist acabou')
        }
    })
    let avancar = document.getElementById('Passar')
    avancar.addEventListener('click', () =>{
        ordemDosAudios += 1
        mainAudio.setAttribute('src', playlist[ordemDosAudios])
        mainAudio.play()
        if (ordemDosAudios >= playlist.length){
            alert('sua playlist acabou')
        }
    })

    mainAudio.addEventListener('ended', () =>{
        if (repticao === false){
            ordemDosAudios += 1
            if (ordemDosAudios >= playlist.length){
                alert('sua playlist acabou')

            } else{
                mainAudio.setAttribute('src', playlist[ordemDosAudios])
                mainAudio.play()
            }
        } else{
            ordemDosAudios += 1
            if (ordemDosAudios >= playlist.length){
                ordemDosAudios = 0
            }
            mainAudio.setAttribute('src', playlist[ordemDosAudios])
            mainAudio.play()

    }
})

}
function creatingTheListOfTheAudios(){
    playlist = []
    let listaDosAudios = document.createElement('div')
    listaDosAudios.classList.add('listaDosAudio')

    let sairDeListaDosAudio = document.createElement('button')
    sairDeListaDosAudio.classList.add('sairDoListaDosAudio')
    sairDeListaDosAudio.textContent = '<¬'
    sairDeListaDosAudio.addEventListener('click', () => takingOffTheListOfTheAudios(listaDosAudios, sairDeListaDosAudio))

    for (let i = 0; i < 9; i++){
        let audioJack = document.createElement('div')
        audioJack.classList.add('audio')

        let textAudioJack = document.createElement('p')
        textAudioJack.classList.add('audio-text')

        if (i + 1 < 9){
            audioJack.addEventListener('click', () => botarOsAudioNaPlaylist(i+1, 'Jack Hannaford') )
            textAudioJack.textContent = `Jack Hanaford ${i + 1}`
        } else{
            audioJack.addEventListener('click',  () =>botarOsAudioNaPlaylist('Complete Audio', 'Jack Hannaford') )
            textAudioJack.textContent = `Jack Hanaford COMPLETO`
        }
        audioJack.appendChild(textAudioJack)
        listaDosAudios.appendChild(audioJack)
    }
    for (let i = 0; i < 8; i++){
        let audioTheEnd = document.createElement('div')
        audioTheEnd.classList.add('audio')
        let textAudioTheEnd = document.createElement('p')
        textAudioTheEnd.classList.add('audio-text')
        if (i + 1 < 8){
            audioTheEnd.addEventListener('click',  () =>botarOsAudioNaPlaylist(i+1, 'The Endless Tale') )
            textAudioTheEnd.textContent = `The Endless Tale ${i + 1}`
        } else{
            audioTheEnd.addEventListener('click',  () =>botarOsAudioNaPlaylist('Complete Audio', 'The Endless Tale') )
            textAudioTheEnd.textContent = `The Endless Tale COMPLETO`

        }
        audioTheEnd.appendChild(textAudioTheEnd)
        listaDosAudios.appendChild(audioTheEnd)
    }
    for (let i = 0; i < 7; i++){
        let audioJackAnd = document.createElement('div')
        audioJackAnd.classList.add('audio')
        let textAudioJackAnd = document.createElement('p')
        textAudioJackAnd.classList.add('audio-text')
        if (i + 1 < 7){
            audioJackAnd.addEventListener('click', () => botarOsAudioNaPlaylist(i+1, 'Jack and the Beanstalk') )
            textAudioJackAnd.textContent = `Jack And The Beanstalk ${i + 1}`
        } else{
            audioJackAnd.addEventListener('click',  () =>botarOsAudioNaPlaylist('Complete Audio', 'Jack and the Beanstalk') )
            textAudioJackAnd.textContent = `Jack And The Beanstalk COMPLETO`

        }
        audioJackAnd.appendChild(textAudioJackAnd)
        listaDosAudios.appendChild(audioJackAnd)
    }
    for (let i = 0; i < 8; i++){
        let audioTheBoy = document.createElement('div')
        audioTheBoy.classList.add('audio')
        let textAudioTheBoy = document.createElement('p')
        textAudioTheBoy.classList.add('audio-text')
        if (i + 1 < 8){
            audioTheBoy.addEventListener('click',  () =>botarOsAudioNaPlaylist(i+1, 'The Boy Who Flew too High') )
            textAudioTheBoy.textContent = `The Boy Who Flew Too High ${i + 1}`
        } else{
            audioTheBoy.addEventListener('click',  () =>botarOsAudioNaPlaylist('Complete Audio', 'The Boy Who Flew too High') )
            textAudioTheBoy.textContent = `The Boy Who Flew Too High COMPLETO`

        }
        audioTheBoy.appendChild(textAudioTheBoy)
        listaDosAudios.appendChild(audioTheBoy)
    }
    for (let i = 0; i < 9; i++){
        let audioTheBell = document.createElement('div')
        audioTheBell.classList.add('audio')

        let textAudioTheBell = document.createElement('p')
        textAudioTheBell.classList.add('audio-text')

        if (i + 1 < 9){
            audioTheBell.addEventListener('click', () => botarOsAudioNaPlaylist(i+1, 'The Bell of Atri') )
            textAudioTheBell.textContent = `The Bell of Atri ${i + 1}`
        } else{
            audioTheBell.addEventListener('click',  () =>botarOsAudioNaPlaylist('Complete Audio', 'The Bell of Atri') )
            textAudioTheBell.textContent = `The Bell of Atri COMPLETO`
        }
        audioTheBell.appendChild(textAudioTheBell)
        listaDosAudios.appendChild(audioTheBell)
    }
    for (let i = 0; i < 8; i++){
        let audioGoldi = document.createElement('div')
        audioGoldi.classList.add('audio')
        let textAudioGoldi = document.createElement('p')
        textAudioGoldi.classList.add('audio-text')
        if (i + 1 < 8){
            audioGoldi.addEventListener('click',  () =>botarOsAudioNaPlaylist(i+1, 'Goldilocks and the Three Bears') )
            textAudioGoldi.textContent = `Goldilocks and the Three Bears ${i + 1}`
        } else{
            audioGoldi.addEventListener('click',  () =>botarOsAudioNaPlaylist('Complete Audio', 'Goldilocks and the Three Bears') )
            textAudioGoldi.textContent = `Goldilocks and the Three Bears COMPLETO`

        }
        audioGoldi.appendChild(textAudioGoldi)
        listaDosAudios.appendChild(audioGoldi)
    }
    for (let i = 0; i < 8; i++){
        let audioAntonio = document.createElement('div')
        audioAntonio.classList.add('audio')
        let textAudioAntonio = document.createElement('p')
        textAudioAntonio.classList.add('audio-text')
        if (i + 1 < 8){
            audioAntonio.addEventListener('click',  () =>botarOsAudioNaPlaylist(i+1, 'Antonio Canova') )
            textAudioAntonio.textContent = `Antonio Canova ${i + 1}`
        } else{
            audioAntonio.addEventListener('click',  () =>botarOsAudioNaPlaylist('Complete Audio', 'Antonio Canova') )
            textAudioAntonio.textContent = `Antonio Canova COMPLETO`

        }
        audioAntonio.appendChild(textAudioAntonio)
        listaDosAudios.appendChild(audioAntonio)
    }
    for (let i = 0; i < 9; i++){
        let WhyCats = document.createElement('div')
        WhyCats.classList.add('audio')
        let textWhyCats = document.createElement('p')
        textWhyCats.classList.add('audio-text')
        if (i + 1 < 9){
            WhyCats.addEventListener('click',  () =>botarOsAudioNaPlaylist(i+1, 'Why Cats and Dogs are Enemies') )
            textWhyCats.textContent = `Why Cats and Dogs are Enemies ${i + 1}`
        } else{
            WhyCats.addEventListener('click',  () =>botarOsAudioNaPlaylist('Complete Audio', 'Why Cats and Dogs are Enemies') )
            textWhyCats.textContent = `Why Cats and Dogs are Enemies COMPLETO`

        }
        WhyCats.appendChild(textWhyCats)
        listaDosAudios.appendChild(WhyCats)
    }
    document.body.appendChild(listaDosAudios)
    document.body.appendChild(sairDeListaDosAudio)
    
}
