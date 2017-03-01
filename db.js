g_data = {
    employees: [
        {
            name: "саратокин алексей",
            title: "инженер",
            certNumber: 3,
            electroSafetyGroup: 42,
            briefingDate: "01.01.2016",
            examineData: "01.01.2016",
            role: "водопроводчик", //надо вынести в указание
            status: "активен",
            skud: "активен",
            geoCoord: "https://www.google.ru/maps/@57.0002421,60.4640892,315m/data=!3m1!1e3?hl=en",

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
            role: "электрик", //надо вынести в указание
            status: "активен",
            skud: "активен",
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
            role: "электрик", //надо вынести в указание
            status: "активен",
            skud: "активен",
            geoCoord: "https://www.google.ru/maps/@57.0002421,60.4640892,315m/data=!3m1!1e3?hl=en",

            orgId: 2,
            dirId: 2

        }
    ],
    organizations: [
        {
            id: 1,
            name: "google",
            contractStatus: "активен"

        },
        {
            id: 2,
            name: "gooapple",
            contractStatus: "активен"
        }
    ],
    directives: [
        {
            id: 1,
            name: "Указания Дитсманн ТМО ОПФ газоопасные",
            contractNumber: "23424",
            path:"docs/Указания Дитсманн ТМО ОПФ газоопасные (Пащенко) 6060.pdf"
        },
        {
            id: 2,
            name: "Указания ПТМ Энерго ТМО",
            contractNumber: "134",
            path:"docs/Указания ПТМ Энерго ТМО (Куваев) 6425.pdf"
        }
    ]
}