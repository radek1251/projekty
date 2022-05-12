

const getData = () =>{

   fetch(' https://akademia108.pl/api/ajax/get-users.php')
    .then(res =>res.json())
    .then(data => {
        
        let body = document.body;
        let hr = document.createElement('hr');
        body.appendChild(hr); 


        for (let user of data){
            let pId = document.createElement('p');
            let pName = document.createElement('p');
            let pWebsite = document.createElement('p');

            pId.innerText = `User ID: ${user.id}`;
            pName.innerText = `User name: ${user.name}`;
            pWebsite.innerHTML = `User URL: ${user.pWebsite}<br />-------`;      
            
            

            body.appendChild(pId);
            body.appendChild(pName);
            body.appendChild(pWebsite); 
           


        }
        console.log(data); 
    })
    .catch(error =>{
        console.log(error);
    })

}


const scrollToEndOfPage = () =>{

    let d = document.documentElement;    

    let scrollHeight = d.scrollHeight; 

    let = scrollTop = d.scrollTop; 

    let = clientHeight = d.clientHeight; 

    let sum =  Math.ceil(scrollTop + clientHeight); 

    


    console.log(`Suma = ${sum}`);

    if (sum >= scrollHeight){

        console.log('koniec strony')

    }

    getData();
}




window.addEventListener('scroll', scrollToEndOfPage);