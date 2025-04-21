import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import {FiInstagram} from "react-icons/fi";

export default function ContactsSection() {
    return (
        <div className="relative isolate bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                            <svg
                                aria-hidden="true"
                                className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                            >
                                <defs>
                                    <pattern
                                        x="100%"
                                        y={-1}
                                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                        width={200}
                                        height={200}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                                    </pattern>
                                </defs>
                                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                </svg>
                                <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
                            </svg>
                        </div>
                        <p id={'contacts'} className="text-base/7 font-semibold text-indigo-600">Контакты</p>
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Хочешь начать?
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            Задай вопрос, запишись на пробную тренировку или просто напиши — мы на связи.
                        </p>
                        <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    Ashdod, Israel
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href="tel:+972504569811" className="hover:text-gray-900">
                                        +972 50 456 98 11
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href="mailto:hello@example.com" className="hover:text-gray-900">
                                        aleksvarlaam@gmail.com
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <FiInstagram aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href="https://www.instagram.com/varlamov_wellness/" className="hover:text-gray-900 mr-1" target={'_blank'}>
                                        @varlamov_wellness
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <FAQ/>
            </div>
        </div>
    )
}

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "Сколько раз в неделю нужно заниматься, чтобы был результат?",
        answer:
            "Оптимально — от 2 до 4 раз. Всё зависит от цели, уровня подготовки и образа жизни. Главное — регулярность. Даже 2 тренировки в неделю при хорошем подходе дают ощутимый эффект.",
    },
    {
        question: "Можно ли совмещать фитнес и йогу?",
        answer:
            "Да, и это отличный тандем! Фитнес укрепляет тело и ускоряет метаболизм, а йога добавляет гибкость, баланс и снижает уровень стресса. Мы часто чередуем эти практики в работе с клиентами.",
    },
    {
        question: "Болит спина. Что лучше — тренировки, йога или массаж?",
        answer:
            "Лучше всего — комбинация. Массаж снимает напряжение, йога мягко выравнивает осанку, а тренировки укрепляют мышцы. Мы подбираем подход индивидуально: без боли, только в комфортной зоне.",
    },
    {
        question: "Сколько нужно времени, чтобы увидеть первые результаты?",
        answer:
            "Уже через 2–3 недели ты почувствуешь улучшение самочувствия, сна, настроения. Визуальные изменения чаще проявляются через 4–6 недель регулярной работы.",
    },
    {
        question: "Что лучше: индивидуальные занятия или в группе?",
        answer:
            "Индивидуальные — это 100% внимания к тебе и твоим целям. В группе — больше энергии, но меньше адаптации. Если важна техника и здоровье — лучше начать индивидуально.",
    },
]

function FAQ() {
    return (
        <div className="bg-white sm:mt-10">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Часто задаваемые вопросы
                    </h2>
                    <dl className="mt-16 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base/7 font-semibold">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                    </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <p className="text-base/7 text-gray-600">{faq.answer}</p>
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
