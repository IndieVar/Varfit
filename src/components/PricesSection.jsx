'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const frequencies = [
    { value: 'monthly', label: 'Разовое', priceSuffix: '/разовое' },
    { value: 'annually', label: 'Месяц', priceSuffix: '/месяц' },
]
const tiers = [
    {
        name: 'Йога',
        id: 'tier-freelancer',
        href: '#',
        price: { monthly: '₪29', annually: '₪299' },
        description: 'Групповые занятия.',
        features: ['Хатха йога', 'Дыхательные практики'],
        mostPopular: false,
    },
    {
        name: 'Фитнес',
        id: 'tier-hobby',
        href: '#',
        price: { monthly: '₪19', annually: '₪199' },
        description: 'Персональные тренировки с фитнес-тренером.',
        features: ['Согласованность локации', 'Индивидуальный подход', 'Рекомендации по питанию'],
        mostPopular: false,
    },
    {
        name: 'Массаж',
        id: 'tier-startup',
        href: '#',
        price: { monthly: '₪59', annually: '₪599' },
        description: 'Снятие напряжения, восстановление после нагрузок.',
        features: [
            'Лечебный массаж',
            'Спортивный массаж',
            'Кабинет / Выезд на дом',
            'Индивидуальный подход',
        ],
        mostPopular: true,
    },
    {
        name: 'Комбо',
        id: 'tier-enterprise',
        href: '#',
        price: { monthly: '₪99', annually: '₪999' },
        description: 'Подходит для тех, кто настроен серьёзно.',
        features: [
            'Индивидуальный подход',
            'Настроим под твои задачи',
        ],
        mostPopular: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function PricesSection() {
    const [frequency, setFrequency] = useState(frequencies[0])

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 id={'prices'} className="text-base/7 font-semibold text-indigo-600">Цены</h2>
                    <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                        Мы предлагаем гибкие условия
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
                    Пробное занятие — бесплатно <br/>
                    Познакомимся, разберём цели, подберём формат.
                </p>
                <div className="mt-16 flex justify-center">
                    <fieldset aria-label="Payment frequency">
                        <RadioGroup
                            value={frequency}
                            onChange={setFrequency}
                            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-200"
                        >
                            {frequencies.map((option) => (
                                <Radio
                                    key={option.value}
                                    value={option}
                                    className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-indigo-600 data-[checked]:text-white"
                                >
                                    {option.label}
                                </Radio>
                            ))}
                        </RadioGroup>
                    </fieldset>
                </div>
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                                'rounded-3xl p-8',
                            )}
                        >
                            <h3
                                id={tier.id}
                                className={classNames(
                                    tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                                    'text-lg/8 font-semibold',
                                )}
                            >
                                {tier.name}
                            </h3>
                            <p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  {tier.price[frequency.value]}
                </span>
                                <span className="text-sm/6 font-semibold text-gray-600">{frequency.priceSuffix}</span>
                            </p>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                    'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                                )}
                            >
                                Купить план
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
