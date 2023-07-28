const OBJECT = {
  gastos_alimentacao: 25.4,
  gastos_assistencia_a_saude: 5.1,
  gastos_despesas_diversas: 3.9,
  gastos_educacao: 2.2,
  gastos_habitacao: 32.4,
  gastos_higiene_e_cuidados_pessoais: 5.5,
  gastos_recreacao_e_cultura: 2.3,
  gastos_transporte: 17.3,
  gastos_vestuario: 5.9,
  id_bairro: "12000540000",
  id_municipio: "1200054",
  id_setor: "120005405000001",
  id_uf: "12",
  indicador_atividade_economica: 19.8894907236601,
  indicador_concorrencia_alimentacao_56_categ: "Muito Baixo",
  indicador_concorrencia_alojamento_55_categ: "Muito Baixo",
  indicador_concorrencia_saude_863_869_categ: "Muito Baixo",
  indicador_concorrencia_saude_atendimentos_861_82_categ: "Muito Baixo",
  indicador_concorrencia_varejo_471_472_categ: "Muito Baixo",
  indicador_concorrencia_varejo_artigos_culturais_476_categ: "Muito Baixo",
  indicador_concorrencia_varejo_combustiveis_473_categ: "Muito Baixo",
  indicador_concorrencia_varejo_farmacia_477_categ: "Muito Baixo",
  indicador_concorrencia_varejo_informatica_475_categ: "Muito Baixo",
  indicador_concorrencia_varejo_material_construcao_474_categ: "Muito Baixo",
  indicador_concorrencia_varejo_outros_478_479_categ: "Muito Baixo",
  indicador_crescimento_economico: 55.3523953129669,
  indicador_crescimento_urbanistico: 61.3268423575889,
  indicador_estrutura_compacta: 63.7328046979079,
  indicador_infraestrutura_urbana: 11.3104839882753,
  indicador_maturidade_familiar: 56.0012631441925,
  indicador_padrao_vida: 13.5277437544078,
  indicador_poder_aquisitivo: 20.4606820410063,
  indicador_qualidade_vida: 48.1174008225386,
  indicador_seguranca: 63.83,
  indice_desenvolvimento: 0.946,
  nm_bairro: "Assis Brasil",
  nm_municipio: "Assis Brasil",
  nm_uf: "AC",
  perfil_setor: 1,
  perfil_setor_desc: "Elites brasileiras",
  pessoas_com_rendimento: 616,
  pessoas_sem_rendimento: 462,
  populacao_diurna: 663,
  populacao_feminina: 556,
  populacao_masculina: 523,
  populacao_total: "1.079",
  propensao_patologia_cancer: 0,
  propensao_patologia_cardiaca: 1.1,
  propensao_patologia_diabete: 1.3,
  propensao_patologia_hipertensao: 6.9,
  propensao_patologia_renal: 0.3,
  situacao_setor: "Urbano",
  total_automoveis: 70,
  total_beneficiarios_seguro_odontologico: 5.65095033083749,
  total_beneficiarios_seguro_odontologico_adesao: 0.342481838232575,
  total_beneficiarios_seguro_odontologico_empresarial: 4.45226389702348,
  total_beneficiarios_seguro_odontologico_individual: 0.856204595581438,
  total_beneficiarios_seguro_saude: 7.70584136023294,
  total_beneficiarios_seguro_saude_adesao: 2.7398547058606,
  total_beneficiarios_seguro_saude_basico: 2.22613194851174,
  total_beneficiarios_seguro_saude_empresarial: 4.28102297790719,
  total_beneficiarios_seguro_saude_individual: 0.68496367646515,
  total_beneficiarios_seguro_saude_intermediario: 4.62350481613976,
  total_beneficiarios_seguro_saude_top: 0.342481838232575,
  total_de_domicilios: 376,
  total_de_rendimento: 1505017.9,
  total_motocicletas: 252,
  total_segurados_automovel: 22.3222211299958,
  total_segurados_moto: 6.81280001735296,
  total_segurados_residencial: 17.962690310068,
  total_segurados_vida: 36.9831453190683,
  total_trabalhadores: 0,
};

const MONEY_KEYS = [
  "total_de_rendimento",
  "gastos_alimentacao",
  "gastos_habitacao",
  "gastos_vestuario",
  "gastos_transporte",
  "gastos_higiene_e_cuidados_pessoais",
  "gastos_assistencia_a_saude",
  "gastos_educacao",
  "gastos_recreacao_e_cultura",
  "gastos_despesas_diversas",
];

const INDICATORS_PROPENSION_KEYS = [
  "indicador_atividade_economica",
  "indicador_crescimento_economico",
  "indicador_crescimento_urbanistico",
  "indicador_estrutura_compacta",
  "indicador_infraestrutura_urbana",
  "indicador_maturidade_familiar",
  "indicador_padrao_vida",
  "indicador_poder_aquisitivo",
  "indicador_qualidade_vida",
  "indicador_seguranca",
  "propensao_patologia_cancer",
  "propensao_patologia_cardiaca",
  "propensao_patologia_diabete",
  "propensao_patologia_hipertensao",
  "propensao_patologia_renal",
];

const TOTALS = [
  "total_beneficiarios_seguro_odontologico",
  "total_beneficiarios_seguro_odontologico_adesao",
  "total_beneficiarios_seguro_odontologico_empresarial",
  "total_beneficiarios_seguro_odontologico_individual",
  "total_beneficiarios_seguro_saude",
  "total_beneficiarios_seguro_saude_adesao",
  "total_beneficiarios_seguro_saude_basico",
  "total_beneficiarios_seguro_saude_empresarial",
  "total_beneficiarios_seguro_saude_individual",
  "total_beneficiarios_seguro_saude_intermediario",
  "total_beneficiarios_seguro_saude_top",
  "total_segurados_automovel",
  "total_segurados_moto",
  "total_segurados_residencial",
  "total_segurados_vida",
  "total_de_rendimento",
];

const formatMoneyValue = (obj, moneyKeys, indicatorPropensionKeys) => {
  const formattedObject = { ...obj };

  moneyKeys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      formattedObject[key] = parseFloat(obj[key]).toFixed(2);
    } else {
      formattedObject[key] = obj[key];
    }
  });

  indicatorPropensionKeys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      formattedObject[key] = parseFloat(obj[key]).toFixed(3);
    } else {
      formattedObject[key] = obj[key];
    }
  });

  return [formattedObject];
};

const formattedValues = formatMoneyValue(
  OBJECT,
  MONEY_KEYS,
  INDICATORS_PROPENSION_KEYS
);

console.log(formattedValues);