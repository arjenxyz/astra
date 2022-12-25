import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Imm.. Görünüşe göre 500 Dahili Sunucu Hatası var. Lütfen daha sonra tekrar deneyiniz!

"} />
}

export default UnkownPage;
