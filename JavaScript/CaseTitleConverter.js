const entries = [
  "2.1.1alimentacao",
  "2.1.1.1alimentacao_no_domicilio",
  "2.1.1.1.1cereais_leguminosas_e_oleaginosas",
  "2.1.1.1.2farinhas_feculas_e_massas",
  "2.1.1.1.3tuberculos_raizes_e_legumes",
  "2.1.1.1.4acucares_e_derivados",
  "2.1.1.1.5hortalicas_e_verduras",
  "2.1.1.1.6frutas",
  "2.1.1.1.7carnes",
  "2.1.1.1.8pescados",
  "2.1.1.1.9carnes_e_peixes_industrializados",
  "2.1.1.1.10aves_e_ovos",
  "2.1.1.1.11leites_e_derivados",
  "2.1.1.1.12panificados",
  "2.1.1.1.13oleos_e_gorduras",
  "2.1.1.1.14bebidas_e_infusoes",
  "2.1.1.1.15enlatados_e_conservas",
  "2.1.1.1.16sal_e_condimentos",
  "2.1.1.1.16.1leite_de_coco",
  "2.1.1.1.16.5atomatado",
  "2.1.1.1.16.10alho",
  "2.1.1.1.16.13sal",
  "2.1.1.1.16.14sal_grosso",
  "2.1.1.1.16.22colorau",
  "2.1.1.1.16.23caldo_de_tucupi",
  "2.1.1.1.16.26fermento",
  "2.1.1.1.16.33maionese",
  "2.1.1.1.16.40vinagre_de_alcool",
  "2.1.1.1.16.41vinagre",
  "2.1.1.1.16.45salsa_desidratada",
  "2.1.1.1.16.46misso",
  "2.1.1.1.16.48caldo_concentrado",
  "2.1.1.1.16.54pimenta_em_po",
  "2.1.1.1.16.55cominho",
  "2.1.1.1.16.56fondor",
  "2.1.1.1.16.57amaciante_de_carne",
  "2.1.1.1.16.59sal_dietetico",
  "2.1.1.1.16.60hortela",
  "2.1.1.1.16.62pimenta-do-reino",
  "2.1.1.1.16.67curry",
  "2.1.1.1.16.69molho_de_tucupi_com_pimenta",
  "2.1.1.1.16.70sal_amoniaco",
  "2.1.1.1.16.71tempero_misto",
  "2.1.1.1.16.72bicarbonato_de_sodio",
  "2.1.1.1.16.73glutamato_monossodico",
  "2.1.1.1.16.75baunilha_em_po",
  "2.1.1.1.16.76canela_em_po",
  "2.1.1.1.16.77cravo",
  "2.1.1.1.16.78paprica",
  "2.1.1.1.16.79noz-moscada",
  "2.1.1.1.16.80mostarda",
  "2.1.1.1.16.81louro",
  "2.1.1.1.16.82acafrao_em_po",
  "2.1.1.1.16.84gengibre",
  "2.1.1.1.16.85alfavaca",
  "2.1.1.1.16.86oregano",
  "2.1.1.1.16.87alcaparra",
  "2.1.1.1.16.88manjerona",
  "2.1.1.1.16.89coentro",
  "2.1.1.1.16.90alho_em_po",
  "2.1.1.1.16.91cebola_em_po",
  "2.1.1.1.16.92cheiro-verde_em_po",
  "2.1.1.1.16.93pimentao_em_po",
  "2.1.1.1.16.94vinagre_de_maca",
  "2.1.1.1.16.95molho_de_soja",
  "2.1.1.1.16.96molho_ingles",
  "2.1.1.1.16.97molho_tartaro",
  "2.1.1.1.16.101molho_branco",
  "2.1.1.1.16.104caldo_de_queijo",
  "2.1.1.1.16.110molho_(nao_especificado)",
  "2.1.1.1.16.115coalho",
  "2.1.1.1.16.116sal_amargo",
  "2.1.1.1.16.117salvia_em_folha",
  "2.1.1.1.16.118erva_doce",
  "2.1.1.1.16.119tomilho_em_folha",
  "2.1.1.1.16.120vinagre_de_arroz",
  "2.1.1.1.16.121vinagre_de_milho",
  "2.1.1.1.16.122gergelim_em_po",
  "2.1.1.1.16.132tempero_de_saladas",
  "2.1.1.1.16.134molho_xadrez",
  "2.1.1.1.16.135molho_de_funghi",
  "2.1.1.1.16.136molho_de_alho",
  "2.1.1.1.16.137molho_de_pimenta",
  "2.1.1.1.16.138molho_madeira",
  "2.1.1.1.16.139molho_para_salada",
  "2.1.1.1.16.140molho_agridoce",
  "2.1.1.1.16.142molho_barbecue",
  "2.1.1.1.16.143molho_de_frango",
  "2.1.1.1.16.144molho_para_carne",
  "2.1.1.1.16.146molho_temperado_parmesao",
  "2.1.1.1.16.148pimenta_calabresa",
  "2.1.1.1.16.149vinagre_de_limao",
  "2.1.1.1.16.150vinagre_balsamico",
  "2.1.1.1.16.154molho_de_cogumelos",
  "2.1.1.1.16.157molho_chimichurri",
  "2.1.1.1.16.158molho_pesto",
  "2.1.1.1.16.160alecrim_desidratado",
  "2.1.1.1.16.161molho_vinagrete",
  "2.1.1.1.16.162zaatar",
  "2.1.1.1.16.163furikake",
  "2.1.1.1.16.164wasabi",
  "2.1.1.1.16.166molho_de_beterraba",
  "2.1.1.1.16.167molho_de_cenoura",
  "2.1.1.1.16.168molho_de_cheddar",
  "2.1.1.1.16.169molho_de_almeirao",
  "2.1.1.1.16.170molho_de_alho_poro_organico",
  "2.1.1.1.16.171molho_de_rucula_organico",
  "2.1.1.1.16.173molho_de_cebola_organica",
  "2.1.1.1.16.174molho_de_salsa",
  "2.1.1.1.16.175molho_de_espinafre",
  "2.1.1.2alimentacao_fora_do_domicilio",
  "2.1.1.2.1alimentacao_fora_do_domicilio",
  "2.1.1.2.1.1refeicao",
  "2.1.1.2.1.3lanche",
  "2.1.1.2.1.7refrigerante_e_agua_mineral",
  "2.1.1.2.1.9cafezinho",
  "2.1.1.2.1.26salada_de_frutas",
  "2.1.1.2.1.30tapioca_(beiju)",
  "2.1.1.2.1.31acai_(emulsao)",
  "2.1.1.2.1.32caldos",
  "2.1.1.2.1.33cha_preparado",
  "2.1.1.2.1.48cerveja",
  "2.1.1.2.1.51outras_bebidas_alcoolicas",
  "2.1.1.2.1.52vinho",
  "2.1.1.2.1.61doces",
  "2.1.1.2.1.85biscoio",
  "2.1.1.2.1.86bala_ou_chiclete",
  "2.1.1.2.1.87chocolate_e_bombom",
  "2.1.1.2.1.88sorvete",
  "2.1.1.2.1.89fruta",
  "2.1.1.2.1.90iogurte",
  "2.1.1.2.1.91energetico",
  "2.1.1.2.1.92isotonico",
  "2.1.1.2.1.93achocolatado",
  "2.1.1.2.1.95leite_fermentado",
];

function convertToCustomTitleCase(input) {
  // List of words to exclude from Title Case conversion
  const excludedWords = [
    "e",
    "de",
    "da",
    "do",
    "em",
    "no",
    "na",
    "para",
    "fora",
    "ou",
    "com",
  ];

  // Split the input string into numbers and text using a regular expression
  const matches = input.match(/^(\d+(\.\d+)*)(.*)$/);

  if (!matches) {
    // Invalid input format, return empty string
    return "";
  }

  const [, numbers, , text] = matches;

  // Convert text to Custom Title Case and apply replacement rules
  const customTitleCaseText = text
    .replace(/[-_]/g, " ")
    .replace(/\w\S*/g, (word) => {
      return excludedWords.includes(word.toLowerCase())
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });

  return customTitleCaseText;
}

// Test the function with the example input
const inputString = "2.1.1.1.2farinhas_feculas_e_massas";
const output = convertToCustomTitleCase(inputString);
console.log(output); // Output: "Farinhas Feculas e Massas"

const formattedEntries = entries.map((el) => {
    return convertToCustomTitleCase(el);
});

// console.log(formattedEntries);

const jsonEntries = JSON.stringify(formattedEntries)

console.log(jsonEntries);