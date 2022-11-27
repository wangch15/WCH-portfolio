const workApp = Vue.createApp({
    data() {
        return {
            worksList: [
                {
                    title: '森五七行館形象網站',
                    category: 'WEB DEVELOP',
                    content: 'UI / UX設計, 前端頁面切版, 內含最新消息新增功能。開發工具 : HTML, CSS, JavaScript, Laravel',
                    href: 'https://www.shen57.com/',
                    img: 'background-image: url(./img/shen57-mockup@2x.jpg) ;'
                }, {
                    title: 'Microsoft微軟首頁仿作',
                    category: 'WEB PRACTISE',
                    content: '前端頁面切版練習 / RWD',
                    href: 'https://wangch15.github.io/microsoft-for-practise/',
                    img: 'background-image: url(./img/microsoft-mockup-samll-1@2x.png) ;'
                }, {
                    title: 'Youtube影片頁面仿切',
                    category: 'WEB PRACTISE',
                    content: '前端頁面切版練習 / RWD',
                    href: 'https://wangch15.github.io/Youtube-for-practise/',
                    img: 'background-image: url(./img/youtube-mockup-samll-1@2x.png) ;'
                }
            ],
        }
    }, methods: {

    }, beforeMount() {
        // fetch('../json/works.json')
        //     .then(result => {
        //         return result.json();
        //     })
        //     .then(data => {
        //         this.worksList = data
        //     })
    }
    , mounted() {

    },
})

workApp.mount('#works')


const aboutApp = Vue.createApp({
    data() {
        return {
            skillList: [
                {
                    title: 'HTML, CSS',
                    score: 85,
                    bar: 'width: 85%;'
                },
                {
                    title: 'JavaScript',
                    score: 85,
                    bar: 'width:85%;'
                },
                {
                    title: 'Laravel',
                    score: 75,
                    bar: 'width:75%;'
                },
                {
                    title: 'illustrator',
                    score: 90,
                    bar: 'width:90%;'
                },
                {
                    title: 'Photoshop',
                    score: 90,
                    bar: 'width:90%;'
                },
                {
                    title: 'Painting',
                    score: 85,
                    bar: 'width:85%;'
                }
            ]
        }
    }, methods: {

    }, beforeMount() {
        // fetch('../json/skills.json')
        //     .then(result => {
        //         return result.json();
        //     })
        //     .then(data => {
        //         this.skillList = data
        //     })
    }

    , mounted() {

    },
}).mount('#aboutMe')

