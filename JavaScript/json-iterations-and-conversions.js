// const headers =[
//     {
//       text: "CNPJ",
//       value: "cnpj",
//       sortable: true
//     },
//     {
//       text: "Company",
//       value: "company"
//     },
//     {
//       text: "UF",
//       value: "uf"
//     }
//   ];
  
// const items = [
//   {
//       id: 0,
//       cnpj: "50.615.756/0001-13",
//       company: "Banco do Brasil SA",
//       uf: "SP"
//    },
//    {
//       id: 1,
//       cnpj: "50.615.756/0001-11",
//       company: "Banco Inter SA",
//       uf: "MG"
//     }
// ];

// cada objeto de items[nome da propriedade dos headers]
// item[headers[x]] = valor

// console.log("headers value ==> ", headers[0].value);

let convertedItems = [];

for (const value of Object.keys(headers)) {
//  const columnValue = headers[key]['value'];

 console.log("key ==> ", value);
  
 };

 console.log("Object.keys(headers) ==> ", headers[0]['value']);

//  convertedItems.push({
//   id: key,
//   [columnValue]: items[headers[key]]
//  })

// for (const key of Object.keys(this.expandedItem)) {
//   this.expandedItem[key] = Helpers.applyTransformation(key,
//     this.expandedItem[key]).replace("R$ ", "");
// }
// const conversion = (keyArray, valueArray) => {
//   for
// };

// convertedItems = conversionForEach(headers, items);

// console.log("conversion ==> ", conversion(headers, items))
// console.log("convertedItems ==> ", convertedItems)


