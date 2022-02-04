(function () {
    const things = [
        {
            id: 16,
            image: 'img/news/03.02.2022/photo (5).jpg',
            data: '3 лютого 2022',
            text: '👆Щорічно 28 січня відзначають Міжнародний день захисту персональних даних з метою сформувати розуміння про необхідність захисту недоторканності приватного життя в світі без кордонів.<br><br> У цей день наша громадська організація провела...',
            fb: 'https://www.facebook.com/101917654608253/posts/507631500703531/',
            teleg: 'https://t.me/ngodim/394',
            inst: 'https://www.instagram.com/p/CZhvuJULQPU/?utm_source=ig_web_copy_link'
        },
        {
                
            id: 15,
            image: 'img/news/25.08.2021/photo (5).jpg',
            data: '25 серпня 2021',
            text: 'Слава Україні!💙💛<br> Вітаємо всіх з тридцятиріччям нашої неньки! Вчора ми мали можливість долучитися до святкування Дня Незалежності в смт Добротвір.<br> Наша команда доклала...',
            fb: 'https://www.facebook.com/101917654608253/posts/407189157414433/',
            teleg: 'https://t.me/ngodim/378',
            inst: 'https://www.instagram.com/p/CTAozUqj9G7/?utm_source=ig_web_copy_link'
        
        },
        {
                
            id: 14,
            image: 'img/news/21.08.2021/photo (1).jpg',
            data: '21 серпня 2021',
            text: 'Святкуйте 30-річчя Незалежності України разом з нами!...',
            fb: 'https://www.facebook.com/101917654608253/posts/404149014385114/',
            teleg: 'https://t.me/ngodim/347',
            inst: 'https://www.instagram.com/p/CSz4LxfDBeq/?utm_source=ig_web_copy_link'
        
        },
        {
                
            id: 13,
            image: 'img/news/05.07.2021/photo (2).jpg',
            data: '5 липня 2021',
            text: "Ну от і настав фінальний день нашого табору 'Веселі канікули з Богом'😥<br><br> Прощатися з дітьми нам завжди важко, але наступного року ми обов'язково зустрінемося знову😍<br><br> Останній день пройшов не менш цікаво, як інші. На згадку аніматори подарували дітям...",
            fb: 'https://www.facebook.com/101917654608253/posts/374718787328137/',
            teleg: 'https://t.me/ngodim/337',
            inst: 'https://www.instagram.com/p/CQ9SQ54MyaQ/?utm_source=ig_web_copy_link'
        
        },
        {
                
            id: 12,
            image: 'img/news/04.07.2021/photo (5).jpg',
            data: '4 липня 2021',
            text: 'Шостий день позаду. На жаль, день прощання все ближче.<br> Погода мінлива, але це не завадило нам розважитися. Ранок за традиції розпочався із катехизації. Діти працювали в командах, грали ігри не лише на швидкість...',
            fb: 'https://www.facebook.com/101917654608253/posts/373348620798487/',
            teleg: 'https://t.me/ngodim/313',
            inst: 'https://www.instagram.com/p/CQ3qlMDjHsO/?utm_source=ig_web_copy_link'
        
        },
        {
                
            id: 11,
            image: 'img/news/03.07.2021/photo (3).jpg',
            data: '3 липня 2021',
            text: "На щастя, цьогоріч нам не довелося прощатися з дітками на п'ятий день табору, адже табір триватиме ще два дні! Ми всі дуже раді цьому!<br> Сьогодні ми все ж провели гру 'Квест', переможцем стала команда...",
            fb: 'https://www.facebook.com/101917654608253/posts/372868410846508/',
            teleg: 'https://t.me/ngodim/289',
            inst: 'https://www.instagram.com/p/CQ12vO2DxbP/?utm_source=ig_web_copy_link'
        
        },
        {
                
            id: 10,
            image: 'img/news/02.07.2021/photo (2).jpg',
            data: '2 липня 2021',
            text: 'Усім привіт! Ось уже позаду 4 дні нашого денного табору "Веселі канікули з Богом". Незважаючи на дощ ми все одно активно, а головне незабутньо проводимо час разом із нашими командами.<br> Третього дня ми багато бігали, танцювали, а також проводили...',
            fb: 'https://www.facebook.com/101917654608253/posts/372224597577556/',
            teleg: 'https://t.me/ngodim/207',
            inst: 'https://www.instagram.com/p/CQzXk8dsTqQ/?utm_source=ig_web_copy_link'
        
        },
        {
                
            id: 9,
            image: 'img/news/29.06.2021/photo (4).jpg',
            data: '29 червня 2021',
            text: 'Другий день нашого денного табору "Веселі канікули з Богом" розпочали з активної руханки🤸‍♂️<br><br> Розвивали дітей за допомогою інтерактивної гри...',
            fb: 'https://www.facebook.com/101917654608253/posts/370901807709835/',
            teleg: 'https://t.me/ngodim/144',
            inst: 'https://www.instagram.com/p/CQt6JiesQSg/?utm_source=ig_web_copy_link'
        
        },
        {
                
            id: 8,
            image: 'img/news/28.06.2021/photo (2).jpg',
            data: '28 червня 2021',
            text: 'Урааа🤗<br> Сьогодні розпочався довоочікуваний денний табір  "Веселі канікули з Богом"🎉🎉🎉<br><br> За традицією в перший день ми...',
            fb: 'https://www.facebook.com/101917654608253/posts/370247497775266/',
            teleg: 'https://t.me/ngodim/104',
            inst: 'https://www.instagram.com/p/CQrQ4RLn4w8/?utm_source=ig_web_copy_link'
        
        },
        {
                
            id: 7,
            image: 'img/news/08.06.2021/photo (1).png',
            data: '8 червня 2021',
            text: 'Юхуу!🥳🥳🥳<br><br> Ось і настало довгоочікуване літо! А це означає, що табір "Веселі канікули з Богом"...',
            fb: 'https://www.facebook.com/101917654608253/posts/358177415648941/',
            teleg: 'https://t.me/ngodim/28',
            inst: 'https://www.instagram.com/p/CP3rqyLDwrc/?utm_source=ig_web_copy_link'
        
        },
        {
                
            id: 6,
            image: 'img/news/12.05.2021/photo (1).png',
            data: '12 травня 2021',
            text: 'Якщо ти активний, ініціативний, бажаєш розвиватися і отримувати від цього задоволення. Ми чекаємо на тебе!<br><br> Запрошуємо молодь...',
            fb: 'https://www.facebook.com/101917654608253/posts/341657600634256/',
            teleg: 'https://t.me/ngodim/27',
            inst: 'https://www.instagram.com/p/COyF3YGn6Z3/?utm_source=ig_web_copy_link'
        
        },
        {
                
            id: 5,
            image: 'img/news/22.12.2020/photo (2).jpg',
            data: '22 грудня 2020',
            text: 'За традицією і цього року ми подарували дітям веселий та чарівний настрій у день Св. Миколая...',
            fb: 'https://www.facebook.com/101917654608253/posts/254751805991503/',
            teleg: 'https://t.me/ngodim/20',
            inst: 'https://www.instagram.com/p/CJGwopdnpxv/?utm_source=ig_web_copy_link'
        
        },
        {
                
            id: 4,
            image: 'img/news/10.06.2020/photo (1).jpg',
            data: '10 червня 2020',
            text: 'Усім привіт! Хочемо повідомити Вам, що, на превеликий жаль, цього літа дитячий табір "Веселі канікули з Богом" при бібліотеці ім. В. Петраха, не відбудеться. Причиною цього є...',
            fb: 'https://www.facebook.com/101917654608253/posts/184101069723244/',
            teleg: 'https://t.me/ngodim/19',
            inst: 'https://www.instagram.com/p/CBQwTUfnlaZ/?utm_source=ig_web_copy_link'
        
        },
        {
                
            id: 3,
            image: 'img/news/29.12.2019/photo (3).jpg',
            data: '29 грудня 2019',
            text: 'Вчора 28.12.19р наша організація приєдналася до благодійної справи, а саме: поїздки в Сасівський дитячий будинок разом із...',
            fb: 'https://www.facebook.com/101917654608253/posts/132604088206276/',
            teleg: 'https://t.me/ngodim/9',
            inst: 'https://www.instagram.com/p/B6qtL0YHeir/?utm_source=ig_web_copy_link'
        
        },
        {
                
            id: 2,
            image: 'img/news/22.12.2019/photo (1).jpg',
            data: '22 грудня 2019',
            text: 'Вітаємо всіх з Днем святого Миколая. Це найказковіше свято з-поміж усіх, адже в цей день стається справжнє диво. Вчора ми разом з керівниками бібліотеки ім. В. Петраха провели...',
            fb: 'https://www.facebook.com/101917654608253/posts/129863085147043/',
            teleg: 'https://t.me/ngodim/4',
            inst: 'https://www.instagram.com/p/B6Y6L7CHb-a/?utm_source=ig_web_copy_link'
        
        },
        {
                
            id: 1,
            image: 'img/news/07.12.2019/photo (1).jpg',
            data: '7 грудня 2019',
            text: 'Всім привіт! Думаю, що усі знають, що кожного року у бібліотеці ім. В. Петраха відбувається табір "Веселі канікули з Богом". Ми, молодь Добротвора, беремо активну участь...',
            fb: 'https://https://www.facebook.com/101917654608253/posts/123454939121191/',
            teleg: 'https://t.me/ngodim/3',
            inst: 'https://www.instagram.com/p/B5xVKLpHEcg/?utm_source=ig_web_copy_link'
        
        },
    ];

    function renderBlock(things) {
        const thingsContainer = document.querySelector('.news');
        for (const thing of things) {
            thingsContainer.innerHTML += `
            
            <div class="news-block">
                <div class="img-preview">
                    <img src="${thing.image}" alt="Фото новини">
                </div>
                <div class="description">
                    <div class="news-data">
                        <h5><u>${thing.data}</u></h5>
                    </div>
                    <div class="news-text">
                        <h3>${thing.text}</h3>
                    </div>
                    <a href="#">Читати далі</a>
                    <div class="news-follow">
                        <a href="${thing.fb}" target="_blank"><img src="img/header/facebook.png"
                                alt="Facebook"></a>
                        <a href="${thing.teleg}" target="_blank"><img src="img/header/telegram.png"
                                alt="Telegram"></a>
                        <a href="${thing.inst}" target="_blank"><img
                                src="img/header/instagram.png" alt="Instagram"></a>
                    </div>
                </div>
            </div>
            <hr>
            `
        }
    }
    renderBlock(things);
})();