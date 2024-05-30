
const estudiantes= [{nombre: "Henry", apellido: "Coyago"},
{nombre: "Pepe", apellido: "Jimenez"},
{nombre: "Pedro", apellido: "Lopez"},
{nombre: "Pablo", apellido: "Mendez"},
{nombre: "Jose", apellido: "Torres"},
];



const app = Vue.createApp({
  //  template: `

   // <h1>Hola mundo desde Vue.JS</h1>
    //<p> {{1+1}} </p>
   // <p> {{[1,2,3,4,5]}} </p>
    //<p> {{true?'True': 'False'}} </p>
    
  //  `

  data(){
    return  {
        mensaje: "Hola Mundo Propieddad Reactiva",
        valor: 7,
        lista: estudiantes
    }
  }, 

  methods:{
    cambiarTexto(){
        this.mensaje= "Texto cambiado";
        

    },

    sumar(){
        this.valor= this.valor+100;
    },

    agregar(){
        const nuevo={
            nombre: "Marlon",
            apellido: "Vela"
        }
        this.lista.unshift(nuevo);
    }
  }

});

app.mount('#myApp'); //configuro mi aplicación