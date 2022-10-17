console.log(salarios);

window.addEventListener('load', imprimirSalarios);


function encontrarPersona(personaEnBusqueda){
    return salarios.find(persona=>persona.name==personaEnBusqueda);}

function medianaPorPersona(nombrePersona){
    const trabajos=encontrarPersona(nombrePersona).trabajos;
    const salarios=trabajos.map(function(elemento){
        return elemento.salario;});
        
const medianaSalarios=PlatziMath.calcularMediana(salarios);

//console.log(medianaSalarios);
return medianaSalarios;}

function proyeccionPorPersona(nombrePersona){
    const trabajos=encontrarPersona(nombrePersona).trabajos;
    let porcentajesCrecimiento=[];
    for(let i=1;i<trabajos.length;i++){
        const salarioActual=trabajos[i].salario;
        const salarioPasado=trabajos[i-1].salario;
        const crecimiento=salarioActual-salarioPasado;
        const porcentajeCrecimiento=crecimiento/salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

        const medianaPorcentajesCrecimiento=PlatziMath.calcularMediana(porcentajesCrecimiento);
        const ultimoSalario=trabajos[trabajos.length-1].salario;
        const aumento=ultimoSalario*medianaPorcentajesCrecimiento;
        const nuevoSalario=ultimoSalario+aumento;
        return nuevoSalario;
}

const empresas= {};

for (persona of salarios){
    for(trabajo of persona.trabajos){
        
        if (!empresas[trabajo.empresa]){
            empresas[trabajo.empresa]= {};
        }
        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year]= [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

function proyeccionEmpresa(nombre){
    if(!empresas[nombre]){
        console.warn("La empresa no existe");
    }else {
        const empresasAño= Object.keys(empresas[nombre]);
        const listaAño= empresasAño.map((year) =>{
        return medianaEmpresasAño(nombre,year);
        });

        let porcentajesCrecimiento=[];

    for(let i=1;i<listaAño.length;i++){
        const salarioActual=listaAño[i];
        const salarioPasado=listaAño[i-1];
        const crecimiento=salarioActual-salarioPasado;
        const porcentajeCrecimiento=crecimiento/salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }
    const medianaPorcentajesCrecimiento=PlatziMath.calcularMediana(porcentajesCrecimiento);
    const ultimoMediana=listaAño[listaAño.length-1];
    const aumento=ultimoMediana*medianaPorcentajesCrecimiento;
    const nuevoMediana=ultimoMediana+aumento;
    return nuevoMediana;   
    }
}

botonEmpresa.addEventListener('click', imprimirSalariosEmpresa);

const proyecto2= document.querySelector('.proyect-salarios');  



function imprimirSalariosEmpresa(){

         botonEmpresa.className = "salarys__change-button salarys__change-button--active"
         botonPersonas.className = 'salarys__change-button';
         proyecto.className = 'proyect-salarios inactive';
         proyecto.innerHTML = '';

        const mombreEmpreas=Object.keys(empresas);

        for(nombre of mombreEmpreas){
           
            const array2 = document.createElement('div');  
            const nombreEmpre =document.createElement('h3');
            const con2 =document.createElement('div');

            array2.classList.add('Arrays2');
            nombreEmpre.classList.add('titulo');
            con2.classList.add('con2');

            nombreEmpre.innerText=`${nombre}`;

            const years= Object.keys(empresas[nombre]);

            for(year of years){
                const contSal =document.createElement('div');
                const parrafoTitle =document.createElement('p'); 

                contSal.classList.add('contSal'); 
                parrafoTitle.classList.add('año');  
                
                parrafoTitle.append(document.createTextNode(year));
                contSal.append(parrafoTitle);

                for(salario of empresas[nombre][year]){
                
                const parrafo =document.createElement('p'); 
                parrafo.classList.add('texto');
                parrafo.append(document.createTextNode(`$${salario}`))

                contSal.append(parrafo);
                
                }
                
                con2.append(contSal);

            }

            array2.append(nombreEmpre,con2);
            proyecto2.append(array2);
           
        
        }
        
        

}

const seleccion= document.querySelector('#seleccion');  

function mostrarListaEmpresas(){
    const mombreEmpreas=Object.keys(empresas);

    for(nombre of mombreEmpreas){
        const opcion =document.createElement('option');
        opcion.classList.add('v1');

        opcion.innerText=`${nombre}`;

        seleccion.append(opcion);
    }    
}

const seleccion2= document.querySelector('#seleccion2'); 
 
function mostrarListaAños(){
    const mombreEmpreas=Object.keys(empresas);

   
    for(nombre of mombreEmpreas){
        const opcion =document.createElement('option');
        opcion.classList.add('v1');
    
        opcion.innerText=`${nombre}`;
    
        seleccion2.append(opcion);

        const empresasAño= Object.keys(empresas[nombre]);
        
    }
       
}

mostrarListaAños();
mostrarListaEmpresas();

const botonProyeccion = document.querySelector('#proyeccion');
const promAño = document.querySelector('.promAño');




const buton = document.querySelector('#buton');
const selectAño = document.querySelector('#selectAño');


const parrafoMediana = document.querySelector('.parrafoMediana');



botonProyeccion.addEventListener('click', imprimirProyeccion);
buton.addEventListener('click', imprimirMedianaEmmpresAño);

function imprimirProyeccion(){
    promAño.innerText="";
    const valor= seleccion.value;
    promAño.append(`La proyeccion salarial mediana de la empresa ${valor} es: ${(proyeccionEmpresa(valor)).toFixed(2)}`);
}

function imprimirMedianaEmmpresAño(){
    parrafoMediana.innerText="";
    const valor2= seleccion2.value;
    const año= selectAño.value;
    const mediana=medianaEmpresasAño(valor2,año);
    parrafoMediana.append(`Media salarial de ${valor2} en el año ${año} es de ${mediana}`);
}


function medianaEmpresasAño(nombre,year){
    if(!empresas[nombre]){
        console.warn("La empresa no existe");
    }else if(!empresas[nombre][year]){
        console.warn("La empresa no realizo pagos este año");
    }else{
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}



/*ANALISIS GENERAL*/
function medianaGeneral(){
    const listaMedianas= salarios.map((persona)=> medianaPorPersona(persona.name));
   

    const medianaGeneral= PlatziMath.calcularMediana(listaMedianas);
    return medianaGeneral
}

function medianaTop10(){
    const listaMedianas= salarios.map((persona)=> medianaPorPersona(persona.name));
    const ordenarMediana= PlatziMath.ordenarLista(listaMedianas);

    const cantidad= ordenarMediana.length / 10;
    const limite= ordenarMediana.length -cantidad;

    const top10=ordenarMediana.slice(limite,ordenarMediana.length);

    const medianaTop10= PlatziMath.calcularMediana(top10);

    console.log({medianaTop10});
}
