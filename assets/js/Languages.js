class Language {
    constructor(language){
        this.language = language;
    }

    createLiEl() {
        
        this.liEl = $(`<li>${this.language}</li>`).addClass("m-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110")
        .attr("id", this.language)
        .attr("data-language", this.language)
        .attr("data-main-language", "true");
    }

    get element(){

        this.createLiEl();
        return this.liEl;
    }

}