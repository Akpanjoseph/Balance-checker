//import ether.js 
const {ethers} = require ('ethers') 

const form = document.querySelector('form')
const input = document.querySelector('input')
const show = document.querySelector('p')

const infura_id = '29178f9cfb7c49e283d427d1812f1337'

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${infura_id}`)



const main = async(address)=>{
    const balance = await provider.getBalance(address)

    show.textContent+= ethers.utils.formatEther(balance)
}


form.addEventListener('submit',()=>{
    
    main(input.value)
})

