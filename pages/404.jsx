import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yolunu mu kaybettin ufaklık?',
        'Kahretsin! Çıkmaz yola girdin..',
        'Rotanı kaybetme evlat!',
        'Sınır dışısın! Üsse geri dön asker!',
        'İtalyan bu yolu kapattı Harry!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Sayfa bulunamadı."} />
}

export default UnkownPage;

