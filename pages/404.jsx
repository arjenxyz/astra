import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yolunu mu kaybettin ufaklık?',
        'Kahretsin! Çıkmaz yola girdin..',
        'İtalyan bu yolu kapattı. Harry!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Sayfa bulunamadı."} />
}

export default UnkownPage;

