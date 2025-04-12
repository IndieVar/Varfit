export default function AboutSection() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-4xl">
                    <p id={'about'} className="text-base/7 font-semibold text-indigo-600">О нас</p>
                    <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Элитный подход к телу и духу
                    </h1>
                    <p className="mt-6 text-balance text-xl/8 text-gray-700">
                        Мы — команда профессионалов в сфере фитнеса, йоги и восстановления.
                    </p>
                </div>
                <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                    <div className="lg:pr-8">
                        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">Наша миссия</h2>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Наша миссия — помочь каждому клиенту обрести здоровье, энергию и внутренний баланс через индивидуальный подход и качественные методики.
                        </p>
                        <ul className="mt-8 text-base/7 text-gray-600">
                            В основе нашей работы:
                            {/*<li>•	Более 10 лет практики</li>*/}
                            <li>•	Сертифицированные тренеры и массажисты</li>
                            <li>•	Современные методики, проверенные на практике</li>
                            <li>•	Гармония силы и мягкости</li>
                            <li>•	Осознанность и внимательная работа с телом</li>
                        </ul>
                        <p className="mt-8 text-base/7 text-gray-600">
                            Здесь нет шаблонных программ — есть ты, твои цели и наш опыт, который приведёт к реальному результату. Мы не просто тренируем — мы сопровождаем, поддерживаем и вдохновляем.
                        </p>
                    </div>
                    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    {/*<div className="max-lg:mt-16 lg:col-span-1">*/}
                    {/*    <p className="text-base/7 font-semibold text-gray-500">The numbers</p>*/}
                    {/*    <hr className="mt-6 border-t border-gray-200" />*/}
                    {/*    <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">*/}
                    {/*        <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">*/}
                    {/*            <dt className="text-sm/6 text-gray-600">Raised</dt>*/}
                    {/*            <dd className="order-first text-6xl font-semibold tracking-tight">*/}
                    {/*                $<span>150</span>M*/}
                    {/*            </dd>*/}
                    {/*        </div>*/}
                    {/*        <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">*/}
                    {/*            <dt className="text-sm/6 text-gray-600">Companies</dt>*/}
                    {/*            <dd className="order-first text-6xl font-semibold tracking-tight">*/}
                    {/*                <span>30</span>K*/}
                    {/*            </dd>*/}
                    {/*        </div>*/}
                    {/*        <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">*/}
                    {/*            <dt className="text-sm/6 text-gray-600">Deals Closed</dt>*/}
                    {/*            <dd className="order-first text-6xl font-semibold tracking-tight">*/}
                    {/*                <span>1.5</span>M*/}
                    {/*            </dd>*/}
                    {/*        </div>*/}
                    {/*        <div className="flex flex-col gap-y-2">*/}
                    {/*            <dt className="text-sm/6 text-gray-600">Leads Generated</dt>*/}
                    {/*            <dd className="order-first text-6xl font-semibold tracking-tight">*/}
                    {/*                <span>200</span>M*/}
                    {/*            </dd>*/}
                    {/*        </div>*/}
                    {/*    </dl>*/}
                    {/*</div>*/}
                </section>
            </div>
        </div>
    )
}
