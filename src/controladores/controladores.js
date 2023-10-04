const produtos = require('../bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground');


const listarProdutos = (req, res) => {
    return res.send(produtos);
};
const detalharProduto = (req, res) => {
    const { id } = req.params;
    const produtoExiste = produtos.find(produto => produto.id === Number(id));

    if (!produtoExiste) {
        return res.status(404).json({ mensagem: "Produto nao encontrado" })
    };
    return res.send(produtoExiste);
};
const calcularFreteProduto = async (req, res) => {
    const { id, cep } = req.params;
    const produtoExiste = produtos.find(produto => produto.id === Number(id));
    const uf = await getStateFromZipcode(cep);

    if (!produtoExiste) {
        return res.status(404).json({ mensagem: "Produto nao encontrado" })
    };
    if (uf === 'BA' || uf === 'SE' || uf === 'AL' || uf === 'PE' || uf === 'PB') {
        const valorNorte = (produtoExiste.valor * 10) / 100;
        return res.send({ produtoExiste, uf, valorNorte });
    } else if (uf === 'SP' || uf === 'RJ') {
        const valorsul = (produtoExiste.valor * 15) / 100;
        return res.send({ produtoExiste, uf, valorsul });
    } else {
        const valorPadrao = (produtoExiste.valor * 12) / 100;
        return res.send({ produtoExiste, uf, valorPadrao });
    };
};
module.exports = {
    listarProdutos,
    detalharProduto,
    calcularFreteProduto
};