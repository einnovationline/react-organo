import './banner.css'

//jsx
//class é reservada do javascript e classname é do react
//src é o nome da pasta
//function Banner () { //forma antiga, com o Arrow Functions abaixo uso no index.js do banner tudo que preciso fazer o export
    export const Banner = () => {
         return (
            <header className="banner">
                <img src ="/imagens/banner.png" alt="Banner principal"/>
            </header>
        )
    }

//export default Banner com a Arrow Functions não é necessário esse export 