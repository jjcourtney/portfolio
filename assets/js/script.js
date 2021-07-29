// class PortfolioLink {
//     constructor(projectObj){

//         const {url, image, languages, isFeature} = projectObj;
//         Object.assign(this, {url, image, languages, isFeature});
//     }
//     get elements() {
//         this.createSection()
//         this.createDivs()
//         return this.sectionEl;
//     }

//     createSection() {
//         this.sectionEl = $("<section>")
//                         .addClass("columns-card");
//         if(this.isFeature){
//             this.sectionEl.attr("id", "feature");
//         }
//     }
//     createDivs() {
//         this.imgDiv = $("<div>")
//         .addClass("card-img")
//         .append($(`<a href="${this.url}" target="blank"><img src="${this.image}" class="link-img">`))
//         this.langDiv = $(`<div class="card-text">${this.languages}</div>`);

//         this.sectionEl.append(this.imgDiv);
//         this.sectionEl.append(this.langDiv);
        
//     }

// }

// const objArr = [{name: "test", url: "some.com", image: "./assets/images/periodic.png", languages : "HTML", isFeature: true},
//                 {name: "test2", url: "thing.com", image: "./assets/images/periodic.png", languages : "HTML/PHP/CSS", isFeature: false},
//                 {name: "test3", url: "thing.com", image: "./assets/images/periodic.png", languages : "HTML/PHP/CSS", isFeature: false},
//                 {name: "test4", url: "thing.com", image: "./assets/images/periodic.png", languages : "HTML/PHP/CSS", isFeature: false},
//                 {name: "test5", url: "thing.com", image: "./assets/images/periodic.png", languages : "HTML/PHP/CSS", isFeature: false},
//                 {name: "test6", url: "thing.com", image: "./assets/images/periodic.png", languages : "HTML/PHP/CSS", isFeature: false},
//                 {name: "test7", url: "thing.com", image: "./assets/images/periodic.png", languages : "HTML/PHP/CSS", isFeature: false},
//                 {name: "test8", url: "thing.com", image: "./assets/images/periodic.png", languages : "HTML/PHP/CSS", isFeature: false},
//                 {name: "test9", url: "thing.com", image: "./assets/images/periodic.png", languages : "HTML/PHP/CSS", isFeature: false},
//                 {name: "test10", url: "thing.com", image: "./assets/images/periodic.png", languages : "HTML/PHP/CSS", isFeature: false}]

// const testDiv = $("#rows-cards");

// objArr.forEach((linkObject, i) =>{
//     let someName = linkObject.name
//     this[someName] =  new PortfolioLink(objArr[i]);
//     testDiv.append(this[someName].elements)
// })




$(".can-remove-blur").hover(event => {
    thisElementsID = event.target.id;
    $(`#${thisElementsID}`).removeClass("blur-sm");
}, event =>{
    thisElementsID = event.target.id;
    $(`#${thisElementsID}`).addClass("blur-sm");
});