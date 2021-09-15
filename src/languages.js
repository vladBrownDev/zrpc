const lang = {
    ukr: {
        header : {
            fBut :"Головна",
            secBut :"Лікарі",
            thirdBut:"Послуги",
            fourthBut:"Відгуки",
            fifthBut:"Контакти" 
        },
        main : {
            h1:"Абдомінальне хірургічне відділення",
            facts: [
                "У відділенні  надається лікування пацієнтам  з новоутвореннями шлунково-кишкового тракту, підшлункової залози, печінки, жовчовивідних шляхів, за очеревинного простору.",
                "Щороку провідними фахівцями відділення проводиться понад 450 втручань різного ступеню складності.",
                "Оперативні втручання в абдомінальному відділенні проводяться згідно протоколу ERAS, що дозволяє зменшити післяопераційний ліжкодень та пришвидшити одужання пацієнта.",
                "Операційна абдомінального відділення  оснащена сучасними анестезіологічним обладнанням, лапароскопічною апаратурою.",
                "В роботі абдомінального відділення суттєва увага приділяєтеся інфекційному контролю."
            ],
            but:"Зв’язатися з нами"
        },
        doctors : {
            h1:"Лікарі",
            but:"Записатися на прийом",
            docList: {
                zghurskyi : {
                    name:"Згурський Андрій Іванович",
                    job:"— хірург-онколог вищої категорії, завідувач відділенням.",
                    skillsHead : "Ключові навички:",
                    skills : [
                        "Повна вища медична освіта (КСМУ)",
                        "Практичний досвід з 1995 року",
                        "Застосування сучасних методик лікування",
                        "Відвідування профільних конференцій",
                        "Управління персоналом"
                    ],
                    description: "Лікар Згурський А.І. проводить профілактичні огляди, діагностику та лікування пухлин шлунка, прямої та товстої кишки, підшлункової залози, сечового міхура, печінки, м'якої тканини, шкіри. Операції проводить як лапаротоміческім шляхом так і лапароскопічним.",
                    button : "Записатися на прийом"
                },
                sidorenko : {
                    name:"Сидоренко Дмитро Леонідович",
                    job:"— хірург-онколог вищої категорії",
                    skillsHead : "Ключові навички:",
                    skills : [
                        "Повна вища медична освіта (ЗДМУ)",
                        "Практичний досвід з 2000 року",
                        "Лапоротомія, лапароскопія",
                        "Відвідування профільних конференцій",
                        "Застосування сучасних методик лікування"
                    ],
                    description: "Лікар Сидоренко Д.Л. проводить профілактичні огляди, діагностику та лікування травм. Згідно цього обирає ефективну методику лікування для кожного пацієнта окремо.",
                    button : "Записатися на прийом"
                },
                solomka: {
                    name:"Соломка Ростислав Васильович",
                    job:"— хірург-онколог вищої категорії",
                    skillsHead : "Ключові навички:",
                    skills : [
                        "Повна вища медична освіта (ЗДМУ)",
                        "Практичний досвід з 1999 року",
                        "Радіочастотна термоабляція",
                        "Відвідування профільних конференцій",
                        "Застосування сучасних методик лікування"
                    ],
                    description: "Лікар Соломка Р.В. проводить профілактичні огляди, радіочастотну термоабляції при пухлинах печінки, нирок (РЧТА) та інші методики лікування.",
                    button : "Записатися на прийом"
                }
            }
        },
        servises : {
            h1:"Наші послуги",
            desc:"Абдомінальне відділення забезпечено необхідним устаткуванням для проведення діагностики та лікування. У нас Ви можете скористатися наступними послугами:",
            serv1:"Лапаротомія",
            serv1Desk:"Хірургічний розріз черевної стінки для проведення операцій в черевній порожнині для отримання доступу до органів черевної порожнини. Це традиційна хірургічна методика, яка буває необхідна в ряді випадків, коли малоінвазивних методик виявляється недостатньо. ",
            serv2:"Лапароскопія",
            serv2Desk:"Сучасний малотравматичний метод проведення хірургічних операцій та обстежень органів черевної порожнини. Для лапароскопії використовують спеціальні інструменти і відеокамеру з оптичною системою, які вводяться через розрізи в черевну порожнину.",
            serv3:"Радіочастотна термоабляція",
            serv3Desk:"Метод мініінвазивного руйнування пухлин солідних органів - печінки, нирок, легенів, м'яких тканин. Руйнування пухлин за допомогою радіочастотної термоабляції є ефективним, швидким, безпечним і безболісним методом лікування.",
            serv4:"Гастроскопія",
            serv4Desk:"Ендоскопічне дослідження верхніх відділів шлунково-кишкового тракту, до яких відносяться стравохід, шлунок, дванадцятипала кишка. Гастроскопія проводиться за допомогою спеціального ендоскопічного обладнання - гастроскопа.",
            serv5:"Рентгеноскопія",
            serv5Desk:"Один з методів діагностики різних захворювань і функціональних розладів шлунково-кишкового тракту. Головною перевагою перед рентгенографією є факт дослідження в реальному масштабі часу. Це дозволяє оцінити не тільки структуру органу, а й його зміщуваність, скоротність або розтяжність, проходження контрастної речовини, наповнюваність.",
            serv6:"Ректороманоскопія",
            serv6Desk:"За допомогою ректороманоскопії можна виявляти різні ознаки проктологічних захворювань, включаючи запальні процеси слизової оболонки, наявність ерозій, виразок і пухлин, вивчати стан судин, визначати тонус і рухові функції кишки, оцінювати еластичність, цілісність і рельєф слизової оболонки, діагностувати новоутворення.",
            serv7:"",
            serv7Desk:"",
        },
        reviews : {
            h1:"Відгуки",
            read: "Читати всі відгуки"
        },
        footer : {
            phone:"Телефон:",
            mail:"Пошта",
            adress:"Адреса:",
            adressDesk:"вул. Культурна, 177А, Запоріжжя, Запорізька область"
        },
        patientReviews: {
            partient1: {
                name: "Оксана Март",
                position: "Пацієнт",
                review1: "Перебувала на стаціонарному лікування у ЗРПЦ у абдомінальному відділенні. Залишились тільки" +
                "позитивні емоції.",
                review1Small: "Перебувала на стаціонарному лікування у ЗРПЦ у абдомінальному відділенні.",
                review2: "Весь медичний персонал – професіонали свого діла. Завжди вчасно виконують" +
                "назначення лікарів.",
                review2Small: "Залишились тільки позитивні емоції."
            },
            partient2: {
                name: "В'ячеслав Власов",
                position: "Пацієнт",
                review1: "Лежав в абдомінальному відділенні протягом двох тижнів. Потребував хірургічного лікування.",
                review2: "Переживання були, однозначно, але після спілкування з лікарем всі сумніви розвіялися. Проведеною операцією залишився задоволений.",
                review1Small: "Лежав в абдомінальному відділенні протягом двох тижнів. Потребував хірургічного лікування.",
                review2Small: "Переживання були, однозначно, але після спілкування з лікарем всі сумніви розвіялися."
            },
            partient3: {
                name: "Наталя Пілюк",
                position: "Пацієнт",
                review1: "У перший раз перебувала на стаціонарному лікуванні в абдомінальному відділенні. Лікарі-фахівці своєї справи. Проведеною операцією залишилася задоволена.",
                review2: "Всім величезне спасибі, за те що робите нас здоровіше!",
                review1Small: "Лікарі-фахівці своєї справи. Проведеною операцією залишилася задоволена.",
                review2Small: "Всім величезне спасибі, за те що робите нас здоровіше!."
            }
        }
    },
    rus : {
        header : {
            fBut :"Главная",
            secBut :"Врачи",
            thirdBut:"Наши услуги",
            fourthBut:"Отзывы",
            fifthBut:"Контакты" 
        },
        main : {
            h1:"Абдоминальное хирургическое отделение",
            facts: [
                "В отделении предоставляется лечение пациентам с новообразованиями желудочно-кишечного тракта, поджелудочной железы, печени, желчевыводящих путей, забрюшинного пространства.",
                "Ежегодно ведущими специалистами отделения проводится более 450 вмешательств различной степени сложности.",
                "Оперативные вмешательства в абдоминальном отделении проводятся согласно протоколу ERAS, что позволяет уменьшить послеоперационный койкодень и ускорить выздоровление пациента.",
                "Операционная абдоминального отделения оснащена современными анестезиологическим оборудованием, лапароскопической аппаратурой.",
                "В работе абдоминального отделения пристольное внимание уделяется инфекционном контроля."
            ],
            but:"Связаться с нами"
        },
        doctors : {
            h1:"Врачи",
            but:"Записаться на прием",
            docList: {
                zghurskyi : {
                    name:"Згурский Андрей Иванович",
                    job:"- хирург онколог высшей категории, управляющий отделением",
                    skillsHead : "Ключевые навыки:",
                    skills : [
                        "Полное высшее образование (КСМУ)",
                        "Практический опыт с 1995 року",
                        "Применение современных методик лечения",
                        "Посещение профильных конференций",
                        "Управление персоналом"
                    ],
                    description: "Врач Згурский А.И. проводит профилактические осмотры, диагностику и лечение опухолей желудка, прямой и толстой кишки, поджелудочной железы, желчного пузыря, печени, мягких тканей, кожи. Операции выполняются как лапаротомическим доступом так и лапароскопически.",
                    button : "Записаться на приём"
                },
                sidorenko : {
                    name:"Сидоренко Дмитрий Леонидович",
                    job:"— хирург онколог высшей категории",
                    skillsHead : "Ключевые навыки:",
                    skills : [
                        "Полное высшее образование (ЗДМУ)",
                        "Практический опыт с 2000 року",
                        "Лапоротомия, лапароскопия",
                        "Посещение профильных конференций",
                        "Применение современных методик лечения"
                    ],
                    description: "Врач Сидоренко Д.Л. проводит профилактические осмотры, диагностику и лечение травм. Согласно этому выбирает эффективную методику лечения для каждого пациента отдельно.",
                    button : "Записаться на приём"
                },
                solomka: {
                    name:"Соломка Ростислав Васильович",
                    job:"— хирург онколог высшей категории",
                    skillsHead : "Ключевые навыки:",
                    skills : [
                        "Полное высшее образование (ЗДМУ)",
                        "Практический опыт с 1999 року",
                        "Радиочастотная термоабляция (РЧТА)",
                        "Посещение профильных конференций",
                        "Применение современных методик лечения"
                    ],
                    description: "Врач Соломка Р.В. проводит профилактические осмотры, выполняет радиочастотную термоабляцию при опухолях печени, почек (РЧТА) и другие методики лечения.",
                    button : "Записаться на приём"
                }
            }
        },
        servises : {
            h1:"Наши услуги",
            desc:"Абдоминальное отделение обеспечено необходимым оборудованием для проведения диагностики и лечения. У нас Вы можете воспользоваться следующими услугами:",
            serv1:"Лапоротомия",
            serv1Desk:"Хирургический разрез брюшной стенки для проведения операций в брюшной полости для получения доступа к органам брюшной полости. Это традиционная хирургическая методика, которая бывает необходима в ряде случаев, когда малоинвазивных методик оказывается недостаточно.",
            serv2:"Лапороскопия",
            serv2Desk:"Современный малотравматичный метод проведения хирургических операций и обследований органов брюшной полости. Для лапароскопии используют специальные инструменты и видеокамеру с оптической системой, которые вводятся через разрезы в брюшную полость.",
            serv3:"Радиоастотная термоабляция",
            serv3Desk:"Метод миниинвазивного разрушения опухолей солидных органов – печени, почек, легких, языка, мягких тканей. Разрушение опухолей с помощью радиочастотной термоабляции является эффективным, быстрым, безопасным и безболезненным методом лечения.",
            serv4:"Гастроскопия",
            serv4Desk:"Эндоскопическое исследование верхних отделов желудочно-кишечного тракта, к которым относятся пищевод, желудок, двенадцатиперстная кишка. Гастроскопия проводится с помощью специального эндоскопического оборудования – гастроскопа",
            serv5:"Рентгеноскопия",
            serv5Desk:"Один из методов диагностики различных заболеваний и функциональных расстройств желудочно-кишечного тракта. Главным преимуществом перед рентгенографией является факт исследования в реальном масштабе времени. Это позволяет оценить не только структуру органа, но и его смещаемость, сократимость или растяжимость, прохождение контрастного вещества, наполняемость.",
            serv6:"Ректороманоскопия",
            serv6Desk:"С помощью ректороманоскопии можно выявлять различные признаки проктологических заболеваний, включая воспалительные процессы слизистой оболочки, наличие эрозий, язв и опухолей, изучать состояние сосудов, определять тонус и двигательные функции кишки, оценивать эластичность, целостность и рельеф слизистой оболочки, диагностировать новообразования.",
            serv7:"",
            serv7Desk:"",
        },
        reviews : {
            h1:"Отзывы",
            read: "Читать все отзывы"
        },
        footer : {
            mail:"Почта:",
            adress:"Адрес:",
            adressDesk:"ул. Культурная, 177А, Запорожье, Запорожская область"
        },
        patientReviews: {
            partient1: {
                name: "Оксана Март",
                position: "Пациент",
                review1: "Находилась на стационарном лечении в ЗРПЦ в абдоминальном отделении. Остались только " +
                "положительные эмоции.",
                review2: "Весь медицинский персонал - профессионалы своего дела. Всегда вовремя выполняют "+
                "назначения врачей."
            },
            partient2: {
                name: "Вячеслав Власов",
                position: "Пациент",
                review1: "Лежал в абдоминальном отделении на протяжении двух недель. Нуждался в хирургическом лечении.",
                review2: "Переживания были, однозначно, но после общения с врачём все сомнения развеялись. Проведенной операцией остался доволен."
            },
            partient3: {
                name: "Наталья Пилюк",
                position: "Пациент",
                review1: "В первый раз находилась на стационарном лечении в абдоминальном отделении. Врачи-специалисты своего дела. Проведенной операцией осталась довольна.",
                review2: "Всем огромное спасибо, за то что делаете нас здоровее!"
            }
        }
    }
}

function language () {
    return (lang)
}

export default language