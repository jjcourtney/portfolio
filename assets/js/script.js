
const rowCards = $("#rows-cards");

projectObjsArr.forEach((linkObject, i) =>{
    let aName = linkObject.name
    this[aName] =  new PortfolioLink(projectObjsArr[i]);
    rowCards.append(this[aName].elements)
})

$(".can-remove-blur").hover(event => {
    thisElementsID = event.target.id;
    $(`#${thisElementsID}`).removeClass("blur-sm");
}, event =>{
    thisElementsID = event.target.id;
    $(`#${thisElementsID}`).addClass("blur-sm");
});