const testimonials = [
    {
        body: 'Йога с тобой — это магия. Ушла тревожность, появилась энергия и ощущение, что я снова управляю своей жизнью. Спасибо за чуткость и атмосферу!',
        author: {
            name: 'Марина, 34 года',
            handle: '1',
            imageUrl:
                '',
        },
    },
    {
        body: 'После офисной работы спина болела каждый день. Уже через 2 недели тренировок и массажа я встаю без боли. Это реально работает!',
        author: {
            name: 'Олег, 42 года',
            handle: '2',
            imageUrl:
                '',
        },
    },
    {
        body: 'Я всегда боялась спорта — казалось, это не про меня. С тобой я почувствовала поддержку, а не давление. Тело стало гибче, а самооценка — выше.',
        author: {
            name: 'Алина, 29 лет',
            handle: '3',
            imageUrl:
                '',
        },
    },
    {
        body: 'Мне важно было не просто накачаться, а восстановить осанку и улучшить дыхание. Ты соединил фитнес и дыхательные практики так, как никто до этого.',
        author: {
            name: 'Игорь, 37 лет',
            handle: '4',
            imageUrl:
                '',
        },
    },
    {
        body: 'Думала, уже поздно начинать. А ты показал, что возраст — это не преграда. Мой результат — минус 6 кг, лёгкость в теле и огромная благодарность!',
        author: {
            name: 'Светлана, 51 год',
            handle: '5',
            imageUrl:
                '',
        },
    },
    {
        body: 'Сначала пришла за фитнесом, осталась за атмосферой. Каждый подход, каждое движение — с вниманием и заботой. Ушла хроническая усталость, вернулась радость от движения. Настоящий перезагруз тела и души!',
        author: {
            name: 'Наталья, 45 лет',
            handle: '6',
            imageUrl:
                '',
        },
    },
]

export default function ReviewsSection() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 id={'reviews'} className="text-base/7 font-semibold text-indigo-600">Отзывы</h2>
                    <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Баланс силы и спокойствия — твоя новая реальность
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                                <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
                                    <blockquote className="text-gray-900">
                                        <p>{`“${testimonial.body}”`}</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        {/*<img alt="" src={testimonial.author.imageUrl} className="size-10 rounded-full bg-gray-50" />*/}
                                        <div>
                                            <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                                            {/*<div className="text-gray-600">{`@${testimonial.author.handle}`}</div>*/}
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
