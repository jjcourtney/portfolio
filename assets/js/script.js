function displayLanguages() {

    const languageListEl= $("#language-list")

    languages.forEach((language) =>{
        
        this[language] =  new Language(language);
        languageListEl.append(this[language].element);
    })
    
    $('[data-main-language="true"]').hover(event => {
        const thisElementsID = event.target.id;
        const thisLanguage = $(`#${thisElementsID}`).data("language")
        $(`[data-language="${thisLanguage}"]`).addClass("text-indigo-400 cursor-pointer");
    }, event =>{
        const thisElementsID = event.target.id;
        const thisLanguage = $(`#${thisElementsID}`).data("language")
        $(`[data-language="${thisLanguage}"]`).removeClass("text-indigo-400 cursor-pointer");
    });
}

function displayProjects() {

    const rowCards = $("#rows-cards");

    projectObjsArr.forEach((linkObject, i) =>{
        let aName = linkObject.name
        this[aName] =  new PortfolioLink(projectObjsArr[i]);
        rowCards.append(this[aName].elements)
    })
        $(".can-remove-blur").hover(event => {
            const thisElementsID = event.target.id;
            $(`#${thisElementsID}`).removeClass("blur-sm");
        }, event =>{
            const thisElementsID = event.target.id;
            $(`#${thisElementsID}`).addClass("blur-sm");
        });

}


displayLanguages();
displayProjects();

