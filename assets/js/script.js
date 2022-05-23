//Tiempo de Edicion
class Multimedia{
  // url='';
  constructor(url){
      let _url = url;
      this.getUrl = () => _url;
      this.setUrl = (nueva_url) => _url = nueva_url;
  }
  get url(){
    return this.getUrl();
  }
  set url(nueva_url){
    this.setUrl(nueva_url);
  }

  setInicio(){
    return `Este método es para realizar un cambio en la URL del Video`;
  }
}//Fin Multimedia

class Reproductor extends Multimedia{
  constructor(url, id){
      super(url);
      let _id = id;
      this.getId = () => _id;
      this.setId = (nueva_id) => _id = nueva_id;
  }
  get id(){
    return this.getId();
  }
  set id(nueva_id){
    this.setId(nueva_id);
  }

  playMultimedia(){
    //llamado a la funcion IIFE
    let elIframe = document.getElementById( this.getId() );
    elIframe.setAttribute('src', this.getUrl() );
  }

  setInicio(tiempo){
      console.log('Ingresó a setInicio() y el tiempo establecido es: ' + tiempo);
      let nuevaUrl = this.getUrl().concat(`?start=${tiempo}`);
      console.log(nuevaUrl);
      this.setUrl(nuevaUrl);
  }


}// fin Reproductor


//Tiempo de ejecución





//fUNCION IIFE que utiliza las clases

const miReproductor = ( ()=>{
  let miMetodoPrivado;


  miMetodoPrivado = ()=>{

    //creamos las tres instancias de reproductor
    var musica1 = new Reproductor("https://www.youtube.com/embed/dDiWKM3qeLg", "musica");
    var pelicula1 = new Reproductor("https://www.youtube.com/embed/YoHD9XEInc0", "peliculas");
    var serie1 = new Reproductor("https://www.youtube.com/embed/S8_YwFLCh4U", "series");

    console.log(musica1.url , musica1.id);
    console.log(pelicula1.url, pelicula1.id);
    console.log(serie1.url, serie1.id);
    musica1.setInicio(20);
    musica1.playMultimedia();

    pelicula1.playMultimedia();
    serie1.playMultimedia();


  };

  return{
    miFuncionPublica: ()=>{
      miMetodoPrivado();
    }
  }
})();


miReproductor.miFuncionPublica();