// SELECT FLOOR(COALESCE(SUM("populacao_total"), 0)) AS populacao, FLOOR(COALESCE(SUM("total_de_domicilios"), 0)) AS domicilios_perm, FLOOR(COALESCE(SUM("total_automoveis"), 0)) AS automoveis, FLOOR(COALESCE(SUM("total_motocicletas"), 0)) AS motocicletas, ROUND(COALESCE(sum("total_de_rendimento")/sum(NULLIF("populacao_total",0)), 0), 2) AS renda_mensal_per_capita, ROUND(COALESCE(sum("populacao_total") / sum(NULLIF("area_km2",0)), 0), 2) AS densidade_populacinal, ROUND(COALESCE(sum("total_de_domicilios") / sum(NULLIF("area_km2",0)), 0), 2) AS densidade_domicilios, ROUND(COALESCE(sum("total_automoveis") / sum(NULLIF("populacao_total",0)), 0), 2) AS densidade_automoveis, ROUND(COALESCE(sum("total_motocicletas") / sum(NULLIF("populacao_total",0)), 0), 2) AS densidade_motocicletas, FLOOR(COALESCE(sum("masculino_00_04") + sum("masculino_05_09") + 
//   sum("masculino_10_14") + sum("masculino_15_19") + 
//   sum("feminino_00_04") + sum("feminino_05_09") + 
//   sum("feminino_10_14") + sum("feminino_15_19"), 0)) AS ate_19_anos, FLOOR(COALESCE(sum("masculino_20_24") + sum("masculino_25_29") + 
//   sum("masculino_30_34") + sum("masculino_35_39") + 
//   sum("masculino_40_44") + sum("feminino_20_24") + 
//   sum("feminino_25_29") + sum("feminino_30_34") + 
//   sum("feminino_35_39") + sum("feminino_40_44"), 0)) AS entre_20_e_44_anos, FLOOR(COALESCE(sum("masculino_45_49") + sum("masculino_50_54") + 
//   sum("masculino_55_59") + sum("feminino_45_49") + 
//   sum("feminino_50_54") + sum("feminino_55_59"), 0)) AS entre_45_e_59_anos, FLOOR(COALESCE(sum("masculino_60_64") + sum("masculino_65_69") + 
//   sum("masculino_70_74") + sum("masculino_75_79") + 
//   sum("masculino_80_84") + sum("masculino_85_89") + 
//   sum("masculino_90+") + sum("feminino_60_64") + 
//   sum("feminino_65_69") + sum("feminino_70_74") + 
//   sum("feminino_75_79") + sum("feminino_80_84") + 
//   sum("feminino_85_89") + sum("feminino_90+"), 0)) AS acima_de_60_anos, FLOOR(COALESCE(SUM("pessoas_sem_rendimento"), 0)) AS sem_rendimento, FLOOR(COALESCE(sum("pessoas_ate_1/2_salario") + 
//   sum("pessoas_de_1/2_a_1_salario"), 0)) AS menos_1_salario_min, FLOOR(COALESCE(SUM("pessoas_de_1_a_2_salarios"), 0)) AS entre_1_e_2_salario_min, FLOOR(COALESCE(SUM("pessoas_de_2_a_3_salarios"), 0)) AS entre_2_e_3_salario_min, FLOOR(COALESCE(SUM("pessoas_de_3_a_5_salarios"), 0)) AS entre_3_e_5_salario_min, FLOOR(COALESCE(SUM("pessoas_de_5_a_10_salarios"), 0)) AS entre_5_e_10_salario_min, FLOOR(COALESCE(sum("pessoas_de_10_a_15_salarios") + 
//   sum("pessoas_de_15_a_20_salarios") + sum("pessoas_mais_de_20_salarios"), 0)) AS acima_de_10_salario_min, FLOOR(COALESCE(SUM("1despesa_total"), 0)) AS gastos_totais, FLOOR(COALESCE(SUM("2.1despesas_de_consumo"), 0)) AS despesas_de_consumo, FLOOR(COALESCE(SUM("2.1.1alimentacao"), 0)) AS alimentacao, FLOOR(COALESCE(SUM("2.1.2habitacao"), 0)) AS habitacao, FLOOR(COALESCE(SUM("2.1.2.1aluguel"), 0)) AS aluguel, FLOOR(COALESCE(SUM("2.1.2.2condominio"), 0)) AS condominio, FLOOR(COALESCE(SUM("2.1.2.3servicos_e_taxas"), 0)) AS total_gasto_servicos_taxas, FLOOR(COALESCE(SUM("2.1.2.3.1energia_eletrica"), 0)) AS energia_eletrica, FLOOR(COALESCE(sum("2.1.2.3.2telefone_fixo") + sum("2.1.2.3.3telefone_celular"), 0)) AS telefone, FLOOR(COALESCE(SUM("2.1.2.3.4pacote_de_telefone_tv_e_internet"), 0)) AS pacote_3play, FLOOR(COALESCE(SUM("2.1.2.3.5gas_domestico"), 0)) AS gas, FLOOR(COALESCE(SUM("2.1.2.3.6agua_e_esgoto"), 0)) AS agua_e_esgoto, FLOOR(COALESCE(SUM("2.1.2.3.7outros"), 0)) AS outros_serviços_e_taxas, FLOOR(COALESCE(SUM("2.1.2.4manutencao_do_lar"), 0)) AS manutencao_do_lar, FLOOR(COALESCE(SUM("2.1.2.5artigos_de_limpeza"), 0)) AS artigos_de_limpesa, FLOOR(COALESCE(SUM("2.1.2.6mobiliarios_e_artigos_do_lar"), 0)) AS mobiliarios_e_artigos_do_lar, FLOOR(COALESCE(SUM("2.1.2.7eletrodomesticos"), 0)) AS eletrodomesticos, FLOOR(COALESCE(SUM("2.1.9fumo"), 0)) AS fumo, FLOOR(COALESCE(SUM("2.1.10.3consertos_de_artigos_pessoais"), 0)) AS consertos_de_artigos_pessoais, FLOOR(COALESCE(SUM("2.1.11.1jogos_e_apostas"), 0)) AS jogos_e_apostas, FLOOR(COALESCE(SUM("2.1.11.2comunicacao"), 0)) AS correios, FLOOR(COALESCE(SUM("2.1.11.3cerimonias_e_festas"), 0)) AS cerimonias_e_festas, FLOOR(COALESCE(SUM("2.1.11.4servicos_profissionais"), 0)) AS servicos_profissionais, FLOOR(COALESCE(SUM("2.1.11.5imoveis_de_uso_ocasional"), 0)) AS imoveis_de_uso_ocasional, FLOOR(COALESCE(SUM("2.1.11.6outras"), 0)) AS outras_despesas_diversas, FLOOR(COALESCE(SUM("2.1.2.8consertos_de_artigos_do_lar"), 0)) AS consertos_de_artigos_do_lar, FLOOR(COALESCE(SUM("2.1.3vestuario"), 0)) AS vestuario, FLOOR(COALESCE(SUM("2.1.3.1roupa_de_homem"), 0)) AS vestuario_maculino, FLOOR(COALESCE(SUM("2.1.3.2roupa_de_mulher"), 0)) AS vestuario_feminino, FLOOR(COALESCE(SUM("2.1.3.3roupa_de_crianca"), 0)) AS vestuario_infantil, FLOOR(COALESCE(SUM("2.1.3.4calcados_e_apetrechos"), 0)) AS calcados_e_apetrechos, FLOOR(COALESCE(SUM("2.1.3.5joias_e_bijuterias"), 0)) AS joias_e_bijuterias, FLOOR(COALESCE(SUM("2.1.3.6tecidos_e_armarinhos"), 0)) AS tecidos_e_armarinhos, FLOOR(COALESCE(SUM("2.1.4transporte"), 0)) AS transporte, FLOOR(COALESCE(SUM("2.1.4.1transporte_urbano"), 0)) AS transporte_urbano, FLOOR(COALESCE(SUM("2.1.4.2gasolina_veiculo_proprio"), 0)) AS gasolina, FLOOR(COALESCE(SUM("2.1.4.3alcool_veiculo_proprio"), 0)) AS alcool, FLOOR(COALESCE(SUM("2.1.4.4manutencao_e_acessorios"), 0)) AS manutencao_de_veiculo, FLOOR(COALESCE(SUM("2.1.4.6viagens_esporadicas"), 0)) AS viagens_esporadicas, FLOOR(COALESCE(SUM("2.1.4.7outras"), 0)) AS outros_transportes, FLOOR(COALESCE(SUM("2.1.5higiene_e_cuidados_pessoais"), 0)) AS higiene_e_cuidados_pessoais, FLOOR(COALESCE(SUM("2.1.5.1perfume"), 0)) AS perfume, FLOOR(COALESCE(SUM("2.1.5.2produtos_para_cabelo"), 0)) AS produtos_para_cabelo, FLOOR(COALESCE(SUM("2.1.5.3sabonete"), 0)) AS sabonete, FLOOR(COALESCE(SUM("2.1.5.4instrumentos_e_produtos_de_uso_pessoal"), 0)) AS instrumentos_e_produtos_de_uso_pessoal, FLOOR(COALESCE(SUM("2.1.6assistencia_a_saude"), 0)) AS saude, FLOOR(COALESCE(SUM("2.1.6.1remedios"), 0)) AS remedios, FLOOR(COALESCE(SUM("2.1.6.2plano/seguro_saude"), 0)) AS planos_de_seguro_saude, FLOOR(COALESCE(SUM("2.1.6.3consulta_e_tratamento_dentario"), 0)) AS consulta_e_tratamento_dentario, FLOOR(COALESCE(SUM("2.1.6.4consulta_medica"), 0)) AS consulta_medica, FLOOR(COALESCE(SUM("2.1.6.5tratamento_medico_e_ambulatorial"), 0)) AS tratamento_medico_e_ambulatorial, FLOOR(COALESCE(SUM("2.1.6.6servicos_de_cirurgia"), 0)) AS servicos_de_cirurgia, FLOOR(COALESCE(SUM("2.1.6.7hospitalizacao"), 0)) AS hospitalizacao, FLOOR(COALESCE(SUM("2.1.6.8exames_diversos"), 0)) AS exames_diversos, FLOOR(COALESCE(SUM("2.1.6.9material_de_tratamento"), 0)) AS material_de_tratamento, FLOOR(COALESCE(SUM("2.1.6.10outras"), 0)) AS outros_assistencia_a_saude, FLOOR(COALESCE(SUM("2.1.7educacao"), 0)) AS educacao, FLOOR(COALESCE(SUM("2.1.7.1cursos_regulares"), 0)) AS cursos_regulares, FLOOR(COALESCE(SUM("2.1.7.2cursos_superiores"), 0)) AS cursos_superiores, FLOOR(COALESCE(SUM("2.1.7.3outros_cursos_e_atividades"), 0)) AS outros_cursos_e_atividades, FLOOR(COALESCE(SUM("2.1.7.4livros_didaticos_e_revistas_tecnicas"), 0)) AS livros_didaticos_e_revistas_tecnicas, FLOOR(COALESCE(SUM("2.1.7.5artigos_escolares"), 0)) AS artigos_escolares, FLOOR(COALESCE(SUM("2.1.7.6outras"), 0)) AS outros_educacao, FLOOR(COALESCE(SUM("2.1.8recreacao_e_cultura"), 0)) AS recreacao_e_cultura, FLOOR(COALESCE(SUM("2.1.8.1brinquedos_e_jogos"), 0)) AS brinquedos_e_jogos, FLOOR(COALESCE(SUM("2.1.8.2celular_e_acessorios"), 0)) AS celular_e_acessorios, FLOOR(COALESCE(SUM("2.1.8.3periodicos_livros_e_revistas_nao_didaticas"), 0)) AS periodicos, FLOOR(COALESCE(SUM("2.1.8.4recreacoes_e_esportes"), 0)) AS recreacoes_e_esportes, FLOOR(COALESCE(SUM("2.1.8.5outras"), 0)) AS outros_recreacao_e_cultura, FLOOR(COALESCE(SUM("2.1.10.1cabeleireiro"), 0)) AS cabeleireiro, FLOOR(COALESCE(SUM("2.1.10.2manicuro_e_pedicuro"), 0)) AS manicuro_e_pedicuro, FLOOR(COALESCE(SUM("2.1.10.4outras"), 0)) AS outros_servicos_higiene_e_cuidados_pessoais, FLOOR(COALESCE(SUM("2.2outras_despesas_correntes"), 0)) AS total_de_gasto_em_outras_despesas, FLOOR(COALESCE(SUM("2.2.1impostos"), 0)) AS impostos, FLOOR(COALESCE(SUM("2.2.2contribuicoes_trabalhistas"), 0)) AS contribuicoes_trabalhistas, FLOOR(COALESCE(SUM("2.2.3servicos_bancarios"), 0)) AS servicos_bancarios, FLOOR(COALESCE(SUM("2.2.4pensoes_mesadas_e_doacoes"), 0)) AS pensoes_mesadas_e_doacoes, FLOOR(COALESCE(SUM("2.2.5previdencia_privada"), 0)) AS previdencia_privada, FLOOR(COALESCE(SUM("2.3aumento_do_ativo"), 0)) AS aumento_do_ativo, FLOOR(COALESCE(SUM("2.3.1imovel_(aquisicao)"), 0)) AS imovel_aquisicao, FLOOR(COALESCE(SUM("2.3.2imovel_(reforma)"), 0)) AS imovel_reforma, FLOOR(COALESCE(SUM("2.3.3outros_investimentos"), 0)) AS outros_investimentos, FLOOR(COALESCE(SUM("2.4diminuicao_do_passivo"), 0)) AS diminuicao_do_passivo, FLOOR(COALESCE(SUM("2.4.1emprestimo_e_carne"), 0)) AS emprestimo_e_carne, FLOOR(COALESCE(SUM("2.4.2prestacao_de_imovel"), 0)) AS prestacao_de_imovel, FLOOR(COALESCE(SUM("2.2.6outras"), 0)) AS outras_despesas, ROUND(COALESCE(avg("indice_desenvolvimento"), 0), 3) AS indice_desenvolvimento
//       FROM aux_filtros_front.codigos_regioes_ibge AS dbibge
//       INNER JOIN geo_analytics.tabela_setor AS dbs ON dbs.id_setor=dbibge.id_setor
//       WHERE dbibge.id_uf = 12;

// ----------------------------------------------------------------------------------
// ITERA OBJETOS DENTRO DE ARRAYS E BUSCA A KEY DO OBJETO E REALIZA VALIDAÇÃO.
const roundingItems = [
  "populacao_total",
  "total_de_domicilios",
  "populacao_masculina",
  "populacao_feminina",
  "total_trabalhadores",
  "populacao_diurna",
  "pessoas_com_rendimento",
  "pessoas_sem_rendimento",
  "total_automoveis",
  "total_motocicletas",
];

const items = [{}];

const roundedNumbersArray = items.map((objeto) => {
  const itemIteration = Object.entries(objeto).map((item) => {
    if(roundingItems.includes(item[0]) && item[1] >= 1000)
        return [item[0], Helpers.formatNumber(item[1])];
    return [item[0], item[1]];
  });
  let formmatedObject = {};

  itemIteration.forEach((el) => {
    formmatedObject[el[0]] = el[1];
  })

  return formmatedObject;
});

// ----------------------------------------------------------------------------------