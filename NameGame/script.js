let start = document.getElementById('start');

start.addEventListener('click', result);

function result(){
    let fName = document.getElementById('FirstName');
    let mName = document.getElementById('MiddleName');
    let lName = document.getElementById('LastName');

    let Arr = ['shivaji','vilas','nandkumar','ganesh','balu','mahadev','sadashiv'];
    let Arr1 = ['shivu','vilu','nandu','ganu','Rikshaw Chalu Ahet Ka ?','Lahan Muli Not Allowed','Ajobacha Nav Ka Lihtay :)'];

    let i = 0;

    while(i<7)
    {
        if(mName.value.toLowerCase() == Arr[i])
        {
            
            let container = document.getElementById('main');

            let para1 = document.createElement('p');
            let para2 = document.createElement('p');

            if(i == 4)
            {
                container.textContent = "";
                para2.textContent = Arr1[i];
                container.appendChild(para2);
                para2.className = 'para';
                break;
            }
            else if(i == 5)
            {
                container.textContent = "";
                para2.textContent = Arr1[i];
                container.appendChild(para2);
                para2.className = 'para';
                break;
            }
            else if(i == 6)
            {
                container.textContent = "";
                para2.textContent = Arr1[i];
                container.appendChild(para2);
                para2.className = 'para';
                break;
            }
            else
            {
                container.textContent = "";

                para1.textContent = 'Invalid Details !!!\n';

                para2.textContent = Arr1[i];
                
                let text = document.createTextNode('You Entered ' + Arr[i] + ' write ');

                container.appendChild(para1);
                container.appendChild(text);
                container.appendChild(para2);

                container.className = 'container';
                para2.className = 'para';
            
                para1.className = 'container';
                break;
            }

        }

        i++;
    }
    if(i >= 7)
    {
        let container = document.getElementById('main');

        container.textContent = "You Are Not Allowed To Play This Game !";

        container.className = 'container';
    }
    
    
}