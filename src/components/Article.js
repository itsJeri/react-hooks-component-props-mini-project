function Article({ title, date="January 1, 1970", minutes, preview }) {
    function emoji() {
        if (minutes < 30) {
            const rounded = Math.ceil(minutes/5)
            const coffee = '☕️'
            return coffee.repeat(rounded)
        } else if (minutes >= 30) {
            const rounded = Math.ceil(minutes/10)
            const bento = '🍱'
            return bento.repeat(rounded)
        }
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date} | {emoji()}{minutes} minute read
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;
