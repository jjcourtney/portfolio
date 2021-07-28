class PortfolioLink {
    constructor(projectObj){

        const {url, image, languages, isFeature} = projectObj;
        Object.assign(this, {url, image, languages, isFeature});
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
    createDivs() {
        this.imgDiv = $("<div>")
        .addClass("card-img")
        .attr
        this.sectionEl.append()
    }

}

const objArr = [{name: "test", url: "some.com", image: "/image.png", languages : "HTML", isFeature: true},
                {name: "test2", url: "thing.com", image: "/image.png", languages : "HTML", isFeature: false}]

const testDiv = $("#div-test");

objArr.forEach((linkObject, i) =>{
    let someName = linkObject.name
    this[someName] =  new PortfolioLink(objArr[i]);
})

testDiv.append(test.elements);
testDiv.append(test2.elements);
