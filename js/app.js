const cityForm = document.querySelector('[data-js="change-location"]')
const ol = document.querySelector('ol')

const showCepData = async event => {
    event.preventDefault()

    const cepValue = event.target.city.value.trim()
    
    const { cep, logradouro, bairro, localidade, uf, ddd, ibge } = await getCepData(cepValue)
    const cepInfomations = [cep, logradouro, bairro, localidade, uf, ddd, ibge]

    if(cep === undefined){
        alert('CEP não encontrado !')
        return
    }
    
    cepInfomations.forEach((infomation, index) => {
        const titlesData = ['CEP', 'Rua', 'Bairro', 'Cidade', 'UF', 'DDD', 'IBGE']
        ol.innerHTML +=
            `<li class="list-group-item d-flex justify-content-between align-items-start">
           <div class="ms-2 me-auto">
             <div class="title">${titlesData[index]} :</div>
             ${infomation}
           </div>
         </li>`
        })

    event.reset()
 }

 cityForm.addEventListener('submit', showCepData)





