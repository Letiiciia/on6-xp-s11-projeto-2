//Implementar o GET para disponibilizar a lista de mulheres maravilhosas cadastradas na API

const maravilhosas = require("../data/data.json");
const controllers = require("../controllers/maravilhosas-controller");
//const { retornaId } = require("../controllers/maravilhosas-controller");

// selectAllData
function selectAllData(){
    return maravilhosas;

}


//selectDataById
function selectDataById(id){
    //const id = parseInt(request.params.id);


    const maravilhosasById = maravilhosas.find(item => item.id == id);

    return maravilhosasById;

}

//insertData




//updateData
function upDate (id, atualizaMaravilhosa){
     const atualMaravilhosa = maravilhosas.map(maravilhosa => maravilhosa.id);
     const localizarMaravilhosa = atualMaravilhosa.indexOf(id);

     const locMaravilhosa = {id, ...atualizaMaravilhosa};
     const atualizacaoFinal = maravilhosas.splice(localizarMaravilhosa, 1, locMaravilhosa);

     return atualizacaoFinal;

}

//deleteData
function deleteData (id){
    const filtrarMaravilhosas = maravilhosas.filter(maravilhosa =>{
        return maravilhosa.id ===id;
    })[0];

    const indexMaravilhosas = maravilhosas.indexOf(filtrarMaravilhosas);

    maravilhosas.splice(indexMaravilhosas,1)

    return maravilhosas;


}

module.exports = {
    selectAllData,
    selectDataById,
    upDate,
    deleteData
}