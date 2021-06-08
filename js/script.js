if (window.SimpleSlide) {
  new SimpleSlide({
    slide: 'quote', // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
    //auto: true, // se o slide deve passar automaticamente
    // nav: true, // se deve ou não mostrar a navegação
    // pauseOnHover: true, // pausa a transição automática
  });

  new SimpleSlide({
    slide: 'portfolio', // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
    //auto: true, // se o slide deve passar automaticamente
    nav: true, // se deve ou não mostrar a navegação
    // pauseOnHover: true, // pausa a transição automática
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}
