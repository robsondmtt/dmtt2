import moment from "moment";

export default function PermissaoBotao(data,limite = 24) {

    const dataLimite = moment(data).add(limite, 'hours'); // 01/01 07:00
    const dataAtual = moment() // 31/12 12:00

    if (dataAtual <= dataLimite) {
        return true
    }
}