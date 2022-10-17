
const botonPersonas = document.querySelector('#persons-button');
const botonEmpresa = document.querySelector('#enterprices-button');
const botonMedia = document.querySelector('.cal-prom');
botonPersonas.addEventListener('click', imprimirSalarios);



const salarios = [];
salarios.push({
  name: 'Juanita',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 250, },
    { year: 2019, empresa: 'Freelance', salario: 250, },
    { year: 2020, empresa: 'Industrias Mokepon', salario: 850, },
    { year: 2021, empresa: 'Industrias Mokepon', salario: 1050, },
    { year: 2022, empresa: 'Industrias Mokepon', salario: 1250, },
    { year: 2023, empresa: 'Industrias Mokepon', salario: 1250, },
  ],
});
salarios.push({
  name: 'Alex',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 450, },
    { year: 2019, empresa: 'Freelance', salario: 550, },
    { year: 2020, empresa: 'Freelance', salario: 400, },
    { year: 2021, empresa: 'Industrias Mokepon', salario: 1050, },
    { year: 2022, empresa: 'Industrias Mokepon', salario: 1250, },
    { year: 2023, empresa: 'Industrias Mokepon', salario: 1250, },
  ],
});
salarios.push({
  name: 'Nath',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 600, },
    { year: 2019, empresa: 'Freelance', salario: 625, },
    { year: 2020, empresa: 'Freelance', salario: 575, },
    { year: 2021, empresa: 'MarketerosCOL', salario: 1000, },
    { year: 2022, empresa: 'MarketerosCOL', salario: 1000, },
    { year: 2023, empresa: 'MarketerosCOL', salario: 1100, },
  ],
});
salarios.push({
  name: 'Julia',
  trabajos: [
    { year: 2018, empresa: 'MarketerosCOL', salario: 1000, },
    { year: 2019, empresa: 'MarketerosCOL', salario: 2000, },
    { year: 2020, empresa: 'MarketerosCOL', salario: 2000, },
    { year: 2021, empresa: 'MarketerosCOL', salario: 2000, },
    { year: 2022, empresa: 'MarketerosCOL', salario: 2000, },
    { year: 2023, empresa: 'MarketerosCOL', salario: 2000, },
  ],
});
salarios.push({
  name: 'Jonatan',
  trabajos: [
    { year: 2019, empresa: 'MarketerosCOL', salario: 1000, },
    { year: 2020, empresa: 'MarketerosCOL', salario: 1000, },
    { year: 2021, empresa: 'MarketerosCOL', salario: 800, },
    { year: 2022, empresa: 'MarketerosCOL', salario: 900, },
    { year: 2023, empresa: 'MarketerosCOL', salario: 1000, },
  ],
});
salarios.push({
  name: 'Armando',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 750, },
    { year: 2019, empresa: 'Freelance', salario: 750, },
    { year: 2020, empresa: 'Freelance', salario: 750, },
    { year: 2021, empresa: 'Freelance', salario: 850, },
    { year: 2022, empresa: 'Freelance', salario: 850, },
    { year: 2023, empresa: 'Freelance', salario: 850, },
  ],
});
salarios.push({
  name: 'Dilan',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 500, },
    { year: 2019, empresa: 'Freelance', salario: 500, },
    { year: 2020, empresa: 'Freelance', salario: 600, },
    { year: 2021, empresa: 'Mokepon', salario: 1100, },
    { year: 2022, empresa: 'Mokepon', salario: 1100, },
    { year: 2023, empresa: 'Mokepon', salario: 1100, },
  ],
});
salarios.push({
  name: 'Zamir',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 400, },
    { year: 2019, empresa: 'Freelance', salario: 500, },
    { year: 2020, empresa: 'Freelance', salario: 500, },
    { year: 2021, empresa: 'Mokepon', salario: 1100, },
    { year: 2022, empresa: 'Mokepon', salario: 1100, },
    { year: 2023, empresa: 'Mokepon', salario: 1200, },
  ],
});
salarios.push({
  name: 'Daniela',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 500, },
    { year: 2019, empresa: 'Freelance', salario: 500, },
    { year: 2020, empresa: 'Freelance', salario: 500, },
    { year: 2021, empresa: 'Freelance', salario: 550, },
    { year: 2022, empresa: 'Freelance', salario: 550, },
    { year: 2023, empresa: 'MarketerosCOL', salario: 850, },
  ],
});
salarios.push({
  name: 'Daniel',
  trabajos: [
    { year: 2020, empresa: 'Freelance', salario: 150, },
    { year: 2021, empresa: 'Freelance', salario: 450, },
    { year: 2022, empresa: 'Freelance', salario: 550, },
    { year: 2023, empresa: 'Freelance', salario: 650, },
  ],
});
salarios.push({
  name: 'Rigoberto',
  trabajos: [
    { year: 2018, empresa: 'MarketerosCOL', salario: 700, },
    { year: 2019, empresa: 'MarketerosCOL', salario: 700, },
    { year: 2020, empresa: 'MarketerosCOL', salario: 700, },
    { year: 2021, empresa: 'MarketerosCOL', salario: 750, },
    { year: 2022, empresa: 'MarketerosCOL', salario: 750, },
    { year: 2023, empresa: 'MarketerosCOL', salario: 750, },
  ],
});
salarios.push({
  name: 'Alicia',
  trabajos: [
    { year: 2018, empresa: 'Inversionify', salario: 300, },
    { year: 2019, empresa: 'Inversionify', salario: 1700, },
    { year: 2020, empresa: 'Inversionify', salario: 2700, },
    { year: 2021, empresa: 'Inversionify', salario: 3750, },
    { year: 2022, empresa: 'Freelance', salario: 1550, },
    { year: 2023, empresa: 'Freelance', salario: 350, },
  ],
});
salarios.push({
  name: 'Teodoro',
  trabajos: [
    { year: 2018, empresa: 'Freelance', salario: 600, },
    { year: 2019, empresa: 'Freelance', salario: 700, },
    { year: 2020, empresa: 'Inversionify', salario: 1700, },
    { year: 2021, empresa: 'Inversionify', salario: 1750, },
    { year: 2022, empresa: 'Freelance', salario: 800, },
    { year: 2023, empresa: 'Freelance', salario: 850, },
  ],
});
salarios.push({
  name: 'Bruce',
  trabajos: [
    { year: 2018, empresa: 'Wayne Enterprises', salario: 4600, },
    { year: 2019, empresa: 'Wayne Enterprises', salario: 4700, },
    { year: 2020, empresa: 'Wayne Enterprises', salario: 3700, },
    { year: 2021, empresa: 'Wayne Enterprises', salario: 4150, },
    { year: 2022, empresa: 'Wayne Enterprises', salario: 4400, },
    { year: 2023, empresa: 'Wayne Enterprises', salario: 3850, },
  ],
});
salarios.push({
  name: 'Alfred',
  trabajos: [
    { year: 2018, empresa: 'Wayne Enterprises', salario: 2000, },
    { year: 2019, empresa: 'Wayne Enterprises', salario: 2000, },
    { year: 2020, empresa: 'Wayne Enterprises', salario: 1500, },
    { year: 2021, empresa: 'Wayne Enterprises', salario: 1500, },
    { year: 2022, empresa: 'Wayne Enterprises', salario: 2000, },
    { year: 2023, empresa: 'Wayne Enterprises', salario: 1500, },
  ],
});
salarios.push({
  name: 'Clark Kent',
  trabajos: [
    { year: 2018, empresa: 'Daily Planet', salario: 1000, },
    { year: 2019, empresa: 'Daily Planet', salario: 1500, },
    { year: 2020, empresa: 'Daily Planet', salario: 1000, },
    { year: 2021, empresa: 'Daily Planet', salario: 1500, },
    { year: 2022, empresa: 'Daily Planet', salario: 2000, },
    { year: 2023, empresa: 'Daily Planet', salario: 1500, },
  ],
});
salarios.push({
  name: 'Lois Lane',
  trabajos: [
    { year: 2018, empresa: 'Daily Planet', salario: 2000, },
    { year: 2019, empresa: 'Daily Planet', salario: 2500, },
    { year: 2020, empresa: 'Daily Planet', salario: 2000, },
    { year: 2021, empresa: 'Daily Planet', salario: 2500, },
    { year: 2022, empresa: 'Daily Planet', salario: 2500, },
    { year: 2023, empresa: 'Daily Planet', salario: 2500, },
  ],
});
salarios.push({
  name: 'Jimmy Olsen',
  trabajos: [
    { year: 2018, empresa: 'Daily Planet', salario: 1500, },
    { year: 2019, empresa: 'Daily Planet', salario: 2000, },
    { year: 2020, empresa: 'Daily Planet', salario: 2000, },
    { year: 2021, empresa: 'Daily Planet', salario: 2500, },
    { year: 2022, empresa: 'Daily Planet', salario: 2500, },
    { year: 2023, empresa: 'Daily Planet', salario: 1500, },
  ],
});
salarios.push({
  name: 'Perry White',
  trabajos: [
    { year: 2018, empresa: 'Daily Planet', salario: 3500, },
    { year: 2019, empresa: 'Daily Planet', salario: 3700, },
    { year: 2020, empresa: 'Daily Planet', salario: 3800, },
    { year: 2021, empresa: 'Daily Planet', salario: 4000, },
    { year: 2022, empresa: 'Daily Planet', salario: 4050, },
    { year: 2023, empresa: 'Daily Planet', salario: 4050, },
  ],
});
salarios.push({
  name: 'Lex Luthor',
  trabajos: [
    { year: 2018, empresa: 'LexCorp', salario: 5000, },
    { year: 2019, empresa: 'LexCorp', salario: 5300, },
    { year: 2020, empresa: 'LexCorp', salario: 4000, },
    { year: 2021, empresa: 'LexCorp', salario: 3000, },
    { year: 2022, empresa: 'LexCorp', salario: 3500, },
    { year: 2023, empresa: 'LexCorp', salario: 3050, },
  ],
});
     

