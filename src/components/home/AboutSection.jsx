const personsArray = [
    {
        name: 'Aleksandr Varlamov',
        imageUrl:
            'https://scontent.ftlv1-1.fna.fbcdn.net/v/t39.30808-6/481974788_1849539142249633_5607739068788510444_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=phlQDEe11Q0Q7kNvwFtnzBB&_nc_oc=Adk_QbFO60tjm01Cx_tQ1-crXz34JAxftYglx31P0sR-WSU7B9rMFOmy30kKfSPGmRTtxy3WqC25tIjM_sE4YCPT&_nc_zt=23&_nc_ht=scontent.ftlv1-1.fna&_nc_gid=FBkyg8lYzFJ7yCdz_hLO1A&oh=00_AfSz7lhwxtO3ZU00lZfa3mZm4paixgCwmQgFhsy7uIOS4A&oe=687C461F',
        category: ['Тренер по боксу и фитнесу', 'Массажист'],
    },
    {
        name: 'Natalie Varlamov',
        role: 'Gym',
        imageUrl:
            'https://scontent.ftlv1-1.fna.fbcdn.net/v/t39.30808-6/508181931_3080547255454721_1036102755484361770_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=820g7MoU7-sQ7kNvwHmP4HZ&_nc_oc=AdnDDeqSA2gBXK4yqxmqDh12aEmZ4INl1ziQu1k_8MYpfC-u-K1jNB1B6SUNcXRsryuZDiWLtvF10AofZRSDsCRd&_nc_zt=23&_nc_ht=scontent.ftlv1-1.fna&_nc_gid=2QZB3ufHIVxKez7uk8_QiQ&oh=00_AfSdnBZShuZOAO9KBDyNg21qCXQ4ZisOO-XggrB4NaVrFg&oe=687C23EC',
        category: ['Инструктор Йоги'],
    },
]

export default function AboutSection() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-4xl">
                    <p id={'about'} className="text-base/7 font-semibold text-indigo-600">О нас</p>
                    <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Индивидуальный подход к телу и духу
                    </h2>
                    <p className="mt-6 text-balance text-xl/8 text-gray-700">
                        Мы — команда профессионалов в сфере фитнеса, йоги и восстановления.
                    </p>
                </div>
                <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6">
                    <div className="lg:pr-8">
                        <p className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">Наша миссия</p>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Наша миссия — помочь каждому клиенту обрести здоровье, энергию и внутренний баланс через
                            индивидуальный подход и качественные методики.
                        </p>
                        <ul className="mt-8 text-base/7 text-gray-600">
                            В основе нашей работы:
                            <li>• Сертифицированные инструктора и массажист</li>
                            <li>• Современные методики, проверенные на практике</li>
                            <li>• Гармония силы и баланса</li>
                            <li>• Осознанность и внимательная работа с телом и душой</li>
                        </ul>
                        <p className="mt-8 text-base/7 text-gray-600">
                            Здесь нет шаблонных программ — есть ты, твои цели и наш опыт, который приведёт к реальному
                            результату. Мы не просто тренируем — мы сопровождаем, поддерживаем и вдохновляем.
                        </p>
                    </div>
                    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div
                            className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                            <div
                                className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 overflow-hidden hover:scale-115 duration-300">
                                <img
                                    alt="Парная йога"
                                    src="/images/RNI-Films-IMG-C1518D08-AC0B-4F37-BE7A-F1E1BEE8D020.jpg"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div
                                className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 overflow-hidden hover:scale-115 duration-300">
                                <img
                                    alt="Парная йога"
                                    src="/images/RNI-Films-IMG-46D7EF17-1047-4D59-B79C-63A24261E6FE.jpg"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div
                                className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 overflow-hidden hover:scale-115 duration-300">
                                <img
                                    alt="Парная йога"
                                    src="/images/RNI-Films-IMG-566B44A5-2FE8-49FE-97B5-100B224D8E25.jpg"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div
                                className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 overflow-hidden hover:scale-115 duration-300">
                                <img
                                    alt="Парная йога"
                                    src="/images/RNI-Films-IMG-5206EEA7-513B-4A94-B46C-EA523A5EF0FE.jpg"
                                    className="block size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={"mt-10 lg:mt-0"}>
                        <p className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">Наша команда</p>
                        <ul
                            role="list"
                            className="mt-8 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2"
                        >
                            {personsArray.map((person) => (
                                <PersonCard key={person.name} person={person}/>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

function PersonCard({person}) {
    return (
        <li key={person.name}
            className={"group hover:shadow-sm hover:shadow-gray-500 hover:rounded-2xl relative overflow-hidden hover:p-2 hover:scale-115 duration-300"}>
            <img alt={person.name} src={person.imageUrl}
                 className="aspect-14/13 w-full rounded-2xl object-cover group-hover:scale-105 peer duration-300"/>
            <div className={"grid grid-cols-3"}>
                <div className={"col-span-3"}>
                    <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-black">{person.name}</h3>
                    <p className="text-md text-gray-700">
                        {person.category.join(', ')}
                    </p>
                </div>
            </div>
        </li>
    )
}