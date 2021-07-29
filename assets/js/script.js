class PortfolioLink {
    constructor(projectObj){

        const {url, image, languages, isFeature, name, repoURL} = projectObj;
        Object.assign(this, {url, image, languages, isFeature, name, repoURL});
    }
    get elements() {
        this.createSection()
        this.createDivs()
        return this.sectionEl;
    }

    createSection() {
        this.sectionEl = $("<section>")
                        .addClass("flex flex-col max-w-full md:w-80 mx-5 mb-10 relative");
        if(this.isFeature){
            this.sectionEl.attr("id", "feature");
        }
    }
    createDivs() {
        this.imgDiv = $("<div>")
        .addClass("mb-4 relative")
        .append($(`<a href="${this.url}" target="blank">
                    <img src="${this.image}" class="filter blur-sm hover:filter can-remove-blur" id="${this.name}">
                    </a>`))
        this.langDiv = $(`<div class="text-xl text-center">${this.languages}</div>`);
        this.gitHubDiv = $(`
                            <div class="absolute bottom-0 right-0">
                                <a href="${this.repoURL}" target="blank">
                                    <img src="./assets/images/GitHub_Logo.png" class="w-20 hover:bg-gray-200" alt="GitHub Logo" />
                                </a>
                            </div>`);

        this.imgDiv.append(this.gitHubDiv);

        this.sectionEl.append(this.imgDiv);
        this.sectionEl.append(this.langDiv);


        
    }

}

const objArr = [{name: "test", url: "some.com", image: "./assets/images/periodic.png", repoURL : "https://github.com/jjcourtney/PeriodicTable", languages : "HTML", isFeature: true},
                {name: "test2", url: "thing.com", image: "./assets/images/periodic.png", repoURL : "https://github.com/jjcourtney/PeriodicTable", languages : "HTML/PHP/CSS", isFeature: false},
                {name: "test3", url: "thing.com", image: "./assets/images/periodic.png", repoURL : "https://github.com/jjcourtney/PeriodicTable", languages : "HTML/PHP/CSS", isFeature: false},
                {name: "test4", url: "thing.com", image: "./assets/images/periodic.png", repoURL : "https://github.com/jjcourtney/PeriodicTable", languages : "HTML/PHP/CSS", isFeature: false},
                {name: "test5", url: "thing.com", image: "./assets/images/periodic.png", repoURL : "https://github.com/jjcourtney/PeriodicTable", languages : "HTML/PHP/CSS", isFeature: false},
                {name: "test6", url: "thing.com", image: "./assets/images/periodic.png", repoURL : "https://github.com/jjcourtney/PeriodicTable", languages : "HTML/PHP/CSS", isFeature: false},
                {name: "test7", url: "thing.com", image: "./assets/images/periodic.png", repoURL : "https://github.com/jjcourtney/PeriodicTable", languages : "HTML/PHP/CSS", isFeature: false},
                {name: "test8", url: "thing.com", image: "./assets/images/periodic.png", repoURL : "https://github.com/jjcourtney/PeriodicTable", languages : "HTML/PHP/CSS", isFeature: false},
                {name: "test9", url: "thing.com", image: "./assets/images/periodic.png", repoURL : "https://github.com/jjcourtney/PeriodicTable", languages : "HTML/PHP/CSS", isFeature: false},
                {name: "test10", url: "thing.com", image: "./assets/images/periodic.png", repoURL : "https://github.com/jjcourtney/PeriodicTable", languages : "HTML/PHP/CSS", isFeature: false}]

const testDiv = $("#rows-cards");

objArr.forEach((linkObject, i) =>{
    let someName = linkObject.name
    this[someName] =  new PortfolioLink(objArr[i]);
    testDiv.append(this[someName].elements)
})




$(".can-remove-blur").hover(event => {
    thisElementsID = event.target.id;
    $(`#${thisElementsID}`).removeClass("blur-sm");
}, event =>{
    thisElementsID = event.target.id;
    $(`#${thisElementsID}`).addClass("blur-sm");
});