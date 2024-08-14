const searchInput = document.querySelector('#sbar')
const reccosDiv =  document.getElementById('recommendation')
reccosDiv.style.backgroundColor = 'aliceblue'


function debounce(func, delay){

    let timeOutId

    return function(...args){

        clearTimeout(timeOutId)
        timeOutId = setTimeout(()=> func.apply(this, args), delay)
    }
}


async function fetchReccos(query) {

    try{

        const response = await fetch(`https://dummyjson.com/products/search?q=${query}`)
        if(!response.ok){
            throw new Error('net res failure')
        }

        const data = await response.json()
        return data;
    } catch(err){
        
        console.error("Error fetching", err)
        return[];
    }           
}