const proyecto= document.querySelector('.proyect-salarios');   

function imprimirSalario(persona){

        const nombre=document.createElement('h3');
        nombre.classList.add('nombre');

       

        const datos=document.createElement('div');
        datos.classList.add('con');

        nombre.innerText=`${persona.name}`;
        
        for (dato of persona.trabajos){
            
            const tra=document.createElement('p');
            const año=document.createElement('p');
            const pago=document.createElement('p');
            const sal=document.createElement('div');

            sal.classList.add('salarios-arrays');

            tra.classList.add('empledo-trabajo');
            tra.innerText=`${dato.empresa}`;

            año.classList.add('empledo-año');
            año.innerText=`${dato.year}`;

            pago.classList.add('empledo-paga');
            pago.innerText=`${dato.salario}`;

            sal.append(tra,año,pago);

            datos.append(sal);

        }
        
        const resultado=document.createElement('div');
        resultado.classList.add('Arrays');

        resultado.append(nombre,datos)

        proyecto.append(resultado);

        
    }
   
  

    /*const promAño = document.querySelector('.promAño');

    function Promedio2024(persona){
      let salarioFinal=0;
      let count=0;
      let media=0;
   
      for (datos of persona.trabajos){
        if(datos.empresa == 'LexCorp'){
          salarioFinal+=datos.salario;
          count++;
          return
        }
      }
      media=salarioFinal/count;
      promAño.innerText=media;
    }

    function imprimirMedia () {
      for (persona of salarios) {
          Promedio2024(persona);
    }
    }*/
    
    function imprimirSalarios () {
      botonEmpresa.className = "salarys__change-button"
      botonPersonas.className = 'salarys__change-button salarys__change-button--active';
      proyecto.className = 'proyect-salarios';
      proyecto.innerHTML = '';
      for (persona of salarios) {
          imprimirSalario(persona);
       
      }   
  }