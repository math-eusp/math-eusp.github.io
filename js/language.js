var mlCodes = [
    {
        code: "bg",
        name: "Bulgarian"
    },
    {
        code: "zh",
        name: "Traditional"
    },
    {
        code: "zh",
        name: "Simplified"
    },
    {
        code: "cs",
        name: "Czech"
    },
    {
        code: "da",
        name: "Danish"
    },
    {
        code: "nl",
        name: "Dutch"
    },
    {
        code: "en",
        name: "English"
    },
    {
        code: "et",
        name: "Estonian"
    },
    {
        code: "de",
        name: "German"
    },
    {
        code: "el",
        name: "Greek"
    },
    {
        code: "hu",
        name: "Hungarian"
    },
    {
        code: "it",
        name: "Italian"
    },
    {
        code: "no",
        name: "Norwegian"
    },
    {
        code: "pl",
        name: "Polish"
    },
    {
        code: "pt",
        name: "Portuguese"
    },
    {
        code: "ro",
        name: "Romanian"
    },
    {
        code: "sk",
        name: "Slovak"
    },
    {
        code: "ru",
        name: "Russian"
    },
    {
        code: "es",
        name: "Spanish"
    },
    {
        code: "sv",
        name: "Swedish"
    },
];
var MLstrings = [
    {
        English: "Hey, what's up?",
        Portuguese: "Olá, tudo bom?"
    },
    {
        English: "My name is Matheus Pereira, I work with Information Technology since 2010 and I have a degree in Systems Analysis and Development from IQ Schools and Colleges. In the middle of this journey I went through several experiences and I was able to acquire a lot of knowledge, I worked with VB.NET, C #, Java, PHP, FrontEnd in general, HanaXS besides some projects for knowledge in other languages.",
        Portuguese: "Me chamo Matheus Pereira, trabalho com Técnologia da Informação desde 2010 e sou formado em Análise e Desenvolvimento de Sistemas pelas Escolas e Faculdades QI. No meio desta minha jornada passei por diversas experiências e pude adquirir muito conhecimento, trabalhei com VB.NET, C#, Java, PHP, FrontEnd em geral, HanaXS além de alguns projetos para conhecimento em outras linguagens."
    },
    {
        English: "About me",
        Portuguese: "Sobre"
    },
    {
        English: "Experiences",
        Portuguese: "Experiências"
    },
    {
        English: "2 years programming .NET using MVC and layered programming.",
        Portuguese: "2 anos programando .NET utilizando MVC e programação em camadas."
    },
    {
        English: "2 years as a front-end developer giving maintenance and creating new functionalities",
        Portuguese: "2 anos como programador front-end dando manutenção e desenvolvendo novas funcionalidades"
    },
    {
        English: "1 year of experience working with PHP and using the framework CakePHP",
        Portuguese: "1 ano de expêriencia trabalhando com PHP e utilizando o framework CakePHP"
    },
    {
        English: "Professional Experiences",
        Portuguese: "Expêriencias Profissionais"
    },
    {
        English: "Click on the banners to more info",
        Portuguese: "Clique nos Logos das Empresas para mais informações"
    },
    {
        English: "Close",
        Portuguese: "Fechar"
    },
    {
        English: "Fullstack Developer",
        Portuguese: "Desenvolvedor Fullstack"
    },
    {
        English: "It was in fact my first experience as fullstack, we developed CMS modules for an internal client, it was all natural as the tasks arrived the learning came along.",
        Portuguese: "Foi de fato minha primeira experiência como fullstack, desenvolviamos módulos de CMS para um cliente interno, foi tudo ao natural, conforme as tarefas chegavam o aprendizado vinha junto."
    },
    {
        English: "It was several experiences and it was a period of great learning, much of what I know about Web programming I learned there.",
        Portuguese: "Foram diversas experiências e foi um periodo de grande aprendizado, grande parte do que eu sei sobre programação Web eu aprendi lá."
    },
    {
        English: "C# Engineer",
        Portuguese: "Analista Desenvolvedor C#"
    },
    {
        English: "O primeiro emprego como CLT a gente nunca esquece, aprimorei meus conhecimentos em C# e iniciei pela primeira vez um Aplicativo Android além de trabalhar com rastreamento via satelite.",
        Portuguese: "The first full time job we never forget, I improved my knowledge in C# and started for the first time an Android Application in addition to working with satellite tracking."
    },
    {
        English: "I liked it enough for the first experience, I was able to absorb a lot of new stuff. I missed a lot but I learned a lot from mistakes.",
        Portuguese: "Gostei bastante para a primeira experiência,consegui absorver bastante coisa nova. Errei bastante mas aprendi muito com os erros."
    },
    {
        English: "PHP Engineer / FrontEnd",
        Portuguese: "Analista Desenvolvedor PHP / FrontEnd"
    },
    {
        English: "At Target I had one of my biggest challenges, I joined as a PHP developer but in the middle of the process I had to learn how to use the SAP cloud platform, Hana and together with Hana I had my first experience with Angular.",
        Portuguese: "Na Target eu tive um dos meus maiores desafios, entrei como desenvolvedor PHP porem no meio do processo tive que aprender a utilizar a plataforma cloud da SAP,o Hana e junto com o Hana tive a minha primeira experiência com Angular."
    },
    {
        English: "Front End Developer",
        Portuguese: "Desenvolvedor Front End"
    },
    {
        English: "Creation of the 100% independent and customizable React form for the Agenciou staff.",
        Portuguese: "Criação do formulário 100% independente e customizavel em React para o pessoal da Agenciou."
    },
    {
        English: "My first challenge as a the only one front end developer, plus the barrier to learning a new framework.",
        Portuguese: "Meu primeiro desafio como único desenvolvedor de front end, além da barreira de aprender um framework novo."
    },
    {
        English: "The creation of a Dashboard in real time is undoubtedly my greatest achievement.",
        Portuguese: "A criação do zero de um Dashboard em tempo real é sem dúvidas o meu maior feito."
    },
    {
        English: "Contact",
        Portuguese: "Contato"
    },
    {
        English: "Where I from",
        Portuguese: "Localização"
    },
    {
        English: "Professional Exp.",
        Portuguese: "Exp. Profissionais"
    }

];
// Global var :(
var mlrLangInUse;
var mlr = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.dropID, dropID = _c === void 0 ? "languageSelector" : _c, _d = _b.stringAttribute, stringAttribute = _d === void 0 ? "data-mlr-text" : _d, _e = _b.chosenLang, chosenLang = _e === void 0 ? "English" : _e, _f = _b.mLstrings, mLstrings = _f === void 0 ? MLstrings : _f, _g = _b.countryCodes, countryCodes = _g === void 0 ? false : _g, _h = _b.countryCodeData, countryCodeData = _h === void 0 ? [] : _h;
    var root = document.documentElement;
    var listOfLanguages = Object.keys(mLstrings[0]);
    mlrLangInUse = chosenLang;
    (function createMLDrop() {
        var mbPOCControlsLangDrop = document.getElementById(dropID);
        // Reset the menu
        mbPOCControlsLangDrop.innerHTML = "";
        // Now build the options
        listOfLanguages.forEach(function (lang, langidx) {
            var HTMLoption = document.createElement("option");
            HTMLoption.value = lang;
            HTMLoption.textContent = lang;
            mbPOCControlsLangDrop.appendChild(HTMLoption);
            if (lang === chosenLang) {
                mbPOCControlsLangDrop.value = lang;
            }
        });
        mbPOCControlsLangDrop.addEventListener("change", function (e) {
            mlrLangInUse = mbPOCControlsLangDrop[mbPOCControlsLangDrop.selectedIndex].value;
            resolveAllMLStrings();
            // Here we update the 2-digit lang attribute if required
            if (countryCodes === true) {
                if (!Array.isArray(countryCodeData) || !countryCodeData.length) {
                    console.warn("Cannot access strings for language codes");
                    return;
                }
                root.setAttribute("lang", updateCountryCodeOnHTML().code);
            }
        });
    })();
    function updateCountryCodeOnHTML() {
        return countryCodeData.find(function (this2Digit) { return this2Digit.name === mlrLangInUse; });
    }
    function resolveAllMLStrings() {
        var stringsToBeResolved = document.querySelectorAll("[" + stringAttribute + "]");
        stringsToBeResolved.forEach(function (stringToBeResolved) {
            var originaltextContent = stringToBeResolved.textContent;
            var resolvedText = resolveMLString(originaltextContent, mLstrings);
            stringToBeResolved.textContent = resolvedText;
        });
    }
};
function resolveMLString(stringToBeResolved, mLstrings) {
    var matchingStringIndex = mLstrings.find(function (stringObj) {
        // Create an array of the objects values:
        var stringValues = Object.values(stringObj);
        // Now return if we can find that string anywhere in there
        return stringValues.includes(stringToBeResolved);
    });
    if (matchingStringIndex) {
        return matchingStringIndex[mlrLangInUse];
    }
    else {
        // If we don't have a match in our language strings, return the original
        return stringToBeResolved;
    }
}
mlr({
    dropID: "languageSelector",
    stringAttribute: "data-mlr-text",
    chosenLang: "Portuguese",
    mLstrings: MLstrings,
    countryCodes: true,
    countryCodeData: mlCodes
});
