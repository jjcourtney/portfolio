class PortfolioLink {
    constructor(url, image, languages, isFeature){
        this.url = url;
        this.image = image;
        this.languages = languages;
        this.isFeature = isFeature;
    }
    get elements() {
        this.createSection()
        return this.sectionEl;
    }

    createSection() {
        this.sectionEl = $("<section>")
                        .addClass("columns-card")
                        .text(`${this.url}`);
        if(this.isFeature){
            this.sectionEl.attr("id", "feature");
        }
    }
    createFigure

}

let test = new PortfolioLink("asd.com", "/image.png", "HTML", true);
let test2 = new PortfolioLink("asd.com", "/image.png", "HTML JavaScript", false);
$("#div-test").append(test.elements);
$("#div-test").append(test2.elements);
console.log(test.elements)