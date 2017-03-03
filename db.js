g_data = {
    employees: [
        {
            name: "Эмануэле Вольпе",
            title: "инженер",
            certNumber: 1,
            electroSafetyGroup: 4,
            briefingDate: "01.01.2016",
            examineData: "01.01.2016",
            role: "член жюри", //надо вынести в указание
            status: "активен",
            skud: "активен",
            geoCoord: '<iframe src="https://www.google.com/maps/d/embed?mid=1T0_OyvOGQz4t64iGL2qLHC2KkuY" width="400" height="300"></iframe>',

            orgId: 1,
            dirId: 1
        },
        {
            name: "саратокин алексей",
            title: "инженер",
            certNumber: 3,
            electroSafetyGroup: 4,
            briefingDate: "01.01.2016",
            examineData: "01.01.2016",
            role: "наблюдающий", //надо вынести в указание
            status: "активен",
            skud: "активен",
            geoCoord: '<iframe src="https://www.google.com/maps/d/embed?mid=1p-NxKdAvS0ivih0yFT3dmPWWWHU" width="400" height="300"></iframe>',

            orgId: 1,
            dirId: 1
        },
        {
            name: "мишин дмитрий",
            title: "инженер",
            certNumber: 1233,
            electroSafetyGroup: 4,
            briefingDate: "02.02.2017",
            examineData: "02.02.2017",
            role: "член бригады", //надо вынести в указание
            status: "активен",
            skud: "не активен",
            geoCoord: null,

            orgId: 2,
            dirId: 1
        },
        {
            name: "сотников сергей",
            title: "инженер",
            certNumber: 1233,
            electroSafetyGroup: 4,
            briefingDate: "02.02.2017",
            examineData: "02.02.2017",
            role: "производитель работ", //надо вынести в указание
            status: "активен",
            skud: "активен",
            geoCoord: '<iframe src="https://www.google.com/maps/d/embed?mid=1p-NxKdAvS0ivih0yFT3dmPWWWHU" width="400" height="300"></iframe>',

            orgId: 2,
            dirId: 2

        },
        {
            name: "Бухарина Оксана",
            title: "инженер",
            certNumber: 232,
            electroSafetyGroup: 4,
            briefingDate: "02.02.2017",
            examineData: "02.02.2017",
            role: "руководитель", //надо вынести в указание
            status: "активен",
            skud: "активен",
            geoCoord: '<iframe src="https://www.google.com/maps/d/embed?mid=1p-NxKdAvS0ivih0yFT3dmPWWWHU" width="400" height="300"></iframe>',

            orgId: 2,
            dirId: 3

        },
        {
            name: "Самарев Александр",
            title: "инженер",
            certNumber: 9778,
            electroSafetyGroup: 2,
            briefingDate: "02.02.2017",
            examineData: "02.02.2017",
            role: "наблюдающий", //надо вынести в указание
            status: "активен",
            skud: "активен",
            geoCoord: '<iframe src="https://www.google.com/maps/d/embed?mid=1p-NxKdAvS0ivih0yFT3dmPWWWHU" width="400" height="300"></iframe>',

            orgId: 2,
            dirId: 3

        },
        {
            name: "Хохлов Сергей",
            title: "инженер",
            certNumber: 645857,
            electroSafetyGroup: 2,
            briefingDate: "02.02.2017",
            examineData: "02.02.2017",
            role: "член бригады", //надо вынести в указание
            status: "активен",
            skud: "активен",
            geoCoord: '<iframe src="https://www.google.com/maps/d/embed?mid=1p-NxKdAvS0ivih0yFT3dmPWWWHU" width="400" height="300"></iframe>',

            orgId: 2,
            dirId: 3

        },
        {
            name: "Иванов Иван",
            title: "инженер",
            certNumber: 534,
            electroSafetyGroup: 2,
            briefingDate: "02.02.2017",
            examineData: "02.02.2017",
            role: "производитель работ", //надо вынести в указание
            status: "активен",
            skud: "активен",
            geoCoord: '<iframe src="https://www.google.com/maps/d/embed?mid=1p-NxKdAvS0ivih0yFT3dmPWWWHU" width="400" height="300"></iframe>',

            orgId: 2,
            dirId: 3

        }
    ],
    organizations: [
        {
            id: 1,
            name: "Дитсманн",
            contractStatus: "активен"

        },
        {
            id: 2,
            name: "ПТМ Энерго",
            contractStatus: "активен"
        },
        {
            id: 3,
            name: "Энергостройкомплект",
            contractStatus: "активен"
        }
    ],
    directives: [
        {
            id: 1,
            name: "Указания Дитсманн ТМО ОПФ газоопасные",
            contractNumber: "23424",
            path: "docs/Указания Дитсманн ТМО ОПФ газоопасные (Пащенко) 6060.pdf"
        },
        {
            id: 2,
            name: "Указания ПТМ Энерго ТМО",
            contractNumber: "134",
            path: "docs/Указания ПТМ Энерго ТМО (Куваев) 6425.pdf"
        },
        {
            id: 3,
            name: "Указания Энергостройкомплект Огневые",
            contractNumber: "9789",
            path: "docs/Указания Энергостройкомплект-К ОПФ+огневые (Иванов) 0186.pdf"
        }
    ]
}