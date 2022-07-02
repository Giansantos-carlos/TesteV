
const getCepUrl = cep => `https://viacep.com.br/ws/${cep}/json/`

const fetchData = async cep => {
    try {
        const response = await fetch(cep)
        if (!response.ok) {
            throw new Error('Não foi possível obter os dados')
        }
        return response.json()
    } catch ({ name, message }) {
        alert(`${name}: ${message}`)
    }
}
const getCepData = cep => fetchData(getCepUrl(cep))
