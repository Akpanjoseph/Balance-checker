
        const form = document.querySelector('form')
        const input = document.querySelector('input')
        const show = document.querySelector('p')

        const infura_id = ''

        const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${infura_id}`)


    
        const main = async (address) => {
            try{

                const balance =  await provider.getBalance(address)
                show.textContent += `${ethers.utils.formatEther(balance)}ETH`
            }catch{
                show.textContent=' '
                show.textContent += `ETH BALANCE:  ${address} is not found on the block`
                setTimeout(()=>{
                    show.textContent='ETH BALANCE: '
                },4000)
            }            
        }


        form.addEventListener('submit', (e) => {
            e.preventDefault()
            main(input.value)
        })