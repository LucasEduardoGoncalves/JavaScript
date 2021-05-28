function sayMyName(params) {
    console.log("Antes de executar a função")
    params()
    console.log("Depois de executar a função")
};

sayMyName(() => {console.log("Lucas")})