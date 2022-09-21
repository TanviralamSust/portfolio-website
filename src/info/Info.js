import self from "../img/self.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"

export let colors = ["#15DB95", "rgb(166,104,255)"];

export const info = {
    firstName: "Tanvir",
    lastName: "Alam",
    initials: "ta",
    position: "a Frontend Developer with Full Stack Expertise",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '💻',
            text: 'Enthusiasm for Javascript Specially React Js, Vue Js and Node Js'
        },
        {
            emoji: '🌎',
            text: 'located in Canada'
        },
        {
            emoji: "💼",
            text: "open to work for any organization in Canada"
        },
        {
            emoji: "📧",
            text: "tanviralam997@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com/codelikeagirl91",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://github.com/TanviralamSust",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/tanvir-alam-927798146/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

    ],
    bio: "Self-motivated Software Engineer with almost 5 years of professional experience in developing, designing, and maintaining frontend applications, mainly in Vue JS(2,3) and React JS.  Besides, I am also experienced with writing Backend API in Node Js, Flask. I am passionate about the software industry and also enthusiastic about UI/UX research based work.",
    skills:
        {
            programingLanguage: ['javascript', 'java', 'C++'],
            frontendTechnology:['react', 'vue', 'html', 'css', 'scss', 'tailwind css', 'responsive design', 'flex', 'nuxt js', 'next js', 'single page application (spa)','android'],
            backendTechnologyDatabase:['nodejs(express js)', 'mongodb', 'graphql', 'aws cloud services'],
            otherSkills: [ 'restful api', 'progressive web app','docker', 'git', 'wcag 2.0(web accessibility)', 'unit testing', 'integration testing)','test driven development (tdd)']
        }
    ,
    researchBio:"is always enthusiastic about research in the area of Human centric design, human computer interaction, user interface and experience focused research. Because I belive an application can not serve its full potential if its not totally understandable to its end user. Due to this I also worked as a reserach assistant at the university of saskatchewan, canada and also at shahjalal university of science and technology, bangladesh.",
    publishedResearch:[
        {
            title: 'An Approach to Design and Develop UX/UI for Smartphone Applications of Minority Ethnic Group," published in TENCON2019.',
            link: 'https://ieeexplore.ieee.org/document/8929623'
        },
        {
            title: 'The Emergence of Polarization and Marginalization in Online Education System of Bangladesh due to COVID-19: Challenges and Remedies. Published in HCI International 2021.',
            link: 'https://link.springer.com/chapter/10.1007%2F978-3-030-78224-5_16'
        },
        {
            title: 'Book chapter in the book entitled "Computationally Intelligent Systems and their Applications" Under Springer. Design and Development of an ICT Intervention for Early Childhood Development in Minority Ethnic Communities in Bangladesh.',
            link: 'https://link.springer.com/chapter/10.1007/978-981-16-0407-2_12'
        },
        {
            title: 'Online Food Delivery (OFD) System: An empirical study of the polarization of consumers during the COVID-19 pandemic',
            link: 'https://link.springer.com/chapter/10.1007/978-981-16-5655-2_38'
        },

    ],
    hobbies: [
        {
            label: 'cooking',
            emoji: '🍕'
        },
        {
            label: 'travelling',
            emoji: '🧳'
        },
        {
            label: 'eating',
            emoji: '🥘'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },

    ],
    portfolio: [
        {
            title: "Quiz Application in React",
            live: "https://leafy-hamster-3ddb51.netlify.app/",
            source: "https://github.com/TanviralamSust/Quiz-Application-React",
            image: mock1
        },
        {
            title: "Bkash Business portal",
            live: "https://business.bkash.com/",
            source: "Private Repo",
            image: mock2
        },
        {
            title: "Bkash Payment Gateway",
            live: "https://developer.bka.sh/",
            source: "Private Repo",
            image: mock3
        },
        {
            title: "HCI Lab , SUST",
            source: "https://github.com/TanviralamSust/hci-lab-sust-frontend",
            image: mock4
        },
    ]
}
