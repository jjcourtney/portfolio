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
                    <img src="${this.image}" class="filter blur-sm hover:filter can-remove-blur md:h-56 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" id="${this.name}">
                    </a>`))

        this.langDiv = $(`<div class="text-xl text-center"></div>`);

        this.languages.forEach(language => {
                this.langDiv.append($(`<span data-language="${language}">`).text(`${language} `));
        });
        this.gitHubDiv = $(`
                            <div class="absolute bottom-0 right-0">
                                <a href="${this.repoURL}" target="blank">
                                    <img src="./assets/images/GitHub_Logo.png" class="w-36 hover:bg-indigo-100" alt="GitHub Logo" />
                                </a>
                            </div>`);

        this.imgDiv.append(this.gitHubDiv);

        this.sectionEl.append(this.imgDiv);
        this.sectionEl.append(this.langDiv);

        
        
    }

}